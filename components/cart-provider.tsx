"use client"

import * as React from "react"

import { toast } from "@/components/ui/toast"
import { products, type Product } from "@/lib/products"

export type CartItem = {
  product: Product
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  open: boolean
  setOpen: (open: boolean) => void
  addItem: (productId: string, quantity?: number) => void
  setQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clear: () => void
  totalCount: number
  totalPrice: number
}

const CartContext = React.createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([])
  const [open, setOpen] = React.useState(false)

  const addItem = React.useCallback((productId: string, quantity = 1) => {
    const product = products.find((item) => item.id === productId)
    if (!product) {
      return
    }

    setItems((current) => {
      const existing = current.find((item) => item.product.id === productId)
      if (existing) {
        return current.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...current, { product, quantity }]
    })
    setOpen(true)
    toast.add({
      title: "Added to cart",
      description: product.name,
      type: "success",
    })
  }, [])

  const setQuantity = React.useCallback((productId: string, quantity: number) => {
    setItems((current) => {
      if (quantity < 1) {
        return current.filter((item) => item.product.id !== productId)
      }
      return current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    })
  }, [])

  const removeItem = React.useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.product.id !== productId))
  }, [])

  const clear = React.useCallback(() => {
    setItems([])
  }, [])

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const value = React.useMemo(
    () => ({
      items,
      open,
      setOpen,
      addItem,
      setQuantity,
      removeItem,
      clear,
      totalCount,
      totalPrice,
    }),
    [items, open, addItem, setQuantity, removeItem, clear, totalCount, totalPrice]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
