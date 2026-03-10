"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
  className?: string
  children: React.ReactNode
  delayMs?: number
}

export function Reveal({ className, children, delayMs = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
            break
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:transform-none motion-reduce:opacity-100",
        shown
          ? "animate-in fade-in slide-in-from-bottom-3 duration-700"
          : "opacity-0 translate-y-2",
        className
      )}
      style={{ animationDelay: shown ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  )
}

