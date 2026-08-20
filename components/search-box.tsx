"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { shopCategories, products } from "@/lib/products"

export function SearchBox() {
  const router = useRouter()
  const rootRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) {
      return { categories: shopCategories.slice(0, 4), products: products.slice(0, 4) }
    }
    return {
      categories: shopCategories.filter((item) =>
        item.toLowerCase().includes(needle)
      ),
      products: products
        .filter(
          (item) =>
            item.name.toLowerCase().includes(needle) ||
            item.category.toLowerCase().includes(needle)
        )
        .slice(0, 5),
    }
  }, [query])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener("pointerdown", onPointerDown)
    return () => window.removeEventListener("pointerdown", onPointerDown)
  }, [])

  function go(href: string) {
    setOpen(false)
    setQuery("")
    router.push(href)
  }

  return (
    <div ref={rootRef} className="relative w-full max-w-xs">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const nextQuery = query.trim()
          go(nextQuery ? `/products?q=${encodeURIComponent(nextQuery)}` : "/products")
        }}
      >
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            name="q"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search lamps, mugs…"
            aria-label="Search products"
            autoComplete="off"
          />
        </InputGroup>
      </form>
      {open ? (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border bg-popover p-2 text-sm shadow-md">
          <p className="px-2 py-1 text-xs text-muted-foreground">Categories</p>
          {matches.categories.length === 0 ? (
            <p className="px-2 py-1 text-muted-foreground">No categories</p>
          ) : (
            matches.categories.map((item) => (
              <button
                key={item}
                type="button"
                className="flex w-full rounded-lg px-2 py-1.5 text-left hover:bg-muted"
                onClick={() => go(`/products?category=${item}`)}
              >
                {item}
              </button>
            ))
          )}
          <p className="mt-2 px-2 py-1 text-xs text-muted-foreground">Products</p>
          {matches.products.length === 0 ? (
            <p className="px-2 py-1 text-muted-foreground">No products</p>
          ) : (
            matches.products.map((item) => (
              <button
                key={item.id}
                type="button"
                className="flex w-full rounded-lg px-2 py-1.5 text-left hover:bg-muted"
                onClick={() => go(`/products/${item.id}`)}
              >
                {item.name}
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
