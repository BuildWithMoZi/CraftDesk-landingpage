"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/service-card";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  hideHeading?: boolean;
  showFooterCta?: boolean;
  compact?: boolean;
}

export function ServicesSection({
  variant = "default",
  sectionIndex,
  hideHeading = false,
  showFooterCta = true,
}: ServicesSectionProps) {
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
      id="services"
      variant={variant}
      sectionIndex={sectionIndex}
      compact={!isHome}>
      {!hideHeading && (
        <SectionHeading
          variant={hv}
          badge="Our Services"
          title="End-to-End Software Solutions"
          description="From concept to deployment, we deliver comprehensive development services tailored to your business goals."
        />
      )}

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-[var(--background)] to-transparent md:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-[var(--background)] to-transparent md:block"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={() => scrollByCard("left")}
          disabled={!canScrollLeft}
          aria-label="Previous services"
          className={cn(
            "absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 md:flex",
            "hover:border-[var(--orange)]/40 hover:bg-[var(--orange)]/10 hover:text-[var(--orange)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.18)]",
            "disabled:pointer-events-none disabled:opacity-0",
          )}>
          <CircleArrowLeft className="h-6 w-6" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={() => scrollByCard("right")}
          disabled={!canScrollRight}
          aria-label="Next services"
          className={cn(
            "absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 md:flex",
            "hover:border-[var(--orange)]/40 hover:bg-[var(--orange)]/10 hover:text-[var(--orange)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.18)]",
            "disabled:pointer-events-none disabled:opacity-0",
          )}>
          <CircleArrowRight className="h-6 w-6" strokeWidth={1.75} />
        </button>

        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 overflow-x-auto px-1 pb-4 pt-2 scrollbar-none snap-x snap-mandatory md:gap-6 md:px-12 md:pb-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              priority={index < 2}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Previous services"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[0_6px_18px_rgba(0,0,0,0.1)] transition-all duration-300",
              "hover:border-[var(--orange)]/40 hover:bg-[var(--orange)]/10 hover:text-[var(--orange)]",
              "disabled:pointer-events-none disabled:opacity-35",
            )}>
            <CircleArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Next services"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[0_6px_18px_rgba(0,0,0,0.1)] transition-all duration-300",
              "hover:border-[var(--orange)]/40 hover:bg-[var(--orange)]/10 hover:text-[var(--orange)]",
              "disabled:pointer-events-none disabled:opacity-35",
            )}>
            <CircleArrowRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {showFooterCta && (
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      )}
    </SectionLayout>
  );
}
