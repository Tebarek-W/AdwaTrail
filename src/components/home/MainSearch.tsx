"use client"

import { useState, useRef, useEffect } from "react"
import { Search, MapPin, Calendar, Users, Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ETHIOPIAN_CITIES = [
  "Addis Ababa",
  "Lalibela",
  "Gondar",
  "Bahir Dar",
  "Hawassa",
  "Axum",
  "Harar",
  "Mekele",
  "Dire Dawa",
  "Jimma",
  "Arba Minch",
  "Bishoftu",
  "Semera",
  "Jijiga",
  "Gambela"
]

export function MainSearch() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  
  // WHERE
  const [location, setLocation] = useState("")
  const [showLocationResults, setShowLocationResults] = useState(false)
  const locationRef = useRef<HTMLDivElement>(null)

  // WHEN
  const [startDate, setStartDate] = useState("")
  
  // WHO (Guests)
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0
  })
  const guestsRef = useRef<HTMLDivElement>(null)

  const filteredCities = location 
    ? ETHIOPIAN_CITIES.filter(city => city.toLowerCase().startsWith(location.toLowerCase()))
    : ETHIOPIAN_CITIES

  const totalGuests = guests.adults + guests.children

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationResults(false)
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setActiveTab(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="glass-gold relative rounded-2xl p-2 shadow-2xl shadow-adwa-gold/10">
        <form action="/discover" className="grid grid-cols-1 gap-1 sm:grid-cols-[1.5fr_1fr_1fr_auto]">
          
          {/* WHERE */}
          <div 
            ref={locationRef}
            className={cn(
              "relative flex flex-1 items-center gap-3 rounded-xl px-5 py-4 transition-all group cursor-pointer",
              showLocationResults ? "bg-white shadow-md ring-1 ring-adwa-gold/20" : "bg-white/50 hover:bg-white"
            )}
            onClick={() => {
              setShowLocationResults(true)
              setActiveTab("where")
            }}
          >
            <MapPin className="size-5 text-adwa-gold shrink-0" />
            <div className="flex flex-col items-start w-full">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-adwa-gold transition-colors">Where</label>
              <input 
                name="location" 
                autoComplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setShowLocationResults(true)}
                placeholder="Search by city or landmark" 
                className="w-full bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted-foreground/60" 
              />
            </div>

            <AnimatePresence>
              {showLocationResults && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-[calc(100%+8px)] z-50 w-full rounded-2xl border border-border bg-white p-4 shadow-xl"
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Nearby Destinations</p>
                  <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setLocation(city)
                            setShowLocationResults(false)
                          }}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-adwa-warm group/item"
                        >
                          <div className="flex size-10 items-center justify-center rounded-lg bg-adwa-warm group-hover/item:bg-white transition-colors">
                            <MapPin className="size-4 text-adwa-gold" />
                          </div>
                          <span className="text-sm font-medium">{city}</span>
                        </button>
                      ))
                    ) : (
                      <p className="py-4 text-center text-sm text-muted-foreground italic">No cities found matching &quot;{location}&quot;</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WHEN */}
          <div className="relative flex items-center gap-3 rounded-xl bg-white/50 px-5 py-4 transition-all hover:bg-white hover:shadow-sm group cursor-pointer">
            <Calendar className="size-5 text-adwa-gold shrink-0" />
            <div className="flex flex-col items-start w-full">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-adwa-gold transition-colors">When</label>
              <input 
                type="date"
                name="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-foreground outline-none cursor-pointer [color-scheme:light]" 
              />
            </div>
          </div>

          {/* WHO */}
          <div 
            ref={guestsRef}
            className={cn(
              "relative flex items-center gap-3 rounded-xl px-5 py-4 transition-all group cursor-pointer",
              activeTab === "who" ? "bg-white shadow-md ring-1 ring-adwa-gold/20" : "bg-white/50 hover:bg-white"
            )}
            onClick={() => setActiveTab(activeTab === "who" ? null : "who")}
          >
            <Users className="size-5 text-adwa-gold shrink-0" />
            <div className="flex flex-col items-start min-w-[100px]">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-adwa-gold transition-colors">Who</label>
              <p className="text-sm font-semibold text-foreground truncate">
                {totalGuests > 0 ? `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}` : "Add guests"}
                {guests.infants > 0 && `, ${guests.infants} infant${guests.infants !== 1 ? 's' : ''}`}
              </p>
            </div>

            <AnimatePresence>
              {activeTab === "who" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-[calc(100%+8px)] z-50 w-[280px] rounded-2xl border border-border bg-white p-6 shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-6">
                    <GuestTypeRow 
                      label="Adults" 
                      sub="Ages 13 or above" 
                      value={guests.adults} 
                      onChange={(val) => setGuests({...guests, adults: val})} 
                      min={1}
                    />
                    <GuestTypeRow 
                      label="Children" 
                      sub="Ages 2 – 12" 
                      value={guests.children} 
                      onChange={(val) => setGuests({...guests, children: val})} 
                    />
                    <GuestTypeRow 
                      label="Infants" 
                      sub="Under 2" 
                      value={guests.infants} 
                      onChange={(val) => setGuests({...guests, infants: val})} 
                    />
                    <div className="pt-2 border-t border-border">
                        <button 
                            type="button"
                            onClick={() => setActiveTab(null)}
                            className="w-full rounded-xl bg-adwa-warm py-2 text-xs font-bold text-foreground transition hover:bg-adwa-surface-hover"
                        >
                            Done
                        </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SEARCH BUTTON */}
          <Button type="submit" className="h-full rounded-xl bg-adwa-gold px-10 text-white font-bold hover:bg-adwa-gold-hover transition-all shadow-lg hover:scale-[1.02] active:scale-95 group">
            <Search className="mr-2 size-5 transition-transform group-hover:scale-110" />
            Search
          </Button>

        </form>
      </div>
    </div>
  )
}

function GuestTypeRow({ 
  label, 
  sub, 
  value, 
  onChange, 
  min = 0, 
  max = 10 
}: { 
  label: string, 
  sub: string, 
  value: number, 
  onChange: (v: number) => void,
  min?: number,
  max?: number
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-bold text-foreground">{label}</span>
        <span className="text-[11px] text-muted-foreground">{sub}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition hover:border-adwa-gold hover:text-adwa-gold disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
        >
          <Minus className="size-3" />
        </button>
        <span className="w-4 text-center text-sm font-bold">{value}</span>
        <button
          type="button"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition hover:border-adwa-gold hover:text-adwa-gold disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
        >
          <Plus className="size-3" />
        </button>
      </div>
    </div>
  )
}
