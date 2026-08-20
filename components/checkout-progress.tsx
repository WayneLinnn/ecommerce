import { cn } from "@/lib/utils"

const steps = ["Information", "Review", "Done"] as const

export function CheckoutProgress({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="flex flex-wrap gap-3 text-sm">
      {steps.map((step, index) => {
        const number = index + 1
        const active = number === current
        const done = number < current
        return (
          <li
            key={step}
            className={cn(
              "flex items-center gap-2",
              active || done ? "text-foreground" : "text-muted-foreground"
            )}
          >
            <span className="font-medium">{number}</span>
            <span>{step}</span>
          </li>
        )
      })}
    </ol>
  )
}
