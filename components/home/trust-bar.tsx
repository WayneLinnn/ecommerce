import { PackageIcon, RefreshCcwIcon, TruckIcon } from "lucide-react"

const items = [
  {
    title: "Shipping",
    text: "Free over $80. Five to seven days in this practice shop.",
    icon: TruckIcon,
  },
  {
    title: "Returns",
    text: "30 days. Unused, in the original packing.",
    icon: RefreshCcwIcon,
  },
  {
    title: "Packed with care",
    text: "Paper, not plastic. Objects arrive the way they left the shelf.",
    icon: PackageIcon,
  },
]

export function TrustBar() {
  return (
    <section className="grid gap-4 rounded-xl border p-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="flex gap-3">
          <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          <div className="flex flex-col gap-1">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
