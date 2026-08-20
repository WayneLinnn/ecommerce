"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

export function ProductVisual({
  product,
  className,
  showCredit = false,
  enableHover = false,
}: {
  product: Product
  className?: string
  showCredit?: boolean
  enableHover?: boolean
}) {
  return (
    <figure className={cn("relative overflow-hidden", className)}>
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className={cn(
            "object-cover",
            enableHover && "transition-opacity group-hover:opacity-0"
          )}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {enableHover ? (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            className="object-cover opacity-0 transition-opacity group-hover:opacity-100"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : null}
      </div>
      {showCredit ? (
        <figcaption className="px-1 pt-2 text-xs text-muted-foreground">
          {product.credit}
        </figcaption>
      ) : null}
    </figure>
  )
}
