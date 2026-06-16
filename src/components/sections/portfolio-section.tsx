"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { Button } from "@/components/ui/button";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
  homeSectionCardClass,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface PortfolioSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function PortfolioSection({
  variant = "default",
  sectionIndex,
}: PortfolioSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout id="portfolio" variant={variant} sectionIndex={sectionIndex}>
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-transparent to-transparent" />
      )}
      <SectionHeading
        variant={hv}
        badge="Portfolio"
        title="Turning Visions Into Digital Reality"
        description="Metric-driven case studies that show how we help clients grow — not just how things look."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col gap-4"
          >
            <ShowcaseCard
              variant={index % 2 === 0 ? "overlay" : "split"}
              title={project.title}
              subtitle={project.category}
              priceLabel={project.metrics[0]}
              meta={project.metrics[1]}
              href="/portfolio"
              ctaLabel="View case study"
              gradient={project.gradient}
              image={project.image}
              priority={index < 2}
              className="min-h-[380px]"
            />

            <div
              className={cn(
                "rounded-2xl p-4 sm:p-5",
                isHome ?
                  homeSectionCardClass(sectionIndex ?? 5)
                : "border border-[var(--border)] bg-[var(--card-solid)] backdrop-blur-xl",
              )}
            >
              <p className="line-clamp-2 text-sm text-[var(--muted)]">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/portfolio">View Full Portfolio</Link>
        </Button>
      </div>
    </SectionLayout>
  );
}
