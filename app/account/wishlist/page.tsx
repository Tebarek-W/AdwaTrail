import { Reveal } from "@/src/components/shared/Reveal"
import { ListingCard } from "@/src/components/listings/ListingCard"
import { MOCK_LISTINGS } from "@/src/lib/mock-data"
import { Heart } from "lucide-react"

export default function WishlistPage() {
  const wishlistedItems = MOCK_LISTINGS.slice(0, 2) // Just mock a few items

  return (
    <div className="space-y-10">
      <Reveal className="flex items-center justify-between">
        <div>
           <h2 className="text-3xl font-bold">Wishlist</h2>
           <p className="mt-1 text-muted-foreground">{wishlistedItems.length} items saved to your collection.</p>
        </div>
      </Reveal>

      {wishlistedItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {wishlistedItems.map((listing, idx) => (
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
      ) : (
        <Reveal className="flex flex-col items-center justify-center py-20 text-center">
           <div className="size-20 rounded-full bg-adwa-warm flex items-center justify-center mb-6">
              <Heart className="size-10 text-adwa-gold" />
           </div>
           <h3 className="text-xl font-bold">Your wishlist is empty</h3>
           <p className="text-muted-foreground mt-2">When you find something you love, click the heart to save it here.</p>
           <button className="mt-8 rounded-xl bg-adwa-gold px-10 py-4 font-bold text-white shadow-lg">Start Browsing</button>
        </Reveal>
      )}
    </div>
  )
}
