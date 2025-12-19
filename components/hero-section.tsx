import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A1A2F] px-4 py-32 md:py-40"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[#527967]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#C99663]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9CBB5]/20 bg-[#D9CBB5]/10 px-4 py-2 text-sm text-[#D9CBB5] backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Financial Education for the Next Generation</span>
          </div>
        </div>

        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Take Control of Your Money,{" "}
          <span className="bg-gradient-to-r from-[#D9CBB5] via-[#C99663] to-[#D9CBB5] bg-clip-text text-transparent">
            One Step at a Time
          </span>
        </h1>

        <p className="mb-12 text-pretty text-lg text-white/80 md:text-xl lg:text-2xl">
          A guided workbook and community to help you learn practical finance skills while implementing them in real
          life
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full bg-[#D9CBB5] text-[#0A1A2F] hover:bg-[#C99663] hover:text-white sm:w-auto"
            asChild
          >
            <a href="#waitlist">
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 sm:w-auto"
            asChild
          >
            <a href="#how-it-works">Learn How It Works</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
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
    </section>
  )
}
