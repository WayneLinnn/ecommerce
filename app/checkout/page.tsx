"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingBagIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"
import { useCart } from "@/components/cart-provider"
import { CheckoutProgress } from "@/components/checkout-progress"
import { formatPrice } from "@/lib/products"

const cityItems = [
  { label: "Select a city", value: null },
  { label: "New York", value: "new-york" },
  { label: "Los Angeles", value: "los-angeles" },
  { label: "Chicago", value: "chicago" },
  { label: "Seattle", value: "seattle" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clear } = useCart()
  const [city, setCity] = React.useState<string | null>(null)
  const [errors, setErrors] = React.useState<Record<string, boolean>>({})

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-6xl px-4 py-16">
        <Empty className="mx-auto max-w-md border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <ShoppingBagIcon />
            </EmptyMedia>
            <EmptyTitle>Nothing to check out</EmptyTitle>
            <EmptyDescription>
              Add an item from the shop or your cart first.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button nativeButton={false} render={<Link href="/products" />}>
              Go shopping
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    )
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") ?? "").trim()
    const phone = String(form.get("phone") ?? "").trim()
    const address = String(form.get("address") ?? "").trim()
    const nextErrors = {
      name: !name,
      phone: !phone,
      city: !city,
      address: !address,
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) {
      toast.add({
        title: "Complete the shipping details",
        description: "Name, phone, city, and address are required.",
        type: "error",
      })
      return
    }

    clear()
    toast.add({
      title: "Order placed",
      description: "Practice store — nothing will ship.",
      type: "success",
    })
    router.push("/checkout/success")
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[1fr_20rem]">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <CheckoutProgress current={1} />
          <h1 className="font-heading text-3xl tracking-tight">Checkout</h1>
          <p className="text-muted-foreground">
            Step 1 of 3 — shipping. Submit to place the practice order.
          </p>
        </div>
        <FieldGroup>
          <Field data-invalid={errors.name || undefined}>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              name="name"
              aria-invalid={errors.name || undefined}
              placeholder="Jane Chen"
            />
          </Field>
          <Field data-invalid={errors.phone || undefined}>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              id="phone"
              name="phone"
              aria-invalid={errors.phone || undefined}
              placeholder="(555) 010-1234"
            />
          </Field>
          <Field data-invalid={errors.city || undefined}>
            <FieldLabel>City</FieldLabel>
            <Select
              items={cityItems}
              value={city}
              onValueChange={(value) => {
                setCity(typeof value === "string" ? value : null)
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                <SelectGroup>
                  {cityItems.map((item) => (
                    <SelectItem key={String(item.value)} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.city ? (
              <FieldDescription>Choose a delivery city.</FieldDescription>
            ) : null}
          </Field>
          <Field data-invalid={errors.address || undefined}>
            <FieldLabel htmlFor="address">Street address</FieldLabel>
            <Textarea
              id="address"
              name="address"
              aria-invalid={errors.address || undefined}
              placeholder="Street, apartment, notes"
            />
          </Field>
        </FieldGroup>
        <Button type="submit">Place order</Button>
      </form>
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Order summary</CardTitle>
          <CardDescription>
            {items.length} {items.length === 1 ? "item type" : "item types"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.product.id} className="flex justify-between gap-3 text-sm">
              <span className="truncate">
                {item.product.name} × {item.quantity}
              </span>
              <span className="shrink-0">
                {formatPrice(item.product.price * item.quantity)}
              </span>
            </div>
          ))}
        </CardContent>
        <CardFooter className="justify-between">
          <span className="text-muted-foreground">Total</span>
          <span className="font-medium">{formatPrice(totalPrice)}</span>
        </CardFooter>
      </Card>
    </div>
  )
}
