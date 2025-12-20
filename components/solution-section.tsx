import { Check } from "lucide-react"

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
    <section id="features" className="px-4 py-20 bg-white font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A1A2F]">
            A Clear Path to <br />
            <span className="text-[#C99663]">Financial Clarity</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const isHighlighted = index === 1 // Matches the 2nd card in the image

            return (
              <div
                key={index}
                className="flex flex-col items-start text-left p-10 rounded-[40px] transition-all duration-300 bg-[#F8F8F8] hover:bg-[#C99663] w-full"
              >
                {/* Icon Circle - Dark circle with white check */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/50 shadow-lg">
                  <Check className="h-6 w-6 text-black stroke-[3px]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-[#0A1A2F] mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#0A1A2F] text-base font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}