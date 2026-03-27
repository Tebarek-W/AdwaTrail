"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home, Image as ImageIcon, CreditCard, CheckCircle2, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/src/components/shared/Reveal"
import { cn } from "@/lib/utils"

const STEPS = [
  { id: "basics", title: "The Basics", icon: <Home className="size-5" /> },
  { id: "location", title: "Location", icon: <MapPin className="size-5" /> },
  { id: "photos", title: "Photos", icon: <ImageIcon className="size-5" /> },
  { id: "pricing", title: "Pricing", icon: <CreditCard className="size-5" /> },
  { id: "finish", title: "Review", icon: <CheckCircle2 className="size-5" /> },
]

export default function ListYourPropertyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "ENTIRE_HOME",
    location: "Addis Ababa, Ethiopia",
    city: "Addis Ababa",
    country: "Ethiopia",
    pricePerNight: 8500,
    maxGuests: 2,
    mainImageUrl: "/images/gheralta_luxury_stay_1773406024643.png", // Default for demo
  })
  const [loading, setLoading] = useState(false)

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const handlePublish = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           ...formData,
           title: formData.title || `${formData.type} in ${formData.city}`,
           description: formData.description || "A wonderful place to stay in Ethiopia."
        }),
      })

      if (response.ok) {
        window.location.href = "/discover"
      } else {
        alert("Failed to publish listing.")
      }
    } catch (error) {
      console.error("Publish error:", error)
      alert("An error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <nav className="border-b border-border bg-white py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="group flex items-center gap-2 text-sm font-bold text-adwa-gold">
            <ChevronLeft className="size-4" /> Exit
          </Link>
          <div className="flex gap-4">
             <button className="text-sm font-bold underline">Questions?</button>
             <button className="text-sm font-bold underline">Save & Exit</button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* STEP INDICATOR */}
        <div className="mb-12 flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="flex items-center gap-3 shrink-0">
               <div className={cn(
                   "flex size-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                   idx <= currentStep ? "border-adwa-gold bg-adwa-gold text-white" : "border-border text-muted-foreground"
               )}>
                   {step.icon}
               </div>
               <span className={cn(
                   "text-sm font-bold tracking-tight",
                   idx === currentStep ? "text-foreground" : "text-muted-foreground"
               )}>{step.title}</span>
               {idx < STEPS.length - 1 && <div className="h-px w-8 bg-border" />}
            </div>
          ))}
        </div>

        {/* STEP CONTENT */}
        <div className="min-h-[400px]">
           {currentStep === 0 && (
             <Reveal className="space-y-8">
               <div className="space-y-2">
                 <h2 className="text-4xl font-bold">What kind of place will you host?</h2>
                 <p className="text-muted-foreground">Choose the category that best describes your property.</p>
               </div>
               <div className="grid gap-4 sm:grid-cols-3">
                 {[
                   { label: "Eco-Lodge", value: "ENTIRE_HOME" },
                   { label: "Boutique Hotel", value: "PRIVATE_ROOM" },
                   { label: "Heritage Home", value: "ENTIRE_HOME" },
                   { label: "Luxury Suite", value: "PRIVATE_ROOM" },
                   { label: "Countryside Retreat", value: "ENTIRE_HOME" },
                   { label: "City Apartment", value: "ENTIRE_HOME" }
                 ].map((type) => (
                    <button 
                      key={type.label} 
                      onClick={() => setFormData({ ...formData, type: type.value, title: `${type.label} Stay` })}
                      className={cn(
                        "rounded-2xl border-2 p-6 text-left transition hover:border-adwa-gold hover:bg-adwa-gold/5 focus:border-adwa-gold focus:bg-adwa-gold/5",
                        formData.title.includes(type.label) ? "border-adwa-gold bg-adwa-gold/5" : "border-border"
                      )}
                    >
                        <p className="font-bold">{type.label}</p>
                    </button>
                 ))}
               </div>
             </Reveal>
           )}

           {currentStep === 1 && (
             <Reveal className="space-y-8">
               <div className="space-y-2">
                 <h2 className="text-4xl font-bold">Where's your place located?</h2>
                 <p className="text-muted-foreground">Your address is only shared with guests after they book.</p>
               </div>
               <div className="space-y-4">
                 <div className="space-y-2">
                   <label className="text-sm font-bold">Region</label>
                   <select className="w-full rounded-xl border border-border bg-white p-4 font-medium outline-none focus:border-adwa-gold">
                      <option>Addis Ababa</option>
                      <option>Amhara (Lalibela, Gonder)</option>
                      <option>Tigray (Gheralta, Axum)</option>
                      <option>Oromia</option>
                      <option>Sidama</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold">Street Address</label>
                   <input className="w-full rounded-xl border border-border bg-white p-4 font-medium outline-none focus:border-adwa-gold" placeholder="Enter address..." />
                 </div>
               </div>
             </Reveal>
           )}

           {currentStep === 2 && (
             <Reveal className="space-y-8">
               <div className="space-y-2 text-center">
                 <h2 className="text-4xl font-bold">Add some photos of your place</h2>
                 <p className="text-muted-foreground">You&apos;ll need at least 5 photos to get started. You can add more later.</p>
               </div>
               <div className="flex h-80 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-adwa-warm/10 text-center">
                 <ImageIcon className="mb-4 size-16 text-muted-foreground" />
                 <p className="font-bold">Drag your photos here</p>
                 <p className="text-sm text-muted-foreground">or browse from your device</p>
                 <Button className="mt-6 rounded-xl bg-adwa-gold px-8 py-6 font-bold text-white shadow-lg">Upload Photos</Button>
               </div>
             </Reveal>
           )}

           {currentStep === 3 && (
             <Reveal className="space-y-8">
               <div className="space-y-2">
                 <h2 className="text-4xl font-bold">Set your price</h2>
                 <p className="text-muted-foreground">You can change it anytime. Start competitive to get bookings faster.</p>
               </div>
               <div className="mx-auto flex max-w-md flex-col items-center space-y-4 rounded-3xl border border-border bg-white p-12 text-center shadow-2xl shadow-adwa-gold/5">
                 <p className="text-6xl font-bold text-adwa-gold">ETB 
                   <input 
                    type="number" 
                    value={formData.pricePerNight} 
                    onChange={(e) => setFormData({ ...formData, pricePerNight: parseInt(e.target.value) || 0 })}
                    className="w-48 bg-transparent outline-none ml-2" 
                   />
                 </p>
                 <p className="font-bold">per night</p>
                 <div className="mt-6 w-full rounded-xl bg-adwa-warm p-4 text-sm text-muted-foreground">
                    Guest price (including fees): <span className="font-bold text-foreground">ETB {(formData.pricePerNight * 1.15).toLocaleString()}</span>
                 </div>
               </div>
             </Reveal>
           )}

           {currentStep === 4 && (
             <Reveal className="space-y-8 text-center pb-12">
               <CheckCircle2 className="mx-auto size-24 text-adwa-gold" />
               <div className="space-y-2">
                 <h2 className="text-4xl font-bold">Review and Submit</h2>
                 <p className="text-muted-foreground">Check your details before we publish your listing to the world.</p>
               </div>
               <div className="rounded-3xl border border-border bg-white p-10 shadow-sm text-left max-w-2xl mx-auto space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                      <p className="font-bold">Property Title</p>
                      <p className="text-muted-foreground">{formData.title}</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-4">
                      <p className="font-bold">Location</p>
                      <p className="text-muted-foreground">{formData.city}, Ethiopia</p>
                  </div>
                   <div className="flex justify-between items-center border-b border-border pb-4">
                      <p className="font-bold">Price</p>
                      <p className="text-adwa-gold font-bold">ETB {formData.pricePerNight.toLocaleString()} / night</p>
                  </div>
               </div>
               <p className="text-xs text-muted-foreground">By submitting, you agree to the Adwa Trail Hosting Terms of Service.</p>
             </Reveal>
           )}
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-10">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0 || loading}
            className="flex items-center gap-2 font-bold px-8 py-6 rounded-xl hover:bg-adwa-warm/50"
          >
            <ChevronLeft className="size-5" /> Back
          </Button>

          {currentStep === STEPS.length - 1 ? (
             <Button 
               onClick={handlePublish}
               disabled={loading}
               className="rounded-xl bg-adwa-gold px-12 py-6 text-lg font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
             >
               {loading ? "Publishing..." : "Publish Listing"}
             </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-adwa-gold px-12 py-6 text-lg font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Next <ChevronRight className="size-5" />
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
