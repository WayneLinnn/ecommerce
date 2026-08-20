"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0)
  const current = product.gallery[active] ?? product.image

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <Image
          src={current}
          alt={product.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex gap-2">
        {product.gallery.map((src, index) => (
          <button
            key={src + index}
            type="button"
            className={cn(
              "relative size-16 overflow-hidden rounded-lg ring-1 ring-foreground/10",
              index === active && "ring-2 ring-foreground"
            )}
            onClick={() => setActive(index)}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="64px" />
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{product.credit}</p>
    </div>
  )
}
