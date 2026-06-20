"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  SectionLayout,
  type SectionVariant,
} from "@/components/home/home-section-shell";

interface FinalCtaSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function FinalCtaSection({
  variant = "default",
  sectionIndex,
}: FinalCtaSectionProps) {
  const isHome = variant === "home";

  return (
    <SectionLayout variant={variant} sectionIndex={sectionIndex}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#1C1C1E] px-6 py-12 text-center sm:rounded-3xl sm:px-10 sm:py-16 md:px-16"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_60%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/80">
            Ready to build?
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {isHome ?
              "Turn Your Idea Into a Revenue-Generating Digital Product"
            : "Let's Build Something Exceptional Together"}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Book a free consultation — we'll scope your project and share a tailored quote with
            fixed timelines and engineering you can trust.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-zinc-500 sm:w-auto"
            >
              Contact for Pricing
            </Link>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
