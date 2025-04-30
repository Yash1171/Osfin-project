"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Loader2, MapPin, Calendar, PenLine, TreePalmIcon as PalmTree } from "lucide-react"

export default function CreateItinerary() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    destination: "phuket",
    duration: "3",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/itineraries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to create itinerary")
      }

      toast({
        title: "Success!",
        description: "Your itinerary has been created.",
      })

      // Redirect after successful creation
      setTimeout(() => {
        router.push("/itineraries")
      }, 1500)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create itinerary. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const getDestinationGradient = (destination: string) => {
    switch (destination) {
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

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Itinerary</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan your perfect trip to Thailand with a personalized itinerary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-green-600"></div>
              <CardHeader>
                <CardTitle>Itinerary Details</CardTitle>
                <CardDescription>Fill in the details for your new travel itinerary</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-medium">
                      Itinerary Title
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Summer Vacation 2023"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                    <p className="text-xs text-muted-foreground">Give your itinerary a memorable name</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-sm font-medium">
                      Destination
                    </Label>
                    <Select
                      name="destination"
                      value={formData.destination}
                      onValueChange={(value) => handleSelectChange("destination", value)}
                    >
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
                    <Select
                      name="duration"
                      value={formData.duration}
                      onValueChange={(value) => handleSelectChange("duration", value)}
                    >
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

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-medium">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Any special requirements or preferences..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="min-h-[120px] bg-white"
                    />
                    <p className="text-xs text-muted-foreground">
                      Add any special requests or preferences for your trip
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 px-6 py-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create Itinerary"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="sticky top-24">
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-6 h-[250px]">
                <div className={`absolute inset-0 ${getDestinationGradient(formData.destination)}`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 rotate-12 opacity-30 rounded-full bg-gradient-to-r from-white/20 to-transparent transform translate-x-1/4"></div>
                    <div className="absolute inset-0 -rotate-12 opacity-30 rounded-full bg-gradient-to-l from-white/20 to-transparent transform -translate-x-1/4"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">
                      {formData.destination === "both"
                        ? "Phuket & Krabi"
                        : formData.destination.charAt(0).toUpperCase() + formData.destination.slice(1)}
                    </h2>
                    <p className="text-white/80">Thailand's tropical paradise</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-bold text-white">
                    {formData.destination === "both"
                      ? "Phuket & Krabi"
                      : formData.destination.charAt(0).toUpperCase() + formData.destination.slice(1)}
                  </h2>
                  <p className="text-white/80 text-sm">Thailand's tropical paradise</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                <h3 className="text-lg font-bold">Your Itinerary Preview</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <PenLine className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Title</h4>
                      <p className="text-sm text-muted-foreground">
                        {formData.title || "Your itinerary title will appear here"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Destination</h4>
                      <p className="text-sm text-muted-foreground">
                        {formData.destination === "both"
                          ? "Phuket & Krabi"
                          : formData.destination.charAt(0).toUpperCase() + formData.destination.slice(1)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Duration</h4>
                      <p className="text-sm text-muted-foreground">
                        {formData.duration} nights / {Number.parseInt(formData.duration) + 1} days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <PalmTree className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">What's Next?</h4>
                      <p className="text-sm text-muted-foreground">
                        After creating your itinerary, you'll be able to add accommodations, activities, and transfers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
