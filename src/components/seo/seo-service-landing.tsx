import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { seoPageSchemas } from "@/lib/schema";
import type { SeoLandingPageData } from "@/lib/seo-pages";
import { Button } from "@/components/ui/button";

interface SeoServiceLandingProps {
  page: SeoLandingPageData;
}

export function SeoServiceLanding({ page }: SeoServiceLandingProps) {
  const frameworkLabel =
    page.framework === "pas" ? "Problem · Agitate · Solve" : "Picture · Promise · Proof · Push";

  return (
    <>
      <JsonLd data={seoPageSchemas(page)} />

      <PageHero
        badge={page.hero.badge}
        title={page.hero.h1}
        description={page.hero.description}
      />

      {/* Proof metrics bar */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[var(--border)] px-4 sm:px-6 lg:px-8">
          {page.proofMetrics.map((metric) => (
            <div key={metric.label} className="px-3 py-8 text-center sm:px-6">
              <p className="text-2xl font-bold text-[var(--orange)] sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Framework sections */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-subtle)]">
            {frameworkLabel}
          </p>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {page.sections.map((section) => (
              <article
                key={section.label}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-xl sm:p-8"
              >
                <span className="inline-block rounded-full border border-[var(--orange)]/20 bg-[var(--orange)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--orange)]">
                  {section.label}
                </span>
                <h2 className="mt-4 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                  {section.description}
                </p>
                {section.bullets && (
                  <ul className="mt-5 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[var(--muted-strong)]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Pricing */}
      <section className="border-t border-[var(--border)] bg-[var(--subtle)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                What You Get
              </h2>
              <p className="mt-3 text-[var(--muted-foreground)]">
                Every engagement includes clearly defined deliverables — no scope creep surprises.
              </p>
              <ul className="mt-8 space-y-3">
                {page.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--muted-strong)] sm:text-base"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--orange)]/30 bg-gradient-to-b from-[var(--orange)]/10 to-transparent p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--orange)]">
                Get a Quote
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">
                {page.pricing.name}
              </h3>
              <p className="mt-4 text-sm font-medium text-[var(--muted-strong)]">
                {page.pricing.period}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Contact us for pricing tailored to your scope and timeline.
              </p>
              <ul className="mt-6 space-y-2.5">
                {page.pricing.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--muted-strong)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full sm:w-auto" size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {page.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 backdrop-blur-xl sm:p-6"
              >
                <h3 className="font-semibold text-[var(--foreground)]">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-800 bg-[#1C1C1E] px-6 py-12 text-center sm:rounded-3xl sm:px-10 sm:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              Book a free consultation — we'll scope your project and share a tailored quote with
              fixed timelines from day one.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-zinc-700 text-white hover:bg-zinc-800 sm:w-auto"
              >
                <Link href="/contact">Contact for Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
