"use client"

import { useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { LayoutGridIcon, PackageSearchIcon, Rows3Icon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ProductCard } from "@/components/product-card"
import { popularProducts, categoryCopy } from "@/lib/catalog"
import {
  categories,
  isOnSale,
  products,
  shopCategories,
  type Category,
} from "@/lib/products"
import { cn } from "@/lib/utils"

const sortItems = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Name", value: "name" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
]

const priceItems = [
  { label: "Any price", value: "any" },
  { label: "Under $30", value: "under-30" },
  { label: "$30–$80", value: "30-80" },
  { label: "$80+", value: "80-plus" },
]

const PAGE_SIZE = 6

export function ProductCatalog() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q")?.trim() ?? ""
  const categoryParam = searchParams.get("category")
  const category: Category | "All" =
    categoryParam && shopCategories.includes(categoryParam as Category)
      ? (categoryParam as Category)
      : "All"
  const saleOnly = searchParams.get("sale") === "1"
  const price = searchParams.get("price") ?? "any"
  const [sort, setSort] = useState("featured")
  const [view, setView] = useState<"compact" | "comfortable">("compact")
  const [visible, setVisible] = useState(PAGE_SIZE)

  function updateParams(patch: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString())
    for (const [key, value] of Object.entries(patch)) {
      if (!value || value === "any" || value === "All") {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    }
    const next = params.toString()
    router.replace(next ? `/products?${next}` : "/products")
    setVisible(PAGE_SIZE)
  }

  const list = useMemo(() => {
    const needle = query.toLowerCase()
    let next = products.filter((product) => {
      const matchCategory = category === "All" || product.category === category
      const matchQuery =
        !needle ||
        product.name.toLowerCase().includes(needle) ||
        product.summary.toLowerCase().includes(needle) ||
        product.category.toLowerCase().includes(needle)
      const matchSale = !saleOnly || isOnSale(product)
      const matchPrice =
        price === "any" ||
        (price === "under-30" && product.price < 30) ||
        (price === "30-80" && product.price >= 30 && product.price <= 80) ||
        (price === "80-plus" && product.price > 80)
      return matchCategory && matchQuery && matchSale && matchPrice
    })

    if (sort === "price-asc") {
      next = [...next].sort((a, b) => a.price - b.price)
    } else if (sort === "price-desc") {
      next = [...next].sort((a, b) => b.price - a.price)
    } else if (sort === "newest") {
      next = [...next].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    } else if (sort === "name") {
      next = [...next].sort((a, b) => a.name.localeCompare(b.name))
    }
    return next
  }, [category, price, query, saleOnly, sort])

  const chips = [
    category !== "All" ? { key: "category", label: category } : null,
    saleOnly ? { key: "sale", label: "On sale" } : null,
    price !== "any"
      ? { key: "price", label: priceItems.find((item) => item.value === price)?.label ?? price }
      : null,
    query ? { key: "q", label: `“${query}”` } : null,
  ].filter(Boolean) as Array<{ key: string; label: string }>

  const shown = list.slice(0, visible)

  return (
    <div className="flex flex-col gap-6">
      {category !== "All" ? (
        <div className="rounded-xl bg-muted/50 p-4">
          <p className="font-heading text-lg">{category}</p>
          <p className="text-sm text-muted-foreground">{categoryCopy[category]}</p>
        </div>
      ) : null}
      <div className="flex flex-col gap-4">
        <ToggleGroup
          value={[category]}
          onValueChange={(value) => {
            if (value[0]) {
              updateParams({ category: value[0] })
            }
          }}
          spacing={0}
          className="flex-wrap"
        >
          {categories.map((item) => (
            <ToggleGroupItem key={item} value={item} variant="outline">
              {item}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ToggleGroup
            value={[price]}
            onValueChange={(value) => {
              if (value[0]) {
                updateParams({ price: value[0] })
              }
            }}
            spacing={0}
            className="flex-wrap"
          >
            {priceItems.map((item) => (
              <ToggleGroupItem key={item.value} value={item.value} variant="outline">
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Field orientation="horizontal" className="w-fit">
            <Checkbox
              id="sale"
              checked={saleOnly}
              onCheckedChange={(checked) =>
                updateParams({ sale: checked ? "1" : null })
              }
            />
            <FieldLabel htmlFor="sale">On sale</FieldLabel>
          </Field>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Select
            items={sortItems}
            value={sort}
            onValueChange={(value) => {
              if (typeof value === "string") {
                setSort(value)
              }
            }}
          >
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectGroup>
                {sortItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <ToggleGroup
            value={[view]}
            onValueChange={(value) => {
              if (value[0] === "compact" || value[0] === "comfortable") {
                setView(value[0])
              }
            }}
          >
            <ToggleGroupItem value="compact" variant="outline" aria-label="Compact grid">
              <LayoutGridIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="comfortable"
              variant="outline"
              aria-label="Larger grid"
            >
              <Rows3Icon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      {chips.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          {chips.map((chip) => (
            <Badge key={chip.key} variant="secondary">
              {chip.label}
              <button
                type="button"
                className="ml-1"
                onClick={() => updateParams({ [chip.key]: null })}
              >
                ×
              </button>
            </Badge>
          ))}
          <Button variant="link" className="h-auto px-1" onClick={() => router.replace("/products")}>
            Clear all
          </Button>
        </div>
      ) : null}
      <p className="text-sm text-muted-foreground">
        {list.length} {list.length === 1 ? "item" : "items"}
      </p>
      {list.length === 0 ? (
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <PackageSearchIcon />
            </EmptyMedia>
            <EmptyTitle>No matches</EmptyTitle>
            <EmptyDescription>
              Try another filter, or start from these popular pieces.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => router.replace("/products")}>Reset filters</Button>
          </EmptyContent>
        </Empty>
      ) : (
        <div
          className={cn(
            "grid gap-4",
            view === "comfortable"
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {shown.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {list.length === 0 ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : null}
      {shown.length < list.length ? (
        <Button variant="outline" className="self-center" onClick={() => setVisible((n) => n + PAGE_SIZE)}>
          Load more
        </Button>
      ) : null}
    </div>
  )
}
