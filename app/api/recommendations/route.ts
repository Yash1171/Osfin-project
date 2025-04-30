import { NextResponse } from "next/server"
import { recommendationData } from "@/lib/recommendation-data"

// GET /api/recommendations - Get recommended itineraries based on destination and duration
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const destination = searchParams.get("destination") || "phuket"
    const duration = Number.parseInt(searchParams.get("duration") || "3")

    // Filter recommendations based on destination and duration
    const recommendations = recommendationData.filter(
      (rec) => rec.destination === destination && rec.duration === duration,
    )

    // If no exact match, try to find recommendations with similar duration
    if (recommendations.length === 0) {
      const similarDurationRecs = recommendationData.filter(
        (rec) => rec.destination === destination && Math.abs(rec.duration - duration) <= 1,
      )

      if (similarDurationRecs.length > 0) {
        return NextResponse.json(similarDurationRecs)
      }

      // If still no match, return any recommendations for the destination
      const anyDestinationRecs = recommendationData.filter((rec) => rec.destination === destination)

      if (anyDestinationRecs.length > 0) {
        return NextResponse.json(anyDestinationRecs)
      }

      // Last resort: return any recommendations
      return NextResponse.json(recommendationData.slice(0, 3))
    }

    return NextResponse.json(recommendations)
  } catch (error) {
    console.error("Error fetching recommendations:", error)
    return NextResponse.json({ error: "Failed to fetch recommendations" }, { status: 500 })
  }
}
