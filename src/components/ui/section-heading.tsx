"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "home";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  variant = "default",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-bold tracking-tight text-[var(--foreground)]",
          variant === "home" ?
            "text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          : "text-3xl md:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 md:text-lg",
            variant === "home" ? "text-sm text-[var(--muted)] sm:text-base" : "text-base text-[var(--muted-foreground)]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
