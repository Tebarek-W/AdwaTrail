import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/src/components/shared/Reveal"

type PageProps = {
  params: Promise<{ slug: string }>
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const title = titleFromSlug(slug)

  return (
    <main className="min-h-[calc(100vh-56px)] bg-background">
      <section className="mx-auto w-full max-w-6xl px-4 pt-8 pb-12">
        <Reveal className="mb-5 flex items-center justify-between gap-3">
          <Link
            href="/discover"
            className="text-sm font-medium text-adwa-gold hover:underline"
          >
            Back to discovery
          </Link>
          <Button asChild variant="outline" className="rounded-full px-5">
            <Link href="/list-your-property">List your property</Link>
          </Button>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal className="overflow-hidden rounded-2xl border border-border bg-[var(--color-adwa-surface)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/window.svg"
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute left-4 bottom-4">
                <p className="text-xs font-medium tracking-[0.2em] text-foreground/75">
                  LISTING
                </p>
                <h1 className="mt-1 text-2xl sm:text-3xl">{title}</h1>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-lg">Overview</h2>
              <p className="mt-2 text-sm leading-6 text-foreground/75">
                This is a premium listing detail scaffold. Next steps typically
                include vendor profile, amenities, policies, availability, and
                verified reviews—powered by your Multi‑Vendor Discovery Engine.
              </p>
            </div>
          </Reveal>

          <Reveal
            delayMs={120}
            className="rounded-2xl border border-border bg-[var(--color-adwa-surface)] p-5"
          >
            <h2 className="text-lg">Booking snapshot</h2>
            <div className="mt-3 space-y-3 text-sm text-foreground/75">
              <div className="flex items-center justify-between">
                <span>Starting from</span>
                <span className="font-semibold text-adwa-gold">ETB 14,500</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Rating</span>
                <span className="font-medium text-foreground">4.9</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Category</span>
                <span>Luxury / Cultural</span>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <Button className="rounded-full px-5 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                Request availability
              </Button>
              <Button variant="outline" className="rounded-full px-5">
                Save to favorites
              </Button>
            </div>

            <p className="mt-4 text-xs text-foreground/60">
              Buttons are presentational for now; wire to server actions when
              your booking flow is ready.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

