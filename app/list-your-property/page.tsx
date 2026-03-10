import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/src/components/shared/Reveal"

export default function ListYourPropertyPage() {
  return (
    <main className="min-h-[calc(100vh-56px)] bg-background">
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-4">
            <p className="text-xs font-medium tracking-[0.2em] text-foreground/70">
              VENDOR ONBOARDING
            </p>
            <h1 className="text-2xl sm:text-4xl">
              List your property with premium presentation.
            </h1>
            <p className="max-w-prose text-sm leading-6 text-foreground/75 sm:text-base">
              Join ADWATrial to reach travelers looking for luxury stays and
              cultural expeditions. We focus on premium discovery, clean
              merchandising, and high trust.
            </p>

            <div className="rounded-2xl border border-border bg-[var(--color-adwa-surface)] p-5">
              <h2 className="text-lg">What you’ll get</h2>
              <ul className="mt-2 space-y-2 text-sm text-foreground/75">
                <li>
                  <span className="text-adwa-gold">•</span>{" "}
                  Beautiful black &amp; gold listing cards with premium badges
                </li>
                <li>
                  <span className="text-adwa-gold">•</span> Category-based
                  discovery (stays vs expeditions)
                </li>
                <li>
                  <span className="text-adwa-gold">•</span> Shareable listing
                  links and polished detail pages
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="rounded-full px-5">
                <Link href="/discover">See how listings look</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal
            delayMs={120}
            className="rounded-2xl border border-border bg-[var(--color-adwa-surface)] p-5"
          >
            <h2 className="text-lg">Request an invite</h2>
            <p className="mt-1 text-sm text-foreground/70">
              Submit details and we’ll follow up. (UI-only scaffold for now.)
            </p>

            <form className="mt-5 space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="businessName">
                  Business / Property Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  placeholder="e.g., Gheralta Eco Lodge"
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="contactName">
                    Contact Name
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    placeholder="Your full name"
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="City / Region, Ethiopia"
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Tell us about your property or experience…"
                  className="resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-foreground/60">
                  Submissions are not persisted yet—this is the first UI pass.
                </p>
                <Button
                  type="submit"
                  className="rounded-full px-5 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  Request invite
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

