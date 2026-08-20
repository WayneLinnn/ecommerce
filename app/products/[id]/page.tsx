import Link from "next/link"
import { notFound } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProductBuyBox } from "@/components/product/product-buy-box"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductReviews } from "@/components/product/product-reviews"
import { RelatedProducts } from "@/components/product/related-products"
import { StickyBuyBar } from "@/components/product/sticky-buy-bar"
import { getProduct } from "@/lib/products"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 pb-24 md:pb-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/products" />}>Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery product={product} />
        <div className="flex flex-col gap-6">
          <ProductBuyBox product={product} />
          <Tabs defaultValue="desc">
            <TabsList>
              <TabsTrigger value="desc">Details</TabsTrigger>
              <TabsTrigger value="spec">Specs</TabsTrigger>
            </TabsList>
            <TabsContent value="desc">{product.description}</TabsContent>
            <TabsContent value="spec">{product.spec}</TabsContent>
          </Tabs>
        </div>
      </div>
      <ProductReviews product={product} />
      <RelatedProducts product={product} />
      <StickyBuyBar product={product} />
    </div>
  )
}
