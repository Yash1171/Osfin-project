import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import { db } from "@/lib/db"

// GET /api/itineraries - Get all itineraries
export async function GET() {
  try {
    const itineraries = await db.itinerary.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(itineraries)
  } catch (error) {
    console.error("Error fetching itineraries:", error)
    return NextResponse.json({ error: "Failed to fetch itineraries" }, { status: 500 })
  }
}

// POST /api/itineraries - Create a new itinerary
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, destination, duration, notes, items } = body

    // Validate required fields
    if (!title || !destination || !duration) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create the itinerary
    const itinerary = await db.itinerary.create({
      data: {
        id: uuidv4(),
        title,
        destination,
        duration: Number.parseInt(duration),
        notes: notes || "",
        createdAt: new Date().toISOString(),
      },
    })

    // If items are provided, create them
    if (items && Array.isArray(items)) {
      for (const item of items) {
        const { type, day } = item

        if (type === "accommodation") {
          await db.accommodation.create({
            data: {
              id: uuidv4(),
              itineraryId: itinerary.id,
              day,
              hotelName: item.hotelName || "",
              location: item.location || "",
              checkIn: item.checkIn || "",
              checkOut: item.checkOut || "",
            },
          })
        } else if (type === "transfer") {
          await db.transfer.create({
            data: {
              id: uuidv4(),
              itineraryId: itinerary.id,
              day,
              from: item.from || "",
              to: item.to || "",
              departureTime: item.departureTime || "",
              arrivalTime: item.arrivalTime || "",
              transportType: item.transportType || "",
            },
          })
        } else if (type === "activity") {
          await db.activity.create({
            data: {
              id: uuidv4(),
              itineraryId: itinerary.id,
              day,
              title: item.title || "",
              description: item.description || "",
              time: item.time || "",
              location: item.location || "",
            },
          })
        }
      }
    }

    return NextResponse.json(itinerary)
  } catch (error) {
    console.error("Error creating itinerary:", error)
    return NextResponse.json({ error: "Failed to create itinerary" }, { status: 500 })
  }
}
