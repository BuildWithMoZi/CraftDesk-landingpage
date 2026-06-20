"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
  homeSectionCardClass,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  badge?: string;
  title?: string;
  description?: string;
}

function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="h-3 w-3 fill-[var(--orange)] text-[var(--orange)] sm:h-3.5 sm:w-3.5"
        />
      ))}
    </div>
  );
}

function CompactTestimonialCard({
  testimonial,
  cardClassName,
}: {
  testimonial: (typeof testimonials)[number];
  cardClassName?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[9.5rem] flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3.5 sm:min-h-[10.5rem] sm:p-4",
        cardClassName,
      )}
    >
      <StarRating rating={testimonial.rating} className="mb-2.5" />

      <p className="line-clamp-4 flex-1 text-[11px] leading-relaxed text-[var(--muted-strong)] sm:text-xs">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-3 flex items-center gap-2 border-t border-[var(--border)] pt-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--orange)]/10 text-[10px] font-bold text-[var(--orange)] sm:h-8 sm:w-8 sm:text-[11px]">
          {testimonial.companyInitial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-[var(--foreground)] sm:text-xs">
            {testimonial.author}
          </p>
          <p className="truncate text-[10px] text-[var(--muted-subtle)] sm:text-[11px]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection({
  variant = "default",
  sectionIndex,
  badge = "Client Proof",
  title = "Trusted by Founders & Teams",
  description = "Real names, roles, and companies — proof of delivery without the personal brand noise.",
}: TestimonialsSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex}>
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-transparent to-transparent" />
      )}
      <SectionHeading
        variant={hv}
        badge={badge}
        title={title}
        description={description}
        align={isHome ? "left" : "center"}
      />

      <div
        className={cn(
          "grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-4 lg:gap-3",
          !isHome && "mx-auto max-w-4xl",
        )}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="min-w-0"
          >
            <CompactTestimonialCard
              testimonial={testimonial}
              cardClassName={
                isHome ?
                  homeSectionCardClass(
                    sectionIndex ?? 4,
                    "home-card-hover !rounded-2xl !p-3.5 sm:!p-4",
                  )
                : undefined
              }
            />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
