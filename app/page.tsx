import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CategoryBar } from "@/src/components/shared/CategoryBar";
import { ListingCard } from "@/src/components/listings/ListingCard";
import { Reveal } from "@/src/components/shared/Reveal";
import { BentoItem } from "@/src/components/shared/BentoItem";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* IMMERSIVE HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
        <Image
          src="/images/adwa_trail_logo_1773405947024.png"
          alt="ADWA Trail Hero"
          fill
          priority
          className="object-cover opacity-40 blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-adwa-gold/30 bg-adwa-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-adwa-gold glow-gold">
              <Zap className="size-3" />
              The New Standard of Ethiopian Discovery
            </div>
            <h1 className="max-w-4xl font-serif text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Elevate Your <span className="text-gold-gradient italic">Journey</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium text-foreground/60 sm:text-xl">
              Immerse yourself in a curated marketplace of luxury stays and cultural expeditions across the heart of Ethiopia.
            </p>
          </Reveal>

          {/* FLOATING GLASS SEARCH */}
          <Reveal delayMs={200} className="mt-12 w-full max-w-5xl">
            <div className="glass-gold rounded-[2.5rem] p-3 shadow-2xl">
              <form action="/discover" className="grid grid-cols-1 gap-2 sm:grid-cols-[1.5fr_1fr_1fr_auto]">
                <div className="flex items-center gap-3 rounded-[1.5rem] bg-white/5 px-6 py-4 transition-colors hover:bg-white/10">
                  <MapPin className="size-5 text-adwa-gold" />
                  <div className="flex flex-col items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Destination</label>
                    <input name="location" placeholder="Where to?" className="bg-transparent font-medium text-white outline-none placeholder:text-foreground/30" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[1.5rem] bg-white/5 px-6 py-4 transition-colors hover:bg-white/10">
                  <Calendar className="size-5 text-adwa-gold" />
                  <div className="flex flex-col items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Travel Dates</label>
                    <input type="text" placeholder="Add dates" className="bg-transparent font-medium text-white outline-none placeholder:text-foreground/30" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[1.5rem] bg-white/5 px-6 py-4 transition-colors hover:bg-white/10">
                  <Users className="size-5 text-adwa-gold" />
                  <div className="flex flex-col items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Guests</label>
                    <input type="number" placeholder="2 Guests" className="w-20 bg-transparent font-medium text-white outline-none placeholder:text-foreground/30" />
                  </div>
                </div>
                <Button className="h-full rounded-[1.5rem] bg-gold-gradient px-10 text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Search className="mr-2 size-5" />
                  Find Magic
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCOVERY STRIP */}
      <section className="relative -mt-10 z-20 mx-auto max-w-6xl px-4">
        <Reveal delayMs={400} className="glass rounded-full px-2 py-2">
          <CategoryBar className="bg-transparent border-none p-0" />
        </Reveal>
      </section>

      {/* FEATURED SELECTION */}
      <section className="mx-auto max-w-7xl px-4 py-32">
        <div className="mb-16 flex flex-col items-center justify-center text-center space-y-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-adwa-gold">Curated Collection</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">The Adwa Signature</h2>
            <div className="mt-4 h-1 w-24 bg-gold-gradient rounded-full" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delayMs={100}>
            <ListingCard
              title="Gheralta Cliffs Eco-Lodge"
              priceEtb={14500}
              rating={4.9}
              imageUrl="/images/gheralta_luxury_stay_1773406024643.png"
              href="/listings/gheralta-luxury-stay"
              className="h-full"
            />
          </Reveal>
          <Reveal delayMs={250}>
            <ListingCard
              title="Lalibela Boutique Heritage"
              priceEtb={9800}
              rating={4.7}
              imageUrl="/images/lalibela_boutique_hotel_1773406077350.png"
              href="/listings/lalibela-boutique-hotel"
              className="h-full"
            />
          </Reveal>
          <Reveal delayMs={400}>
            <ListingCard
              title="Simien Mountains Gold Expedition"
              priceEtb={12100}
              rating={4.85}
              imageUrl="/images/simien_cultural_expedition_1773406095779.png"
              href="/listings/simien-cultural-expedition"
              className="h-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 text-center">
          <Link href="/discover">
            <Button variant="outline" className="rounded-full border-adwa-gold/30 px-8 py-6 text-adwa-gold hover:bg-adwa-gold hover:text-black transition-all">
              Explore All Collections <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* BENTO GRID SERVICES */}
      <section className="bg-adwa-surface/30 py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col items-center text-center space-y-4">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-adwa-gold">Excellence Defined</p>
              <h2 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">Our Ecosystem</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <BentoItem 
              title="Luxury Discovery" 
              description="Browse meticulously vetted properties that redefine the Ethiopian hospitality landscape."
              icon={<Globe className="size-6" />}
              className="md:col-span-3 h-[300px]"
            />
            <BentoItem 
              title="Trust Architecture" 
              description="Our proprietary verification system ensures every vendor meets the Adwa Gold standard."
              icon={<ShieldCheck className="size-6" />}
              className="md:col-span-3 h-[300px]"
            />
            <BentoItem 
              title="Vendor Portal" 
              description="A sophisticated cockpit for local businesses to manage premium listings."
              icon={<Zap className="size-6" />}
              className="md:col-span-2 h-[250px]"
            />
            <BentoItem 
              title="Modern Motion" 
              description="Experience a seamless UI that breathes with subtle animations."
              className="md:col-span-4 h-[250px]"
            >
              <div className="h-full w-full bg-gradient-to-r from-adwa-gold/20 to-transparent rounded-2xl border border-white/5" />
            </BentoItem>
          </div>
        </div>
      </section>

      {/* IMMERSIVE CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal className="glass-gold rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 rounded-full bg-adwa-gold/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-60 rounded-full bg-adwa-gold/5 blur-[80px]" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="font-serif text-4xl font-bold text-white sm:text-6xl">Ready to list <br/> your <span className="text-gold-gradient">Masterpiece?</span></h2>
              <p className="mx-auto max-w-xl text-lg text-foreground/60">
                Join our exclusive network of elite Ethiopian vendors and reach travelers seeking the extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="rounded-full bg-gold-gradient px-10 py-7 text-black font-bold text-lg hover:scale-105 transition-all">
                  Apply as Vendor
                </Button>
                <Button variant="outline" className="rounded-full border-white/10 px-10 py-7 text-white font-bold text-lg hover:bg-white/5">
                  Contact Concierge
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-serif text-2xl font-bold text-gold-gradient">ADWA TRAIL</h3>
            <p className="text-sm text-foreground/40">© {new Date().getFullYear()} Adwa Platinum Series. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-foreground/60">
            <Link href="/" className="hover:text-adwa-gold transition-colors">Home</Link>
            <Link href="/discover" className="hover:text-adwa-gold transition-colors">Stays</Link>
            <Link href="/expeditions" className="hover:text-adwa-gold transition-colors">Expeditions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
