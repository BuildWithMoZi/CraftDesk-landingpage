import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/metadata";

type BrandNameProps = {
  variant?: "mark" | "full" | "inline";
  className?: string;
  markClassName?: string;
  suffixClassName?: string;
};

export function BrandName({
  variant = "mark",
  className,
  markClassName,
  suffixClassName,
}: BrandNameProps) {
  const { brand } = siteConfig;

  if (variant === "mark") {
    return (
      <span
        className={cn(
          "font-brand text-lg font-semibold tracking-[0.14em] text-white",
          className
        )}
      >
        {brand}
        <span className={cn("text-[var(--orange)]", markClassName)}>.</span>
      </span>
    );
  }

  if (variant === "inline") {
    return (
      <span className={cn("font-brand font-semibold tracking-[0.1em]", className)}>
        {brand}
      </span>
    );
  }

  return (
    <span className={cn("font-brand inline-flex flex-wrap items-baseline gap-x-2", className)}>
      <span
        className={cn(
          "bg-gradient-to-r from-white via-orange-100 to-[var(--orange-light)] bg-clip-text text-4xl font-bold tracking-[0.1em] text-transparent md:text-5xl lg:text-6xl",
          markClassName
        )}
      >
        {brand}
      </span>
      <span
        className={cn(
          "bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-3xl font-medium tracking-[0.22em] text-transparent md:text-4xl lg:text-5xl",
          suffixClassName
        )}
      >
        Solutions
      </span>
    </span>
  );
}
