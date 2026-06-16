"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { microSaasProducts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface SaasPortfolioSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

const statusLabels = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
} as const;

export function SaasPortfolioSection({
  variant = "default",
  sectionIndex,
}: SaasPortfolioSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollByCard = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector("article");
    const gap = parseFloat(getComputedStyle(container).columnGap || "20");
    const distance = (card?.getBoundingClientRect().width ?? 300) + gap;
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <SectionLayout
      id="products"
      variant={variant}
      sectionIndex={sectionIndex}
    >
      <SectionHeading
        variant={hv}
        badge="Our Products"
        title="Micro SaaS We Build &amp; Operate"
        description="Proof we ship real software — not just client work. These products demonstrate our engineering depth."
        align={isHome ? "left" : "center"}
      />

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          disabled={!canScrollLeft}
          aria-label="Previous products"
          className={cn(
            "absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-md transition-all md:flex",
            "hover:border-[var(--orange)]/40 hover:text-[var(--orange)]",
            "disabled:pointer-events-none disabled:opacity-0",
          )}
        >
          <CircleArrowLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollByCard("right")}
          disabled={!canScrollRight}
          aria-label="Next products"
          className={cn(
            "absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-md transition-all md:flex",
            "hover:border-[var(--orange)]/40 hover:text-[var(--orange)]",
            "disabled:pointer-events-none disabled:opacity-0",
          )}
        >
          <CircleArrowRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-1 pb-2 scrollbar-none snap-x snap-mandatory md:px-10"
        >
          {microSaasProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="w-[min(100%,300px)] shrink-0 snap-center sm:w-[320px]"
            >
              <ShowcaseCard
                variant={product.variant}
                title={product.name}
                subtitle={product.tagline}
                priceLabel={statusLabels[product.status]}
                meta={product.metrics ?? statusLabels[product.status]}
                href={product.href ?? "/products"}
                ctaLabel={product.status === "coming-soon" ? "Join waitlist" : "Explore product"}
                gradient={product.gradient}
                image={product.image}
                className="h-full min-h-[400px]"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Previous products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] disabled:opacity-35"
          >
            <CircleArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Next products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] disabled:opacity-35"
          >
            <CircleArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--orange)]/40 hover:text-[var(--orange)]"
          >
            View all products
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}
