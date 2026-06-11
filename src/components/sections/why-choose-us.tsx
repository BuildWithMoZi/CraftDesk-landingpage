"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/section-layout";
import {
  homeSectionCardClass,
  homeIconWrap,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface WhyChooseUsProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function WhyChooseUs({
  variant = "default",
  sectionIndex,
}: WhyChooseUsProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex}>
      <SectionHeading
        variant={hv}
        badge="Why Kyron"
        title="Why Choose Kyron Solutions"
        description="We combine technical excellence with business acumen to deliver solutions that drive real results."
        align={isHome ? "left" : "center"}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={cn(
              "group p-6",
              isHome ?
                homeSectionCardClass(sectionIndex ?? 2)
              : "rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent transition-colors hover:border-orange-500/20"
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-11 w-11 items-center justify-center",
                isHome ? homeIconWrap : "rounded-lg bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20"
              )}
            >
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-semibold text-[var(--foreground)]">{item.title}</h3>
            <p className="text-sm text-white/45">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
