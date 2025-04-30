"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Hotel, Car, Palmtree, Loader2, Check, MapPin, Clock, Calendar } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion"

interface RecommendedItinerary {
  id: string
  title: string
  destination: string
  duration: number
  description: string
  highlights: string[]
  days: {
    day: number
    items: {
      id: string
      type: "accommodation" | "transfer" | "activity"
      title: string
      description?: string
      time?: string
      location?: string
      hotelName?: string
      checkIn?: string
      checkOut?: string
      from?: string
      to?: string
      departureTime?: string
      arrivalTime?: string
      transportType?: string
    }[]
  }[]
}

export default function RecommendationsPage() {
  const router = useRouter()
  const [destination, setDestination] = useState("phuket")
  const [duration, setDuration] = useState("3")
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState<RecommendedItinerary[]>([])
  const [selectedItinerary, setSelectedItinerary] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const handleGetRecommendations = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/recommendations?destination=${destination}&duration=${duration}`)
      if (!response.ok) {
        throw new Error("Failed to fetch recommendations")
      }
      const data = await response.json()
      setRecommendations(data)
      if (data.length > 0) {
        setSelectedItinerary(data[0].id)
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error)
      toast({
        title: "Error",
        description: "Failed to fetch recommendations. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSaveItinerary = async () => {
    if (!selectedItinerary) return

    setSaving(true)
    const selected = recommendations.find((r) => r.id === selectedItinerary)

    if (!selected) {
      setSaving(false)
      return
    }

    try {
      const response = await fetch("/api/itineraries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: selected.title,
          destination: selected.destination,
          duration: selected.duration,
          items: selected.days.flatMap((day) =>
            day.items.map((item) => ({
              ...item,
              day: day.day,
            })),
          ),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save itinerary")
      }

      const data = await response.json()

      toast({
        title: "Success!",
        description: "Itinerary saved successfully.",
      })

      // Redirect to the saved itinerary
      setTimeout(() => {
        router.push(`/itineraries/${data.id}`)
      }, 1500)
    } catch (error) {
      console.error("Error saving itinerary:", error)
      toast({
        title: "Error",
        description: "Failed to save itinerary. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const getItemIcon = (type: string) => {
    switch (type) {
      case "accommodation":
        return <Hotel className="h-5 w-5 text-blue-500" />
      case "transfer":
        return <Car className="h-5 w-5 text-amber-500" />
      case "activity":
        return <Palmtree className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getDestinationGradient = (destination: string) => {
    switch (destination.toLowerCase()) {
      case "phuket":
        return "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
      case "krabi":
        return "bg-gradient-to-br from-green-500 via-green-600 to-green-700"
      case "both":
        return "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700"
      default:
        return "bg-gradient-to-br from-blue-500 via-blue-600 to-green-700"
    }
  }

  const getDestinationName = (destination: string) => {
    switch (destination.toLowerCase()) {
      case "phuket":
        return "Phuket"
      case "krabi":
        return "Krabi"
      case "both":
        return "Phuket & Krabi"
      default:
        return "Thailand"
    }
  }

  const selectedItineraryData = recommendations.find((r) => r.id === selectedItinerary)

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Personalized Recommendations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your trip preferences and we'll suggest the perfect itinerary for your Thailand adventure
          </p>
        </div>

        <Card className="mb-12 border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2"></div>
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardTitle>Find Your Perfect Itinerary</CardTitle>
            <CardDescription>
              Select your destination and trip duration to get personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-sm font-medium">
                  Destination
                </Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phuket">Phuket</SelectItem>
                    <SelectItem value="krabi">Krabi</SelectItem>
                    <SelectItem value="both">Phuket & Krabi</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Choose your preferred destination in Thailand</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-medium">
                  Duration (nights)
                </Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} nights
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Select how many nights you plan to stay</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4">
            <Button
              onClick={handleGetRecommendations}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Finding recommendations...
                </>
              ) : (
                "Get Recommendations"
              )}
            </Button>
          </CardFooter>
        </Card>

        {recommendations.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-1">
                <h2 className="text-xl font-bold mb-4">Recommended Itineraries</h2>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedItinerary === rec.id ? "ring-2 ring-blue-500 shadow-md" : "border border-gray-200"
                        }`}
                        onClick={() => setSelectedItinerary(rec.id)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{rec.title}</CardTitle>
                            {selectedItinerary === rec.id && (
                              <Badge className="bg-green-100 text-green-800 border border-green-200">
                                <Check className="h-3 w-3 mr-1" /> Selected
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            {rec.duration} nights
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">{rec.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                {selectedItineraryData && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <div className="relative h-48">
                        <div
                          className={`absolute inset-0 ${getDestinationGradient(selectedItineraryData.destination)}`}
                        >
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0 rotate-12 opacity-30 rounded-full bg-gradient-to-r from-white/20 to-transparent transform translate-x-1/4"></div>
                            <div className="absolute inset-0 -rotate-12 opacity-30 rounded-full bg-gradient-to-l from-white/20 to-transparent transform -translate-x-1/4"></div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-5">
                          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                            {getDestinationName(selectedItineraryData.destination)}
                          </h2>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                          <h2 className="text-2xl font-bold text-white mb-1">{selectedItineraryData.title}</h2>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-white/90">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{getDestinationName(selectedItineraryData.destination)}</span>
                            </div>
                            <div className="flex items-center gap-1 text-white/90">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{selectedItineraryData.duration} nights</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">{selectedItineraryData.description}</p>

                        <div className="mb-6">
                          <h3 className="font-medium text-lg mb-3">Highlights</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {selectedItineraryData.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                                  <Check className="h-3 w-3 text-green-600" />
                                </div>
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Tabs defaultValue="1" className="mt-6">
                          <TabsList className="bg-blue-50 p-1 mb-4 flex flex-wrap">
                            {selectedItineraryData.days.map((day) => (
                              <TabsTrigger
                                key={day.day}
                                value={day.day.toString()}
                                className="data-[state=active]:bg-white"
                              >
                                Day {day.day}
                              </TabsTrigger>
                            ))}
                          </TabsList>

                          {selectedItineraryData.days.map((day) => (
                            <TabsContent
                              key={day.day}
                              value={day.day.toString()}
                              className="mt-0 border rounded-lg p-4"
                            >
                              <div className="space-y-6">
                                {day.items.map((item, index) => (
                                  <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                  >
                                    {index > 0 && <Separator className="my-6" />}
                                    <div className="flex items-start gap-4">
                                      <div className="mt-1 bg-blue-50 p-2 rounded-full">{getItemIcon(item.type)}</div>
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
                            </TabsContent>
                          ))}
                        </Tabs>
                      </CardContent>
                      <CardFooter className="bg-gray-50 px-6 py-4">
                        <Button
                          onClick={handleSaveItinerary}
                          disabled={saving}
                          className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                        >
                          {saving ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Saving itinerary...
                            </>
                          ) : (
                            "Save This Itinerary"
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
        <Toaster />
      </div>
    </div>
  )
}
