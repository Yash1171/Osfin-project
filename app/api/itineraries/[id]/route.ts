import { NextResponse } from "next/server"
import { db } from "@/lib/db"

// GET /api/itineraries/[id] - Get a specific itinerary with all its items
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Get the itinerary
    const itinerary = await db.itinerary.findUnique({
      where: { id },
    })

    if (!itinerary) {
      return NextResponse.json({ error: "Itinerary not found" }, { status: 404 })
    }

    // Get all items for this itinerary
    const accommodations = await db.accommodation.findMany({
      where: { itineraryId: id },
    })

    const transfers = await db.transfer.findMany({
      where: { itineraryId: id },
    })

    const activities = await db.activity.findMany({
      where: { itineraryId: id },
    })

    // Combine all items and add type field
    const items = [
      ...accommodations.map((item) => ({ ...item, type: "accommodation" })),
      ...transfers.map((item) => ({ ...item, type: "transfer" })),
      ...activities.map((item) => ({ ...item, type: "activity" })),
    ]

    return NextResponse.json({
      ...itinerary,
      items,
    })
  } catch (error) {
    console.error("Error fetching itinerary:", error)
    return NextResponse.json({ error: "Failed to fetch itinerary" }, { status: 500 })
  }
}

// DELETE /api/itineraries/[id] - Delete an itinerary and all its items
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Delete all related items first
    await db.accommodation.deleteMany({
      where: { itineraryId: id },
    })

    await db.transfer.deleteMany({
      where: { itineraryId: id },
    })

    await db.activity.deleteMany({
      where: { itineraryId: id },
    })

    // Delete the itinerary
    await db.itinerary.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting itinerary:", error)
    return NextResponse.json({ error: "Failed to delete itinerary" }, { status: 500 })
  }
}
