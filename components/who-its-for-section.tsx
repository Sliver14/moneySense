import { GraduationCap, Briefcase, Users2 } from "lucide-react"

const audiences = [
  {
    icon: GraduationCap,
    title: "University Students",
    description: "Learn to manage money before entering the workforce",
  },
  {
    icon: Users2,
    title: "Recent Graduates",
    description: "Build a strong financial foundation early in your career",
  },
  {
    icon: Briefcase,
    title: "Early-Career Professionals",
    description: "Take control of your finances as your income grows",
  },
]

export function WhoItsForSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-balance text-center text-3xl font-bold text-[#0A1A2F] md:text-4xl">Who It's For</h2>
        <p className="mb-12 text-center text-muted-foreground md:text-lg">
          Designed specifically for young people starting their financial journey
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div key={index} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#527967]/10">
                    <Icon className="h-7 w-7 text-[#527967]" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0A1A2F]">{audience.title}</h3>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl border-2 border-[#D9CBB5] bg-[#D9CBB5]/10 p-8 text-center">
          <p className="text-lg font-semibold text-[#0A1A2F]">You don't need prior financial knowledge.</p>
          <p className="mt-2 text-muted-foreground">Everything is explained from the ground up in plain language.</p>
        </div>
      </div>
    </section>
  )
}
