import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Map, Shield, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { JsonLd } from "@/components/seo/json-ld";
import { microSaasProducts, processSteps, stats } from "@/lib/data";
import { createMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "CraftDesk is the silent engineering guide behind your digital product — productized delivery, clear scoping, and proven results without the personal brand noise.",
  path: "/about",
});

const storyBrand = [
  {
    icon: Sparkles,
    label: "You — The Hero",
    title: "You have the vision. We bring the engineering.",
    description:
      "You're the founder, operator, or product leader with an idea worth building. Your job is to solve customer problems — not wrestle with tech stacks, agency politics, or endless scoping calls.",
  },
  {
    icon: Map,
    label: "The Problem",
    title: "Great ideas stall in slow, opaque agency cycles",
    description:
      "Traditional agencies hide pricing, stretch timelines, and tie trust to founder personalities. You need output, clarity, and speed — not another proposal deck.",
  },
  {
    icon: Compass,
    label: "CraftDesk — Your Guide",
    title: "A faceless brand built entirely on delivery excellence",
    description:
      "We don't sell charisma — we ship products. CraftDesk operates as your silent technical partner: structured processes, transparent packages, and a portfolio of live software that proves we build what we promise.",
  },
  {
    icon: Shield,
    label: "The Plan",
    title: "Four steps from idea to launch",
    description:
      "Discovery → Design → Development → Launch. Every engagement follows the same proven framework — so you always know where your project stands.",
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <JsonLd data={organizationSchema()} />

      <PageHero
        badge="About CraftDesk"
        title="We Guide. You Lead. Together We Ship."
        description="CraftDesk is the authoritative engineering partner for founders who want results — not reels, headshots, or hype."
      />

      {/* StoryBrand narrative */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {storyBrand.map((block) => (
              <article
                key={block.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--orange)]/10 text-[var(--orange)]">
                  <block.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--orange)]">
                  {block.label}
                </p>
                <h2 className="mt-2 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                  {block.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                  {block.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — stats + internal SaaS (no team photos) */}
      <section className="border-y border-[var(--border)] bg-[var(--subtle)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                Proof Over Personality
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                We build trust through shipped products, clear scoping, and measurable
                outcomes — not founder photos or social media presence.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center sm:p-6"
                  >
                    <div className="text-2xl font-bold text-[var(--orange)] sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Our Internal SaaS Portfolio
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                We operate the same kind of products we build for clients.
              </p>
              <ul className="mt-6 space-y-4">
                {microSaasProducts.map((product) => (
                  <li
                    key={product.id}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-[var(--foreground)]">{product.name}</p>
                        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                          {product.tagline}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-[var(--orange)]/20 bg-[var(--orange)]/5 px-2.5 py-0.5 text-xs font-medium capitalize text-[var(--orange)]">
                        {product.status.replace("-", " ")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            How We Operate
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Clear Scoping",
                desc: "Defined deliverables and timelines — contact us for a quote tailored to your project.",
              },
              {
                title: "Productized Delivery",
                desc: "Strict timelines and scoped sprints so projects ship on schedule.",
              },
              {
                title: "Engineering Excellence",
                desc: "Clean architecture, performance-first builds, and long-term maintainability.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-xl"
              >
                <Check className="mb-3 h-5 w-5 text-[var(--orange)]" />
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{value.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan preview — compact 4 steps */}
      <section className="border-t border-[var(--border)] bg-[var(--card)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Your Path to Launch
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <span className="font-mono text-sm font-bold text-[var(--orange)]">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </MainLayout>
  );
}
