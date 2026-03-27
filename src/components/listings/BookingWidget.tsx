"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type BookingWidgetProps = {
  propertyId: string
  pricePerNight: number
  rating: number
  reviewCount: number
}

export function BookingWidget({
  propertyId,
  pricePerNight,
  rating,
  reviewCount,
}: BookingWidgetProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleReserve = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkIn: new Date(),
          checkOut: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // Default 5 nights
          totalPrice: pricePerNight * 5 + 3700, // Matching the UI calculation
          propertyId,
        }),
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        alert("Booking failed. Please try again.")
      }
    } catch (error) {
      console.error("Booking error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center p-8 space-y-4">
        <h3 className="text-2xl font-bold text-adwa-gold">Reserved!</h3>
        <p className="text-muted-foreground">Your booking request has been sent.</p>
        <Button onClick={() => setSuccess(false)} variant="outline">Book another stay</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-bold">ETB {pricePerNight.toLocaleString()}</span>
          <span className="text-muted-foreground leading-loose ml-1">night</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold">
          <Star className="size-3.5 fill-adwa-gold text-adwa-gold" />
          <span>{rating.toFixed(1)}</span>
          <span className="text-muted-foreground">· {reviewCount} reviews</span>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-2">
          <div className="border-r border-b border-border p-3 transition-colors hover:bg-adwa-warm">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Check-in</label>
            <span className="text-sm font-medium text-muted-foreground">Add date</span>
          </div>
          <div className="border-b border-border p-3 transition-colors hover:bg-adwa-warm">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Checkout</label>
            <span className="text-sm font-medium text-muted-foreground">Add date</span>
          </div>
        </div>
        <div className="p-3 transition-colors hover:bg-adwa-warm">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Guests</label>
          <span className="text-sm font-medium text-foreground">1 guest</span>
        </div>
      </div>

      <Button 
        onClick={handleReserve}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-adwa-gold py-7 text-lg font-bold text-white shadow-lg hover:bg-adwa-gold-hover hover:shadow-adwa-gold/20 transition-all duration-300"
      >
        {loading ? "Processing..." : "Reserve"}
      </Button>

      <p className="mt-4 text-center text-sm text-muted-foreground">You won&apos;t be charged yet</p>

      <div className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
        <div className="flex justify-between">
          <span className="underline">ETB {pricePerNight.toLocaleString()} x 5 nights</span>
          <span>ETB {(pricePerNight * 5).toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>ETB 1,200</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Adwa Trail service fee</span>
          <span>ETB 2,500</span>
        </div>
        <div className="flex justify-between border-t border-border pt-4 text-lg font-bold">
          <span>Total</span>
          <span>ETB {(pricePerNight * 5 + 3700).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
