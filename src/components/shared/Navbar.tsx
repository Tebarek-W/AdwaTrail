"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type NavbarProps = {
  className?: string
  session?: {
    id: string
    name: string | null
    email: string
    role: string
  } | null
}

export function Navbar({
  className,
  session
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-border/50",
        className
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden p-2 -ml-2 text-foreground/75 hover:text-adwa-gold transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        <Link href="/" className="inline-flex items-center gap-2 group max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
          <Image
            src="/images/adwa-logo-light.png"
            alt="ADWA Trail"
            width={160}
            height={40}
            priority
            className="h-8 max-md:h-7 w-auto"
          />
          <span className="text-xl max-md:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-adwa-gold">
            ADWAtrail
          </span>
        </Link>

        {/* CENTER LINKS (DESKTOP) */}
        <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
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
            
            {!session ? (
              <Link href="/login" className="hidden md:block text-sm font-bold text-adwa-gold hover:underline p-3">
                  Log in
              </Link>
            ) : (
              <button 
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' })
                  window.location.href = '/'
                }}
                className="hidden md:block text-sm font-semibold text-muted-foreground hover:text-foreground hover:underline p-3 transition"
              >
                  Log out
              </button>
            )}

            <Link href="/account" className="flex items-center gap-3 rounded-full border border-border bg-white p-2 pl-3 md:pl-4 pr-2 shadow-sm transition hover:shadow-md">
                <Menu className="size-4 text-muted-foreground hidden md:block" />
                <div className="size-7 md:size-8 rounded-full bg-adwa-gold text-white flex items-center justify-center font-bold text-[10px] md:text-xs uppercase">
                    {session?.name ? session.name.charAt(0) : "AG"}
                </div>
            </Link>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-lg overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4">
            <Link
              href="/stays"
              className="py-4 border-b border-border/50 text-base font-semibold text-foreground/90 hover:text-adwa-gold"
            >
              Stays
            </Link>
            <Link
              href="/experiences"
              className="py-4 border-b border-border/50 text-base font-semibold text-foreground/90 hover:text-adwa-gold"
            >
              Experiences
            </Link>
            <Link
              href="/services"
              className="py-4 border-b border-border/50 text-base font-semibold text-foreground/90 hover:text-adwa-gold"
            >
              Services
            </Link>
            <Link
              href="/list-your-property"
              className="py-4 border-b border-border/50 text-base font-semibold text-foreground/90 hover:text-adwa-gold"
            >
              Become a Host
            </Link>
            {!session ? (
              <div className="pt-6 pb-2 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="w-full text-center rounded-xl border border-border py-3 text-base font-bold text-foreground hover:bg-adwa-warm transition"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="w-full text-center rounded-xl bg-adwa-gold py-3 text-base font-bold text-white shadow-md hover:bg-adwa-gold-hover transition"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="pt-6 pb-2 flex flex-col gap-3">
                <button
                  onClick={async () => {
                    await fetch('/api/auth/logout', { method: 'POST' })
                    window.location.href = '/'
                  }}
                  className="w-full text-center rounded-xl border border-red-200 bg-red-50 text-red-600 py-3 text-base font-bold hover:bg-red-100 transition"
                >
                  Log out
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
