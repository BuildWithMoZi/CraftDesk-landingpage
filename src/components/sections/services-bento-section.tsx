"use client";

import { motion } from "framer-motion";
import { bentoServices, CONTACT_FOR_PRICING_LABEL } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/home-section-shell";

interface ServicesBentoSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function ServicesBentoSection({
  variant = "default",
  sectionIndex,
}: ServicesBentoSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout
      id="services"
      variant={variant}
      sectionIndex={sectionIndex}
    >
      <SectionHeading
        variant={hv}
        badge="Services"
        title="Productized Services, Built to Ship"
        description="Every package is scoped for speed and clarity — contact us for a quote tailored to your project."
        align={isHome ? "left" : "center"}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {bentoServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={service.span === "wide" ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <ShowcaseCard
              variant={service.variant}
              title={service.title}
              subtitle={service.subtitle}
              priceLabel={CONTACT_FOR_PRICING_LABEL}
              meta={service.timeline}
              href={service.href}
              ctaLabel="Contact us"
              gradient={service.gradient}
              image={service.image}
              priority={index < 2}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
