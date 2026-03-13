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
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        {isPremium && (
          <div className="absolute left-4 top-4 glass-gold rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-adwa-gold glow-gold">
            Pinnacle Series
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-adwa-gold">
              Ethiopia
            </p>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white">{rating.toFixed(1)}</span>
              <span className="text-[10px] text-foreground/40">★</span>
            </div>
          </div>
          <h3 className="font-serif text-xl font-bold leading-snug text-white group-hover:text-adwa-gold transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-foreground/40">From</span>
            <span className="text-lg font-bold text-adwa-gold">ETB {price}</span>
          </div>
          <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-adwa-gold group-hover:bg-adwa-gold group-hover:text-black transition-all duration-300">
            <span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </div>
  )

  const containerClasses = cn(
    "group block overflow-hidden rounded-[2rem] border border-white/5 bg-adwa-surface h-full",
    "shadow-2xl transition-all duration-500 hover:border-adwa-gold/30 hover:shadow-adwa-gold/5",
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
