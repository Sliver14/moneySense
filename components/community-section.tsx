import { MessageSquare, Target, UsersRound } from "lucide-react"
import { FadeIn } from "./fade-in"

const benefits = [
  {
    icon: UsersRound,
    title: "Guided Community Access",
    description: "Connect with others who are learning and implementing alongside you",
  },
  {
    icon: Target,
    title: "Progress Check-ins",
    description: "Regular touchpoints to keep you on track and accountable",
  },
  {
    icon: MessageSquare,
    title: "Shared Learning",
    description: "Learn from others' experiences and share your own insights",
  },
]

export function CommunitySection() {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <FadeIn className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-balance text-center text-3xl font-bold text-[#0A1A2F] md:text-4xl">
          Community & Accountability
        </h2>
        <p className="mb-12 text-pretty text-center text-muted-foreground md:text-lg">
          A calm, structured environment designed to support your financial journey—not social media noise
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9CBB5]/20">
                    <Icon className="h-6 w-6 text-[#C99663]" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0A1A2F]">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
