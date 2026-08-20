import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { TrustBar } from "@/components/home/trust-bar"

export const metadata: Metadata = {
  title: "About · NORI",
}

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">About</p>
        <h1 className="font-heading text-3xl tracking-tight">
          Objects for everyday rooms.
        </h1>
        <p className="text-muted-foreground">
          NORI is a small edit of lighting, kitchenware, textiles, and paper.
          The storefront is a practice project: you can browse and check out,
          but nothing is charged or shipped.
        </p>
      </div>
      <TrustBar />
      <section className="flex flex-col gap-2">
        <h2 className="font-heading text-xl">Shipping</h2>
        <p className="text-muted-foreground">
          Orders over $80 include free shipping in this demo. Stated transit is
          five to seven days. No parcels actually leave a warehouse.
        </p>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="font-heading text-xl">Returns</h2>
        <p className="text-muted-foreground">
          Thirty days, unused, in the original packing — the policy a real shop
          would print. Here it is copy only.
        </p>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="font-heading text-xl">Contact</h2>
        <p className="text-muted-foreground">
          hello@nori.example — a placeholder address.
        </p>
      </section>
      <Button nativeButton={false} render={<Link href="/products" />} className="w-fit">
        Shop the edit
      </Button>
    </div>
  )
}
