import { Listing } from "./types"

export const MOCK_LISTINGS: Listing[] = [
  {
    id: "l1",
    slug: "gheralta-luxury-stay",
    title: "Gheralta Cliffs Eco-Lodge",
    description:
      "Perched on the edge of the Gheralta escarpment, this eco-lodge offers breathtaking 360-degree views of the Tigray mountains. Experience silence, luxury, and proximity to some of the world's most impressive rock-hewn churches. Our lodge is built using local stone and sand, blending perfectly with the landscape.",
    location: "Gheralta Mountains, Tigray",
    city: "Hawzen",
    pricePerNight: 14500,
    rating: 4.92,
    reviewCount: 128,
    type: "ENTIRE_HOME",
    mainImageUrl: "/images/gheralta_luxury_stay_1773406024643.png",
    galleryImages: [
      "/images/gheralta_luxury_stay_1773406024643.png",
      "/images/lalibela_boutique_hotel_1773406077350.png",
      "/images/simien_cultural_expedition_1773406095779.png",
    ],
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      { id: "a1", name: "Mountain View", icon: "Mountain" },
      { id: "a2", name: "Free Breakfast", icon: "Coffee" },
      { id: "a3", name: "Guided Trekking", icon: "Footprints" },
      { id: "a4", name: "Solar Power", icon: "Sun" },
      { id: "a5", name: "Fireplace", icon: "Flame" },
    ],
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment: "The most beautiful place I've ever stayed. The sunset from the terrace is life-changing.",
        createdAt: "2024-02-15",
        author: { name: "Elena Schmidt", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
      },
      {
        id: "r2",
        rating: 4,
        comment: "Stunning location. Be prepared for a bit of a hike to reach the churches!",
        createdAt: "2024-01-20",
        author: { name: "Marcus T.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
      },
    ],
    host: {
      name: "Aman Gebru",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
      isSuperhost: true,
      joinDate: "June 2021",
      responseTime: "within an hour",
    },
  },
  {
    id: "l2",
    slug: "lalibela-boutique-hotel",
    title: "Lalibela Boutique Heritage",
    description:
      "A stone's throw from the UNESCO World Heritage rock-hewn churches, our boutique hotel offers modern comforts steeped in traditional Aksumite design. Each room is meticulously decorated with Ethiopian crafts and textiles.",
    location: "Heritage Zone, Lalibela",
    city: "Lalibela",
    pricePerNight: 9800,
    rating: 4.85,
    reviewCount: 84,
    type: "PRIVATE_ROOM",
    mainImageUrl: "/images/lalibela_boutique_hotel_1773406077350.png",
    galleryImages: [
      "/images/lalibela_boutique_hotel_1773406077350.png",
      "/images/gheralta_luxury_stay_1773406024643.png",
      "/images/simien_cultural_expedition_1773406095779.png",
    ],
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      { id: "a6", name: "Church View", icon: "Church" },
      { id: "a7", name: "Wifi", icon: "Wifi" },
      { id: "a8", name: "Traditional Coffee Ceremony", icon: "Cup" },
    ],
    reviews: [
      {
        id: "r3",
        rating: 5,
        comment: "Excellent hospitality. The staff made us feel like family. The coffee ceremony was a highlight.",
        createdAt: "2024-03-01",
        author: { name: "James Wilson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
      },
    ],
    host: {
      name: "Tigist Haile",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tigist",
      isSuperhost: false,
      joinDate: "October 2022",
      responseTime: "within a few hours",
    },
  },
  {
    id: "l3",
    slug: "simien-cultural-expedition",
    title: "Simien Mountains Safari Lodge",
    description:
      "Experience the roof of Africa. Our lodge sits in the heart of the Simien Mountains National Park, home to the Gelada baboon and Walia ibex. Luxury canvas tents with heated blankets and professional guides ready for your adventure.",
    location: "Simien Mountains National Park",
    city: "Debark",
    pricePerNight: 12100,
    rating: 4.88,
    reviewCount: 56,
    type: "EXPERIENCE",
    mainImageUrl: "/images/simien_cultural_expedition_1773406095779.png",
    galleryImages: [
      "/images/simien_cultural_expedition_1773406095779.png",
      "/images/gheralta_luxury_stay_1773406024643.png",
      "/images/lalibela_boutique_hotel_1773406077350.png",
    ],
    maxGuests: 6,
    bedrooms: 2,
    beds: 4,
    bathrooms: 1,
    amenities: [
      { id: "a9", name: "Wildlife Spotting", icon: "Binoculars" },
      { id: "a10", name: "Full Board", icon: "Utensils" },
      { id: "a11", name: "Heated Blankets", icon: "Waves" },
    ],
    reviews: [
      {
        id: "r4",
        rating: 5,
        comment: "Unreal scenery. The Gelada baboons literally walk right past your tent!",
        createdAt: "2024-01-10",
        author: { name: "Sofia P.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia" },
      },
    ],
    host: {
      name: "Daniel Simien",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      isSuperhost: true,
      joinDate: "January 2020",
      responseTime: "within a day",
    },
  },
]

export function getListingBySlug(slug: string) {
  return MOCK_LISTINGS.find((l) => l.slug === slug) || MOCK_LISTINGS[0]
}
