"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";
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
}

export function TestimonialsSection({
  variant = "default",
  sectionIndex,
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
        badge="Client Proof"
        title="Trusted by Founders & Teams"
        description="Real names, roles, and companies — proof of delivery without the personal brand noise."
        align={isHome ? "left" : "center"}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative p-6",
              isHome ?
                homeSectionCardClass(sectionIndex ?? 6)
              : "rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl"
            )}
          >
            <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--orange)]/10" />
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
              ))}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[var(--muted-strong)]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--subtle)]">
                <span className="text-xs font-bold text-[var(--orange)]">
                  {testimonial.companyInitial}
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[var(--foreground)]">
                  {testimonial.author}
                </p>
                <p className="flex items-center gap-1 truncate text-xs text-[var(--muted-subtle)]">
                  <Building2 className="h-3 w-3 shrink-0" />
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
