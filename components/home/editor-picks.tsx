import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { formatPrice, getEditorPicks } from "@/lib/products"

export function EditorPicks() {
  const { primary, secondary } = getEditorPicks()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-heading text-xl">Editor’s picks</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <Link href={`/products/${primary.id}`} className="group relative overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <div className="relative aspect-[4/3] bg-muted">
            <Image
              src={primary.image}
              alt={primary.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-1 p-4">
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-lg">{primary.name}</h3>
              {primary.isNew ? <Badge>New</Badge> : null}
            </div>
            <p className="text-sm text-muted-foreground">{primary.summary}</p>
            <p className="font-medium">{formatPrice(primary.price)}</p>
          </div>
        </Link>
        <div className="flex flex-col gap-4">
          {secondary.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex min-h-0 flex-1 overflow-hidden rounded-xl ring-1 ring-foreground/10"
            >
              <div className="relative w-40 shrink-0 bg-muted sm:w-56">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div className="flex flex-col justify-center gap-1 p-4">
                <p className="font-heading">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <p className="font-medium">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
