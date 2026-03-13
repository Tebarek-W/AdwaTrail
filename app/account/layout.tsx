import Link from "next/link"
import { User, MapPin, Heart, Shield, Settings, LayoutDashboard } from "lucide-react"

import { cn } from "@/lib/utils"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-adwa-warm/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR NAVIGATION */}
          <aside className="space-y-8">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Account</h1>
              <p className="text-sm text-muted-foreground">Manage your trips and hosting</p>
            </div>

            <nav className="flex flex-col gap-1">
              <AccountLink href="/account" icon={<LayoutDashboard className="size-5" />}>
                Dashboard
              </AccountLink>
              <AccountLink href="/account/trips" icon={<MapPin className="size-5" />}>
                My Trips
              </AccountLink>
              <AccountLink href="/account/wishlist" icon={<Heart className="size-5" />}>
                Wishlist
              </AccountLink>
              <div className="my-4 h-px bg-border" />
              <AccountLink href="/account/profile" icon={<User className="size-5" />}>
                Personal Info
              </AccountLink>
              <AccountLink href="/account/security" icon={<Shield className="size-5" />}>
                Login & Security
              </AccountLink>
              <AccountLink href="/account/settings" icon={<Settings className="size-5" />}>
                Settings
              </AccountLink>
            </nav>

            {/* HOSTING TOGGLE PREVIEW */}
            <div className="rounded-2xl border border-adwa-gold/20 bg-white p-6 shadow-sm">
              <h4 className="font-bold">Hosting with Adwa</h4>
              <p className="mt-1 text-sm text-muted-foreground">Manage your properties and earn ETB.</p>
              <Button asChild className="mt-4 w-full rounded-xl bg-adwa-gold text-white font-bold text-xs uppercase tracking-wider">
                <Link href="/account/hosting">Switch to Hosting</Link>
              </Button>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="min-h-[600px] rounded-3xl border border-border bg-white p-8 shadow-sm">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

function AccountLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all",
        "text-foreground/70 hover:bg-adwa-warm hover:text-adwa-gold"
      )}
    >
      {icon}
      {children}
    </Link>
  )
}

import { Button } from "@/components/ui/button"
