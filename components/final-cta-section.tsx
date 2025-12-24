"use client"

import type React from "react"

import { WaitlistForm } from "./waitlist-form"
import { FadeIn } from "./fade-in"

export function FinalCtaSection() {
  return (
    <section id="waitlist" className="bg-[#F8F5F0] px-4 py-20 md:py-28">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold text-[#0A1A2F] md:text-4xl">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mb-12 text-pretty text-muted-foreground md:text-lg">
          Join the waitlist to get early access to the workbook and community
        </p>

        <div className="mx-auto max-w-md">
          <WaitlistForm />
          <p className="mt-4 text-sm text-muted-foreground">No spam. Just value.</p>
        </div>
      </FadeIn>
    </section>
  )
}
