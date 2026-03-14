import { Reveal } from "@/src/components/shared/Reveal"
import { Calendar, Heart, ShieldCheck, Star } from "lucide-react"

export default function AccountDashboard() {
  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className="text-3xl font-bold">Welcome back, Traveler</h2>
        <p className="mt-1 text-muted-foreground">Here&apos;s a snapshot of your Adwa Trail activity.</p>
      </Reveal>

      {/* QUICK STATS */}
      <div className="grid gap-6 sm:grid-cols-3">
        <StatCard title="Total Trips" value="4" icon={<Calendar className="text-adwa-gold" />} />
        <StatCard title="Saved Listings" value="12" icon={<Heart className="text-adwa-gold" />} />
        <StatCard title="Reviews Given" value="3" icon={<Star className="text-adwa-gold" />} />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* UPCOMING TRIPS PREVIEW */}
        <Reveal delayMs={100} className="space-y-4">
          <h3 className="text-xl font-bold">Upcoming Trips</h3>
          <div className="rounded-2xl border border-dashed border-border p-8 text-center bg-adwa-warm/10">
            <p className="text-sm text-muted-foreground">No upcoming trips booked yet.</p>
            <button className="mt-4 text-sm font-bold text-adwa-gold underline">Explore Ethiopia</button>
          </div>
        </Reveal>

        {/* RECENTLY VIEWED PREVIEW */}
        <Reveal delayMs={200} className="space-y-4">
            <h3 className="text-xl font-bold">Recommended for you</h3>
            <div className="space-y-4">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-2xl border border-border p-3 transition hover:border-adwa-gold/30">
                        <div className="size-16 shrink-0 rounded-xl bg-muted" />
                        <div className="space-y-1">
                            <p className="text-sm font-bold">Luxury Lodge in Tigray</p>
                            <p className="text-xs text-muted-foreground">Hawzen, Ethiopia</p>
                        </div>
                    </div>
                ))}
            </div>
        </Reveal>
      </div>
      
      {/* VERIFICATION BANNER */}
      <Reveal delayMs={300} className="rounded-2xl bg-adwa-gold/5 border border-adwa-gold/20 p-6 flex items-center justify-between">
        <div className="flex gap-4 items-start">
            <ShieldCheck className="size-8 text-adwa-gold mt-1" />
            <div>
                <p className="font-bold">Identity Verification</p>
                <p className="text-sm text-muted-foreground">Complete your verification to build trust with hosts.</p>
            </div>
        </div>
        <button className="rounded-full bg-adwa-gold text-white px-6 py-2.5 text-xs font-bold shadow-md">Complete Now</button>
      </Reveal>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-6 transition-all hover:shadow-lg hover:shadow-adwa-gold/5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</span>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}
