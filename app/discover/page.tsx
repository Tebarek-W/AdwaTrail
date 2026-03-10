import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { DiscoveryCategory } from "@/src/components/shared/CategoryBar"
import { CategoryBarClient } from "./CategoryBarClient"
import { ListingCard } from "@/src/components/listings/ListingCard"
import { Reveal } from "@/src/components/shared/Reveal"

type PageProps = {
  searchParams?: Promise<{ category?: string }>
}

function normalizeCategory(raw: string | undefined): DiscoveryCategory {
  return raw === "cultural" ? "cultural" : "luxury"
}

export default async function DiscoverPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {}
  const category = normalizeCategory(sp.category)

  const listings =
    category === "luxury"
      ? [
          {
            slug: "gheralta-luxury-stay",
            title: "Gheralta, Ethiopia",
            priceEtb: 14500,
            rating: 4.9,
            imageUrl: "/window.svg",
          },
          {
            slug: "addis-luxury-suite",
            title: "Addis Ababa, Ethiopia",
            priceEtb: 17800,
            rating: 4.8,
            imageUrl: "/vercel.svg",
          },
          {
            slug: "bahir-dar-resort",
            title: "Bahir Dar, Ethiopia",
            priceEtb: 11200,
            rating: 4.6,
            imageUrl: "/file.svg",
          },
        ]
      : [
          {
            slug: "simien-cultural-expedition",
            title: "Simien Mountains, Ethiopia",
            priceEtb: 12100,
            rating: 4.85,
            imageUrl: "/vercel.svg",
          },
          {
            slug: "harar-heritage-walk",
            title: "Harar, Ethiopia",
            priceEtb: 6900,
            rating: 4.7,
            imageUrl: "/window.svg",
          },
          {
            slug: "axum-ancient-trail",
            title: "Axum, Ethiopia",
            priceEtb: 8600,
            rating: 4.9,
            imageUrl: "/file.svg",
          },
        ]

  return (
    <main className="min-h-[calc(100vh-56px)] bg-background">
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-4">
        <Reveal className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
            DISCOVERY
          </p>
          <h1 className="text-2xl sm:text-4xl">
            {category === "luxury" ? "Luxury Stays" : "Cultural Expeditions"}
          </h1>
          <p className="max-w-2xl text-sm text-foreground/75">
            Browse curated vendors with premium presentation. Switch categories
            to instantly explore a different side of Ethiopia.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4">
        <Reveal delayMs={80}>
          <CategoryBarClient value={category} />
        </Reveal>
        <Reveal
          delayMs={140}
          className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-foreground/70">
            Showing <span className="text-foreground">{listings.length}</span>{" "}
            results
          </p>
          <Button asChild className="rounded-full px-5">
            <Link href="/list-your-property">Become a vendor</Link>
          </Button>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-6 pb-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, idx) => (
            <Reveal key={l.slug} delayMs={idx * 70}>
              <ListingCard
                title={l.title}
                priceEtb={l.priceEtb}
                rating={l.rating}
                imageUrl={l.imageUrl}
                href={`/listings/${l.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}

