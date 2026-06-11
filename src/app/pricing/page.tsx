import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/metadata";
import { pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent pricing packages for startups, businesses, and enterprises. Custom software development from $4,999.",
  path: "/pricing",
});

const faqs = [
  {
    q: "What's included in the starting price?",
    a: "Starting prices cover scoping, design, development, testing, and deployment for a defined set of features. We'll provide a detailed quote after our discovery call.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer milestone-based payment schedules aligned with project phases — typically 30% upfront, 40% at midpoint, and 30% at delivery.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Many clients start with a Startup package and scale to Business or Enterprise as their needs grow.",
  },
  {
    q: "What if my project doesn't fit a package?",
    a: "We provide custom quotes for unique requirements. Contact us for a tailored proposal.",
  },
];

export default function PricingPage() {
  return (
    <MainLayout>
      <PageHero
        badge="Pricing"
        title="Plans That Scale With You"
        description="Flexible pricing designed for every stage of your business journey."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 backdrop-blur-xl",
                  plan.highlighted
                    ? "border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-transparent shadow-lg shadow-orange-500/10"
                    : "border-white/10 bg-white/[0.03]"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-xs font-bold text-black">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="ml-2 text-sm text-zinc-500">{plan.period}</span>
                </div>
                <p className="mt-4 text-zinc-400">{plan.description}</p>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-8"
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
