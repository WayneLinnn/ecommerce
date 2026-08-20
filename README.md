# NORI

A practice storefront for everyday objects — lighting, kitchen, textiles, and stationery. You can browse, filter, open a product, add it to a cart, and walk a multi-step checkout. There is no backend. The cart lives in React context and is gone on refresh. Checkout never charges anyone.

The brand, prices, and copy are invented. Product photos are from Unsplash and Pexels.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Seasonal carousel, category tiles, editor picks, short brand story |
| `/products` | Catalog with search, category, and sort |
| `/products/[id]` | Gallery, specs, and reviews |
| `/checkout` | Multi-step checkout with a progress marker |
| `/about` | Brand page |

The header holds a cart sheet. Catalog data lives in `lib/products.ts` and `lib/catalog.ts`.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS v4, shadcn/ui
- Client-side cart context (no persistence, no payments)

## Run

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run start
```
