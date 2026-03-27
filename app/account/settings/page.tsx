"use client"

import * as React from "react"
import { Reveal } from "@/src/components/shared/Reveal"
import { Bell, Globe, Wallet } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = React.useState({
    bookingUpdates: true,
    promotions: false,
    reminders: true,
  })

  function toggleNotification(key: keyof typeof notifications) {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className="text-3xl font-bold">Settings</h2>
        <p className="mt-1 text-muted-foreground">
          Customize your Adwa Trail experience.
        </p>
      </Reveal>

      {/* ── LANGUAGE ── */}
      <Reveal delayMs={100}>
        <section className="rounded-2xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <Globe className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Language &amp; Region</h3>
              <p className="text-xs text-muted-foreground">
                Choose your preferred language and region settings.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="language"
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
              >
                Language
              </label>
              <select
                id="language"
                defaultValue="en"
                className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
              >
                <option value="en">English</option>
                <option value="am">አማርኛ (Amharic)</option>
                <option value="ti">ትግርኛ (Tigrinya)</option>
                <option value="om">Afaan Oromoo</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="timezone"
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
              >
                Time Zone
              </label>
              <select
                id="timezone"
                defaultValue="eat"
                className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
              >
                <option value="eat">East Africa Time (UTC+3)</option>
                <option value="utc">UTC</option>
                <option value="cet">Central European Time (UTC+1)</option>
                <option value="est">Eastern Standard Time (UTC-5)</option>
              </select>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CURRENCY ── */}
      <Reveal delayMs={200}>
        <section className="rounded-2xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <Wallet className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Currency</h3>
              <p className="text-xs text-muted-foreground">
                Set your preferred currency for prices and payments.
              </p>
            </div>
          </div>

          <div className="max-w-xs space-y-2">
            <label
              htmlFor="currency"
              className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
            >
              Display Currency
            </label>
            <select
              id="currency"
              defaultValue="etb"
              className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
            >
              <option value="etb">ETB — Ethiopian Birr</option>
              <option value="usd">USD — US Dollar</option>
              <option value="eur">EUR — Euro</option>
              <option value="gbp">GBP — British Pound</option>
            </select>
          </div>
        </section>
      </Reveal>

      {/* ── NOTIFICATIONS ── */}
      <Reveal delayMs={300}>
        <section className="rounded-2xl border border-border p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <Bell className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Email Notifications</h3>
              <p className="text-xs text-muted-foreground">
                Choose what emails you&apos;d like to receive.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <ToggleRow
              label="Booking Updates"
              description="Confirmations, cancellations, and reminders for your trips."
              checked={notifications.bookingUpdates}
              onToggle={() => toggleNotification("bookingUpdates")}
            />
            <ToggleRow
              label="Promotions & Deals"
              description="Exclusive offers, discounts, and seasonal campaigns."
              checked={notifications.promotions}
              onToggle={() => toggleNotification("promotions")}
            />
            <ToggleRow
              label="Trip Reminders"
              description="Reminders a week and a day before your check-in."
              checked={notifications.reminders}
              onToggle={() => toggleNotification("reminders")}
            />
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={400}>
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-adwa-gold px-10 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-adwa-gold-hover hover:shadow-xl active:scale-[0.98]"
          >
            Save Preferences
          </button>
        </div>
      </Reveal>
    </div>
  )
}

/* ─── Toggle row ─── */
function ToggleRow({
  label,
  description,
  checked,
  onToggle,
}: {
  label: string
  description: string
  checked: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border px-4 py-4 transition hover:border-adwa-gold/30">
      <div className="pr-4">
        <p className="text-sm font-bold">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={onToggle}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-adwa-gold" : "bg-border"
        }`}
      >
        <span
          className={`inline-block size-5 rounded-full bg-white shadow-md transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  )
}
