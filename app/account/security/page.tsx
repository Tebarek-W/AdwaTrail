"use client"

import * as React from "react"
import { Reveal } from "@/src/components/shared/Reveal"
import {
  Eye,
  EyeOff,
  Lock,
  Monitor,
  Shield,
  Smartphone,
  Trash2,
} from "lucide-react"

export default function SecurityPage() {
  const [showCurrent, setShowCurrent] = React.useState(false)
  const [showNew, setShowNew] = React.useState(false)
  const [twoFa, setTwoFa] = React.useState(false)

  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className="text-3xl font-bold">Login &amp; Security</h2>
        <p className="mt-1 text-muted-foreground">
          Manage your password, two-factor authentication, and active sessions.
        </p>
      </Reveal>

      {/* ── CHANGE PASSWORD ── */}
      <Reveal delayMs={100}>
        <section className="rounded-2xl border border-border p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <Lock className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Change Password</h3>
              <p className="text-xs text-muted-foreground">
                Use a strong password you don&apos;t use elsewhere.
              </p>
            </div>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Current Password */}
            <PasswordField
              id="currentPassword"
              label="Current Password"
              show={showCurrent}
              toggle={() => setShowCurrent((s) => !s)}
            />

            {/* New Password */}
            <PasswordField
              id="newPassword"
              label="New Password"
              show={showNew}
              toggle={() => setShowNew((s) => !s)}
            />

            {/* Confirm Password */}
            <PasswordField
              id="confirmPassword"
              label="Confirm New Password"
              show={showNew}
              toggle={() => setShowNew((s) => !s)}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-adwa-gold px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-adwa-gold-hover hover:shadow-xl active:scale-[0.98]"
              >
                Update Password
              </button>
            </div>
          </form>
        </section>
      </Reveal>

      {/* ── TWO-FACTOR AUTH ── */}
      <Reveal delayMs={200}>
        <section className="rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
                <Shield className="size-5 text-adwa-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Two-Factor Authentication</h3>
                <p className="text-xs text-muted-foreground">
                  Add an extra layer of security to your account.
                </p>
              </div>
            </div>

            {/* Toggle */}
            <button
              role="switch"
              aria-checked={twoFa}
              onClick={() => setTwoFa((v) => !v)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                twoFa ? "bg-adwa-gold" : "bg-border"
              }`}
            >
              <span
                className={`inline-block size-5 rounded-full bg-white shadow-md transition-transform ${
                  twoFa ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {twoFa && (
            <p className="mt-4 rounded-xl bg-adwa-warm/60 px-4 py-3 text-sm text-adwa-gold-hover font-semibold">
              ✓ Two-factor authentication is enabled. You will receive a code via
              SMS on each login.
            </p>
          )}
        </section>
      </Reveal>

      {/* ── ACTIVE SESSIONS ── */}
      <Reveal delayMs={300}>
        <section className="rounded-2xl border border-border p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-adwa-warm flex items-center justify-center">
              <Monitor className="size-5 text-adwa-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Active Sessions</h3>
              <p className="text-xs text-muted-foreground">
                Devices currently signed in to your account.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <SessionRow
              icon={<Monitor className="size-5 text-adwa-gold" />}
              device="Chrome on Windows"
              location="Addis Ababa, Ethiopia"
              current
            />
            <SessionRow
              icon={<Smartphone className="size-5 text-adwa-gold" />}
              device="Safari on iPhone"
              location="Addis Ababa, Ethiopia"
            />
          </div>
        </section>
      </Reveal>

      {/* ── DANGER ZONE ── */}
      <Reveal delayMs={400}>
        <section className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Trash2 className="size-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-700">Delete Account</h3>
                <p className="text-xs text-muted-foreground">
                  Permanently remove your account and all data. This cannot be
                  undone.
                </p>
              </div>
            </div>
            <button className="rounded-xl border border-red-300 bg-white px-6 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50 active:scale-[0.98]">
              Delete
            </button>
          </div>
        </section>
      </Reveal>
    </div>
  )
}

/* ─── Password field with show/hide toggle ─── */
function PasswordField({
  id,
  label,
  show,
  toggle,
}: {
  id: string
  label: string
  show: boolean
  toggle: () => void
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="w-full rounded-xl border border-border bg-white px-4 py-3.5 pr-12 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  )
}

/* ─── Session row ─── */
function SessionRow({
  icon,
  device,
  location,
  current,
}: {
  icon: React.ReactNode
  device: string
  location: string
  current?: boolean
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border px-4 py-3 transition hover:border-adwa-gold/30">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-bold">{device}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      {current ? (
        <span className="rounded-full bg-adwa-gold/10 px-3 py-1 text-xs font-bold text-adwa-gold">
          This device
        </span>
      ) : (
        <button className="text-xs font-bold text-red-500 transition hover:text-red-600">
          Sign out
        </button>
      )}
    </div>
  )
}
