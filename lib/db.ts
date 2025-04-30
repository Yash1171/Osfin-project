// Define types
interface Itinerary {
  id: string
  title: string
  destination: string
  duration: number
  notes: string
  createdAt: string
}

interface Accommodation {
  id: string
  itineraryId: string
  day: number
  hotelName: string
  location: string
  checkIn: string
  checkOut: string
}

interface Transfer {
  id: string
  itineraryId: string
  day: number
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  transportType: string
}

interface Activity {
  id: string
  itineraryId: string
  day: number
  title: string
  description: string
  time: string
  location: string
}

// In-memory storage
const itineraries: Itinerary[] = [
  {
    id: "1",
    title: "Phuket Beach Getaway",
    destination: "phuket",
    duration: 4,
    notes: "First trip to Thailand",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    title: "Krabi Adventure",
    destination: "krabi",
    duration: 3,
    notes: "",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

let accommodations: Accommodation[] = [
  {
    id: "acc1",
    itineraryId: "1",
    day: 1,
    hotelName: "Patong Beach Resort",
    location: "Patong Beach, Phuket",
    checkIn: "14:00",
    checkOut: "12:00",
  },
  {
    id: "acc2",
    itineraryId: "1",
    day: 3,
    hotelName: "Kata Beach Hotel",
    location: "Kata Beach, Phuket",
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: "acc3",
    itineraryId: "2",
    day: 1,
    hotelName: "Ao Nang Cliff Resort",
    location: "Ao Nang, Krabi",
    checkIn: "14:00",
    checkOut: "12:00",
  },
]

let transfers: Transfer[] = [
  {
    id: "trans1",
    itineraryId: "1",
    day: 1,
    from: "Phuket Airport",
    to: "Patong Beach Resort",
    departureTime: "10:30",
    arrivalTime: "11:45",
    transportType: "Private Van",
  },
  {
    id: "trans2",
    itineraryId: "1",
    day: 3,
    from: "Patong Beach Resort",
    to: "Kata Beach Hotel",
    departureTime: "13:00",
    arrivalTime: "13:45",
    transportType: "Taxi",
  },
  {
    id: "trans3",
    itineraryId: "2",
    day: 1,
    from: "Krabi Airport",
    to: "Ao Nang Cliff Resort",
    departureTime: "09:15",
    arrivalTime: "10:00",
    transportType: "Shuttle Bus",
  },
]

let activities: Activity[] = [
  {
    id: "act1",
    itineraryId: "1",
    day: 2,
    title: "Phi Phi Islands Tour",
    description: "Full-day speedboat tour of the Phi Phi Islands with lunch included",
    time: "08:00",
    location: "Phi Phi Islands",
  },
  {
    id: "act2",
    itineraryId: "1",
    day: 4,
    title: "Phuket Old Town Walking Tour",
    description: "Explore the historic streets and architecture of Phuket Old Town",
    time: "14:00",
    location: "Phuket Old Town",
  },
  {
    id: "act3",
    itineraryId: "2",
    day: 2,
    title: "Four Islands Tour",
    description: "Visit Chicken Island, Tup Island, Poda Island, and Phra Nang Cave Beach",
    time: "09:00",
    location: "Krabi Islands",
  },
]

// Database operations
export const db = {
  // Itinerary operations
  itinerary: {
    findMany: async (options?: { orderBy?: { createdAt: string } }) => {
      if (options?.orderBy?.createdAt === "desc") {
        return [...itineraries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      }
      return itineraries
    },
    findUnique: async ({ where }: { where: { id: string } }) => {
      return itineraries.find((i) => i.id === where.id) || null
    },
    create: async ({ data }: { data: Itinerary }) => {
      const newItinerary = { ...data }
      itineraries.push(newItinerary)
      return newItinerary
    },
    delete: async ({ where }: { where: { id: string } }) => {
      const index = itineraries.findIndex((i) => i.id === where.id)
      if (index !== -1) {
        const deleted = itineraries[index]
        itineraries.splice(index, 1)
        return deleted
      }
      throw new Error("Itinerary not found")
    },
  },

  // Accommodation operations
  accommodation: {
    findMany: async ({ where }: { where: { itineraryId: string } }) => {
      return accommodations.filter((a) => a.itineraryId === where.itineraryId)
    },
    create: async ({ data }: { data: Accommodation }) => {
      const newAccommodation = { ...data }
      accommodations.push(newAccommodation)
      return newAccommodation
    },
    deleteMany: async ({ where }: { where: { itineraryId: string } }) => {
      accommodations = accommodations.filter((a) => a.itineraryId !== where.itineraryId)
      return { count: 0 } // Simulating Prisma's return
    },
  },

  // Transfer operations
  transfer: {
    findMany: async ({ where }: { where: { itineraryId: string } }) => {
      return transfers.filter((t) => t.itineraryId === where.itineraryId)
    },
    create: async ({ data }: { data: Transfer }) => {
      const newTransfer = { ...data }
      transfers.push(newTransfer)
      return newTransfer
    },
    deleteMany: async ({ where }: { where: { itineraryId: string } }) => {
      transfers = transfers.filter((t) => t.itineraryId !== where.itineraryId)
      return { count: 0 } // Simulating Prisma's return
    },
  },

  // Activity operations
  activity: {
    findMany: async ({ where }: { where: { itineraryId: string } }) => {
      return activities.filter((a) => a.itineraryId === where.itineraryId)
    },
    create: async ({ data }: { data: Activity }) => {
      const newActivity = { ...data }
      activities.push(newActivity)
      return newActivity
    },
    deleteMany: async ({ where }: { where: { itineraryId: string } }) => {
      activities = activities.filter((a) => a.itineraryId !== where.itineraryId)
      return { count: 0 } // Simulating Prisma's return
    },
  },
}
