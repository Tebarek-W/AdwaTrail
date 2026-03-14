import { Reveal } from "@/src/components/shared/Reveal"
import { ListingCard } from "@/src/components/listings/ListingCard"
import { MOCK_LISTINGS } from "@/src/lib/mock-data"
import { Sparkles, SlidersHorizontal } from "lucide-react"
import { Footer } from "@/src/components/shared/Footer"

export default function StaysPage() {
  const stays = MOCK_LISTINGS.filter(l => l.type === "ENTIRE_HOME" || l.type === "PRIVATE_ROOM")

  return (
    <main className="min-h-screen bg-background">
      {/* ───── HEADER ───── */}
      <section className="bg-adwa-warm pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-adwa-gold/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-adwa-gold">
               <Sparkles className="size-3" /> Luxury Accommodations
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif">Exceptional Stays</h1>
            <p className="text-lg text-muted-foreground">
              From cliffside eco-lodges to historic mansions, discover the finest stays Ethiopia has to offer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── FILTER BAR ───── */}
      <div className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {["All Stays", "Eco-Lodges", "Boutique Hotels", "Private Villas", "Heritage Homes"].map((cat) => (
              <button key={cat} className="shrink-0 rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground/70 transition hover:border-adwa-gold/30 hover:text-adwa-gold">
                {cat}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-bold shadow-sm transition hover:bg-adwa-warm">
            <SlidersHorizontal className="size-4" /> Filters
          </button>
        </div>
      </div>

      {/* ───── LISTINGS ───── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <Reveal className="mb-10 text-sm font-medium text-muted-foreground">
           Showing <span className="text-foreground font-bold">{stays.length}</span> verified luxury stays
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stays.map((listing, idx) => (
            <Reveal key={listing.id} delayMs={idx * 100}>
              <ListingCard
                title={listing.title}
                priceEtb={listing.pricePerNight}
                rating={listing.rating}
                imageUrl={listing.mainImageUrl}
                href={`/listings/${listing.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
