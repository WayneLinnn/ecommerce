import { products, type Category, type Product } from "@/lib/products"

export type HeroSlide = {
  id: string
  eyebrow: string
  title: string
  description: string
  href: string
  cta: string
  image: string
  imageAlt: string
}

export type CategoryTile = {
  name: Category
  href: string
  blurb: string
  image: string
  imageAlt: string
}

function productImage(id: string) {
  return products.find((item) => item.id === id)?.image ?? ""
}

export const heroSlides: HeroSlide[] = [
  {
    id: "lighting",
    eyebrow: "This season",
    title: "Fall lighting",
    description: "Desk lamps and pendants for shorter evenings.",
    href: "/products?category=Lighting",
    cta: "Shop lighting",
    image: productImage("paper-pendant"),
    imageAlt: "Paper pendant lights",
  },
  {
    id: "kitchen",
    eyebrow: "Restock",
    title: "Kitchen, quietly",
    description: "Boards, bowls, and a mug that earns the counter.",
    href: "/products?category=Kitchen",
    cta: "Shop kitchen",
    image: productImage("stoneware-bowl"),
    imageAlt: "Stoneware bowls",
  },
  {
    id: "shipping",
    eyebrow: "Offer",
    title: "Free shipping over $80",
    description: "Applies at checkout. Practice store — no real charges.",
    href: "/products",
    cta: "Browse the shop",
    image: productImage("floor-lamp"),
    imageAlt: "Reading corner with a floor lamp",
  },
]

export const categoryTiles: CategoryTile[] = [
  {
    name: "Lighting",
    href: "/products?category=Lighting",
    blurb: "Desks, tables, and one lamp for the room.",
    image: productImage("brass-lamp"),
    imageAlt: "Brass desk lamp",
  },
  {
    name: "Kitchen",
    href: "/products?category=Kitchen",
    blurb: "Boards, bowls, a mug you will not hide.",
    image: productImage("ceramic-mug"),
    imageAlt: "Ceramic mug",
  },
  {
    name: "Textiles",
    href: "/products?category=Textiles",
    blurb: "Aprons, napkins, a throw for the sofa.",
    image: productImage("wool-throw"),
    imageAlt: "Wool throw",
  },
  {
    name: "Stationery",
    href: "/products?category=Stationery",
    blurb: "Paper, clips, and a tray for the desk.",
    image: productImage("notebook"),
    imageAlt: "Notebook",
  },
]

export const promoTiles = [
  {
    id: "under-30",
    title: "Under $30",
    description: "Small objects that still earn a place.",
    href: "/products?price=under-30",
    image: productImage("notebook"),
  },
  {
    id: "sale",
    title: "On sale",
    description: "A few pieces marked down this week.",
    href: "/products?sale=1",
    image: productImage("oak-board"),
  },
]

export const categoryCopy: Record<Category, string> = {
  Lighting: "Lamps for desks, tables, and a single reading corner.",
  Kitchen: "Boards, bowls, and cups that stay out on the counter.",
  Textiles: "Cloth for cooking, the table, and the sofa.",
  Stationery: "Paper and trays for a desk that still looks finished.",
}

export const popularProducts: Product[] = products.filter((item) =>
  ["brass-lamp", "ceramic-mug", "notebook"].includes(item.id)
)
