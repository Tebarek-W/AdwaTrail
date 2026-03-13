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
    <div className="flex flex-col h-full">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {isPremium && (
          <div className="absolute left-4 top-4 rounded-full bg-adwa-gold px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
            Premium
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-adwa-gold">
              Ethiopia
            </p>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-foreground">{rating.toFixed(1)}</span>
              <span className="text-xs text-adwa-gold">★</span>
            </div>
          </div>
          <h3 className="font-serif text-lg font-bold leading-snug text-foreground group-hover:text-adwa-gold transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">From</span>
            <span className="text-lg font-bold text-adwa-gold">ETB {price}</span>
          </div>
          <div className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-adwa-gold group-hover:bg-adwa-gold group-hover:text-white transition-all duration-300">
            <span className="text-sm">→</span>
          </div>
        </div>
      </div>
    </div>
  )

  const containerClasses = cn(
    "group block overflow-hidden rounded-2xl border border-border bg-white h-full",
    "shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-adwa-gold/5 hover:border-adwa-gold/20",
    className
  )

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    )
  }

  return <div className={containerClasses}>{content}</div>
}
