import { Separator } from "@/components/ui/separator"
import { averageRating, type Product } from "@/lib/products"

export function ProductReviews({ product }: { product: Product }) {
  const rating = averageRating(product)

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-lg">Reviews</h2>
        <p className="text-sm text-muted-foreground">
          {rating.toFixed(1)} / 5 · {product.reviews.length}{" "}
          {product.reviews.length === 1 ? "review" : "reviews"}
        </p>
      </div>
      {product.reviews.map((review) => (
        <div key={review.author} className="flex flex-col gap-1">
          <p className="font-medium">{review.author}</p>
          <p className="text-sm text-muted-foreground">{review.rating} / 5</p>
          <p className="text-sm">{review.content}</p>
          <Separator />
        </div>
      ))}
    </section>
  )
}
