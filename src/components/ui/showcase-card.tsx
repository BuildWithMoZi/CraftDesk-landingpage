"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Heart, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_FOR_PRICING_LABEL } from "@/lib/data";

export type ShowcaseCardVariant = "overlay" | "split";

export type ShowcaseCardProps = {
  variant?: ShowcaseCardVariant;
  title: string;
  subtitle: string;
  meta: string;
  href: string;
  ctaLabel?: string;
  priceLabel?: string;
  gradient: string;
  image?: string;
  className?: string;
  priority?: boolean;
};

export function ShowcaseCard({
  variant = "split",
  title,
  subtitle,
  meta,
  href,
  ctaLabel = "View package",
  priceLabel,
  gradient,
  image,
  className,
  priority = false,
}: ShowcaseCardProps) {
  const [saved, setSaved] = useState(false);

  const media = (
    <>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          gradient,
        )}
        aria-hidden
      />
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      )}
    </>
  );

  const favoriteButton = (
    <button
      type="button"
      onClick={() => setSaved((value) => !value)}
      aria-label={saved ? "Remove from saved" : "Save item"}
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
        variant === "overlay" ?
          "border-white/20 bg-black/25 text-white backdrop-blur-md hover:bg-black/40"
        : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--orange)]/30 hover:text-[var(--orange)]",
        saved && "border-[var(--orange)]/40 text-[var(--orange)]",
      )}
    >
      <Heart className={cn("h-4 w-4", saved && "fill-current")} />
    </button>
  );

  const metaRow = (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <span
        className={cn(
          "inline-flex items-center gap-1.5",
          variant === "overlay" ? "text-white/85" : "text-[var(--muted-foreground)]",
        )}
      >
        <Tag className="h-3.5 w-3.5 shrink-0" />
        {priceLabel ?? CONTACT_FOR_PRICING_LABEL}
      </span>
      <span
        className={cn(
          "inline-flex items-center gap-1.5",
          variant === "overlay" ? "text-white/85" : "text-[var(--muted-foreground)]",
        )}
      >
        <Clock className="h-3.5 w-3.5 shrink-0" />
        {meta}
      </span>
    </div>
  );

  if (variant === "overlay") {
    return (
      <article
        className={cn(
          "group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[28px] sm:min-h-[400px]",
          className,
        )}
      >
        <div className="absolute inset-0">{media}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

        <div className="absolute right-4 top-4 z-10 sm:right-5 sm:top-5">
          {favoriteButton}
        </div>

        <div className="relative z-10 p-5 sm:p-6">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/75 sm:text-base">{subtitle}</p>
          <div className="mt-3">{metaRow}</div>
          <Link
            href={href}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#1C1C1E] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {ctaLabel}
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <div className="relative h-44 shrink-0 overflow-hidden sm:h-48">
        {media}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{subtitle}</p>
        <div className="mt-3">{metaRow}</div>

        <div className="mt-auto flex items-center gap-3 pt-5">
          <Link
            href={href}
            className="flex flex-1 items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-3.5 text-sm font-semibold text-[var(--background)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {ctaLabel}
          </Link>
          {favoriteButton}
        </div>
      </div>
    </article>
  );
}
