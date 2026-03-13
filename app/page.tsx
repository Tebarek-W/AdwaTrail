import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CategoryBar } from "@/src/components/shared/CategoryBar";
import { ListingCard } from "@/src/components/listings/ListingCard";
import { Reveal } from "@/src/components/shared/Reveal";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-56px)] bg-background">
      <section className="relative overflow-hidden">
        <Image
          src="/brand/adwa-trail-logo.png"
          alt="ADWA Trail background"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-10 object-contain opacity-60"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pt-10 pb-10 sm:pt-14">
          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-col gap-3">
              <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
                ADWATrial · Premium Ethiopian Marketplace
              </p>
              <h1 className="text-3xl leading-tight sm:text-5xl">
                Discover luxury stays and cultural expeditions across Ethiopia.
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-foreground/75 sm:text-base">
                A multi-vendor discovery engine designed for premium hospitality
                and unforgettable experiences—curated with black &amp; gold
                elegance.
              </p>
            </Reveal>

            <Reveal
              delayMs={120}
              className="space-y-4"
            >
              <form
                action="/discover"
                className="grid gap-2 rounded-full border border-border bg-background/85 p-2 text-sm sm:grid-cols-[2fr_2fr_2fr_auto]"
              >
                <div className="flex flex-col rounded-full px-3 py-1.5">
                  <label className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/60">
                    Location
                  </label>
                  <input
                    name="location"
                    placeholder="Where are you going?"
                    className="bg-transparent text-foreground outline-none placeholder:text-foreground/50"
                  />
                </div>
                <div className="flex flex-col rounded-full px-3 py-1.5 sm:border-l sm:border-border/70">
                  <label className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/60">
                    Check-in
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    className="bg-transparent text-foreground outline-none [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col rounded-full px-3 py-1.5 sm:border-l sm:border-border/70">
                  <label className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/60">
                    Check-out & guests
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      name="checkOut"
                      className="bg-transparent text-foreground outline-none [color-scheme:dark]"
                    />
                    <input
                      type="number"
                      min={1}
                      name="guests"
                      placeholder="Guests"
                      className="w-20 bg-transparent text-foreground outline-none placeholder:text-foreground/50"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <Button
                    type="submit"
                    className="h-11 rounded-full px-6 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    Search
                  </Button>
                </div>
              </form>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span className="text-foreground/60">Explore by category:</span>
                <Link
                  href="/discover?type=ENTIRE_HOME"
                  className="rounded-full border border-border px-3 py-1 text-foreground/80 hover:border-[color:var(--color-adwa-gold)] hover:text-foreground"
                >
                  Entire Homes
                </Link>
                <Link
                  href="/discover?type=PRIVATE_ROOM"
                  className="rounded-full border border-border px-3 py-1 text-foreground/80 hover:border-[color:var(--color-adwa-gold)] hover:text-foreground"
                >
                  Private Rooms
                </Link>
                <Link
                  href="/discover?type=EXPERIENCE"
                  className="rounded-full border border-border px-3 py-1 text-foreground/80 hover:border-[color:var(--color-adwa-gold)] hover:text-foreground"
                >
                  Experiences
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4">
        <Reveal delayMs={50}>
          <CategoryBar />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-2 pb-12">
        <Reveal className="flex items-end justify-between gap-4 py-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl">Featured picks</h2>
            <p className="text-sm text-foreground/70">
              Hand-selected premium stays and experiences.
            </p>
          </div>
          <Link
            href="/discover"
            className="text-sm font-medium text-adwa-gold hover:underline"
          >
            View all
          </Link>
        </Reveal>

        <div className="-mx-4 mt-2 overflow-x-auto pb-4">
          <div className="flex gap-5 px-4">
            <Reveal delayMs={0} className="min-w-[260px] max-w-xs flex-1">
              <ListingCard
                title="Gheralta, Ethiopia"
                priceEtb={14500}
                rating={4.9}
                imageUrl="/window.svg"
                href="/listings/gheralta-luxury-stay"
              />
            </Reveal>
            <Reveal delayMs={80} className="min-w-[260px] max-w-xs flex-1">
              <ListingCard
                title="Lalibela, Ethiopia"
                priceEtb={9800}
                rating={4.7}
                imageUrl="/file.svg"
                href="/listings/lalibela-boutique-hotel"
              />
            </Reveal>
            <Reveal delayMs={160} className="min-w-[260px] max-w-xs flex-1">
              <ListingCard
                title="Simien Mountains, Ethiopia"
                priceEtb={12100}
                rating={4.85}
                imageUrl="/vercel.svg"
                href="/listings/simien-cultural-expedition"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative mx-auto w-full max-w-6xl px-4 py-14"
      >
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
              ABOUT US
            </p>
            <h2 className="text-2xl sm:text-3xl">
              A premium gateway to Ethiopia—crafted for discovery.
            </h2>
            <p className="max-w-prose text-sm leading-6 text-foreground/75 sm:text-base">
              ADWA Trail helps travelers find exceptional stays and unforgettable
              cultural expeditions from trusted local vendors. We obsess over
              presentation, trust, and effortless browsing—so your next trip
              feels confident from the first click.
            </p>
          </Reveal>

          <Reveal delayMs={120} className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] text-foreground/70">
                  CURATION
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Premium-first marketplace experience
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] text-foreground/70">
                  TRUST
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Vendor profiles and quality signals
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] text-foreground/70">
                  EASE
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Fast browsing, shareable categories
                </p>
              </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-4 py-14">
        <Reveal className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
            SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl">Designed for travelers and vendors.</h2>
          <p className="max-w-2xl text-sm text-foreground/75 sm:text-base">
            Modern discovery, premium presentation, and vendor onboarding that
            feels effortless.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Luxury stays discovery",
              desc: "Premium hotel and resort browsing with high-signal cards.",
            },
            {
              title: "Cultural expedition marketplace",
              desc: "Explore guided journeys with curated, vendor-led experiences.",
            },
            {
              title: "Vendor onboarding",
              desc: "A clean flow to list properties and experiences with confidence.",
            },
            {
              title: "Quality signals",
              desc: "Premium badges, ratings, and presentation that builds trust.",
            },
            {
              title: "Shareable discovery",
              desc: "URL-based categories that work with back/forward and sharing.",
            },
            {
              title: "Modern UI + motion",
              desc: "Subtle transitions and reveals for a high-end feel.",
            },
          ].map((s, idx) => (
            <Reveal
              key={s.title}
              delayMs={idx * 70}
              className="space-y-2"
            >
              <h3 className="text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/75">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto w-full max-w-6xl px-4 py-14"
      >
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
              EXPERIENCE
            </p>
            <h2 className="text-2xl sm:text-3xl">
              A discovery experience that feels premium.
            </h2>
            <p className="max-w-prose text-sm leading-6 text-foreground/75 sm:text-base">
              From sticky navigation to elegant category toggles, every detail is
              tuned for a luxury black &amp; gold brand—built on Radix/shadcn
              patterns for clean accessibility and modern interaction.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { k: "Fast discovery", v: "Category-based browsing" },
              { k: "Premium UI", v: "Black & gold, motion enhanced" },
              { k: "Vendor-ready", v: "Onboarding and listing scaffolds" },
              { k: "Shareable", v: "Linkable filters and pages" },
            ].map((stat, idx) => (
              <Reveal
                key={stat.k}
                delayMs={idx * 80}
                className="space-y-2"
              >
                <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
                  {stat.k.toUpperCase()}
                </p>
                <p className="mt-2 text-lg font-semibold text-adwa-gold">
                  {stat.v}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
              CONTACT US
            </p>
            <h2 className="text-2xl sm:text-3xl">Let’s build your presence.</h2>
            <p className="max-w-prose text-sm leading-6 text-foreground/75 sm:text-base">
              Have a property, a tour, or a unique cultural experience? Reach out
              and we’ll guide you through a premium listing setup.
            </p>

            <div className="space-y-2">
              <p className="text-sm text-foreground/75">
                Email: <span className="text-adwa-gold">hello@adwatrail.com</span>
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Location: <span className="text-foreground">Ethiopia</span>
              </p>
              <p className="mt-2 text-xs text-foreground/60">
                (Replace these placeholders when you’re ready.)
              </p>
            </div>
          </Reveal>

          <Reveal
            delayMs={120}
            className="space-y-4"
          >
            <h3 className="text-lg">Send a message</h3>
            <form className="mt-4 space-y-4">
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="contact_full">
                    Full name
                  </label>
                  <input
                    id="contact_full"
                    name="fullName"
                    placeholder="Your name"
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="contact_email">
                    Email
                  </label>
                  <input
                    id="contact_email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="contact_msg">
                  Message
                </label>
                <textarea
                  id="contact_msg"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you’d like to list…"
                  className="resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-foreground/60">
                  This is UI-only for now; connect to server actions when ready.
                </p>
                <Button className="rounded-full px-6 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  Send
                </Button>
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal delayMs={80} className="mt-10 border-t border-border pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/70">
              © {new Date().getFullYear()} ADWA Trail. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground/70">
              <Link href="/discover" className="hover:text-foreground">
                Discover
              </Link>
              <Link href="/list-your-property" className="hover:text-foreground">
                Become a vendor
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
