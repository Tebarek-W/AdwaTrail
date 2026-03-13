import Image from "next/image"
import Link from "next/link"
import {
  Star,
  MapPin,
  Share,
  Heart,
  ChevronLeft,
  Users,
  Bed,
  Bath,
  CheckCircle2,
  Calendar,
  MessageCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/src/components/shared/Reveal"
import { getListingBySlug } from "@/src/lib/mock-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const listing = getListingBySlug(slug)

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* ───── NAVIGATION BAR ───── */}
      <nav className="sticky top-0 z-40 w-full border-b border-border bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/discover"
            className="group flex items-center gap-2 text-sm font-semibold text-foreground/70 transition hover:text-adwa-gold"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Discovery
          </Link>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-foreground">
              <Share className="size-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-foreground">
              <Heart className="size-4" />
              <span className="hidden sm:inline">Save</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <Reveal className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold sm:text-4xl">{listing.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-adwa-gold text-adwa-gold" />
              <span>{listing.rating}</span>
              <span className="text-muted-foreground underline">({listing.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="size-4" />
              <span className="underline">{listing.location}</span>
            </div>
          </div>
        </Reveal>

        {/* ───── GALLERY ───── */}
        <Reveal delayMs={100} className="grid grid-cols-1 gap-2 overflow-hidden rounded-2xl sm:grid-cols-4 sm:grid-rows-2">
          <div className="relative aspect-[4/3] sm:col-span-2 sm:row-span-2">
            <Image
              src={listing.mainImageUrl}
              alt={listing.title}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {listing.galleryImages.slice(1, 5).map((img, idx) => (
            <div key={idx} className="relative hidden aspect-square sm:block">
              <Image
                src={img}
                alt={`${listing.title} ${idx + 2}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
          <Button
            variant="outline"
            className="absolute bottom-6 right-6 hidden bg-white/90 backdrop-blur shadow-md sm:inline-flex"
          >
            Show all photos
          </Button>
        </Reveal>

        {/* ───── CONTENT & BOOKING ───── */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* LEFT COLUMN: DETAILS */}
          <div className="space-y-12">
            <Reveal className="space-y-2 border-b border-border pb-10">
              <h2 className="text-2xl font-bold">
                {listing.type === "ENTIRE_HOME" ? "Entire home" : "Private room"} hosted by {listing.host.name}
              </h2>
              <p className="font-medium text-muted-foreground">
                {listing.maxGuests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} baths
              </p>
            </Reveal>

            {/* HOST PREVIEW */}
            <Reveal delayMs={150} className="flex items-start gap-4 border-b border-border pb-10">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                <Image src={listing.host.image} alt={listing.host.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Meet your Host</h3>
                <p className="text-sm text-muted-foreground">Host for {listing.host.joinDate}</p>
                {listing.host.isSuperhost && (
                  <div className="mt-2 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-adwa-gold">
                    <CheckCircle2 className="size-3.5" /> superhost
                  </div>
                )}
              </div>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal delayMs={200} className="border-b border-border pb-10">
              <p className="text-lg leading-relaxed text-foreground/80">{listing.description}</p>
              <Button variant="link" className="mt-4 p-0 font-bold text-foreground underline">
                Show more
              </Button>
            </Reveal>

            {/* AMENITIES */}
            <Reveal delayMs={250} className="border-b border-border pb-10">
              <h3 className="text-xl font-bold mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                {listing.amenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center gap-4 text-foreground/80">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-adwa-warm text-adwa-gold">
                      <CheckCircle2 className="size-4" /> {/* Simple check for now */}
                    </div>
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-8 rounded-xl px-6 py-5 font-bold">
                Show all {listing.amenities.length} amenities
              </Button>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: STICKY BOOKING WIDGET */}
          <div className="relative">
            <Reveal
              delayMs={300}
              className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-2xl shadow-adwa-gold/5"
            >
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-bold">ETB {listing.pricePerNight.toLocaleString()}</span>
                  <span className="text-muted-foreground leading-loose ml-1">night</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Star className="size-3.5 fill-adwa-gold text-adwa-gold" />
                  <span>{listing.rating}</span>
                  <span className="text-muted-foreground">· {listing.reviewCount} reviews</span>
                </div>
              </div>

              {/* DATE/GUEST PICKER BOX */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <div className="grid grid-cols-2">
                  <div className="border-r border-b border-border p-3 transition-colors hover:bg-adwa-warm">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Check-in</label>
                    <span className="text-sm font-medium text-muted-foreground">Add date</span>
                  </div>
                  <div className="border-b border-border p-3 transition-colors hover:bg-adwa-warm">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Checkout</label>
                    <span className="text-sm font-medium text-muted-foreground">Add date</span>
                  </div>
                </div>
                <div className="p-3 transition-colors hover:bg-adwa-warm">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Guests</label>
                  <span className="text-sm font-medium text-foreground">1 guest</span>
                </div>
              </div>

              <Button className="mt-6 w-full rounded-xl bg-adwa-gold py-7 text-lg font-bold text-white shadow-lg hover:bg-adwa-gold-hover hover:shadow-adwa-gold/20 transition-all duration-300">
                Reserve
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">You won't be charged yet</p>

              <div className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
                <div className="flex justify-between">
                  <span className="underline">ETB {listing.pricePerNight.toLocaleString()} x 5 nights</span>
                  <span>ETB {(listing.pricePerNight * 5).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>ETB 1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Adwa Trail service fee</span>
                  <span>ETB 2,500</span>
                </div>
                <div className="flex justify-between border-t border-border pt-4 text-lg font-bold">
                  <span>Total</span>
                  <span>ETB {(listing.pricePerNight * 5 + 3700).toLocaleString()}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ───── REVIEWS SECTION ───── */}
        <Reveal delayMs={400} className="mt-20 border-t border-border pt-16">
          <div className="mb-10 flex items-center gap-2 text-2xl font-bold">
            <Star className="size-6 fill-adwa-gold text-adwa-gold" />
            <span>{listing.rating}</span>
            <span className="text-foreground/30">·</span>
            <span>{listing.reviewCount} reviews</span>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {listing.reviews.map((review) => (
              <div key={review.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full">
                    <Image src={review.author.image} alt={review.author.name} fill />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.author.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.createdAt}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("size-3", i < review.rating ? "fill-adwa-gold text-adwa-gold" : "text-muted-foreground")} />
                  ))}
                </div>
                <p className="leading-relaxed text-foreground/80">{review.comment}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-12 rounded-xl px-8 py-6 font-bold shadow-sm">
            Show all {listing.reviewCount} reviews
          </Button>
        </Reveal>
      </div>
    </main>
  )
}
