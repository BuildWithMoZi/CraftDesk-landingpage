"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
  homeSectionCardClass,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  layout?: "timeline" | "horizontal";
}

export function ProcessSection({
  variant = "default",
  sectionIndex,
  layout = "timeline",
}: ProcessSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";
  const isHorizontal = layout === "horizontal";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex}>
      <SectionHeading
        variant={hv}
        badge="How We Build"
        title="From Discovery to Launch"
        description="A proven, transparent four-step framework that keeps quality high and timelines predictable."
        align={isHome ? "left" : "center"}
      />

      {isHorizontal ?
        <div className="relative">
          <div
            className="absolute left-4 right-4 top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--orange)]/40 to-transparent sm:block md:top-10"
            aria-hidden
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "relative p-5 sm:p-6",
                  isHome ?
                    homeSectionCardClass(sectionIndex ?? 6)
                  : "rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl",
                )}
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 font-mono text-sm font-bold text-[var(--orange)]">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      : <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent md:left-1/2 md:block" />
          <div className="space-y-8 md:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-orange-500 bg-[var(--background)] md:left-1/2 md:flex" />
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className={cn(
                      "ml-16 p-6 md:ml-0",
                      isHome ?
                        homeSectionCardClass(sectionIndex ?? 6)
                      : "rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl",
                    )}
                  >
                    <span className="mb-2 inline-block font-mono text-sm font-bold text-[var(--orange)]">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      }
    </SectionLayout>
  );
}
