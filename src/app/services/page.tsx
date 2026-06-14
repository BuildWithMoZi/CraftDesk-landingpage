import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStack } from "@/components/sections/tech-stack";
import { ProcessSection } from "@/components/sections/process-section";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore CraftDesk Solutions services — landing pages, websites, mobile apps, booking systems, custom software, and maintenance support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHero
        badge="Services"
        title="Software Development Services"
        description="Focused services to help you launch, grow, and maintain your digital products."
      />

      <ServicesSection hideHeading showFooterCta={false} />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)]">
              Book a free consultation and our experts will help you identify the best
              approach for your project.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <TechStack />
      <ProcessSection />
    </MainLayout>
  );
}
