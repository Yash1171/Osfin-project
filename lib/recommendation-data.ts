import { v4 as uuidv4 } from "uuid"

export const recommendationData = [
  // Phuket - 3 nights
  {
    id: "rec1",
    title: "Phuket Beach Escape",
    destination: "phuket",
    duration: 3,
    description: "A perfect 3-night introduction to Phuket with beach time and island exploration.",
    highlights: [
      "Stay at the beautiful Patong Beach",
      "Explore the stunning Phi Phi Islands",
      "Visit the iconic Big Buddha",
      "Experience Phuket Old Town",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Patong Beach Resort & Spa",
            location: "Patong Beach, Phuket",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Phuket International Airport",
            to: "Patong Beach Resort & Spa",
            departureTime: "11:00",
            arrivalTime: "12:00",
            transportType: "Private Van Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Patong Beach Relaxation",
            description: "Spend the afternoon relaxing at the famous Patong Beach and exploring the surrounding area.",
            time: "15:00",
            location: "Patong Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phi Phi Islands Day Tour",
            description:
              "Full-day speedboat tour to the stunning Phi Phi Islands including Maya Bay, Viking Cave, and snorkeling spots.",
            time: "07:30",
            location: "Phi Phi Islands",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Big Buddha & Chalong Temple",
            description: "Visit Phuket's iconic 45-meter tall Big Buddha statue and the beautiful Chalong Temple.",
            time: "09:00",
            location: "Chalong, Phuket",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Old Town Walking Tour",
            description: "Explore the charming Sino-Portuguese architecture and vibrant street art of Phuket Old Town.",
            time: "14:00",
            location: "Phuket Old Town",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Patong Beach Resort & Spa",
            to: "Phuket International Airport",
            departureTime: "10:00",
            arrivalTime: "11:00",
            transportType: "Private Van Transfer",
          },
        ],
      },
    ],
  },

  // Phuket - 5 nights
  {
    id: "rec2",
    title: "Phuket Complete Experience",
    destination: "phuket",
    duration: 5,
    description: "A comprehensive 5-night Phuket itinerary covering beaches, cultural sites, and nearby islands.",
    highlights: [
      "Explore multiple beaches around Phuket",
      "Visit the iconic Big Buddha and temples",
      "Enjoy day trips to Phi Phi Islands and James Bond Island",
      "Experience local markets and Phuket Old Town",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Kata Beach Resort",
            location: "Kata Beach, Phuket",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Phuket International Airport",
            to: "Kata Beach Resort",
            departureTime: "12:00",
            arrivalTime: "13:15",
            transportType: "Private Car Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Kata Beach Exploration",
            description: "Relax at the beautiful Kata Beach and explore the surrounding area.",
            time: "15:00",
            location: "Kata Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phi Phi Islands Tour",
            description: "Full-day speedboat tour to the stunning Phi Phi Islands with lunch included.",
            time: "07:30",
            location: "Phi Phi Islands",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Big Buddha & Chalong Temple",
            description: "Visit Phuket's iconic 45-meter tall Big Buddha statue and the beautiful Chalong Temple.",
            time: "09:00",
            location: "Chalong, Phuket",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Old Town Exploration",
            description: "Explore the charming Sino-Portuguese architecture and vibrant street art of Phuket Old Town.",
            time: "14:00",
            location: "Phuket Old Town",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Sunday Night Market",
            description:
              "Experience the vibrant Phuket Sunday Night Market with local food, crafts, and entertainment.",
            time: "17:00",
            location: "Phuket Old Town",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phang Nga Bay & James Bond Island Tour",
            description:
              "Full-day tour to the spectacular limestone karsts of Phang Nga Bay and the famous James Bond Island.",
            time: "08:00",
            location: "Phang Nga Bay",
          },
        ],
      },
      {
        day: 5,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Beach Hopping Tour",
            description:
              "Visit some of Phuket's most beautiful beaches including Freedom Beach, Paradise Beach, and Banana Beach.",
            time: "09:00",
            location: "Various Beaches, Phuket",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Fantasea Show",
            description:
              "Evening cultural show showcasing Thailand's rich heritage through state-of-the-art technology and special effects.",
            time: "19:00",
            location: "Kamala, Phuket",
          },
        ],
      },
      {
        day: 6,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Kata Beach Resort",
            to: "Phuket International Airport",
            departureTime: "10:00",
            arrivalTime: "11:15",
            transportType: "Private Car Transfer",
          },
        ],
      },
    ],
  },

  // Krabi - 3 nights
  {
    id: "rec3",
    title: "Krabi Island Hopping",
    destination: "krabi",
    duration: 3,
    description: "Explore the stunning islands and beaches of Krabi with this perfect 3-night itinerary.",
    highlights: [
      "Visit the famous Four Islands",
      "Explore Railay Beach's dramatic limestone cliffs",
      "Relax at Ao Nang Beach",
      "Experience the Emerald Pool and Hot Springs",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Ao Nang Cliff Beach Resort",
            location: "Ao Nang, Krabi",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Krabi International Airport",
            to: "Ao Nang Cliff Beach Resort",
            departureTime: "11:00",
            arrivalTime: "11:45",
            transportType: "Shared Minivan Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Ao Nang Beach Relaxation",
            description: "Spend the afternoon relaxing at Ao Nang Beach and exploring the area.",
            time: "14:30",
            location: "Ao Nang Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Four Islands Tour",
            description:
              "Full-day longtail boat tour to Chicken Island, Tup Island, Poda Island, and Phra Nang Cave Beach.",
            time: "08:30",
            location: "Four Islands, Krabi",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Emerald Pool & Hot Springs",
            description: "Visit the natural Emerald Pool and relax in the therapeutic Krabi Hot Springs.",
            time: "08:00",
            location: "Thung Teao Forest Natural Park",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Railay Beach Sunset",
            description: "Take a longtail boat to the stunning Railay Beach and enjoy the sunset.",
            time: "16:00",
            location: "Railay Beach",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Ao Nang Cliff Beach Resort",
            to: "Krabi International Airport",
            departureTime: "09:00",
            arrivalTime: "09:45",
            transportType: "Shared Minivan Transfer",
          },
        ],
      },
    ],
  },

  // Krabi - 4 nights
  {
    id: "rec4",
    title: "Krabi Adventure",
    destination: "krabi",
    duration: 4,
    description:
      "Experience the best of Krabi with this 4-night adventure itinerary combining relaxation and exploration.",
    highlights: [
      "Island hopping to the famous Four Islands",
      "Rock climbing at Railay Beach",
      "Kayaking through mangrove forests",
      "Exploring the Emerald Pool and Hot Springs",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Railay Princess Resort & Spa",
            location: "Railay Beach, Krabi",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Krabi International Airport",
            to: "Ao Nang Pier",
            departureTime: "11:00",
            arrivalTime: "11:45",
            transportType: "Private Car Transfer",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Ao Nang Pier",
            to: "Railay Beach",
            departureTime: "12:00",
            arrivalTime: "12:20",
            transportType: "Longtail Boat",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Railay Beach Exploration",
            description: "Explore the stunning beaches and limestone cliffs of Railay Peninsula.",
            time: "15:00",
            location: "Railay Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Rock Climbing Adventure",
            description:
              "Half-day rock climbing experience on Railay's world-famous limestone cliffs (suitable for beginners).",
            time: "09:00",
            location: "Railay Beach",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Phra Nang Cave Beach",
            description: "Relax at the stunning Phra Nang Cave Beach and explore the Princess Cave.",
            time: "14:00",
            location: "Phra Nang Beach",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Four Islands Tour",
            description:
              "Full-day tour to Chicken Island, Tup Island, Poda Island, and Phra Nang Cave Beach with snorkeling.",
            time: "08:30",
            location: "Four Islands, Krabi",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Mangrove Forest Kayaking",
            description: "Morning kayaking adventure through Krabi's lush mangrove forests.",
            time: "09:00",
            location: "Ao Thalane",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Emerald Pool & Hot Springs",
            description: "Afternoon visit to the natural Emerald Pool and relaxing Krabi Hot Springs.",
            time: "14:00",
            location: "Thung Teao Forest Natural Park",
          },
        ],
      },
      {
        day: 5,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Railay Beach",
            to: "Ao Nang Pier",
            departureTime: "09:00",
            arrivalTime: "09:20",
            transportType: "Longtail Boat",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Ao Nang Pier",
            to: "Krabi International Airport",
            departureTime: "09:30",
            arrivalTime: "10:15",
            transportType: "Private Car Transfer",
          },
        ],
      },
    ],
  },

  // Combined Phuket & Krabi - 7 nights
  {
    id: "rec5",
    title: "Phuket & Krabi Highlights",
    destination: "both",
    duration: 7,
    description: "Experience the best of both Phuket and Krabi with this comprehensive 7-night itinerary.",
    highlights: [
      "Explore the vibrant beaches and nightlife of Phuket",
      "Visit the iconic Phi Phi Islands",
      "Experience the dramatic limestone cliffs of Railay Beach",
      "Discover the Four Islands of Krabi",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Patong Beach Resort",
            location: "Patong Beach, Phuket",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Phuket International Airport",
            to: "Patong Beach Resort",
            departureTime: "11:00",
            arrivalTime: "12:00",
            transportType: "Private Van Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Patong Beach Exploration",
            description: "Relax at Patong Beach and explore the surrounding area.",
            time: "15:00",
            location: "Patong Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phi Phi Islands Tour",
            description: "Full-day speedboat tour to the stunning Phi Phi Islands with lunch included.",
            time: "07:30",
            location: "Phi Phi Islands",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Big Buddha & Chalong Temple",
            description: "Morning visit to Phuket's iconic Big Buddha statue and Chalong Temple.",
            time: "09:00",
            location: "Chalong, Phuket",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Old Town Exploration",
            description: "Afternoon exploring the charming streets and architecture of Phuket Old Town.",
            time: "14:00",
            location: "Phuket Old Town",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Patong Beach Resort",
            to: "Ao Nang, Krabi",
            departureTime: "09:00",
            arrivalTime: "12:00",
            transportType: "Private Van Transfer",
          },
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Ao Nang Cliff Beach Resort",
            location: "Ao Nang, Krabi",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Ao Nang Beach Relaxation",
            description: "Afternoon relaxing at Ao Nang Beach and exploring the area.",
            time: "15:00",
            location: "Ao Nang Beach",
          },
        ],
      },
      {
        day: 5,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Four Islands Tour",
            description: "Full-day tour to Chicken Island, Tup Island, Poda Island, and Phra Nang Cave Beach.",
            time: "08:30",
            location: "Four Islands, Krabi",
          },
        ],
      },
      {
        day: 6,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Railay Beach Day Trip",
            description: "Day trip to the stunning Railay Beach with its dramatic limestone cliffs.",
            time: "09:00",
            location: "Railay Beach",
          },
        ],
      },
      {
        day: 7,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Emerald Pool & Hot Springs",
            description: "Visit the natural Emerald Pool and relax in the therapeutic Krabi Hot Springs.",
            time: "09:00",
            location: "Thung Teao Forest Natural Park",
          },
        ],
      },
      {
        day: 8,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Ao Nang Cliff Beach Resort",
            to: "Krabi International Airport",
            departureTime: "10:00",
            arrivalTime: "10:45",
            transportType: "Private Car Transfer",
          },
        ],
      },
    ],
  },

  // Additional itineraries for different durations
  {
    id: "rec6",
    title: "Phuket Weekend Getaway",
    destination: "phuket",
    duration: 2,
    description: "A perfect weekend escape to Phuket with beach time and island exploration.",
    highlights: ["Relax at Patong Beach", "Explore Phi Phi Islands", "Experience local nightlife"],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Patong Merlin Hotel",
            location: "Patong Beach, Phuket",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Phuket International Airport",
            to: "Patong Merlin Hotel",
            departureTime: "10:00",
            arrivalTime: "11:00",
            transportType: "Private Car Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Patong Beach Relaxation",
            description: "Afternoon relaxing at Patong Beach and exploring the area.",
            time: "14:00",
            location: "Patong Beach",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Bangla Road Night Experience",
            description: "Evening exploring the vibrant Bangla Road nightlife.",
            time: "20:00",
            location: "Bangla Road, Patong",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phi Phi Islands Express Tour",
            description: "Full-day speedboat tour to the highlights of Phi Phi Islands.",
            time: "07:30",
            location: "Phi Phi Islands",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Patong Merlin Hotel",
            to: "Phuket International Airport",
            departureTime: "10:00",
            arrivalTime: "11:00",
            transportType: "Private Car Transfer",
          },
        ],
      },
    ],
  },

  // Add more itineraries for different durations and destinations as needed
  {
    id: "rec7",
    title: "Krabi Short Escape",
    destination: "krabi",
    duration: 2,
    description: "A quick but comprehensive introduction to Krabi's natural beauty.",
    highlights: ["Explore Railay Beach", "Visit the Four Islands", "Experience Ao Nang"],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Centara Grand Beach Resort & Villas",
            location: "Ao Nang, Krabi",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Krabi International Airport",
            to: "Centara Grand Beach Resort",
            departureTime: "10:00",
            arrivalTime: "10:45",
            transportType: "Private Car Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Railay Beach Half-Day Trip",
            description: "Afternoon exploring the stunning Railay Beach and its surroundings.",
            time: "13:00",
            location: "Railay Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Four Islands Tour",
            description: "Full-day tour to Chicken Island, Tup Island, Poda Island, and Phra Nang Cave Beach.",
            time: "08:30",
            location: "Four Islands, Krabi",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Centara Grand Beach Resort",
            to: "Krabi International Airport",
            departureTime: "10:00",
            arrivalTime: "10:45",
            transportType: "Private Car Transfer",
          },
        ],
      },
    ],
  },

  {
    id: "rec8",
    title: "Phuket Family Adventure",
    destination: "phuket",
    duration: 6,
    description: "A comprehensive family-friendly itinerary exploring the best of Phuket.",
    highlights: [
      "Visit family-friendly beaches",
      "Explore Phuket attractions",
      "Enjoy water activities",
      "Experience wildlife encounters",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Marriott Resort & Spa, Merlin Beach",
            location: "Tri-Trang Beach, Phuket",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Phuket International Airport",
            to: "Marriott Resort & Spa",
            departureTime: "11:00",
            arrivalTime: "12:00",
            transportType: "Private Van Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Resort Pool & Beach Time",
            description: "Relax at the resort's pools and nearby beach after arrival.",
            time: "14:00",
            location: "Marriott Resort",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Aquarium & Beach",
            description: "Visit the Phuket Aquarium followed by relaxation at Kata Beach.",
            time: "10:00",
            location: "Cape Panwa & Kata Beach",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phi Phi Islands Family Tour",
            description: "Family-friendly tour to the Phi Phi Islands with snorkeling and beach time.",
            time: "08:00",
            location: "Phi Phi Islands",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Elephant Sanctuary",
            description: "Ethical elephant experience at Phuket Elephant Sanctuary.",
            time: "09:00",
            location: "Phuket Elephant Sanctuary",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Big Buddha & Chalong Temple",
            description: "Afternoon visit to Phuket's Big Buddha and Chalong Temple.",
            time: "14:00",
            location: "Chalong, Phuket",
          },
        ],
      },
      {
        day: 5,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Splash Jungle Water Park",
            description: "Full day of fun at Phuket's largest water park.",
            time: "10:00",
            location: "Mai Khao, Phuket",
          },
        ],
      },
      {
        day: 6,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Old Town & Shopping",
            description: "Explore Phuket Old Town and enjoy some souvenir shopping.",
            time: "10:00",
            location: "Phuket Old Town",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Fantasea Show",
            description: "Evening cultural show perfect for families.",
            time: "19:00",
            location: "Kamala, Phuket",
          },
        ],
      },
      {
        day: 7,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Marriott Resort & Spa",
            to: "Phuket International Airport",
            departureTime: "10:00",
            arrivalTime: "11:00",
            transportType: "Private Van Transfer",
          },
        ],
      },
    ],
  },

  {
    id: "rec9",
    title: "Krabi Nature Explorer",
    destination: "krabi",
    duration: 5,
    description: "Discover Krabi's natural wonders from beaches to jungles and islands.",
    highlights: [
      "Explore the Four Islands",
      "Visit Railay Beach",
      "Discover the Emerald Pool & Hot Springs",
      "Experience Hong Island",
      "Kayak through mangroves",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Dusit Thani Krabi Beach Resort",
            location: "Klong Muang Beach, Krabi",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Krabi International Airport",
            to: "Dusit Thani Krabi Beach Resort",
            departureTime: "11:00",
            arrivalTime: "11:45",
            transportType: "Private Car Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Resort Beach Relaxation",
            description: "Relax at the resort's private beach and explore the facilities.",
            time: "14:00",
            location: "Klong Muang Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Four Islands Tour",
            description: "Full-day tour to Chicken Island, Tup Island, Poda Island, and Phra Nang Cave Beach.",
            time: "08:30",
            location: "Four Islands, Krabi",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Emerald Pool, Hot Springs & Tiger Cave Temple",
            description: "Full-day tour to Krabi's natural hot springs, the Emerald Pool, and Tiger Cave Temple.",
            time: "08:00",
            location: "Krabi Province",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Hong Island Tour",
            description: "Full-day tour to the stunning Hong Island and lagoon.",
            time: "08:30",
            location: "Hong Island",
          },
        ],
      },
      {
        day: 5,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Ao Thalane Mangrove Kayaking",
            description: "Morning kayaking through the beautiful mangrove forests of Ao Thalane.",
            time: "09:00",
            location: "Ao Thalane",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Railay Beach Sunset",
            description: "Evening visit to Railay Beach to enjoy the sunset.",
            time: "16:00",
            location: "Railay Beach",
          },
        ],
      },
      {
        day: 6,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Dusit Thani Krabi Beach Resort",
            to: "Krabi International Airport",
            departureTime: "10:00",
            arrivalTime: "10:45",
            transportType: "Private Car Transfer",
          },
        ],
      },
    ],
  },

  {
    id: "rec10",
    title: "Phuket & Krabi Ultimate Experience",
    destination: "both",
    duration: 8,
    description: "The ultimate Thailand experience combining the best of Phuket and Krabi over 8 nights.",
    highlights: [
      "Explore the best beaches in both Phuket and Krabi",
      "Visit the iconic Phi Phi Islands",
      "Experience Railay Beach and Four Islands",
      "Enjoy cultural attractions and natural wonders",
    ],
    days: [
      {
        day: 1,
        items: [
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "The Slate Phuket",
            location: "Nai Yang Beach, Phuket",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "transfer",
            from: "Phuket International Airport",
            to: "The Slate Phuket",
            departureTime: "11:00",
            arrivalTime: "11:30",
            transportType: "Private Car Transfer",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Nai Yang Beach Relaxation",
            description: "Relax at the beautiful Nai Yang Beach and explore the resort facilities.",
            time: "15:00",
            location: "Nai Yang Beach",
          },
        ],
      },
      {
        day: 2,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phi Phi Islands Premium Tour",
            description: "Full-day luxury speedboat tour to the stunning Phi Phi Islands with gourmet lunch.",
            time: "08:00",
            location: "Phi Phi Islands",
          },
        ],
      },
      {
        day: 3,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Phuket Old Town & Big Buddha",
            description: "Morning exploring Phuket Old Town followed by a visit to the Big Buddha.",
            time: "09:00",
            location: "Phuket",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Sunset at Promthep Cape",
            description: "Evening visit to Promthep Cape to witness the spectacular sunset.",
            time: "17:00",
            location: "Promthep Cape, Phuket",
          },
        ],
      },
      {
        day: 4,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Similan Islands Day Trip",
            description: "Full-day trip to the pristine Similan Islands with snorkeling opportunities.",
            time: "07:00",
            location: "Similan Islands",
          },
        ],
      },
      {
        day: 5,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "The Slate Phuket",
            to: "Rayavadee Krabi",
            departureTime: "10:00",
            arrivalTime: "14:00",
            transportType: "Private Car and Speedboat Transfer",
          },
          {
            id: uuidv4(),
            type: "accommodation",
            hotelName: "Rayavadee Krabi",
            location: "Railay Beach, Krabi",
            checkIn: "14:00",
            checkOut: "12:00",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Railay Beach Exploration",
            description: "Late afternoon exploring the stunning Railay Peninsula.",
            time: "16:00",
            location: "Railay Beach",
          },
        ],
      },
      {
        day: 6,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Four Islands Luxury Tour",
            description: "Private longtail boat tour to the Four Islands with personalized schedule.",
            time: "09:00",
            location: "Four Islands, Krabi",
          },
        ],
      },
      {
        day: 7,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Hong Island Private Tour",
            description: "Private tour to the stunning Hong Island with secluded beach time.",
            time: "09:00",
            location: "Hong Island",
          },
        ],
      },
      {
        day: 8,
        items: [
          {
            id: uuidv4(),
            type: "activity",
            title: "Emerald Pool & Hot Springs VIP Tour",
            description: "Private tour to the Emerald Pool and Hot Springs with early access.",
            time: "08:00",
            location: "Thung Teao Forest Natural Park",
          },
          {
            id: uuidv4(),
            type: "activity",
            title: "Sunset Dinner Cruise",
            description: "Evening sunset dinner cruise around Phang Nga Bay.",
            time: "17:00",
            location: "Phang Nga Bay",
          },
        ],
      },
      {
        day: 9,
        items: [
          {
            id: uuidv4(),
            type: "transfer",
            from: "Rayavadee Krabi",
            to: "Krabi International Airport",
            departureTime: "10:00",
            arrivalTime: "11:30",
            transportType: "Speedboat and Private Car Transfer",
          },
        ],
      },
    ],
  },
]
