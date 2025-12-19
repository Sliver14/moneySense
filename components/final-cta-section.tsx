"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function FinalCtaSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", { name, email })
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold text-[#0A1A2F] md:text-4xl">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mb-12 text-pretty text-muted-foreground md:text-lg">
          Join the waitlist to get early access to the workbook and community
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 rounded-xl border-gray-200 bg-white"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl border-gray-200 bg-white"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-xl bg-[#D9CBB5] text-[#0A1A2F] hover:bg-[#C99663] hover:text-white"
            >
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">No spam. Just value.</p>
          </form>
        ) : (
          <div className="rounded-2xl border-2 border-[#527967] bg-[#527967]/5 p-8">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#527967]/10">
                <CheckCircle2 className="h-8 w-8 text-[#527967]" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#0A1A2F]">You're on the list!</h3>
            <p className="text-muted-foreground">We'll send you an email when we launch. Talk soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
