import Link from "next/link"
import Image from "next/image"
import { User as UserIcon, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavbarProps = {
  className?: string
  listYourPropertyHref?: string
}

export function Navbar({
  className,
  listYourPropertyHref = "/list-your-property",
}: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-border/50",
        className
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/images/adwa-logo-light.png"
            alt="ADWA Trail"
            width={160}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* CENTER LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/discover"
            className="text-sm font-semibold text-foreground/75 transition hover:text-adwa-gold"
          >
            Stays
          </Link>
          <Link
            href="/discover?category=cultural"
            className="text-sm font-semibold text-foreground/75 transition hover:text-adwa-gold"
          >
            Experiences
          </Link>
          <Link
            href="/list-your-property"
            className="text-sm font-semibold text-foreground/75 transition hover:text-adwa-gold"
          >
            Host Your Home
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
