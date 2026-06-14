import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent pricing packages for startups, businesses, and enterprises. Custom software development from ₹4,15,000.",
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

      <PricingSection hideHeading showFooterCta={false} compact />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-[var(--foreground)]">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-[var(--foreground)]">{faq.q}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
