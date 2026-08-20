"use client"

import { useState } from "react"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FREE_SHIPPING_MIN, formatPrice } from "@/lib/products"

export function PromoBar() {
  const [open, setOpen] = useState(true)

  if (!open) {
    return null
  }

  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-center gap-2 px-4 text-xs sm:text-sm">
        <p>
          Free shipping over {formatPrice(FREE_SHIPPING_MIN)}. Practice store —
          nothing ships.
        </p>
        <Button
          variant="ghost"
          size="icon-xs"
          className="text-background hover:bg-background/10 hover:text-background"
          onClick={() => setOpen(false)}
        >
          <XIcon />
          <span className="sr-only">Dismiss offer</span>
        </Button>
      </div>
    </div>
  )
}
