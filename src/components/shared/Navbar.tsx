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
        "sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md",
        "border-b border-[color:var(--color-adwa-gold)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_70%_-30%,rgba(212,175,55,0.10),transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/brand/adwa-trail-logo.png"
            alt="ADWA Trail"
            width={140}
            height={40}
            priority
            className="h-9 w-auto"
          />
          <span className="hidden text-xs text-foreground/70 sm:inline">
            Premium Ethiopian Marketplace
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#about"
            className="text-sm text-foreground/75 transition hover:text-foreground hover:underline hover:decoration-[color:var(--color-adwa-gold)] hover:underline-offset-8"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-sm text-foreground/75 transition hover:text-foreground hover:underline hover:decoration-[color:var(--color-adwa-gold)] hover:underline-offset-8"
          >
            Services
          </Link>
          <Link
            href="/#experience"
            className="text-sm text-foreground/75 transition hover:text-foreground hover:underline hover:decoration-[color:var(--color-adwa-gold)] hover:underline-offset-8"
          >
            Experience
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-foreground/75 transition hover:text-foreground hover:underline hover:decoration-[color:var(--color-adwa-gold)] hover:underline-offset-8"
          >
            Contact
          </Link>
        </nav>

        <Button
          asChild
          className={cn(
            "rounded-full px-4 font-medium",
            "bg-[var(--color-adwa-gold)] text-black hover:bg-[var(--color-adwa-gold-hover)]",
            "hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]",
            "transition-all duration-300"
          )}
        >
          <Link href={listYourPropertyHref}>List Your Property</Link>
        </Button>
      </div>
    </header>
  )
}
