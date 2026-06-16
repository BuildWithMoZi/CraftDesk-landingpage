import Image from "next/image";
import { cn } from "@/lib/utils";
import { logoUrl, siteConfig } from "@/lib/metadata";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  className,
  size = 36,
  priority = false,
  alt = siteConfig.name,
}: LogoProps) {
  return (
    <Image
      src={logoUrl()}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      className={cn("object-contain", className)}
      priority={priority}
    />
  );
}

type BrandNameProps = {
  variant?: "mark" | "full" | "inline";
  className?: string;
  markClassName?: string;
  suffixClassName?: string;
};

function CraftDeskWordmark({
  className,
  accentClassName,
  size = "md",
}: {
  className?: string;
  accentClassName?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg" ?
      "text-4xl md:text-5xl lg:text-6xl"
    : size === "sm" ? "text-sm sm:text-base"
    : "text-lg";

  return (
    <span
      className={cn(
        "font-brand inline-flex items-baseline uppercase font-bold tracking-[0.22em]",
        sizeClass,
        className,
      )}>
      <span className='text-[var(--foreground)]'>Craft</span>
      <span
        className={cn(
          "bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] bg-clip-text text-transparent brand-accent-glow",
          accentClassName,
        )}>
        Desk
      </span>
    </span>
  );
}

export function BrandName({
  variant = "mark",
  className,
  markClassName,
  suffixClassName,
}: BrandNameProps) {
  if (variant === "mark") {
    return (
      <CraftDeskWordmark
        className={cn("brand-futuristic", className)}
        accentClassName={markClassName}
      />
    );
  }

  if (variant === "inline") {
    return (
      <CraftDeskWordmark
        size='sm'
        className={cn("brand-futuristic", className)}
        accentClassName={markClassName}
      />
    );
  }

  return (
    <span
      className={cn(
        "font-brand inline-flex flex-wrap items-baseline gap-x-3 gap-y-1",
        className,
      )}>
      <CraftDeskWordmark
        size='lg'
        className={cn("brand-futuristic", markClassName)}
      />
      <span
        className={cn(
          "bg-gradient-to-r from-[var(--brand-suffix-from)] via-[var(--brand-suffix-to)] to-[var(--orange)] bg-clip-text text-xl font-medium uppercase tracking-[0.38em] text-transparent md:text-2xl lg:text-3xl",
          suffixClassName,
        )}>
        Solutions
      </span>
    </span>
  );
}
