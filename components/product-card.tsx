"use client"

import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { ProductVisual } from "@/components/product-visual"
import { formatPrice, isOnSale, type Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const sale = isOnSale(product)

  return (
    <Card className="group h-full pt-0">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative">
          <ProductVisual product={product} enableHover />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {product.isNew ? <Badge>New</Badge> : null}
            {sale ? <Badge variant="secondary">Sale</Badge> : null}
            {product.lowStock ? <Badge variant="outline">Low stock</Badge> : null}
          </div>
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-baseline gap-2">
          <p className="font-medium">{formatPrice(product.price)}</p>
          {sale && product.compareAtPrice ? (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </p>
          ) : null}
        </CardContent>
      </Link>
      <CardContent className="pt-0">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={(event) => {
            event.preventDefault()
            addItem(product.id)
          }}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  )
}
