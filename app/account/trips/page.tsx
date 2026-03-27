"use client"

import * as React from "react"
import Link from "next/link"
import { Reveal } from "@/src/components/shared/Reveal"
import { Calendar, MapPin, Plane } from "lucide-react"

const MOCK_TRIPS = [
  {
    id: "1",
    property: "Luxury Lodge in Tigray",
    location: "Hawzen, Ethiopia",
    checkIn: "Apr 12, 2026",
    checkOut: "Apr 16, 2026",
    status: "upcoming" as const,
    price: "12,400 ETB",
    image: null,
  },
  {
    id: "2",
    property: "Lakeside Villa — Bahir Dar",
    location: "Bahir Dar, Ethiopia",
    checkIn: "Feb 01, 2026",
    checkOut: "Feb 05, 2026",
    status: "completed" as const,
    price: "8,800 ETB",
    image: null,
  },
  {
    id: "3",
    property: "Historic Guesthouse — Gondar",
    location: "Gondar, Ethiopia",
    checkIn: "Dec 20, 2025",
    checkOut: "Dec 24, 2025",
    status: "completed" as const,
    price: "6,200 ETB",
    image: null,
  },
  {
    id: "4",
    property: "Mountain Retreat — Simien",
    location: "Simien Mountains, Ethiopia",
    checkIn: "Nov 05, 2025",
    checkOut: "Nov 08, 2025",
    status: "cancelled" as const,
    price: "9,500 ETB",
    image: null,
  },
]

const STATUS_STYLES = {
  upcoming:
    "bg-adwa-gold/10 text-adwa-gold border-adwa-gold/20",
  completed:
    "bg-green-50 text-green-700 border-green-200",
  cancelled:
    "bg-red-50 text-red-500 border-red-200",
}

export default function TripsPage() {
  const [filter, setFilter] = React.useState<"all" | "upcoming" | "completed" | "cancelled">("all")

  const filtered =
    filter === "all" ? MOCK_TRIPS : MOCK_TRIPS.filter((t) => t.status === filter)

  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className="text-3xl font-bold">My Trips</h2>
        <p className="mt-1 text-muted-foreground">
          View and manage your past, upcoming, and cancelled bookings.
        </p>
      </Reveal>

      {/* FILTER TABS */}
      <Reveal delayMs={100}>
        <div className="flex gap-2 flex-wrap">
          {(["all", "upcoming", "completed", "cancelled"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                filter === tab
                  ? "bg-adwa-gold text-white shadow-md"
                  : "bg-adwa-warm text-muted-foreground hover:bg-adwa-surface-hover"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </Reveal>

      {/* TRIP LIST */}
      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((trip, idx) => (
            <Reveal key={trip.id} delayMs={150 + idx * 80}>
              <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-border p-4 transition-all hover:shadow-lg hover:shadow-adwa-gold/5 hover:border-adwa-gold/30">
                {/* Image placeholder */}
                <div className="h-32 w-full sm:w-44 shrink-0 rounded-xl bg-muted flex items-center justify-center">
                  <Plane className="size-8 text-muted-foreground/40" />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold leading-snug">
                        {trip.property}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${STATUS_STYLES[trip.status]}`}
                      >
                        {trip.status}
                      </span>
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {trip.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="size-3.5" />
                      <span>
                        {trip.checkIn} → {trip.checkOut}
                      </span>
                    </div>
                    <span className="font-bold text-adwa-gold">{trip.price}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="flex flex-col items-center justify-center py-20 text-center">
          <div className="size-20 rounded-full bg-adwa-warm flex items-center justify-center mb-6">
            <Plane className="size-10 text-adwa-gold" />
          </div>
          <h3 className="text-xl font-bold">No trips found</h3>
          <p className="text-muted-foreground mt-2">
            {filter === "all"
              ? "You haven't booked any trips yet."
              : `No ${filter} trips to show.`}
          </p>
          <Link
            href="/stays"
            className="mt-8 rounded-xl bg-adwa-gold px-10 py-4 font-bold text-white shadow-lg transition hover:bg-adwa-gold-hover"
          >
            Explore Stays
          </Link>
        </Reveal>
      )}
    </div>
  )
}
