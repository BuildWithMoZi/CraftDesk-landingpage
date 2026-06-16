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

function DesktopTestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <>
      <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--orange)]/10" />
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]"
          />
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
    </>
  );
}

function MobileMessengerCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="flex w-full min-w-0 items-end gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--subtle)]">
        <span className="text-[10px] font-bold text-[var(--orange)]">
          {testimonial.companyInitial}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="inline-block max-w-full rounded-2xl rounded-bl-md border border-[var(--border)] bg-[var(--subtle)] px-3 py-2.5 shadow-sm">
          <p className="text-xs leading-relaxed text-[var(--foreground)]">
            {testimonial.quote}
          </p>
        </div>

        <div className="mt-1.5 flex min-w-0 items-center justify-between gap-2 px-0.5">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold text-[var(--foreground)]">
              {testimonial.author}
            </p>
            <p className="truncate text-[10px] text-[var(--muted-subtle)]">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
          <div className="flex shrink-0 gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-2.5 w-2.5 fill-[var(--orange)] text-[var(--orange)]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
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

      <div className="grid min-w-0 max-w-full grid-cols-1 gap-3 overflow-x-hidden md:grid-cols-2 md:gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative min-w-0 max-w-full",
              isHome ?
                homeSectionCardClass(
                  sectionIndex ?? 6,
                  "max-md:border-0 max-md:bg-transparent max-md:p-0 max-md:shadow-none md:p-6",
                )
              : "max-md:p-0 md:rounded-2xl md:border md:border-[var(--border)] md:bg-[var(--card)] md:p-6 md:backdrop-blur-xl",
            )}
          >
            <div className="md:hidden">
              <MobileMessengerCard testimonial={testimonial} />
            </div>

            <div className="hidden md:block">
              <DesktopTestimonialCard testimonial={testimonial} />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
