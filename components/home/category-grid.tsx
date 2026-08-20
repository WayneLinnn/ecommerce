import Image from "next/image"
import Link from "next/link"

import { categoryTiles } from "@/lib/catalog"

export function CategoryGrid() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-heading text-xl">Shop by category</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryTiles.map((tile) => (
          <Link
            key={tile.name}
            href={tile.href}
            className="group relative overflow-hidden rounded-xl ring-1 ring-foreground/10"
          >
            <div className="relative aspect-[4/5] bg-muted">
              <Image
                src={tile.image}
                alt={tile.imageAlt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-foreground/25" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 text-background">
              <p className="font-heading text-lg">{tile.name}</p>
              <p className="text-sm text-background/80">{tile.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
