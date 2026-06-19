"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type AlternatingShowcaseItem = {
  id: string;
  title: string;
  features: string[];
  image?: string;
  imageAlt?: string;
  gradient: string;
  href?: string;
  /** Used with `filters` — omit or use "all" to always show */
  category?: string;
  comingSoon?: boolean;
};

export type ShowcaseFilter = {
  id: string;
  label: string;
};

interface AlternatingShowcaseSectionProps {
  items: AlternatingShowcaseItem[];
  title?: string;
  description?: string;
  ctaLabel?: string;
  filters?: ShowcaseFilter[];
}

export function AlternatingShowcaseSection({
  items,
  title,
  description,
  ctaLabel = "Check It Out",
  filters,
}: AlternatingShowcaseSectionProps) {
  const [activeFilter, setActiveFilter] = useState(filters?.[0]?.id ?? "all");

  const visibleItems = useMemo(() => {
    if (!filters || activeFilter === "all") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, filters, items]);

  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <SectionHeading
            title={title}
            description={description}
            align="center"
          />
        )}

        {filters && filters.length > 0 && (
          <div
            className={cn(
              "flex justify-center",
              title ? "mt-2" : "pt-4",
            )}
          >
            <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] p-1">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    activeFilter === filter.id ?
                      "bg-[var(--foreground)] text-[var(--background)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          className={cn(
            "space-y-16 md:space-y-24",
            title || filters ? "mt-12 md:mt-16" : "",
          )}
        >
          {visibleItems.map((item, index) => {
            const imageFirst = index % 2 === 0;

            const imageBlock = (
              <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] sm:min-h-[340px] lg:min-h-[380px]">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    item.gradient,
                  )}
                  aria-hidden
                />
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            );

            const contentBlock = (
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
                  {item.title}
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[var(--muted-strong)] sm:text-base"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-fit" size="lg">
                  <Link href={item.href ?? "/contact"}>{ctaLabel}</Link>
                </Button>
              </div>
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                    item.comingSoon && "pointer-events-none select-none blur-sm",
                  )}
                >
                  {imageFirst ?
                    <>
                      {imageBlock}
                      {contentBlock}
                    </>
                  : <>
                      {contentBlock}
                      {imageBlock}
                    </>
                  }
                </div>

                {item.comingSoon && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[var(--background)]/40 backdrop-blur-[2px]">
                    <span className="rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-[var(--orange)] shadow-lg backdrop-blur-md sm:text-base">
                      Coming Soon
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
