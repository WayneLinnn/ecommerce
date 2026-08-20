"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AddToCart } from "@/components/add-to-cart"
import { formatPrice, isOnSale, type Product } from "@/lib/products"

export function ProductBuyBox({ product }: { product: Product }) {
  const [finish, setFinish] = useState(product.finish)
  const sale = isOnSale(product)
  const finishes = [product.finish]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-1">
        <Badge variant="secondary">{product.category}</Badge>
        {product.isNew ? <Badge>New</Badge> : null}
        {sale ? <Badge variant="outline">Sale</Badge> : null}
        {product.lowStock ? <Badge variant="outline">Low stock</Badge> : null}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl tracking-tight">{product.name}</h1>
        <div className="flex items-baseline gap-2">
          <p className="text-lg font-medium">{formatPrice(product.price)}</p>
          {sale && product.compareAtPrice ? (
            <p className="text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </p>
          ) : null}
        </div>
        <p className="text-muted-foreground">{product.summary}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Finish</p>
        <ToggleGroup
          value={[finish]}
          onValueChange={(value) => {
            if (value[0]) {
              setFinish(value[0])
            }
          }}
          spacing={0}
        >
          {finishes.map((item) => (
            <ToggleGroupItem key={item} value={item} variant="outline">
              {item}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <AddToCart productId={product.id} />
      <p className="text-sm text-muted-foreground">
        Arrives in 5–7 days · 30-day returns · Free shipping over $80
      </p>
    </div>
  )
}
