"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Plus, Search, Filter } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface Itinerary {
  id: string
  title: string
  destination: string
  duration: number
  createdAt: string
}

export default function ItinerariesPage() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await fetch("/api/itineraries")
        if (!response.ok) {
          throw new Error("Failed to fetch itineraries")
        }
        const data = await response.json()
        setItineraries(data)
      } catch (error) {
        console.error("Error fetching itineraries:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchItineraries()
  }, [])

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

  const getDestinationGradient = (destination: string) => {
    switch (destination.toLowerCase()) {
      case "phuket":
        return "from-blue-500/10 to-blue-600/5"
      case "krabi":
        return "from-green-500/10 to-green-600/5"
      case "both":
        return "from-purple-500/10 to-purple-600/5"
      default:
        return "from-gray-500/10 to-gray-600/5"
    }
  }

  const filteredItineraries = itineraries.filter((itinerary) =>
    itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="container mx-auto py-20 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
          </div>
          <p className="text-muted-foreground mt-4">Loading your adventures...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Itineraries</h1>
          <p className="text-muted-foreground">Manage and view your travel plans</p>
        </div>
        <Link href="/create">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Create New
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search itineraries..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="bg-blue-50 p-1">
          <TabsTrigger value="all" className="data-[state=active]:bg-white">
            All
          </TabsTrigger>
          <TabsTrigger value="phuket" className="data-[state=active]:bg-white">
            Phuket
          </TabsTrigger>
          <TabsTrigger value="krabi" className="data-[state=active]:bg-white">
            Krabi
          </TabsTrigger>
          <TabsTrigger value="both" className="data-[state=active]:bg-white">
            Combined
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {filteredItineraries.length === 0 ? (
            <div className="text-center py-16 bg-blue-50/50 rounded-xl border border-dashed border-blue-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <MapPin className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">No itineraries found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {searchTerm
                  ? "No itineraries match your search. Try a different term or clear the search."
                  : "You haven't created any itineraries yet. Start planning your dream vacation!"}
              </p>
              <Link href="/create">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create Your First Itinerary
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItineraries.map((itinerary, index) => (
                <motion.div
                  key={itinerary.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                    <div className={`h-3 bg-gradient-to-r ${getDestinationGradient(itinerary.destination)}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="line-clamp-1">{itinerary.title}</CardTitle>
                        <Badge className={`${getDestinationColor(itinerary.destination)} border`}>
                          {itinerary.destination === "both"
                            ? "Phuket & Krabi"
                            : itinerary.destination.charAt(0).toUpperCase() + itinerary.destination.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription>
                        Created {formatDistanceToNow(new Date(itinerary.createdAt), { addSuffix: true })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {itinerary.destination === "both"
                            ? "Phuket & Krabi"
                            : itinerary.destination.charAt(0).toUpperCase() + itinerary.destination.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          {itinerary.duration} nights / {itinerary.duration + 1} days
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link href={`/itineraries/${itinerary.id}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                        >
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>

        {["phuket", "krabi", "both"].map((destination) => (
          <TabsContent key={destination} value={destination} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItineraries
                .filter((i) => i.destination === destination)
                .map((itinerary, index) => (
                  <motion.div
                    key={itinerary.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                      <div className={`h-3 bg-gradient-to-r ${getDestinationGradient(itinerary.destination)}`}></div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="line-clamp-1">{itinerary.title}</CardTitle>
                          <Badge className={`${getDestinationColor(itinerary.destination)} border`}>
                            {itinerary.destination === "both"
                              ? "Phuket & Krabi"
                              : itinerary.destination.charAt(0).toUpperCase() + itinerary.destination.slice(1)}
                          </Badge>
                        </div>
                        <CardDescription>
                          Created {formatDistanceToNow(new Date(itinerary.createdAt), { addSuffix: true })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {itinerary.destination === "both"
                              ? "Phuket & Krabi"
                              : itinerary.destination.charAt(0).toUpperCase() + itinerary.destination.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>
                            {itinerary.duration} nights / {itinerary.duration + 1} days
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Link href={`/itineraries/${itinerary.id}`} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                          >
                            View Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              {filteredItineraries.filter((i) => i.destination === destination).length === 0 && (
                <div className="col-span-full text-center py-16 bg-blue-50/50 rounded-xl border border-dashed border-blue-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <MapPin className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No itineraries found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    You haven't created any itineraries for this destination yet.
                  </p>
                  <Link href="/create">
                    <Button>Create New Itinerary</Button>
                  </Link>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
