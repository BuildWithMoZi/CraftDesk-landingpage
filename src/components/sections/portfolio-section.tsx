"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { portfolioProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/section-layout";
import { homeSectionCardClass } from "@/components/home/home-section-shell";
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
        title="Featured Projects & Case Studies"
        description="Explore how we've helped businesses transform their ideas into successful digital products."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
              "group overflow-hidden",
              isHome ?
                homeSectionCardClass(sectionIndex ?? 3)
              : "rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
            )}
          >
            <div
              className={`relative h-44 bg-gradient-to-br sm:h-48 ${project.gradient} p-6`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <Badge className="relative">{project.category}</Badge>
              <h3 className="relative mt-4 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                {project.title}
              </h3>
            </div>

            <div className="p-6">
              <p className="mb-4 text-sm text-white/45">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-[var(--orange)]/20 bg-[var(--orange)]/5 px-3 py-1 text-xs font-medium text-[var(--orange)]"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <div
                className={cn(
                  "rounded-xl p-4",
                  isHome ?
                    "border border-[var(--border)] bg-white/[0.02]"
                  : "border border-white/5 bg-white/[0.02]"
                )}
              >
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[var(--orange)] text-[var(--orange)]" />
                  ))}
                </div>
                <p className="text-sm italic text-white/70">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs text-white/35">
                  — {project.testimonial.author}, {project.testimonial.role}
                </p>
              </div>
            </div>
          </motion.article>
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
