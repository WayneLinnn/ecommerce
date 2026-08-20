"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice, isOnSale, type Product } from "@/lib/products"

export function StickyBuyBar({ product }: { product: Product }) {
  const { addItem } = useCart()
  const sale = isOnSale(product)

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background p-3 md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <p className="font-medium">{formatPrice(product.price)}</p>
          {sale && product.compareAtPrice ? (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </p>
          ) : null}
        </div>
        <Button onClick={() => addItem(product.id)}>Add to cart</Button>
      </div>
    </div>
  )
}
