import { Shield, BookCheck, Sparkles } from "lucide-react"

const credentials = [
  {
    icon: BookCheck,
    title: "Structured Methodology",
    description: "Built on proven financial education principles",
  },
  {
    icon: Shield,
    title: "Expert-Guided",
    description: "Developed with input from finance professionals",
  },
  {
    icon: Sparkles,
    title: "Beginner-Friendly",
    description: "No prior knowledge required to get started",
  },
]

export function TrustSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-balance text-center text-3xl font-bold text-[#0A1A2F] md:text-4xl">
          Built on Solid Foundations
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {credentials.map((credential, index) => {
            const Icon = credential.icon
            return (
              <div key={index} className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C99663]/10">
                  <Icon className="h-7 w-7 text-[#C99663]" />
                </div>
                <h3 className="mb-2 font-semibold text-[#0A1A2F]">{credential.title}</h3>
                <p className="text-sm text-muted-foreground">{credential.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
