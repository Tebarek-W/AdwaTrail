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
        "sticky top-0 z-50 w-full glass-gold border-b border-white/5",
        className
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/images/adwa_trail_logo_1773405947024.png"
            alt="ADWA Trail"
            width={120}
            height={40}
            priority
            className="h-8 w-auto brightness-110"
          />
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.3em] text-adwa-gold sm:inline">
            Platinum Series
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#about"
            className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 transition hover:text-adwa-gold"
          >
            Curations
          </Link>
          <Link
            href="/#services"
            className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 transition hover:text-adwa-gold"
          >
            Ecosystem
          </Link>
          <Link
            href="/#contact"
            className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 transition hover:text-adwa-gold"
          >
            Concierge
          </Link>
        </nav>

        <Button
          asChild
          className={cn(
            "rounded-full px-6 py-5 font-bold uppercase tracking-wider text-xs",
            "bg-gold-gradient text-black hover:scale-105 active:scale-95",
            "glow-gold transition-all duration-300"
          )}
        >
          <Link href={listYourPropertyHref}>Partner with us</Link>
        </Button>
      </div>
    </header>
  )
}
