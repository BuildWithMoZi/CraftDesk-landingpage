"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
  homeSectionCardClass,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  hideHeading?: boolean;
  showFooterCta?: boolean;
  compact?: boolean;
}

export function PricingSection({
  variant = "default",
  sectionIndex,
  hideHeading = false,
  showFooterCta = true,
  compact = false,
}: PricingSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout
      id="pricing"
      variant={variant}
      sectionIndex={sectionIndex}
      compact={compact}
    >
      {!hideHeading && (
        <SectionHeading
          variant={hv}
          badge="Packages"
          title="Productized Packages, Zero Guesswork"
          description="Fixed-scope offerings with clear deliverables — contact us for a quote and start building."
        />
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col p-8",
              isHome ?
                homeSectionCardClass(
                  sectionIndex ?? 8,
                  plan.highlighted
                    ? "border-[var(--orange)]/40 bg-gradient-to-b from-[var(--orange)]/10 to-transparent shadow-[0_0_32px_rgba(249,115,22,0.08)]"
                    : undefined
                )
              : cn(
                  "rounded-2xl border backdrop-blur-xl",
                  plan.highlighted ?
                    "border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-transparent shadow-lg shadow-orange-500/10"
                  : "border-[var(--border)] bg-[var(--card)]"
                )
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-4 py-1 text-xs font-bold text-black">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-[var(--foreground)]">{plan.name}</h3>
            <p className="mt-3 text-sm font-medium text-[var(--orange)]">{plan.timeline}</p>
            <p className="mt-3 text-sm text-[var(--muted)]">{plan.description}</p>

            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[var(--muted-strong)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="mt-8"
              variant={plan.highlighted ? "default" : "outline"}
            >
              <Link href="/contact">{plan.cta}</Link>
            </Button>
          </motion.div>
        ))}
      </div>

      {showFooterCta && (
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/contact">Contact for Pricing</Link>
          </Button>
        </div>
      )}
    </SectionLayout>
  );
}
