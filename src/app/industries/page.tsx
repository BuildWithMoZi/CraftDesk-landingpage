import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/metadata";
import { industries } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "Kyron Solutions delivers tailored software for healthcare, finance, e-commerce, logistics, education, and more.",
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20">
                  <industry.icon className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-semibold text-white">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-white">
              Don&apos;t see your industry?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
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
