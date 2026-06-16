"use client";

import { deployedProjects } from "@/lib/data";
import {
  SectionLayout,
  type SectionVariant,
} from "@/components/home/home-section-shell";

interface TrustMarqueeSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function TrustMarqueeSection({
  variant = "default",
  sectionIndex,
}: TrustMarqueeSectionProps) {
  const projects = [...deployedProjects, ...deployedProjects];

  return (
    <SectionLayout
      id="trust"
      variant={variant}
      sectionIndex={sectionIndex}
      compact
    >
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-subtle)]">
        Deployed client projects we&apos;ve built
      </p>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--surface)] to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--surface)] to-transparent sm:w-20"
          aria-hidden
        />

        <div className="trust-marquee-track flex w-max items-center gap-10 sm:gap-16">
          {projects.map((project, index) => (
            <span
              key={`${project}-${index}`}
              className="shrink-0 text-sm font-semibold tracking-wide text-[var(--muted-foreground)] opacity-70 sm:text-base"
            >
              {project}
            </span>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
