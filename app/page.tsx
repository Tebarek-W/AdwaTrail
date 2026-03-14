import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CategoryBar } from "@/src/components/shared/CategoryBar";
import { ListingCard } from "@/src/components/listings/ListingCard";
import { Reveal } from "@/src/components/shared/Reveal";
import { BentoItem } from "@/src/components/shared/BentoItem";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden bg-adwa-warm">
        {/* decorative blobs */}
        <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-adwa-gold/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-adwa-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 pb-28 text-center sm:pt-28 sm:pb-36">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-adwa-gold/20 bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-adwa-gold shadow-sm">
              <Sparkles className="size-3.5" />
              Explore the Spirit of Africa
            </div>

            <h1 className="max-w-4xl font-serif leading-[1.08]">
              Discover Ethiopia's
              <br />
              <span className="text-gold-gradient">finest experiences</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A curated marketplace connecting you with luxury stays, cultural expeditions, and unforgettable moments across Ethiopia.
            </p>
          </Reveal>

          {/* SEARCH BAR */}
          <Reveal delayMs={200} className="mt-14 w-full max-w-4xl">
            <div className="glass-gold rounded-2xl p-3 shadow-2xl shadow-adwa-gold/5">
              <form action="/discover" className="grid grid-cols-1 gap-2 sm:grid-cols-[1.5fr_1fr_1fr_auto]">
                <div className="flex items-center gap-3 rounded-xl bg-white/50 px-5 py-4 transition-all hover:bg-white hover:shadow-sm group">
                  <MapPin className="size-5 text-adwa-gold" />
                  <div className="flex flex-col items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-adwa-gold transition-colors">Where</label>
                    <input name="location" placeholder="Search by city or landmark" className="w-full bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted-foreground/60" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/50 px-5 py-4 transition-all hover:bg-white hover:shadow-sm group">
                  <Calendar className="size-5 text-adwa-gold" />
                  <div className="flex flex-col items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-adwa-gold transition-colors">When</label>
                    <input type="text" placeholder="Add dates" className="w-full bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted-foreground/60" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/50 px-5 py-4 transition-all hover:bg-white hover:shadow-sm group">
                  <Users className="size-5 text-adwa-gold" />
                  <div className="flex flex-col items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-adwa-gold transition-colors">Who</label>
                    <input type="text" placeholder="Add guests" className="w-full bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted-foreground/60" />
                  </div>
                </div>
                <Button className="h-full rounded-xl bg-adwa-gold px-10 text-white font-bold hover:bg-adwa-gold-hover transition-all shadow-lg hover:scale-[1.02] active:scale-95 group">
                  <Search className="mr-2 size-5 transition-transform group-hover:scale-110" />
                  Search
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delayMs={350} className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Addis Ababa", "Lalibela", "Simien Mountains", "Harar"].map((place) => (
                <Link
                  key={place}
                  href={`/discover?q=${place}`}
                  className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-foreground/80 shadow-sm transition hover:border-adwa-gold/30 hover:text-adwa-gold"
                >
                  {place}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── CATEGORY BAR ───── */}
      <section className="relative -mt-8 z-20 mx-auto max-w-4xl px-4">
        <Reveal delayMs={400}>
          <div className="glass rounded-full px-2 py-2">
            <CategoryBar className="bg-transparent border-none p-0" />
          </div>
        </Reveal>
      </section>

      {/* ───── FEATURED ───── */}
      <section className="mx-auto max-w-7xl px-4 py-28">
        <div className="mb-14 flex flex-col items-center text-center space-y-3">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-adwa-gold">Curated for You</p>
            <h2 className="mt-2">Featured Stays & Experiences</h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gold-gradient rounded-full" />
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
          <Reveal delayMs={200}>
            <ListingCard
              title="Lalibela Boutique Heritage"
              priceEtb={9800}
              rating={4.7}
              imageUrl="/images/lalibela_boutique_hotel_1773406077350.png"
              href="/listings/lalibela-boutique-hotel"
              className="h-full"
            />
          </Reveal>
          <Reveal delayMs={300}>
            <ListingCard
              title="Simien Mountains Expedition"
              priceEtb={12100}
              rating={4.85}
              imageUrl="/images/simien_cultural_expedition_1773406095779.png"
              href="/listings/simien-cultural-expedition"
              className="h-full"
            />
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <Link href="/discover">
            <Button variant="outline" className="rounded-full border-adwa-gold/30 px-8 py-6 text-adwa-gold font-semibold hover:bg-adwa-gold hover:text-white transition-all shadow-sm">
              View All Listings <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ───── SERVICES / BENTO ───── */}
      <section id="services" className="bg-adwa-warm py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 flex flex-col items-center text-center space-y-3">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-adwa-gold">What We Offer</p>
              <h2 className="mt-2">Built for Travelers & Vendors</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <BentoItem
              title="Luxury Discovery"
              description="Browse meticulously vetted properties that redefine the Ethiopian hospitality landscape."
              icon={<Globe className="size-6" />}
              className="md:col-span-3 min-h-[280px]"
              delayMs={100}
            />
            <BentoItem
              title="Trust & Safety"
              description="Our verification system ensures every vendor meets the highest quality standards."
              icon={<ShieldCheck className="size-6" />}
              className="md:col-span-3 min-h-[280px]"
              delayMs={200}
            />
            <BentoItem
              title="Vendor Portal"
              description="A powerful dashboard for local businesses to manage premium listings effortlessly."
              icon={<Zap className="size-6" />}
              className="md:col-span-2 min-h-[240px]"
              delayMs={300}
            />
            <BentoItem
              title="Seamless Experience"
              description="From discovery to booking, every interaction feels smooth and intuitive — designed with modern Ethiopian hospitality in mind."
              icon={<Sparkles className="size-6" />}
              className="md:col-span-4 min-h-[240px]"
              delayMs={400}
            />
          </div>
        </div>
      </section>

      {/* ───── ABOUT ───── */}
      <section id="about" className="py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-adwa-gold">About ADWA Trail</p>
              <h2>A premium gateway to Ethiopia</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                ADWA Trail connects global travelers with exceptional Ethiopian stays and cultural expeditions from trusted local vendors. We obsess over presentation, trust, and effortless browsing — so your next trip feels confident from the first click.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-adwa-gold">150+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Curated Stays</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-adwa-gold">50+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Expeditions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-adwa-gold">4.8</p>
                  <p className="mt-1 text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/gheralta_luxury_stay_1773406024643.png"
                  alt="Ethiopian landscape"
                  width={800}
                  height={600}
                  className="h-[400px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section id="contact" className="py-28">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal className="rounded-3xl bg-adwa-warm border border-border p-12 sm:p-20 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 rounded-full bg-adwa-gold/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-60 rounded-full bg-adwa-gold/3 blur-[80px]" />

            <div className="relative z-10 space-y-8">
              <h2 className="font-serif">
                Ready to list your <br/><span className="text-gold-gradient">property?</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                Join our exclusive network of Ethiopian vendors and reach travelers seeking the extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="rounded-full bg-adwa-gold px-10 py-7 text-white font-semibold text-base hover:bg-adwa-gold-hover shadow-md hover:shadow-lg transition-all">
                  Get Started
                </Button>
                <Button variant="outline" className="rounded-full border-border px-10 py-7 font-semibold text-base hover:bg-adwa-surface transition-all">
                  Learn More
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-border bg-adwa-surface py-12">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/images/adwa-logo-light.png"
              alt="ADWA Trail"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ADWA Trail. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-adwa-gold transition-colors">Home</Link>
            <Link href="/discover" className="hover:text-adwa-gold transition-colors">Discover</Link>
            <Link href="/#services" className="hover:text-adwa-gold transition-colors">Services</Link>
            <Link href="/#contact" className="hover:text-adwa-gold transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
