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
  homeSectionCardClass,
} from "@/components/home/home-section-shell";
import { CoverImage } from "@/components/ui/cover-image";
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
              : "rounded-2xl border border-[var(--border)] bg-[var(--card-solid)] backdrop-blur-xl"
            )}
          >
            <div className="relative h-44 sm:h-48">
              <CoverImage
                src={project.image}
                alt={`${project.title} project preview`}
                className="absolute inset-0"
                priority={index < 2}
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <Badge>{project.category}</Badge>
                <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="mb-4 text-sm text-[var(--muted)]">{project.description}</p>

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
                    "border border-[var(--border)] bg-[var(--card-solid)]"
                  : "border border-[var(--border-subtle)] bg-[var(--card-solid)]"
                )}
              >
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[var(--orange)] text-[var(--orange)]" />
                  ))}
                </div>
                <p className="text-sm italic text-[var(--muted-strong)]">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs text-[var(--muted-subtle)]">
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
