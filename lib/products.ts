export type Category = "Lighting" | "Kitchen" | "Textiles" | "Stationery"

export type Review = {
  author: string
  rating: number
  content: string
}

export type Product = {
  id: string
  name: string
  category: Category
  price: number
  compareAtPrice?: number
  featured: boolean
  isNew: boolean
  lowStock: boolean
  createdAt: string
  finish: string
  summary: string
  description: string
  spec: string
  image: string
  hoverImage: string
  gallery: string[]
  imageAlt: string
  credit: string
  reviews: Review[]
}

export const FREE_SHIPPING_MIN = 80

export const shopCategories: Category[] = [
  "Lighting",
  "Kitchen",
  "Textiles",
  "Stationery",
]

export const categories: Array<Category | "All"> = ["All", ...shopCategories]

function unsplash(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`
}

function pexels(id: string) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`
}

const img = {
  brassLamp: unsplash("photo-1546361897-1032b4cae6bb"),
  pendant: unsplash("photo-1513506003901-1e6a229e2d15"),
  mug: unsplash("photo-1514228742587-6b1558fcca3d"),
  board: unsplash("photo-1765120828282-63dc950b6f90"),
  apron: pexels("4252137"),
  throw: pexels("6585753"),
  napkins: unsplash("photo-1414235077428-338989a2e8c0"),
  bowls: unsplash("photo-1610701596007-11502861dcfa"),
  notebook: unsplash("photo-1484480974693-6ca0a78fb36b"),
  clips: unsplash("photo-1456735190827-d1262f71b8a3"),
  tray: unsplash("photo-1594026112284-02bb6f3352fe"),
  floorLamp: pexels("1571460"),
}

