import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"

type NavbarProps = {
  className?: string
}

export function Navbar({
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-border/50",
        className
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <Image
            src="/images/adwa-logo-light.png"
            alt="ADWA Trail"
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
          <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-adwa-gold">
            ADWAtrail
          </span>
        </Link>

        {/* CENTER LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/stays"
            className="text-sm font-semibold text-foreground/75 transition hover:text-adwa-gold"
          >
            Stays
          </Link>
          <Link
            href="/experiences"
            className="text-sm font-semibold text-foreground/75 transition hover:text-adwa-gold"
          >
            Experiences
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-foreground/75 transition hover:text-adwa-gold"
          >
            Services
          </Link>
        </nav>

        {/* RIGHT SIDE: USER MENU */}
        <div className="flex items-center gap-4">
            <Link href="/list-your-property" className="hidden lg:block text-sm font-bold text-foreground hover:bg-adwa-warm p-3 rounded-full transition">
                Become a Host
            </Link>

            <Link href="/account" className="flex items-center gap-4 rounded-full border border-border bg-white p-2 pl-4 pr-2 shadow-sm transition hover:shadow-md">
                <Menu className="size-4 text-muted-foreground" />
                <div className="size-8 rounded-full bg-adwa-gold text-white flex items-center justify-center font-bold text-xs">
                    AG
                </div>
            </Link>
        </div>
      </div>
    </header>
  )
}
