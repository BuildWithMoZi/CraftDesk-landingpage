"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { homeFaqs, type FaqItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
  homeSectionCardClass,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  items?: FaqItem[];
  badge?: string;
  title?: string;
  description?: string;
  layout?: "stacked" | "split";
}

function FaqAccordion({
  items,
  isHome,
  sectionIndex,
}: {
  items: FaqItem[];
  isHome: boolean;
  sectionIndex?: number;
}) {
  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-3">
      {items.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Accordion.Item
            value={`faq-${index}`}
            className={cn(
              "overflow-hidden",
              isHome ?
                homeSectionCardClass(sectionIndex ?? 6, "p-0")
              : "rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl",
            )}
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
                <span className="text-sm font-semibold text-[var(--foreground)] sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:hidden data-[state=open]:block">
              <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--muted)] sm:px-6 sm:pb-5">
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </motion.div>
      ))}
    </Accordion.Root>
  );
}

export function FaqSection({
  variant = "default",
  sectionIndex,
  items = homeFaqs,
  badge = "FAQ",
  title = "Questions Before You Buy",
  description = "Clear answers on timelines, quotes, revisions, and ownership — so you can decide with confidence.",
  layout = "stacked",
}: FaqSectionProps) {
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  return (
    <SectionLayout id="faq" variant={variant} sectionIndex={sectionIndex}>
      {layout === "split" ?
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <SectionHeading
            variant={hv}
            badge={badge}
            title={title}
            description={description}
            align="left"
            className="lg:sticky lg:top-28"
          />
          <FaqAccordion
            items={items}
            isHome={isHome}
            sectionIndex={sectionIndex}
          />
        </div>
      : <>
          <SectionHeading
            variant={hv}
            badge={badge}
            title={title}
            description={description}
            align={isHome ? "left" : "center"}
          />
          <div className="mx-auto w-full max-w-3xl">
            <FaqAccordion
              items={items}
              isHome={isHome}
              sectionIndex={sectionIndex}
            />
          </div>
        </>
      }
    </SectionLayout>
  );
}
