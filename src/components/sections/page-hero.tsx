"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
  /** Fill viewport below site marquee (full-screen landing hero) */
  fullScreen?: boolean;
  className?: string;
}

export function PageHero({
  title,
  description,
  fullScreen = false,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        fullScreen ?
          "flex min-h-0 flex-1 flex-col justify-center pt-16 md:pt-20"
        : "pb-16 pt-[calc(var(--site-marquee-height)+5rem)] md:pb-20 md:pt-[calc(var(--site-marquee-height)+7rem)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--hero-gradient-from),var(--hero-gradient-via)_50%,var(--background))]" />
      <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
