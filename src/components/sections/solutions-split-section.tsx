"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { solutionPaths } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

const PANEL_CLASS = {
  products: "solution-panel-products",
  custom: "solution-panel-custom",
} as const;

const CTA_CLASS = {
  products: "solution-cta-products",
  custom: "solution-cta-custom",
} as const;

const BADGE_CLASS = {
  products: "solution-badge-products",
  custom: "solution-badge-custom",
} as const;

interface SolutionsSplitSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function SolutionsSplitSection({
  variant = "default",
  sectionIndex,
}: SolutionsSplitSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex}>
      <SectionHeading
        variant={hv}
        badge="Solutions"
        title="Products or Custom Scale"
        description="Explore our software products, or choose a tailored build for complex platforms."
        align={isHome ? "left" : "center"}
      />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {solutionPaths.map((path, index) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "group flex flex-col rounded-[32px] p-4 sm:rounded-[36px] sm:p-5",
              PANEL_CLASS[path.accent],
            )}
          >
            <article
              className={cn(
                "solution-card-floating flex flex-1 flex-col overflow-hidden rounded-[28px]",
                path.accent === "products" ?
                  "solution-card-products"
                : "solution-card-custom",
              )}>
              <div
                className={cn(
                  "relative h-52 w-full shrink-0 overflow-hidden sm:h-56 md:h-64",
                  path.accent === "products" ?
                    "ring-b-2 ring-[var(--orange)]/25"
                  : "ring-b-2 ring-[var(--brand-gradient-via)]/25",
                )}
              >
                <Image
                  src={path.image}
                  alt={path.imageAlt ?? `${path.title} — ${path.subtitle}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-[1.65rem]">
                  {path.title}
                </h3>
                <p className="mt-0.5 text-sm text-[var(--muted-strong)] sm:text-[15px]">
                  {path.subtitle}
                </p>

                {path.highlights.length > 0 && (
                  <ul className="mt-5 space-y-3.5">
                    {path.highlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li
                          key={item.text}
                          className="flex items-center gap-3 text-sm text-[var(--muted-strong)]"
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              path.accent === "products" ?
                                "text-[var(--orange)]"
                              : "text-[var(--brand-gradient-via)]",
                            )}
                            strokeWidth={1.75}
                          />
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                )}

                <div
                  className={cn(
                    "mt-auto flex items-end justify-between gap-4",
                    path.highlights.length > 0 ? "pt-8" : "pt-4",
                  )}
                >
                <div>
                  <p className="text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
                    {path.price}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{path.priceNote}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold",
                    BADGE_CLASS[path.accent],
                  )}
                >
                  {path.badge}
                </span>
                </div>
              </div>
            </article>

            <Link
              href={path.href}
              className={cn(
                "mt-3 flex items-center justify-center rounded-[22px] px-5 py-4 text-sm font-semibold transition-colors sm:py-[18px] sm:text-[15px]",
                CTA_CLASS[path.accent],
              )}
            >
              {path.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
