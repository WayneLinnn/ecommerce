import { HeroCarousel } from "@/components/home/hero-carousel"
import { CategoryGrid } from "@/components/home/category-grid"
import { SeasonGrid } from "@/components/home/season-grid"
import { PromoTiles } from "@/components/home/promo-tiles"
import { EditorPicks } from "@/components/home/editor-picks"
import { TrustBar } from "@/components/home/trust-bar"
import { BrandStory } from "@/components/home/brand-story"

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8">
      <HeroCarousel />
      <CategoryGrid />
      <SeasonGrid />
      <PromoTiles />
      <EditorPicks />
      <TrustBar />
      <BrandStory />
    </div>
  )
}
