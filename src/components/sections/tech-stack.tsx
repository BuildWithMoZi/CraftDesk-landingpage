"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/section-layout";
import { homeSectionCardClass } from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "mobile" as const, label: "Mobile" },
  { key: "cloud" as const, label: "Cloud & Database" },
];

interface TechStackProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function TechStack({
  variant = "default",
  sectionIndex,
}: TechStackProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex}>
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />
      )}
      <SectionHeading
        variant={hv}
        badge="Technology"
        title="Our Technology Stack"
        description="We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className={cn(
              "p-6",
              isHome ?
                cn(homeSectionCardClass(sectionIndex ?? 5), "group")
              : "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            )}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack[category.key].map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    isHome ?
                      "border border-[var(--border)] bg-white/[0.03] text-white/60 group-hover:border-[var(--orange)]/20 group-hover:text-[var(--foreground)]"
                    : "rounded-lg border border-white/5 bg-white/5 text-zinc-300 hover:border-orange-500/30 hover:text-orange-400"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
