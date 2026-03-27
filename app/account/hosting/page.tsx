"use client"

import * as React from "react"
import Link from "next/link"
import { Reveal } from "@/src/components/shared/Reveal"
import {
  BarChart3,
  Calendar,
  Home,
  MessageSquare,
  Plus,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react"

const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Luxury Lodge in Tigray",
    location: "Hawzen, Ethiopia",
    rating: 4.8,
    reviews: 24,
    earnings: "48,200 ETB",
    status: "active" as const,
  },
  {
    id: "2",
    title: "Lakeside Villa — Bahir Dar",
    location: "Bahir Dar, Ethiopia",
    rating: 4.6,
    reviews: 18,
    earnings: "32,100 ETB",
    status: "active" as const,
  },
]

export default function HostingDashboard() {
  return (
    <div className="space-y-10">
      <Reveal>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold">Hosting Dashboard</h2>
            <p className="mt-1 text-muted-foreground">
              Manage your properties and track your earnings.
            </p>
          </div>
          <Link
            href="/list-your-property"
            className="inline-flex items-center gap-2 rounded-xl bg-adwa-gold px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-adwa-gold-hover hover:shadow-xl active:scale-[0.98]"
          >
            <Plus className="size-4" />
            Add Property
          </Link>
        </div>
      </Reveal>

      {/* QUICK STATS */}
      <Reveal delayMs={100}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Earnings"
            value="80,300 ETB"
            icon={<Wallet className="size-5 text-adwa-gold" />}
            trend="+12%"
          />
          <StatCard
            label="Active Listings"
            value="2"
            icon={<Home className="size-5 text-adwa-gold" />}
          />
          <StatCard
            label="Total Reviews"
            value="42"
            icon={<Star className="size-5 text-adwa-gold" />}
            trend="+5"
          />
          <StatCard
            label="Upcoming Bookings"
            value="3"
            icon={<Calendar className="size-5 text-adwa-gold" />}
          />
        </div>
      </Reveal>

      {/* EARNINGS CHART PLACEHOLDER */}
      <Reveal delayMs={200}>
        <section className="rounded-2xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <BarChart3 className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Monthly Earnings</h3>
              <p className="text-xs text-muted-foreground">
                Your revenue over the last 6 months.
              </p>
            </div>
          </div>

          {/* Simple bar chart visualization */}
          <div className="flex items-end gap-3 h-40 pt-4">
            {[
              { month: "Oct", pct: 45 },
              { month: "Nov", pct: 60 },
              { month: "Dec", pct: 80 },
              { month: "Jan", pct: 55 },
              { month: "Feb", pct: 70 },
              { month: "Mar", pct: 90 },
            ].map((bar) => (
              <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-adwa-gold to-adwa-gold-soft transition-all hover:opacity-80"
                  style={{ height: `${bar.pct}%` }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {bar.month}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* YOUR PROPERTIES */}
      <Reveal delayMs={300}>
        <section className="space-y-4">
          <h3 className="text-xl font-bold">Your Properties</h3>

          <div className="space-y-4">
            {MOCK_PROPERTIES.map((prop, idx) => (
              <Reveal key={prop.id} delayMs={350 + idx * 80}>
                <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-border p-4 transition-all hover:shadow-lg hover:shadow-adwa-gold/5 hover:border-adwa-gold/30">
                  {/* Image placeholder */}
                  <div className="h-28 w-full sm:w-40 shrink-0 rounded-xl bg-muted flex items-center justify-center">
                    <Home className="size-8 text-muted-foreground/40" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-lg leading-snug">
                          {prop.title}
                        </h4>
                        <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700">
                          {prop.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {prop.location}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Star className="size-3.5 text-adwa-gold" />
                        {prop.rating} ({prop.reviews} reviews)
                      </span>
                      <span className="font-bold text-adwa-gold">
                        {prop.earnings} earned
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* RECENT MESSAGES PREVIEW */}
      <Reveal delayMs={400}>
        <section className="rounded-2xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <MessageSquare className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Recent Guest Messages</h3>
              <p className="text-xs text-muted-foreground">
                Stay responsive to keep your rating high.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <MessageRow
              name="Sara M."
              message="Hi! Is early check-in possible on April 12?"
              time="2 hours ago"
            />
            <MessageRow
              name="Daniel T."
              message="Thank you for the wonderful stay! Left a review."
              time="1 day ago"
            />
          </div>
        </section>
      </Reveal>

      {/* BACK TO GUEST VIEW */}
      <Reveal delayMs={450}>
        <div className="flex justify-center pt-4">
          <Link
            href="/account"
            className="rounded-xl border border-border px-8 py-3 text-sm font-bold text-muted-foreground transition hover:border-adwa-gold/30 hover:text-adwa-gold"
          >
            ← Back to Guest View
          </Link>
        </div>
      </Reveal>
    </div>
  )
}

/* ─── Stat card ─── */
function StatCard({
  label,
  value,
  icon,
  trend,
}: {
  label: string
  value: string
  icon: React.ReactNode
  trend?: string
}) {
  return (
    <div className="rounded-2xl border border-border p-5 transition-all hover:shadow-lg hover:shadow-adwa-gold/5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        {icon}
      </div>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-bold">{value}</p>
        {trend && (
          <span className="flex items-center gap-0.5 text-xs font-bold text-green-600 mb-0.5">
            <TrendingUp className="size-3" />
            {trend}
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── Message row ─── */
function MessageRow({
  name,
  message,
  time,
}: {
  name: string
  message: string
  time: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 transition hover:border-adwa-gold/30">
      <div className="size-9 shrink-0 rounded-full bg-adwa-gold/10 flex items-center justify-center text-xs font-bold text-adwa-gold">
        {name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-muted-foreground truncate">{message}</p>
      </div>
      <span className="shrink-0 text-[10px] text-muted-foreground">{time}</span>
    </div>
  )
}
