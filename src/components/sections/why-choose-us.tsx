"use client";

import { motion } from "framer-motion";
import { whyStory } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import {
  SectionLayout,
  type SectionVariant,
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
  const isHome = variant === "home";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex} compact>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className={cn(
          "max-w-2xl",
          isHome ? "text-left" : "mx-auto text-center",
        )}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--orange)]">
          Why {siteConfig.brand}
        </p>

        <div className="mt-5 space-y-1">
          {whyStory.lines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: isHome ? -12 : 0, y: isHome ? 0 : 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.1 }}
              className={cn(
                "leading-snug text-[var(--foreground)]",
                index === 0 ?
                  "text-2xl font-semibold sm:text-[1.75rem]"
                : "text-lg text-[var(--muted-strong)] sm:text-xl",
              )}>
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.45 }}
          className={cn(
            "mt-6 text-xs tracking-wide text-[var(--muted-subtle)] sm:text-sm",
            !isHome && "mx-auto max-w-lg",
          )}>
          {whyStory.note}
        </motion.p>
      </motion.div>
    </SectionLayout>
  );
}
