"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type BentoItemProps = {
  className?: string
  title: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  delayMs?: number
}

export function BentoItem({
  className,
  title,
  description,
  icon,
  children,
  delayMs = 0,
}: BentoItemProps) {
  return (
    <Reveal
      delayMs={delayMs}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8",
        "bg-white border border-border shadow-sm transition-all duration-500",
        "hover:border-adwa-gold/30 hover:shadow-lg hover:shadow-adwa-gold/5",
        className
      )}
    >
      <div className="relative z-10">
        {icon && (
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-adwa-warm text-adwa-gold transition-colors duration-300 group-hover:bg-adwa-gold group-hover:text-white">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children && <div className="relative z-10 mt-4">{children}</div>}

      <div className="absolute inset-0 bg-gradient-to-br from-adwa-gold/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Reveal>
  )
}
