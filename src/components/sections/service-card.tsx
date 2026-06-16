"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/lib/data";
import { CONTACT_FOR_PRICING_LABEL } from "@/lib/data";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  priority?: boolean;
  className?: string;
}

export function ServiceCard({
  service,
  index = 0,
  priority = false,
  className,
}: ServiceCardProps) {
  const variant = service.variant ?? (index % 2 === 0 ? "overlay" : "split");
  const timeline =
    service.stats.find((stat) => stat.label === "Timeline")?.value ?? "Custom";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "w-[min(100%,300px)] shrink-0 snap-center sm:w-[300px]",
        className,
      )}
    >
      <ShowcaseCard
        variant={variant}
        title={service.title}
        subtitle={service.subtitle}
        priceLabel={CONTACT_FOR_PRICING_LABEL}
        meta={timeline}
        href={service.href ?? "/contact"}
        ctaLabel="Contact us"
        gradient={service.gradient}
        image={service.image}
        priority={priority}
        className="h-full min-h-[400px]"
      />
    </motion.div>
  );
}
