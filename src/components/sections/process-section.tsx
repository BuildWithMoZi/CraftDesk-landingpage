"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Handshake,
  MapPinned,
  Rocket,
  Sparkles,
} from "lucide-react";
import {
  aboutPartnershipSteps,
  processSteps,
  serviceWorkflowSteps,
} from "@/lib/data";
import { ProcessPipelineVisual } from "@/components/sections/process-pipeline-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  SectionLayout,
  type SectionVariant,
} from "@/components/home/home-section-shell";

type ProcessLayout = "about-journey" | "service-bento";

interface ProcessSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
  layout?: ProcessLayout;
}

const aboutStepIcons = [Sparkles, MapPinned, Handshake, Rocket] as const;

function HomeProcessSimple() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="md:sticky md:top-24 md:self-start">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          Our Process
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
          How We Work
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          Four clear phases. You always know what happens next — from the first
          call to launch day.
        </p>
        <ProcessPipelineVisual />
      </motion.div>

      <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {processSteps.map((step, index) => (
          <motion.li
            key={step.step}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="py-6 first:pt-6 last:pb-6 sm:py-7">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="shrink-0 font-mono text-sm tabular-nums text-[var(--orange)] sm:text-base"
                aria-hidden>
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function AboutJourneyLayout() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--subtle)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
            Partnership
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            How We Partner With Founders
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
            CraftDesk is built for founders who want a technical guide — not another agency
            selling hours. Here is what working together actually feels like.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-[var(--orange)]/60 via-[var(--orange)]/25 to-transparent md:left-8"
            aria-hidden
          />

          <ol className="space-y-8 md:space-y-10">
            {aboutPartnershipSteps.map((step, index) => {
              const Icon = aboutStepIcons[index] ?? Sparkles;

              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative flex gap-5 pl-2 md:gap-6 md:pl-4">
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--orange)]/25 bg-[var(--surface)] text-[var(--orange)] shadow-sm md:h-14 md:w-14">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                    <p className="font-mono text-xs font-bold text-[var(--orange)]">
                      Step {String(step.step).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Start a Conversation
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceWorkflowLayout() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--card)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Delivery Model"
          title="From Package to Launch"
          description="Every service follows the same transparent playbook — fixed scope, visible progress, and a launch you can measure."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {serviceWorkflowSteps.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className={`relative overflow-hidden rounded-2xl border border-[var(--border)] p-6 sm:p-8 ${
                index === 0 ?
                  "bg-gradient-to-br from-[var(--orange)]/12 via-[var(--surface)] to-[var(--surface)] md:col-span-2"
                : "bg-[var(--surface)]"
              }`}>
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-bold leading-none text-[var(--foreground)]/[0.04] sm:text-8xl"
                aria-hidden>
                {String(step.step).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--orange)]/15 font-mono text-xs font-bold text-[var(--orange)]">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  {index < serviceWorkflowSteps.length - 1 && (
                    <span className="hidden text-xs font-medium uppercase tracking-wider text-[var(--muted-subtle)] md:inline">
                      Phase {step.step} of {serviceWorkflowSteps.length}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({
  variant = "default",
  sectionIndex,
  layout,
}: ProcessSectionProps) {
  if (layout === "about-journey") {
    return <AboutJourneyLayout />;
  }

  if (layout === "service-bento") {
    return <ServiceWorkflowLayout />;
  }

  if (variant === "home") {
    return (
      <SectionLayout id="process" variant={variant} sectionIndex={sectionIndex}>
        <HomeProcessSimple />
      </SectionLayout>
    );
  }

  return null;
}
