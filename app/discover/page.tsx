import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { DiscoveryCategory } from "@/src/components/shared/CategoryBar"
import { CategoryBarClient } from "./CategoryBarClient"
import { ListingCard } from "@/src/components/listings/ListingCard"
import { Reveal } from "@/src/components/shared/Reveal"
import { MOCK_LISTINGS } from "@/src/lib/mock-data"

type PageProps = {
  searchParams?: Promise<{ category?: string }>
}

function normalizeCategory(raw: string | undefined): DiscoveryCategory {
  return raw === "cultural" ? "cultural" : "luxury"
}

export default async function DiscoverPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {}
  const category = normalizeCategory(sp.category)

  // Filter based on "mock" categories for now
  const filteredListings = MOCK_LISTINGS.filter(l => {
      if (category === "luxury") return l.pricePerNight > 10000
      return l.pricePerNight <= 10000
  })

  return (
    <main className="min-h-screen bg-background pb-20">
      <section className="bg-adwa-warm pt-20 pb-16">
          <div className="mx-auto w-full max-w-7xl px-4">
              <Reveal className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                <p className="text-xs font-bold tracking-[0.3em] text-adwa-gold uppercase">
                    Discovery
                </p>
                <h1 className="text-4xl sm:text-6xl font-serif">
                    {category === "luxury" ? "Luxury Stays" : "Cultural Expeditions"}
                </h1>
                <p className="text-lg text-muted-foreground">
                    Meticulously vetted properties offering the highest standards of Ethiopian hospitality.
                </p>
              </Reveal>
          </div>
      </section>

      <div className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-border/50">
          <div className="mx-auto w-full max-w-7xl px-4">
            <CategoryBarClient value={category} />
          </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <Reveal
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm font-medium text-muted-foreground">
            Showing <span className="text-foreground font-bold">{filteredListings.length}</span> luxury curations
          </p>
          <div className="flex gap-4">
              <Button variant="outline" className="rounded-full px-6">Any Price</Button>
              <Button variant="outline" className="rounded-full px-6">Any Date</Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((l, idx) => (
            <Reveal key={l.id} delayMs={idx * 100}>
              <ListingCard
                title={l.title}
                priceEtb={l.pricePerNight}
                rating={l.rating}
                imageUrl={l.mainImageUrl}
                href={`/listings/${l.slug}`}
              />
            </Reveal>
          ))}
        </div>

        {filteredListings.length === 0 && (
            <div className="py-20 text-center space-y-4">
                <p className="text-lg font-bold">No results found for this category.</p>
                <Link href="/discover" className="text-adwa-gold underline font-bold">Reset filters</Link>
            </div>
        )}
      </section>
    </main>
  )
}
