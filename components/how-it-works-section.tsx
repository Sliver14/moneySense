import { BookOpen, PenTool, TrendingUp, Users } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Learn",
    description: "Short, simple lessons on essential money concepts",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Apply",
    description: "Complete guided workbook exercises designed for action",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Track",
    description: "Monitor your progress and reflect on your financial journey",
  },
  {
    icon: Users,
    number: "04",
    title: "Stay Accountable",
    description: "Join a community of learners supporting each other",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-balance text-center text-3xl font-bold text-[#0A1A2F] md:text-4xl">How It Works</h2>
        <p className="mb-16 text-center text-muted-foreground md:text-lg">
          A simple, structured approach to financial education
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#527967]/10 shadow-sm">
                      <Icon className="h-8 w-8 text-[#527967]" />
                    </div>
                    <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#C99663] text-sm font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#0A1A2F]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
