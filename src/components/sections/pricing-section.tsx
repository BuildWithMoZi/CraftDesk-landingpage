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
} from "@/components/home/section-layout";
import { homeSectionCardClass } from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function PricingSection({
  variant = "default",
  sectionIndex,
}: PricingSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout id="pricing" variant={variant} sectionIndex={sectionIndex}>
      <SectionHeading
        variant={hv}
        badge="Pricing"
        title="Transparent, Flexible Pricing"
        description="Choose a package that fits your needs. All plans include our commitment to quality and on-time delivery."
      />

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
                  : "border-white/10 bg-white/[0.03]"
                )
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-4 py-1 text-xs font-bold text-black">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-[var(--foreground)]">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[var(--foreground)]">{plan.price}</span>
              <span className="ml-2 text-sm text-white/35">{plan.period}</span>
            </div>
            <p className="mt-3 text-sm text-white/45">{plan.description}</p>

            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
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

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/pricing">View Detailed Pricing</Link>
        </Button>
      </div>
    </SectionLayout>
  );
}
