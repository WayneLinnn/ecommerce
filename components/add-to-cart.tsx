"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export function AddToCart({ productId }: { productId: string }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
        >
          <MinusIcon />
        </Button>
        <span className="w-10 text-center tabular-nums">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity((value) => value + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
      <Button onClick={() => addItem(productId, quantity)}>Add to cart</Button>
    </div>
  )
}
