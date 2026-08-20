"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, UserIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { toast } from "@/components/ui/toast"
import { CartSheet } from "@/components/cart-sheet"
import { SearchBox } from "@/components/search-box"
import { useCart } from "@/components/cart-provider"
import { shopCategories } from "@/lib/products"
import { ShoppingBagIcon } from "lucide-react"

const nav = [
  { href: "/products", label: "Shop" },
  ...shopCategories.map((item) => ({
    href: `/products?category=${item}`,
    label: item,
  })),
  { href: "/about", label: "About" },
]

export function SiteHeader() {
  const { setOpen, totalCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4">
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
          <span className="sr-only">Open menu</span>
        </Button>
        <Link href="/" className="font-heading shrink-0 font-medium tracking-tight">
          NORI
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Button
              key={item.href + item.label}
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link href={item.href} />}
            >
              {item.label}
            </Button>
          ))}
        </nav>
        <div className="ml-auto hidden w-full max-w-xs sm:block">
          <SearchBox />
        </div>
        <Separator orientation="vertical" className="hidden h-5 sm:block" />
        <Button
          variant="ghost"
          size="sm"
          className="hidden sm:inline-flex"
          onClick={() =>
            toast.add({
              title: "Accounts are not wired yet",
              description: "Sign in is a placeholder for this practice shop.",
              type: "info",
            })
          }
        >
          <UserIcon data-icon="inline-start" />
          Sign in
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          className="shrink-0"
        >
          <ShoppingBagIcon data-icon="inline-start" />
          Cart
          {totalCount > 0 ? <Badge variant="secondary">{totalCount}</Badge> : null}
        </Button>
        <CartSheet />
      </div>
      <div className="border-t px-4 py-2 sm:hidden">
        <SearchBox />
      </div>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle>NORI</SheetTitle>
            <SheetDescription>Shop by category</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {nav.map((item) => (
              <Button
                key={item.href + item.label}
                variant="ghost"
                className="justify-start"
                nativeButton={false}
                render={<Link href={item.href} />}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
