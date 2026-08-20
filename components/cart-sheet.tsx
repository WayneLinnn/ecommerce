"use client"

import Image from "next/image"
import Link from "next/link"
import { MinusIcon, PlusIcon, ShoppingBagIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import {
  FREE_SHIPPING_MIN,
  formatPrice,
  getCartSuggestions,
} from "@/lib/products"

export function CartSheet() {
  const { items, open, setOpen, setQuantity, removeItem, addItem, totalPrice } =
    useCart()
  const remaining = Math.max(0, FREE_SHIPPING_MIN - totalPrice)
  const suggestions = getCartSuggestions(
    items.map((item) => item.product.id)
  )

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            {items.length
              ? remaining
                ? `${formatPrice(remaining)} more for free shipping.`
                : "Free shipping unlocked."
              : "Your cart is empty."}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          {items.length === 0 ? (
            <Empty className="border">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <ShoppingBagIcon />
                </EmptyMedia>
                <EmptyTitle>Nothing here yet</EmptyTitle>
                <EmptyDescription>Pick something from the shop.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button
                  nativeButton={false}
                  render={<Link href="/products" />}
                  onClick={() => setOpen(false)}
                >
                  Browse
                </Button>
              </EmptyContent>
            </Empty>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={item.product.image}
                      alt={item.product.imageAlt}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="truncate font-medium">{item.product.name}</p>
                      <p className="text-muted-foreground">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <Badge variant="secondary">{item.product.category}</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() =>
                        setQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      <MinusIcon />
                    </Button>
                    <span className="w-8 text-center text-sm tabular-nums">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() =>
                        setQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2Icon />
                    <span className="sr-only">Remove {item.product.name}</span>
                  </Button>
                </div>
                <Separator />
              </div>
            ))
          )}
          {suggestions.length > 0 ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Add a small object</p>
              {suggestions.map((product) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => addItem(product.id)}>
                    Add
                  </Button>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        {items.length > 0 ? (
          <SheetFooter>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-medium">{formatPrice(totalPrice)}</span>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/checkout" />}
              onClick={() => setOpen(false)}
            >
              Checkout
            </Button>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
