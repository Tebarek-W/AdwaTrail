"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Reveal } from "@/src/components/shared/Reveal"

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()

      if (res.ok) {
        window.location.href = "/account"
      } else {
        setError(data.error || "Failed to log in")
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* LEFT PANE (Image) */}
      <div className="hidden lg:relative lg:flex lg:flex-1">
        <Image
          src="/images/simien_cultural_expedition_1773406095779.png"
          alt="Simien Mountains Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-12 max-w-lg text-white">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold leading-tight">
              Welcome back to <br /> Adwa Trail.
            </h2>
            <p className="mt-4 text-white/80">
              Pick up right where you left off. The wonders of Ethiopia await your return.
            </p>
          </Reveal>
        </div>
      </div>

      {/* RIGHT PANE (Form) */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Reveal>
            <div className="mb-10 text-center lg:text-left">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-adwa-gold hover:underline">
                <ChevronLeft className="size-4" /> Back to Home
              </Link>
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground">Log in to your account</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your details to access your trips and saved places.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="mt-10">
            {error && (
              <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600 border border-red-200">
                {error}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Mail className="size-4 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Password
                  </label>
                  <Link href="#" className="text-xs font-semibold text-adwa-gold hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Lock className="size-4 text-muted-foreground" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-11 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-adwa-gold py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-adwa-gold-hover hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-white py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-adwa-warm active:scale-[0.98]"
                >
                  <svg className="size-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-white py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-adwa-warm active:scale-[0.98]"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.59-.8 1.51.05 2.78.72 3.53 1.84-3.13 1.81-2.65 6.42.44 7.68-.69 1.4-1.44 2.82-2.64 3.45zm-2.05-14.4c-.72 2.15-3.26 3.63-5.2 3.43.51-2.43 2.55-4.23 4.9-4.36.14 2 .45 2.32.3 2.93z" />
                  </svg>
                  Apple
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-bold text-adwa-gold hover:underline">
                Sign up
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
