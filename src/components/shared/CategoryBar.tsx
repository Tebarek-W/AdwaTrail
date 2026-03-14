"use client"

import * as React from "react"
import { Hotel, Mountain } from "lucide-react"

import { cn } from "@/lib/utils"

export type DiscoveryCategory = "luxury" | "cultural"

type CategoryBarProps = {
  className?: string
  value?: DiscoveryCategory | null
  onChange?: (value: DiscoveryCategory) => void
}

export function CategoryBar({ className, value, onChange }: CategoryBarProps) {
  const [uncontrolled, setUncontrolled] = React.useState<DiscoveryCategory | null>(
    value ?? null
  )

  const current = value ?? uncontrolled

  function setCategory(next: DiscoveryCategory) {
    if (value === undefined) setUncontrolled(next)
    onChange?.(next)
  }

  const baseBtn =
    "flex-1 inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm transition-all duration-300 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98]"

  const selected =
    "bg-adwa-gold text-white shadow-md"

  const unselected =
    "text-foreground/60 hover:text-foreground hover:bg-adwa-warm"

  return (
    <div className={cn("w-full px-4 py-3", className)}>
      <div
        className={cn(
          "mx-auto inline-flex w-full max-w-md rounded-full p-1",
          "bg-adwa-surface border border-border",
          "shadow-sm"
        )}
        role="tablist"
        aria-label="Discovery categories"
      >
        <button
          type="button"
          role="tab"
          aria-selected={current === "luxury"}
          className={cn(baseBtn, current === "luxury" ? selected : unselected)}
          onClick={() => setCategory("luxury")}
        >
          <Hotel className="size-4" />
          <span>Luxury Stays</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={current === "cultural"}
          className={cn(baseBtn, current === "cultural" ? selected : unselected)}
          onClick={() => setCategory("cultural")}
        >
          <Mountain className="size-4" />
          <span>Cultural Expeditions</span>
        </button>
      </div>
    </div>
  )
}
