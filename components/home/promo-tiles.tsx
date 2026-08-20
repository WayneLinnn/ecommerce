import Image from "next/image"
import Link from "next/link"

import { promoTiles } from "@/lib/catalog"

export function PromoTiles() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {promoTiles.map((tile) => (
        <Link
          key={tile.id}
          href={tile.href}
          className="relative overflow-hidden rounded-xl ring-1 ring-foreground/10"
        >
          <div className="relative aspect-[16/9] bg-muted">
            <Image
              src={tile.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end gap-1 p-6 text-background">
            <h2 className="font-heading text-2xl">{tile.title}</h2>
            <p className="text-sm text-background/80">{tile.description}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}
