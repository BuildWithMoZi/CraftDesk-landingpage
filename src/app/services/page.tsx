import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { TechStack } from "@/components/sections/tech-stack";
import { ProcessSection } from "@/components/sections/process-section";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore Kyron Solutions' full range of software development services — web, mobile, SaaS, enterprise, UI/UX, AI, and cloud solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHero
        badge="Services"
        title="Comprehensive Software Development Services"
        description="From ideation to deployment and beyond, we provide end-to-end solutions tailored to your business needs."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-colors hover:border-orange-500/30"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 text-orange-400">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
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
