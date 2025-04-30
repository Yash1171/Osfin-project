"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Clock, Hotel, Car, Palmtree, ArrowLeft, Loader2, Trash2 } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { motion } from "framer-motion"

interface Activity {
  id: string
  day: number
  title: string
  description: string
  time: string
  location: string
  type: "activity"
}

interface Accommodation {
  id: string
  day: number
  hotelName: string
  location: string
  checkIn: string
  checkOut: string
  type: "accommodation"
}

interface Transfer {
  id: string
  day: number
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  transportType: string
  type: "transfer"
}

type ItineraryItem = Activity | Accommodation | Transfer

interface Itinerary {
  id: string
  title: string
  destination: string
  duration: number
  createdAt: string
  items: ItineraryItem[]
}

export default function ItineraryDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [itinerary, setItinerary] = useState<Itinerary | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const id = params.id as string

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(`/api/itineraries/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch itinerary")
        }
        const data = await response.json()
        setItinerary(data)
      } catch (error) {
        console.error("Error fetching itinerary:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchItinerary()
  }, [id])

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this itinerary?")) {
      return
    }

    setDeleting(true)
    try {
      const response = await fetch(`/api/itineraries/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete itinerary")
      }

      router.push("/itineraries")
    } catch (error) {
      console.error("Error deleting itinerary:", error)
      setDeleting(false)
    }
  }

  const getDestinationColor = (destination: string) => {
    switch (destination.toLowerCase()) {
      case "phuket":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "krabi":
        return "bg-green-100 text-green-800 border-green-200"
      case "both":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getItemIcon = (item: ItineraryItem) => {
    switch (item.type) {
      case "accommodation":
        return <Hotel className="h-5 w-5 text-blue-500" />
      case "transfer":
        return <Car className="h-5 w-5 text-amber-500" />
      case "activity":
        return <Palmtree className="h-5 w-5 text-green-500" />
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-20 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
          </div>
          <p className="text-muted-foreground mt-4">Loading your adventure details...</p>
        </div>
      </div>
    )
  }

  if (!itinerary) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center py-16 bg-blue-50/50 rounded-xl border border-dashed border-blue-200">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <MapPin className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Itinerary Not Found</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            The itinerary you're looking for doesn't exist or has been deleted.
          </p>
          <Link href="/itineraries">
            <Button>Back to Itineraries</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Group items by day
  const itemsByDay: Record<number, ItineraryItem[]> = {}
  for (let day = 1; day <= itinerary.duration + 1; day++) {
    itemsByDay[day] = itinerary.items.filter((item) => item.day === day)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="self-start">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold flex-1">{itinerary.title}</h1>
        <Button variant="destructive" size="sm" onClick={handleDelete} disabled={deleting}>
          {deleting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Trash2 className="h-4 w-4 mr-2" />}
          {deleting ? "Deleting..." : "Delete"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white shadow-md border-0 overflow-hidden">
          <div className="h-2 bg-blue-500"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Destination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" />
              <Badge className={`${getDestinationColor(itinerary.destination)} border`}>
                {itinerary.destination === "both"
                  ? "Phuket & Krabi"
                  : itinerary.destination.charAt(0).toUpperCase() + itinerary.destination.slice(1)}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-0 overflow-hidden">
          <div className="h-2 bg-amber-500"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-amber-500" />
              <span>
                {itinerary.duration} nights / {itinerary.duration + 1} days
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-0 overflow-hidden">
          <div className="h-2 bg-green-500"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Created</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-green-500" />
              <span>{format(new Date(itinerary.createdAt), "PPP")}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="1" className="mt-8">
        <TabsList className="bg-blue-50 p-1 mb-6 flex flex-wrap">
          {Array.from({ length: itinerary.duration + 1 }, (_, i) => i + 1).map((day) => (
            <TabsTrigger key={day} value={day.toString()} className="data-[state=active]:bg-white">
              Day {day}
            </TabsTrigger>
          ))}
        </TabsList>

        {Array.from({ length: itinerary.duration + 1 }, (_, i) => i + 1).map((day) => (
          <TabsContent key={day} value={day.toString()} className="mt-0">
            <Card className="bg-white shadow-md border-0">
              <CardHeader className="border-b bg-blue-50/50">
                <CardTitle className="flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 mr-3">
                    {day}
                  </span>
                  Day {day}
                </CardTitle>
                <CardDescription>{itemsByDay[day]?.length || 0} items scheduled</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {itemsByDay[day]?.length > 0 ? (
                  <div className="space-y-6">
                    {itemsByDay[day]
                      .sort((a, b) => {
                        // Sort by time for activities and transfers
                        if (a.type === "activity" && b.type === "activity") {
                          return a.time.localeCompare(b.time)
                        }
                        if (a.type === "transfer" && b.type === "transfer") {
                          return a.departureTime.localeCompare(b.departureTime)
                        }

                        // Accommodations first
                        if (a.type === "accommodation") return -1
                        if (b.type === "accommodation") return 1

                        return 0
                      })
                      .map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {index > 0 && <Separator className="my-6" />}
                          <div className="flex items-start gap-4">
                            <div className="mt-1 bg-blue-50 p-2 rounded-full">{getItemIcon(item)}</div>
                            <div className="flex-1">
                              {item.type === "accommodation" && (
                                <>
                                  <h3 className="font-medium text-lg">{item.hotelName}</h3>
                                  <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                                  <div className="flex flex-wrap gap-2 text-xs">
                                    <Badge variant="outline" className="bg-blue-50 border-blue-200">
                                      Check-in: {item.checkIn}
                                    </Badge>
                                    <Badge variant="outline" className="bg-blue-50 border-blue-200">
                                      Check-out: {item.checkOut}
                                    </Badge>
                                  </div>
                                </>
                              )}

                              {item.type === "transfer" && (
                                <>
                                  <h3 className="font-medium text-lg">
                                    Transfer: {item.from} to {item.to}
                                  </h3>
                                  <p className="text-sm text-muted-foreground mb-3">{item.transportType}</p>
                                  <div className="flex flex-wrap gap-2 text-xs">
                                    <Badge variant="outline" className="bg-amber-50 border-amber-200">
                                      Departure: {item.departureTime}
                                    </Badge>
                                    <Badge variant="outline" className="bg-amber-50 border-amber-200">
                                      Arrival: {item.arrivalTime}
                                    </Badge>
                                  </div>
                                </>
                              )}

                              {item.type === "activity" && (
                                <>
                                  <h3 className="font-medium text-lg">{item.title}</h3>
                                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                  <div className="flex flex-wrap gap-2 text-xs">
                                    <Badge variant="outline" className="bg-green-50 border-green-200">
                                      Time: {item.time}
                                    </Badge>
                                    <Badge variant="outline" className="bg-green-50 border-green-200">
                                      Location: {item.location}
                                    </Badge>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-blue-50/30 rounded-lg border border-dashed border-blue-200">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
                      <Calendar className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="text-muted-foreground">No activities scheduled for this day.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      This is a free day to explore or relax at your leisure.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
