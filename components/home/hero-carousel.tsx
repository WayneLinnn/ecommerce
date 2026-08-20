"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { heroSlides } from "@/lib/catalog"

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  if (!slide) {
    return null
  }

  return (
    <section className="relative overflow-hidden rounded-xl bg-muted">
      <div className="relative aspect-[16/9] min-h-72 md:aspect-[21/9] md:min-h-96">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-background md:p-10">
          <p className="text-sm">{slide.eyebrow}</p>
          <h1 className="font-heading max-w-xl text-3xl tracking-tight md:text-5xl">
            {slide.title}
          </h1>
          <p className="max-w-lg text-sm text-background/80 md:text-base">
            {slide.description}
          </p>
          <Button
            nativeButton={false}
            render={<Link href={slide.href} />}
            className="w-fit"
          >
            {slide.cta}
          </Button>
        </div>
      </div>
      <div className="absolute top-1/2 right-3 left-3 flex -translate-y-1/2 justify-between">
        <Button
          size="icon-sm"
          variant="secondary"
          onClick={() =>
            setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)
          }
        >
          <ChevronLeftIcon />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="icon-sm"
          variant="secondary"
          onClick={() => setIndex((current) => (current + 1) % heroSlides.length)}
        >
          <ChevronRightIcon />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
        {heroSlides.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${itemIndex + 1}`}
            className="size-2 rounded-full bg-background/50 data-active:bg-background"
            data-active={itemIndex === index || undefined}
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </section>
  )
}
