import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-adwa-surface py-12">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 group">
            <Image
              src="/images/adwa-logo-light.png"
              alt="ADWA Trail"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-adwa-gold">
              ADWAtrail
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-medium">© {new Date().getFullYear()} ADWA Trail. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-sm font-semibold text-muted-foreground">
          <Link href="/" className="hover:text-adwa-gold transition-colors">Home</Link>
          <Link href="/stays" className="hover:text-adwa-gold transition-colors">Stays</Link>
          <Link href="/experiences" className="hover:text-adwa-gold transition-colors">Experiences</Link>
          <Link href="/services" className="hover:text-adwa-gold transition-colors">Services</Link>
        </div>
      </div>
    </footer>
  )
}
