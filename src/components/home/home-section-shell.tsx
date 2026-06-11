"use client";

import { cn } from "@/lib/utils";

const TOTAL_SECTIONS = 9;

interface HomeSectionShellProps {
  id?: string;
  index: number;
  children: React.ReactNode;
  className?: string;
}

const SECTION_THEMES: Record<
  number,
  { shell: string; content: string; labelSide: "left" | "right" }
> = {
  1: { shell: "home-theme-services", content: "max-w-7xl", labelSide: "right" },
  2: { shell: "home-theme-why", content: "max-w-5xl", labelSide: "left" },
  3: { shell: "home-theme-portfolio", content: "max-w-7xl", labelSide: "right" },
  4: { shell: "home-theme-process", content: "max-w-6xl", labelSide: "left" },
  5: { shell: "home-theme-tech", content: "max-w-7xl", labelSide: "right" },
  6: { shell: "home-theme-industries", content: "max-w-7xl", labelSide: "left" },
  7: { shell: "home-theme-testimonials", content: "max-w-5xl", labelSide: "right" },
  8: { shell: "home-theme-pricing", content: "max-w-6xl", labelSide: "left" },
  9: { shell: "home-theme-contact", content: "max-w-7xl", labelSide: "right" },
};

const HOME_CARD_VARIANTS: Record<number, string> = {
  1: "home-card-tile",
  2: "home-card-accent",
  3: "home-card-media",
  4: "home-card-step",
  5: "home-card-chip",
  6: "home-card-icon",
  7: "home-card-quote",
  8: "home-card-plan",
  9: "home-card-form",
};

export function homeSectionCardClass(sectionIndex: number, extra?: string) {
  return cn(
    HOME_CARD_VARIANTS[sectionIndex] ?? "home-glass-card",
    "home-card-hover",
    extra
  );
}

export function HomeSectionShell({
  id,
  index,
  children,
  className,
}: HomeSectionShellProps) {
  const sectionLabel = `${String(index).padStart(2, "0")}/${String(TOTAL_SECTIONS).padStart(2, "0")}`;
  const isFirst = index === 1;
  const isLast = index === TOTAL_SECTIONS;
  const theme = SECTION_THEMES[index] ?? SECTION_THEMES[1];

  return (
    <section id={id} className={cn("relative", className)}>
      {!isFirst && <div className="home-section-divider" aria-hidden />}

      <div className={cn("home-section-inner relative overflow-hidden", theme.shell)}>
        <span
          className={cn(
            "absolute top-5 z-10 font-mono text-[11px] tracking-wider text-white/25 sm:top-6",
            theme.labelSide === "left" ? "left-5 sm:left-8" : "right-5 sm:right-8"
          )}
        >
          {sectionLabel}
        </span>

        <div
          className={cn(
            "relative z-10 mx-auto px-4 sm:px-8",
            theme.content,
            isFirst && "pt-14 sm:pt-16 md:pt-20",
            !isFirst && "pt-14 sm:pt-16",
            isLast ? "pb-14 sm:pb-16 md:pb-20" : "pb-14 sm:pb-16"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use homeSectionCardClass(sectionIndex) for home variant cards */
export const homeGlassCard =
  "home-glass-card rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl transition-all duration-300";

/** @deprecated Use homeSectionCardClass(sectionIndex) */
export const homeGlassCardHover =
  "hover:border-[var(--orange)]/25 hover:bg-white/[0.04] hover:shadow-[0_0_24px_rgba(249,115,22,0.06)]";

export const homeIconWrap =
  "flex items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.04] text-[var(--orange)] transition-colors group-hover:border-[var(--orange)]/30 group-hover:bg-[var(--orange)]/10";
