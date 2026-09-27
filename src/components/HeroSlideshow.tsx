"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { heroSlides } from "@/data/hero";
import { cn } from "@/lib/cn";

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const count = heroSlides.length;

  useEffect(() => {
    if (reduce || count < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [count, reduce]);

  const go = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + count) % count);
  };

  return (
    <div className="absolute inset-0">
      {heroSlides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-1000",
              active ? "opacity-100" : "opacity-0",
              active && !reduce && "ken-burns",
            )}
          />
        );
      })}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute bottom-28 left-1 z-20 p-2 text-white/90 transition-opacity hover:opacity-70 sm:top-1/2 sm:bottom-auto sm:left-4 sm:-translate-y-1/2"
      >
        <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-1 bottom-28 z-20 p-2 text-white/90 transition-opacity hover:opacity-70 sm:top-1/2 sm:right-4 sm:bottom-auto sm:-translate-y-1/2"
      >
        <ChevronRight className="h-8 w-8" strokeWidth={1.25} />
      </button>

      <p className="absolute bottom-2 left-4 z-20 hidden max-w-xs text-[0.6rem] leading-snug text-white/70 sm:block">
        {heroSlides[index]?.credit}
      </p>
    </div>
  );
}
