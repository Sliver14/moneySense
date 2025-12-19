import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Guided Workbook",
    description: "Practical exercises designed to help you take action, not just learn theory",
  },
  {
    title: "Step-by-Step Learning",
    description: "Break down complex financial concepts into simple, manageable steps",
  },
  {
    title: "Action-Based",
    description: "Apply what you learn immediately with real-world implementation tasks",
  },
  {
    title: "Community Accountability",
    description: "Stay motivated and supported by others on the same journey",
  },
]

export function SolutionSection() {
  return (
    <section id="features" className="bg-gray-50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-balance text-center text-3xl font-bold text-[#0A1A2F] md:text-4xl">
          A Clear Path to Financial Clarity
        </h2>
        <p className="mb-12 text-pretty text-center text-muted-foreground md:text-lg">
          This isn't another finance blog. It's a structured system to help you learn and implement at the same time.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#527967]" />
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[#0A1A2F]">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
