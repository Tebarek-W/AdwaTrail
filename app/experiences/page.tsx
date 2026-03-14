import { Reveal } from "@/src/components/shared/Reveal"
import { ListingCard } from "@/src/components/listings/ListingCard"
import { MOCK_LISTINGS } from "@/src/lib/mock-data"
import { Compass, Globe, Footprints } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/src/components/shared/Footer"

export default function ExperiencesPage() {
  const experiences = MOCK_LISTINGS.filter(l => l.type === "EXPERIENCE")

  return (
    <main className="min-h-screen bg-background">
      {/* ───── HEADER ───── */}
      <section className="bg-adwa-warm pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-adwa-gold/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-adwa-gold">
               <Compass className="size-3" /> Unforgettable Journeys
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif">Cultural Expeditions</h1>
            <p className="text-lg text-muted-foreground">
              Deeply immersive experiences that connect you with the soul of Ethiopia &mdash; from Simien treks to Harar&apos;s ancient walls.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── FEATURED EXPERIENCE IMAGE ───── */}
      <section className="mx-auto max-w-7xl px-4 -mt-10">
          <Reveal delayMs={200} className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/simien_cultural_expedition_1773406095779.png" fill className="object-cover" alt="Simien Expedition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 sm:p-12">
                   <h2 className="text-white text-3xl font-serif max-w-lg">The Simien Safari: Trekking the Roof of Africa</h2>
                   <p className="text-white/80 mt-2 max-w-md">Join expert guides on a 5-day journey through Ethiopia&apos;s highest peaks.</p>
              </div>
          </Reveal>
      </section>

      {/* ───── LISTINGS ───── */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Recommended Expeditions</h3>
            <div className="flex gap-2">
                 <button className="flex items-center gap-2 rounded-xl bg-adwa-gold px-6 py-2.5 text-xs font-bold text-white shadow-md">All Experiences</button>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((listing, idx) => (
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

      {/* ───── VALUE PROPS ───── */}
      <section className="bg-adwa-surface py-20 border-t border-border/50">
           <div className="mx-auto max-w-7xl px-4 grid gap-12 sm:grid-cols-3">
                {[
                    { icon: <Globe />, title: "Trusted Guides", desc: "Every experience is led by certified, local experts with deep regional knowledge." },
                    { icon: <Footprints />, title: "Small Groups", desc: "We prioritize intimacy and impact with capped group sizes for all expeditions." },
                    { icon: <Compass />, title: "Sustainable Impact", desc: "Our tours directly support local conservation and community projects." }
                ].map((item, i) => (
                    <Reveal key={i} delayMs={i * 100} className="flex flex-col items-center text-center space-y-4">
                        <div className="size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-adwa-gold border border-border/50">
                            {item.icon}
                        </div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </Reveal>
                ))}
           </div>
      </section>
      <Footer />
    </main>
  )
}
