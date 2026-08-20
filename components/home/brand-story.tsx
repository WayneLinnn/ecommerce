import Link from "next/link"

import { Button } from "@/components/ui/button"

export function BrandStory() {
  return (
    <section className="flex flex-col gap-4 rounded-xl bg-muted/50 p-6 md:flex-row md:items-end md:justify-between">
      <div className="flex max-w-xl flex-col gap-2">
        <p className="text-sm text-muted-foreground">The shop</p>
        <h2 className="font-heading text-2xl tracking-tight">Fewer objects, used daily.</h2>
        <p className="text-muted-foreground">
          NORI edits lighting, kitchen, cloth, and paper. Nothing here is a
          gadget. If it does not earn a place in the room, it does not ship.
        </p>
      </div>
      <Button nativeButton={false} render={<Link href="/about" />}>
        About NORI
      </Button>
    </section>
  )
}
