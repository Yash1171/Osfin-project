import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePalmIcon as PalmTree, Map, Calendar, Plus, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[500px] bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -inset-[10px] blur-3xl">
              <div className="absolute inset-0 rotate-180 opacity-30 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 transform -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute inset-0 opacity-30 rounded-full bg-gradient-to-l from-blue-400 via-teal-500 to-green-500 transform translate-y-1/3 -translate-x-1/4"></div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-10">
          <div className="container mx-auto pt-20 pb-32 px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6 shadow-sm">
                <PalmTree className="h-4 w-4" />
                <span>Plan your perfect Thailand getaway</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
                Travel Itinerary <span className="text-green-400">Manager</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl drop-shadow-sm">
                Create and manage personalized travel itineraries for Thailand's most beautiful destinations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/create">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    Create New Itinerary
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/recommendations">
                  <Button size="lg" variant="outline" className="bg-white/80 hover:bg-white border-0">
                    Get Recommendations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Thailand Adventure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our travel itinerary manager helps you create personalized travel plans for Thailand's most beautiful
            destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mt-8 -mr-8 transition-all duration-500 group-hover:bg-green-200"></div>
            <CardHeader className="pb-4 relative">
              <div className="bg-blue-100 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Plus className="h-7 w-7 text-blue-600" />
              </div>
              <CardTitle>Create Itinerary</CardTitle>
              <CardDescription>Plan a new trip to Thailand</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground">
                Create a custom itinerary with accommodations, activities, and transfers tailored to your preferences.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/create" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -mt-8 -mr-8 transition-all duration-500 group-hover:bg-amber-200"></div>
            <CardHeader className="pb-4 relative">
              <div className="bg-amber-100 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Calendar className="h-7 w-7 text-amber-600" />
              </div>
              <CardTitle>View Itineraries</CardTitle>
              <CardDescription>Browse existing travel plans</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground">
                Access and manage all your saved itineraries with detailed day-by-day schedules and activities.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/itineraries" className="w-full">
                <Button className="w-full" variant="outline">
                  View All
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mt-8 -mr-8 transition-all duration-500 group-hover:bg-green-200"></div>
            <CardHeader className="pb-4 relative">
              <div className="bg-green-100 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Map className="h-7 w-7 text-green-600" />
              </div>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Get suggested itineraries</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground">
                Discover expert-crafted itineraries for Phuket, Krabi, or combined trips based on your preferences.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/recommendations" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Recommendations</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore Thailand's most beautiful destinations with our curated itineraries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden group h-80 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 transition-all duration-500 group-hover:scale-105"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 rotate-12 opacity-30 rounded-full bg-gradient-to-r from-white/20 to-transparent transform translate-x-1/4"></div>
                <div className="absolute inset-0 -rotate-12 opacity-30 rounded-full bg-gradient-to-l from-white/20 to-transparent transform -translate-x-1/4"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Phuket</h3>
                <p className="text-white/80 mb-4">
                  Thailand's largest island with stunning beaches and vibrant nightlife
                </p>
                <Link href="/recommendations?destination=phuket">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">Explore Itineraries</Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group h-80 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-green-700 transition-all duration-500 group-hover:scale-105"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 rotate-12 opacity-30 rounded-full bg-gradient-to-r from-white/20 to-transparent transform translate-x-1/4"></div>
                <div className="absolute inset-0 -rotate-12 opacity-30 rounded-full bg-gradient-to-l from-white/20 to-transparent transform -translate-x-1/4"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Krabi</h3>
                <p className="text-white/80 mb-4">Famous for limestone cliffs, mangrove forests, and island hopping</p>
                <Link href="/recommendations?destination=krabi">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">Explore Itineraries</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Hear from travelers who have used our itineraries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              location: "United States",
              quote:
                "The Phuket itinerary was perfect for our honeymoon. Every activity was well-planned and we didn't have to worry about a thing!",
            },
            {
              name: "David Chen",
              location: "Singapore",
              quote:
                "I loved how easy it was to customize the recommended itinerary. The Krabi island hopping tour was the highlight of our trip.",
            },
            {
              name: "Emma Williams",
              location: "Australia",
              quote:
                "The combined Phuket and Krabi itinerary gave us the perfect mix of relaxation and adventure. Highly recommended!",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Plan Your Thailand Adventure?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Create your personalized travel itinerary today and make the most of your Thailand experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/create">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Create New Itinerary
              </Button>
            </Link>
            <Link href="/recommendations">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Browse Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
