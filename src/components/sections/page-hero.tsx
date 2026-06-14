"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--hero-gradient-from),var(--hero-gradient-via)_50%,var(--background))]" />
      <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400"
          >
            {badge}
          </motion.span>
        )}
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
