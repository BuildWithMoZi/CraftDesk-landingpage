import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { microSaasProducts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShowcaseCard } from "@/components/ui/showcase-card";

export const metadata: Metadata = createMetadata({
  title: "Our Products",
  description:
    "Explore CraftDesk's Micro SaaS portfolio — live products we build and operate, proving our engineering depth beyond client work.",
  path: "/products",
});

const statusLabels = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
} as const;

export default function ProductsPage() {
  return (
    <MainLayout>
      <JsonLd data={organizationSchema()} />

      <PageHero
        badge="Products"
        title="Micro SaaS We Build & Operate"
        description="Real software products — not just client deliverables. Our portfolio demonstrates the same engineering we bring to your project."
      />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {microSaasProducts.map((product, index) => (
              <ShowcaseCard
                key={product.id}
                variant={product.variant}
                title={product.name}
                subtitle={product.tagline}
                priceLabel={statusLabels[product.status]}
                meta={product.metrics ?? statusLabels[product.status]}
                href={product.href ?? "/contact"}
                ctaLabel={
                  product.status === "coming-soon" ? "Join waitlist" : "Explore product"
                }
                gradient={product.gradient}
                image={product.image}
                priority={index === 0}
                className="h-full min-h-[400px]"
              />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
              Want us to build your Micro SaaS?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted-foreground)] sm:text-base">
              Our MVP Accelerator delivers auth, core features, payments, and deployment in
              4–6 weeks — the same playbook we use for our own products.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/micro-saas-development">
                  View MVP Accelerator
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
