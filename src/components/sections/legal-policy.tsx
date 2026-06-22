"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { legalPolicies, type LegalPolicy } from "@/lib/legal";
import { cn } from "@/lib/utils";

interface LegalPolicyViewProps {
  policy: LegalPolicy;
}

export function LegalPolicyView({ policy }: LegalPolicyViewProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-[calc(var(--site-marquee-height)+5rem)] md:pt-[calc(var(--site-marquee-height)+6rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--hero-gradient-from),var(--hero-gradient-via)_50%,var(--background))]" />
      <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--subtle)] px-3.5 py-1.5 text-xs font-semibold text-[var(--foreground)]">
              <Scale className="h-3.5 w-3.5 text-[var(--orange)]" />
              Legal
            </span>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
              Policies
            </p>

            <nav className="mt-4 flex flex-col gap-2.5">
              {legalPolicies.map((item) => {
                const active = item.slug === policy.slug;
                return (
                  <Link
                    key={item.slug}
                    href={item.path}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300",
                      active
                        ? "border-orange-500/40 bg-gradient-to-r from-orange-500/15 to-amber-500/10 text-[var(--foreground)] shadow-sm shadow-orange-500/10"
                        : "border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:border-orange-500/30 hover:text-[var(--foreground)]"
                    )}
                  >
                    {item.navLabel}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <motion.article
            key={policy.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="min-w-0"
          >
            <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
              {policy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)]">
              {policy.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--muted-foreground)]">
              <span>
                <span className="font-semibold text-[var(--foreground)]">Last updated:</span>{" "}
                {policy.lastUpdated}
              </span>
              <span>
                <span className="font-semibold text-[var(--foreground)]">Effective:</span>{" "}
                {policy.effective}
              </span>
              <span>
                <span className="font-semibold text-[var(--foreground)]">Jurisdiction:</span>{" "}
                {policy.jurisdiction}
              </span>
            </div>

            {policy.note && (
              <div className="mt-8 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/[0.07] to-amber-500/[0.04] p-5 text-sm leading-relaxed text-[var(--muted-strong)]">
                {policy.note}
              </div>
            )}

            <div className="mt-10 space-y-8">
              {policy.sections.map((sec) => {
                const isSub = /^\d+\.\d/.test(sec.heading);
                return (
                <div key={sec.heading} className={cn(isSub ? "pl-0 sm:pl-4" : "pt-2")}>
                  <h2
                    className={cn(
                      "font-semibold text-[var(--foreground)]",
                      isSub ? "text-base" : "text-lg md:text-xl"
                    )}
                  >
                    {sec.heading}
                  </h2>
                  {sec.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base"
                    >
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="mt-3 space-y-2.5">
                      {sec.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--orange)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                );
              })}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
