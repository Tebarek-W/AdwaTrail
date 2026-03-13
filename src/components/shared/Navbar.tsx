import Link from "next/link"
import Image from "next/image"

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
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/discover"
            className="text-sm font-medium text-foreground/60 transition hover:text-adwa-gold"
          >
            Discover
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-foreground/60 transition hover:text-adwa-gold"
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground/60 transition hover:text-adwa-gold"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-foreground/60 transition hover:text-adwa-gold"
          >
            Contact
          </Link>
        </nav>

        <Button
          asChild
          className={cn(
            "rounded-full px-6 py-5 font-semibold text-sm",
            "bg-adwa-gold text-white hover:bg-adwa-gold-hover",
            "shadow-md hover:shadow-lg transition-all duration-300"
          )}
        >
          <Link href={listYourPropertyHref}>List Your Property</Link>
        </Button>
      </div>
    </header>
  )
}
