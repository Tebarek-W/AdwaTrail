import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export type ListingCardProps = {
  className?: string
  href?: string
  title: string
  priceEtb: number
  rating: number
  imageUrl: string
}

export function ListingCard({
  className,
  href,
  title,
  priceEtb,
  rating,
  imageUrl,
}: ListingCardProps) {
  const isPremium = rating >= 4.8
  const price = new Intl.NumberFormat("en-US").format(priceEtb)

  const content = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />

        {isPremium ? (
          <div
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1",
              "bg-[var(--color-adwa-gold)] text-black",
              "text-xs font-semibold uppercase tracking-wide",
              "shadow-[0_0_15px_rgba(212,175,55,0.3)]",
              "animate-in fade-in zoom-in-95 duration-300"
            )}
          >
            Premium
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-start justify-between gap-3">
          <p className="min-w-0 font-serif text-sm font-semibold text-foreground sm:text-base">
            <span className="line-clamp-2">{title}</span>
          </p>
          <p className="shrink-0 text-xs text-foreground/70">
            {rating.toFixed(1)}
          </p>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <p className="text-sm font-semibold text-adwa-gold">
            ETB {price}
          </p>
          <p className="text-xs text-foreground/60">per night</p>
        </div>
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group block overflow-hidden rounded-2xl border border-border bg-[var(--color-adwa-surface)]",
          "shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]",
          "hover:border-[color:var(--color-adwa-gold-soft)]",
          className
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      className={cn(
        "group block overflow-hidden rounded-2xl border border-border bg-[var(--color-adwa-surface)]",
        "shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]",
        "hover:border-[color:var(--color-adwa-gold-soft)]",
        className
      )}
    >
      {content}
    </div>
  )
}
