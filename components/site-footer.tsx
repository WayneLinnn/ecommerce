import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <p className="font-heading">NORI</p>
          <p className="text-muted-foreground">
            Objects for everyday rooms. Practice storefront — checkout does not
            charge you.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Help</p>
          <Link href="/about" className="text-muted-foreground hover:underline">
            Shipping
          </Link>
          <Link href="/about" className="text-muted-foreground hover:underline">
            Returns
          </Link>
          <a href="mailto:hello@nori.example" className="text-muted-foreground hover:underline">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Shop</p>
          <Link href="/products" className="text-muted-foreground hover:underline">
            All products
          </Link>
          <Link
            href="/products?category=Lighting"
            className="text-muted-foreground hover:underline"
          >
            Lighting
          </Link>
          <Link href="/about" className="text-muted-foreground hover:underline">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
