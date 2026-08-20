import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getNewProducts } from "@/lib/products"

export function SeasonGrid() {
  const items = getNewProducts()

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-heading text-xl">New this season</h2>
        <Button variant="link" nativeButton={false} render={<Link href="/products" />}>
          View all
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
