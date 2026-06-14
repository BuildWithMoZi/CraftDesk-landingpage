"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { ServiceItem } from "@/lib/data";
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
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex h-full min-h-[560px] w-[300px] shrink-0 snap-center flex-col overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(0,0,0,0.14)] sm:w-[300px]",
        className,
      )}>
      <div className="relative h-[176px] shrink-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={priority}
          sizes="300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm">
          <service.icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="min-h-[3.25rem] line-clamp-2 text-[1.35rem] font-bold leading-tight tracking-tight text-[var(--foreground)]">
          {service.title}
        </h3>

        <p className="mt-2 flex min-h-[1.125rem] items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--orange)]" />
          <span className="line-clamp-1">{service.category}</span>
        </p>

        <div className="mt-4 min-h-[6.75rem]">
          <p className="text-sm font-semibold text-[var(--foreground)]">Description</p>
          <p className="mt-1 line-clamp-3 text-sm leading-[1.6] text-[var(--muted)]">
            {service.description}
          </p>
        </div>

        <div className="mt-5 grid h-[4.75rem] shrink-0 grid-cols-3 items-center gap-2 border-y border-[var(--border-subtle)]">
          {service.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-subtle)]">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-bold tabular-nums text-cyan-600 dark:text-cyan-400">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="min-w-0">
            <p className="text-xs text-[var(--muted-subtle)]">Starting From</p>
            <p className="mt-0.5 text-sm font-medium tabular-nums text-[var(--muted-subtle)] line-through decoration-[var(--muted)]">
              {service.price}
            </p>
            <p className="mt-0.5 text-lg font-bold tabular-nums text-[var(--orange)]">
              {service.offerPrice}
            </p>
          </div>

          <Link
            href="/contact"
            aria-label={`Learn more about ${service.title}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] transition-transform duration-300 group-hover:scale-105">
            <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
