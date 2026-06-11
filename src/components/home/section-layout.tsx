import { HomeSectionShell } from "./home-section-shell";
import { cn } from "@/lib/utils";

export type SectionVariant = "default" | "home";

interface SectionLayoutProps {
  id?: string;
  variant?: SectionVariant;
  sectionIndex?: number;
  className?: string;
  children: React.ReactNode;
}

export function SectionLayout({
  id,
  variant = "default",
  sectionIndex,
  className,
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
      className={cn("relative py-24 md:py-32", className)}
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
