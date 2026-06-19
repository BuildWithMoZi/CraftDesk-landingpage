"use client";

import { deployedProjects } from "@/lib/data";
import {
  SectionLayout,
  type SectionVariant,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface TrustMarqueeSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  /** Custom marquee items — defaults to deployed client projects */
  items?: string[];
  /** `bar` = full-width black ticker strip (page hero) */
  mode?: "default" | "bar";
}

export function TrustMarqueeSection({
  variant = "default",
  sectionIndex,
  items,
  mode = "default",
}: TrustMarqueeSectionProps) {
  const source = items ?? deployedProjects;
  const projects = [...source, ...source];

  if (mode === "bar") {
    return (
      <div className="relative w-full overflow-hidden border-y border-black/10 bg-black py-3.5">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-16"
          aria-hidden
        />
        <div className="trust-marquee-track flex w-max items-center gap-8 sm:gap-12">
          {projects.map((phrase, index) => (
            <span
              key={`${phrase}-${index}`}
              className="flex shrink-0 items-center gap-8 text-sm font-semibold tracking-wide text-white sm:gap-12 sm:text-base"
            >
              {phrase}
              <span className="text-[var(--orange)]" aria-hidden>
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <SectionLayout
      id="trust"
      variant={variant}
      sectionIndex={sectionIndex}
      compact
    >
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
              className={cn(
                "shrink-0 text-sm font-semibold tracking-wide text-[var(--muted-foreground)] opacity-70 sm:text-base",
              )}
            >
              {project}
            </span>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
