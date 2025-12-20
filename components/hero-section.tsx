import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden px-4 py-20 md:py-40"
    >
      {/* Background Effects - Stays absolute */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg (2).png"
          alt="pattern background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Decorative Elements Container: Top on Mobile, Absolute on Desktop */}
      <div className="relative z-10 w-full mb-12 md:mb-0 md:static">
        
        {/* Shape */}
        <div className="relative mx-auto w-fit md:absolute md:right-30 md:top-36 opacity-100">
          <Image
            src="/Shape 1 copy.png"
            alt="pattern background"
            width={400} // Smaller on mobile
            height={400}
            className="object-cover md:w-[500px]"
            priority
          />
        </div>

        {/* placeholder1 */}
        <div className="absolute left-1/2 -translate-x-36 top-16 w-48 h-72 -rotate-6 rounded-xl border border-white md:left-auto md:translate-x-0 md:w-50 md:h-75 md:right-60 md:top-50 z-20">
          <Image
            src="/Field Staff Leave Management System _ Easy Leave Reporting.jpeg"
            alt="placeholder 1"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* placeholder2 */}
        <div className="absolute left-1/2 -translate-x-08 top-26 w-40 h-68 rotate-6 rounded-xl border border-white md:left-auto md:translate-x-0 md:w-[200px] md:h-[300px] md:right-20 md:top-70 z-20">
          <Image
            src="/SASS CRM 2 – Sassico.jpeg"
            alt="placeholder 2"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-4 md:px-20 mt-20 md:mt-0">
        
        <h1 className="mb-6 text-balance text-3xl font-bold leading-none uppercase tracking-tight text-white md:text-5xl lg:text-6xl max-w-2xl">
          <span className="text-[#D9CBB5]">Take</span> Control of Your <span className="text-[#D9CBB5]">Money</span>, One Step at a Time
        </h1>

        <p className="mb-12 max-w-3xl text-pretty text-lg text-[#D9CBB5] md:text-xl lg:text-2xl">
          A guided workbook and community to help you learn practical finance skills while implementing them in real
          life
        </p>

        <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
          <Button
            className="w-full bg-[#D9CBB5] text-[#0A1A2F] px-6 py-6 rounded-full hover:bg-[#C99663] hover:text-white sm:w-auto"
          >
            <a href="#waitlist">Join the Waitlist</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-white bg-transparent px-6 py-6 rounded-full text-white hover:bg-white/10 sm:w-auto"
            asChild
          >
            <a href="#how-it-works">Learn How It Works</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 md:grid-cols-3">
          <div>
            <div className="text-3xl font-bold text-[#D9CBB5] md:text-4xl">2M+</div>
            <div className="mt-2 text-sm text-white/60">Young People Confused</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C99663] md:text-4xl">$10B+</div>
            <div className="mt-2 text-sm text-white/60">Lost to Poor Decisions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#527967] md:text-4xl">100%</div>
            <div className="mt-2 text-sm text-white/60">Action-Based Learning</div>
          </div>
        </div>
      </div>

      {/* Background Arrow - Hidden on mobile to avoid clutter, visible on MD */}
      <div className="hidden md:block absolute -top-120 -left-170 z-0">
        <Image
          src="/Layer102.png"
          alt="Decorative arrow"
          height={1200}
          width={1200}
          className="object-cover w-550 h-auto"
          priority
        />
      </div>
    </section>
  )
}