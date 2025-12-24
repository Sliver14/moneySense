"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  const whatsappChannelUrl = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL_URL || ""

  return (
    <section className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden bg-[#0A1A2F] px-4 py-20 text-white">
      {/* Background Effects - Stays absolute */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg (2).png"
          alt="pattern background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <FadeIn className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-400 animate-pulse" />
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Congratulations! You’re now on the MoneySense Waitlist
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-[#D9CBB5] md:text-xl lg:text-2xl">
          We’ll notify you as soon as MoneySense goes live. In the meantime, join
          our WhatsApp channel for updates, tips, and early access.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            className="w-full bg-[#D9CBB5] text-[#0A1A2F] px-8 py-6 rounded-full hover:bg-[#C99663] hover:text-white sm:w-auto"
            asChild
          >
            <a href={whatsappChannelUrl} target="_blank" rel="noopener noreferrer">
              Join WhatsApp Channel
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-white bg-transparent px-8 py-6 rounded-full text-white hover:bg-white/10 sm:w-auto"
            asChild
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  )
}
