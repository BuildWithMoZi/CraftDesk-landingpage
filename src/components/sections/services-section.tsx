"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/section-layout";
import {
  homeSectionCardClass,
  homeIconWrap,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function ServicesSection({
  variant = "default",
  sectionIndex,
}: ServicesSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout id="services" variant={variant} sectionIndex={sectionIndex}>
      <SectionHeading
        variant={hv}
        badge="Our Services"
        title="End-to-End Software Solutions"
        description="From concept to deployment, we deliver comprehensive development services tailored to your business goals."
      />

      <div
        className={cn(
          "grid gap-4",
          isHome ?
            "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        )}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={isHome ? { y: -4 } : undefined}
            className={cn(
              "group relative p-6",
              isHome ?
                homeSectionCardClass(
                  sectionIndex ?? 1,
                  index === 0
                    ? "sm:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-center"
                    : undefined
                )
              : "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors hover:border-orange-500/30 hover:bg-orange-500/5"
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center text-orange-400 transition-transform group-hover:scale-110",
                isHome ?
                  homeIconWrap
                : "rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10"
              )}
            >
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-[var(--foreground)]">{service.title}</h3>
            <p className="text-sm leading-relaxed text-white/45">{service.description}</p>
            <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-white/20 opacity-0 transition-all group-hover:text-[var(--orange)] group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant={isHome ? "outline" : "outline"}>
          <Link href="/services">Explore All Services</Link>
        </Button>
      </div>
    </SectionLayout>
  );
}
