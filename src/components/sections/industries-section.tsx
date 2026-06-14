"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
  homeSectionCardClass,
  homeIconWrap,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface IndustriesSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  hideHeading?: boolean;
  showFooterCta?: boolean;
  compact?: boolean;
}

export function IndustriesSection({
  variant = "default",
  sectionIndex,
  hideHeading = false,
  showFooterCta = true,
  compact = false,
}: IndustriesSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout
      id="industries"
      variant={variant}
      sectionIndex={sectionIndex}
      compact={compact}
    >
      {!hideHeading && (
        <SectionHeading
          variant={hv}
          badge="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across diverse sectors, delivering tailored solutions for every industry."
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={isHome ? { y: -4 } : undefined}
            className={cn(
              "group cursor-default p-6",
              isHome ?
                homeSectionCardClass(sectionIndex ?? 6)
              : "rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--card)] to-transparent transition-all hover:border-orange-500/30"
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center",
                isHome ? homeIconWrap : "rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20"
              )}
            >
              <industry.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-[var(--foreground)]">{industry.name}</h3>
            <p className="text-sm text-[var(--muted)]">{industry.description}</p>
          </motion.div>
        ))}
      </div>

      {showFooterCta && (
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/industries">Learn More About Industries</Link>
          </Button>
        </div>
      )}
    </SectionLayout>
  );
}
