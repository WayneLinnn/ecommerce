import Link from "next/link"
import { CircleCheckIcon } from "lucide-react"

import { CheckoutProgress } from "@/components/checkout-progress"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl px-4 py-16">
      <Empty className="mx-auto max-w-md border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <CircleCheckIcon />
          </EmptyMedia>
          <CheckoutProgress current={3} />
          <EmptyTitle>Order noted</EmptyTitle>
          <EmptyDescription>
            Step 3 of 3 is done. No payment was taken, and your cart is empty.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button nativeButton={false} render={<Link href="/products" />}>
            Keep browsing
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
