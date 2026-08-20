import { ProductCard } from "@/components/product-card"
import { getRelatedProducts, type Product } from "@/lib/products"

export function RelatedProducts({ product }: { product: Product }) {
  const related = getRelatedProducts(product)

  if (!related.length) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-heading text-xl">You may also like</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  )
}
