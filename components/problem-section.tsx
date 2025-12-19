import { AlertCircle } from "lucide-react"

const problems = [
  {
    title: "No clear plan for managing money",
    image: "https://thumbs.dreamstime.com/b/woman-feeling-financial-stress-shocking-debt-bill-shocked-overwhelmed-unexpected-checking-finances-laptop-405272244.jpg",
  },
  {
    title: "Confused about saving, spending, and investing",
    image: "https://media.istockphoto.com/id/1197547551/photo/upset-frustrated-young-man-holding-reading-postal-mail-letter.jpg?s=612x612&w=0&k=20&c=i7PNqwMEmgFBzwZI5KNsaBtrc_Q0q7hYwgQYivrrgAo=",
  },
  {
    title: "Know the theory but struggle to take action",
    image: "https://media.istockphoto.com/id/1407891589/vector/stressed-man-having-financial-problems.jpg?s=612x612&w=0&k=20&c=ekcvUT25Ji7DVCGveqIXBAPm8Aewg2bt2tj2sJLmgKs=",
  },
  {
    title: "Feel overwhelmed by financial jargon and complexity",
    image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/female-looking-at-bills-1296-728-header.jpg?w=1155&h=1528",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-balance text-center text-3xl font-bold text-[#0A1A2F] md:text-4xl">
          You're Not Alone
        </h2>
        <p className="mb-12 text-center text-[#0A1A2F]/80 md:text-lg">
          Most young people feel the same way about money
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all hover:border-[#C99663]/50 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="mt-1 h-7 w-7 flex-shrink-0 text-[#C99663]" />
                  <p className="text-lg font-medium text-white md:text-xl">
                    {problem.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}