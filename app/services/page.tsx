import { Reveal } from "@/src/components/shared/Reveal"
import { BentoItem } from "@/src/components/shared/BentoItem"
import { MapPin, Zap, ShieldCheck, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/src/components/shared/Footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ───── HEADER ───── */}
      <section className="bg-adwa-warm pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-adwa-gold/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-adwa-gold">
               <Zap className="size-3" /> Concierge & Logistics
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif">Travel Services</h1>
            <p className="text-lg text-muted-foreground">
              Professional travel logistics, private transport, and local concierge services to make your Ethiopian journey effortless.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── SERVICES GRID ───── */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <BentoItem
            title="Private Logistics"
            description="Luxury 4x4 transport with professional drivers for city transfers and cross-country journeys."
            icon={<MapPin className="size-6" />}
            className="md:col-span-4 min-h-[300px]"
            delayMs={100}
          />
          <BentoItem
            title="24/7 Concierge"
            description="Expert assistance for restaurant bookings, local advice, and translation."
            icon={<Phone className="size-6" />}
            className="md:col-span-2 min-h-[300px]"
            delayMs={200}
          />
          <BentoItem
            title="Certified Guides"
            description="Linguistic and historical experts for specialized tours in Lalibela, Axum, and Harar."
            icon={<Star className="size-6" />}
            className="md:col-span-2 min-h-[250px]"
            delayMs={300}
          />
          <BentoItem
            title="Premium Gear Rental"
            description="High-altitude trekking equipment and camping gear vetted for the most demanding Simien expeditions."
            icon={<ShieldCheck className="size-6" />}
            className="md:col-span-4 min-h-[250px]"
            delayMs={400}
          />
        </div>
      </section>

      {/* ───── CONTACT / CTA ───── */}
      <section className="mx-auto max-w-5xl px-4 pb-28">
           <Reveal className="bg-adwa-gold rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 rounded-full bg-white/10 blur-[100px]" />
                <h2 className="text-3xl sm:text-5xl font-serif mb-6">Need a custom itinerary?</h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Our local travel experts are ready to build the perfect Ethiopian adventure tailored to your specific needs.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white text-adwa-gold rounded-xl px-10 py-7 font-bold text-lg hover:bg-adwa-warm shadow-xl">Contact Experts</Button>
                    <Button variant="outline" className="border-white text-white rounded-xl px-10 py-7 font-bold text-lg hover:bg-white/10 transition-colors">View Pricing</Button>
                </div>
           </Reveal>
      </section>
      <Footer />
    </main>
  )
}
