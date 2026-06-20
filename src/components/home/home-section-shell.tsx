"use client";

import { cn } from "@/lib/utils";

const TOTAL_SECTIONS = 7;

export { TOTAL_SECTIONS };

export type SectionVariant = "default" | "home";

interface HomeSectionShellProps {
  id?: string;
  index: number;
  children: React.ReactNode;
  className?: string;
}

interface SectionLayoutProps {
  id?: string;
  variant?: SectionVariant;
  sectionIndex?: number;
  className?: string;
  compact?: boolean;
  children: React.ReactNode;
}

const SECTION_THEMES: Record<
  number,
  { shell: string; content: string; labelSide: "left" | "right" }
> = {
  1: { shell: "home-theme-trust", content: "max-w-7xl", labelSide: "right" },
  2: { shell: "home-theme-why", content: "max-w-6xl", labelSide: "left" },
  3: { shell: "home-theme-process", content: "max-w-7xl", labelSide: "right" },
  4: { shell: "home-theme-testimonials", content: "max-w-6xl", labelSide: "right" },
  5: { shell: "home-theme-team", content: "max-w-7xl", labelSide: "left" },
  6: { shell: "home-theme-faq", content: "max-w-5xl", labelSide: "right" },
  7: { shell: "home-theme-cta", content: "max-w-6xl", labelSide: "left" },
};

const HOME_CARD_VARIANTS: Record<number, string> = {
  1: "home-card-chip",
  2: "home-card-accent",
  3: "home-card-step",
  4: "home-card-quote",
  5: "home-card-accent",
  6: "home-card-tile",
  7: "home-glass-card",
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
            "absolute top-5 z-10 font-mono text-[11px] tracking-wider text-[var(--section-label)] sm:top-6",
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

export function SectionLayout({
  id,
  variant = "default",
  sectionIndex,
  className,
  compact = false,
  children,
}: SectionLayoutProps) {
  if (variant === "home" && sectionIndex) {
    return (
      <HomeSectionShell id={id} index={sectionIndex} className={className}>
        {children}
      </HomeSectionShell>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "relative",
        compact ? "py-16 md:py-24" : "py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function sectionHeadingVariant(
  variant: SectionVariant
): "default" | "home" {
  return variant === "home" ? "home" : "default";
}

export const homeIconWrap =
  "flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--home-icon-bg)] text-[var(--orange)] transition-colors group-hover:border-[var(--orange)]/30 group-hover:bg-[var(--orange)]/10";
