export type PropertyType = "ENTIRE_HOME" | "PRIVATE_ROOM" | "EXPERIENCE"

export interface User {
  id: string
  name: string
  email: string
  image?: string
  role: "GUEST" | "HOST" | "ADMIN"
}

export interface Amenity {
  id: string
  name: string
  icon: string // Lucide icon name or emoji
}

export interface Review {
  id: string
  rating: number
  comment: string
  createdAt: string
  author: {
    name: string
    image: string
  }
}

export interface Listing {
  id: string
  slug: string
  title: string
  description: string
  location: string
  city: string
  pricePerNight: number
  rating: number
  reviewCount: number
  type: PropertyType
  mainImageUrl: string
  galleryImages: string[]
  maxGuests: number
  bedrooms: number
  beds: number
  bathrooms: number
  amenities: Amenity[]
  reviews: Review[]
  host: {
    name: string
    image: string
    isSuperhost: boolean
    joinDate: string
    responseTime: string
  }
}