export const products: Product[] = [
  {
    id: "brass-lamp",
    name: "Brass desk lamp",
    category: "Lighting",
    price: 86,
    featured: true,
    isNew: true,
    lowStock: false,
    createdAt: "2026-08-01",
    finish: "Brass",
    summary: "Warm light, adjustable arm. For a desk or a bedside table.",
    description:
      "Cast-iron base and a brass arm. The switch sits under the shade. Uses a standard E26 bulb; 2700K warm white is best for evening reading.",
    spec: "Height 42 cm · Base 16 cm · Cord 1.8 m",
    image: img.brassLamp,
    hoverImage: img.floorLamp,
    gallery: [img.brassLamp, img.floorLamp, img.pendant],
    imageAlt: "Brass desk lamp on a wooden table",
    credit: "Photo: Bundo Kim / Unsplash",
    reviews: [
      {
        author: "Maya L.",
        rating: 5,
        content: "Solid base. The arm stays where I put it.",
      },
      {
        author: "Owen P.",
        rating: 4,
        content: "Warm light as described. Shade is a bit small for a wide desk.",
      },
    ],
  },
  {
    id: "paper-pendant",
    name: "Paper pendant",
    category: "Lighting",
    price: 112,
    featured: true,
    isNew: false,
    lowStock: true,
    createdAt: "2026-06-12",
    finish: "Ivory",
    summary: "Light, even glow. Made for a dining table.",
    description:
      "A handmade paper shade that spreads light without glare. Hang it above the table so the food, not the fixture, stays in focus.",
    spec: "Diameter 48 cm · Height 28 cm · Canopy sold separately",
    image: img.pendant,
    hoverImage: img.brassLamp,
    gallery: [img.pendant, img.brassLamp, img.floorLamp],
    imageAlt: "Cluster of paper pendant lights",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Priya S.",
        rating: 5,
        content: "Dinner light without the glare. Packs flat, easy to assemble.",
      },
    ],
  },
  {
    id: "ceramic-mug",
    name: "Matte ceramic mug",
    category: "Kitchen",
    price: 18,
    compareAtPrice: 24,
    featured: true,
    isNew: false,
    lowStock: false,
    createdAt: "2026-05-02",
    finish: "Sand",
    summary: "A one-hand pour. Slightly tapered rim.",
    description:
      "High-fired stoneware with a glaze inside that rinses clean. About 280 ml — daily coffee or tea.",
    spec: "280 ml · Height 9.5 cm · Dishwasher safe",
    image: img.mug,
    hoverImage: img.bowls,
    gallery: [img.mug, img.bowls, img.board],
    imageAlt: "Ceramic mug on a table",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Ken T.",
        rating: 5,
        content: "Daily mug now. Rim is comfortable, glaze does not stain.",
      },
    ],
  },
  {
    id: "oak-board",
    name: "Oak cutting board",
    category: "Kitchen",
    price: 38,
    compareAtPrice: 48,
    featured: false,
    isNew: false,
    lowStock: false,
    createdAt: "2026-04-18",
    finish: "Oak",
    summary: "Chop on one side, serve on the other.",
    description:
      "North American oak with eased edges. Wipe dry and stand it up after use. Do not soak.",
    spec: "40 × 26 × 2.2 cm · Food-safe oil finish",
    image: img.board,
    hoverImage: img.tray,
    gallery: [img.board, img.tray, img.mug],
    imageAlt: "Wooden cutting boards with natural grain",
    credit: "Photo: Tadeusz Zachwieja / Unsplash",
    reviews: [
      {
        author: "Elena V.",
        rating: 4,
        content: "Heavy in a good way. Oil it once a month.",
      },
    ],
  },
  {
    id: "linen-apron",
    name: "Linen apron",
    category: "Textiles",
    price: 32,
    featured: true,
    isNew: true,
    lowStock: false,
    createdAt: "2026-08-08",
    finish: "Charcoal",
    summary: "Cross-back ties. The waist adjusts as you go.",
    description:
      "Washed linen that softens with every cycle. Front pocket for a timer and a towel. Dark cloth hides stains.",
    spec: "One size · 100% linen · Cold wash",
    image: img.apron,
    hoverImage: img.napkins,
    gallery: [img.apron, img.napkins, img.throw],
    imageAlt: "Person wearing a linen kitchen apron",
    credit: "Photo: Pexels",
    reviews: [
      {
        author: "Sofia R.",
        rating: 5,
        content: "Ties sit on the shoulders, not the neck. Washes well.",
      },
    ],
  },
  {
    id: "wool-throw",
    name: "Fine wool throw",
    category: "Textiles",
    price: 79,
    featured: false,
    isNew: false,
    lowStock: true,
    createdAt: "2026-03-22",
    finish: "Oat",
    summary: "The right weight for a sofa, not a bedspread.",
    description:
      "Light but warm. Finished edges so it does not fray. Built for rooms that run the air conditioner.",
    spec: "130 × 180 cm · 80% wool / 20% cotton",
    image: img.throw,
    hoverImage: img.napkins,
    gallery: [img.throw, img.napkins, img.apron],
    imageAlt: "Folded wool throw on a sofa",
    credit: "Photo: Pexels",
    reviews: [
      {
        author: "Daniel K.",
        rating: 5,
        content: "Not scratchy. Lives on the sofa back all week.",
      },
    ],
  },
  {
    id: "cotton-napkin",
    name: "Linen napkin set",
    category: "Textiles",
    price: 24,
    compareAtPrice: 32,
    featured: false,
    isNew: false,
    lowStock: false,
    createdAt: "2026-02-10",
    finish: "Stone",
    summary: "More presence than paper, and you can wash them.",
    description:
      "Four napkins in a close color family. They stack evenly in a drawer.",
    spec: "42 × 42 cm × 4 · Machine wash, low heat",
    image: img.napkins,
    hoverImage: img.apron,
    gallery: [img.napkins, img.apron, img.throw],
    imageAlt: "Table setting with cloth napkins",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Hana M.",
        rating: 4,
        content: "Wrinkle as linen does. Look right on the table anyway.",
      },
    ],
  },
  {
    id: "stoneware-bowl",
    name: "Stoneware bowl",
    category: "Kitchen",
    price: 22,
    featured: false,
    isNew: true,
    lowStock: false,
    createdAt: "2026-08-10",
    finish: "Ash",
    summary: "Sized for noodles or a large salad.",
    description:
      "Wheel-thrown. Each bowl has a slightly different surface. Thick rim, so it is easy to hold when warm.",
    spec: "Diameter 18 cm · Height 7 cm · Microwave safe",
    image: img.bowls,
    hoverImage: img.mug,
    gallery: [img.bowls, img.mug, img.board],
    imageAlt: "Stacked ceramic bowls",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Chris B.",
        rating: 5,
        content: "One for soup, one for breakfast. Buying a third.",
      },
    ],
  },
  {
    id: "notebook",
    name: "Stitched grid notebook",
    category: "Stationery",
    price: 12,
    featured: true,
    isNew: true,
    lowStock: false,
    createdAt: "2026-07-28",
    finish: "Slate",
    summary: "Lies flat. Lists and sketches on the same page.",
    description:
      "120 gsm paper that takes fountain ink without much bleed. Dark grey cover, no large logo.",
    spec: "A5 · 96 pages · 5 mm grid",
    image: img.notebook,
    hoverImage: img.clips,
    gallery: [img.notebook, img.clips, img.tray],
    imageAlt: "Open notebook with a checklist",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Jules A.",
        rating: 5,
        content: "Paper is thick enough. Opens flat on the desk.",
      },
    ],
  },
  {
    id: "brass-clip",
    name: "Brass clip set",
    category: "Stationery",
    price: 9,
    compareAtPrice: 14,
    featured: false,
    isNew: false,
    lowStock: false,
    createdAt: "2026-01-14",
    finish: "Brass",
    summary: "Menus, receipts, a tray that still looks finished.",
    description:
      "Six clips. They take a patina. Spring tension holds paper without chewing it.",
    spec: "Set of 6 · Width 19 mm",
    image: img.clips,
    hoverImage: img.notebook,
    gallery: [img.clips, img.notebook, img.tray],
    imageAlt: "Desk stationery and metal clips",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Nina G.",
        rating: 4,
        content: "Small luxury for a pile of mail. They tarnish, which I like.",
      },
    ],
  },
  {
    id: "desk-tray",
    name: "Beech desk tray",
    category: "Stationery",
    price: 28,
    featured: false,
    isNew: false,
    lowStock: false,
    createdAt: "2026-04-01",
    finish: "Beech",
    summary: "Keys, pens, and a cable on one plane.",
    description:
      "Low rim so you can pick things up without fishing. Soft pads underneath.",
    spec: "28 × 18 × 3 cm · Beech",
    image: img.tray,
    hoverImage: img.board,
    gallery: [img.tray, img.board, img.clips],
    imageAlt: "Wooden serving tray on a table",
    credit: "Photo: Unsplash",
    reviews: [
      {
        author: "Arthur D.",
        rating: 5,
        content: "Clears the front of the desk without looking like office supply.",
      },
    ],
  },
  {
    id: "floor-lamp",
    name: "Reading floor lamp",
    category: "Lighting",
    price: 145,
    featured: false,
    isNew: false,
    lowStock: true,
    createdAt: "2026-03-01",
    finish: "Black",
    summary: "The head swings past the sofa so it does not block the room.",
    description:
      "Slim stem, weighted base, three dimming steps. Made for a room that runs on one lamp at night.",
    spec: "Height 148 cm · Weighted base · 3-step dimmer",
    image: img.floorLamp,
    hoverImage: img.pendant,
    gallery: [img.floorLamp, img.pendant, img.brassLamp],
    imageAlt: "Living room corner with a floor lamp",
    credit: "Photo: Pexels",
    reviews: [
      {
        author: "Leah W.",
        rating: 5,
        content: "Does not tip. The dimmer is enough for late reading.",
      },
    ],
  },
]

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured)
}

export function getNewProducts() {
  return products.filter((product) => product.isNew)
}

export function getRelatedProducts(product: Product, count = 3) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, count)
}

export function getEditorPicks() {
  const featured = getFeaturedProducts()
  return {
    primary: featured[1] ?? products[0],
    secondary: featured.filter((item) => item.id !== featured[1]?.id).slice(0, 2),
  }
}

export function getCartSuggestions(excludeIds: string[], count = 2) {
  return products
    .filter((item) => item.price <= 30 && !excludeIds.includes(item.id))
    .slice(0, count)
}

export function isOnSale(product: Product) {
  return Boolean(product.compareAtPrice && product.compareAtPrice > product.price)
}

export function formatPrice(price: number) {
  return `$${price}`
}

export function averageRating(product: Product) {
  if (!product.reviews.length) {
    return 0
  }
  const total = product.reviews.reduce((sum, review) => sum + review.rating, 0)
  return total / product.reviews.length
}
