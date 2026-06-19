import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createMetadata({
  title: "Products",
  description:
    "CraftDesk Solutions products — software built for startups and growing businesses from Nashik, India.",
  path: routes.products,
  index: false,
});

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className="relative min-h-[60vh]">
        <div className="pointer-events-none select-none blur-sm">
          <PageHero
            badge="Products"
            title="Our Products"
            description="Explore CraftDesk software products — built for speed, scale, and long-term growth."
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--background)]/40 backdrop-blur-[2px]">
          <span className="rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[var(--orange)] shadow-lg backdrop-blur-md sm:px-8 sm:text-base">
            This page is in maintenance
          </span>
        </div>
      </div>
    </MainLayout>
  );
}
