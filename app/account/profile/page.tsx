"use client"

import * as React from "react"
import { Reveal } from "@/src/components/shared/Reveal"
import { Camera, User } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className="text-3xl font-bold">Personal Info</h2>
        <p className="mt-1 text-muted-foreground">
          Update your profile details visible to hosts and guests.
        </p>
      </Reveal>

      {/* AVATAR SECTION */}
      <Reveal delayMs={100} className="flex items-center gap-6">
        <div className="relative group">
          <div className="size-24 rounded-full bg-adwa-gold text-white flex items-center justify-center text-3xl font-bold shadow-lg">
            <User className="size-10" />
          </div>
          <button className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <Camera className="size-5 text-white" />
          </button>
        </div>
        <div>
          <p className="font-bold text-lg">Profile Photo</p>
          <p className="text-sm text-muted-foreground">
            Click the avatar to upload a new photo.
          </p>
        </div>
      </Reveal>

      {/* FORM */}
      <Reveal delayMs={200}>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Name Row */}
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField label="First Name" id="firstName" placeholder="Abebe" />
            <FormField label="Last Name" id="lastName" placeholder="Kebede" />
          </div>

          <FormField
            label="Email Address"
            id="email"
            type="email"
            placeholder="abebe@example.com"
          />

          <FormField
            label="Phone Number"
            id="phone"
            type="tel"
            placeholder="+251 91 234 5678"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField label="Date of Birth" id="dob" type="date" />
            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
              >
                Gender
              </label>
              <select
                id="gender"
                className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
              >
                <option value="">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label
              htmlFor="bio"
              className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
            >
              About You
            </label>
            <textarea
              id="bio"
              rows={4}
              placeholder="Tell hosts a little about yourself…"
              className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20 resize-none"
            />
            <p className="text-xs text-muted-foreground">
              A short bio helps build trust with hosts.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="rounded-xl bg-adwa-gold px-10 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-adwa-gold-hover hover:shadow-xl active:scale-[0.98]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  )
}

/* ─── Reusable form field ─── */
function FormField({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-adwa-gold focus:ring-2 focus:ring-adwa-gold/20"
      />
    </div>
  )
}
