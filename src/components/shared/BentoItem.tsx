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
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6",
        "bg-adwa-surface border border-border shadow-2xl transition-all duration-500",
        "hover:border-adwa-gold/30 hover:shadow-adwa-gold/5",
        className
      )}
    >
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-adwa-gold/10 text-adwa-gold group-hover:bg-adwa-gold group-hover:text-black transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-foreground/70">
            {description}
          </p>
        )}
      </div>
      
      {children && <div className="relative z-10 mt-4">{children}</div>}

      <div className="absolute inset-0 bg-gradient-to-br from-adwa-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Reveal>
  )
}
