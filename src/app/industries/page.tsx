import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { IndustriesSection } from "@/components/sections/industries-section";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "CraftDesk Solutions delivers tailored software for healthcare, finance, e-commerce, logistics, education, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <MainLayout>
      <PageHero
        badge="Industries"
        title="Industry-Specific Expertise"
        description="We understand the unique challenges of your industry and deliver compliant, scalable solutions."
      />

      <IndustriesSection hideHeading showFooterCta={false} compact />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Don&apos;t see your industry?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)]">
              We work with businesses across all sectors. Contact us to discuss your
              specific industry requirements.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
