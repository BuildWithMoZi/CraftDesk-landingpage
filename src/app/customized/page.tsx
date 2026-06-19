import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { AlternatingShowcaseSection } from "@/components/sections/alternating-showcase-section";
import { TrustMarqueeSection } from "@/components/sections/trust-marquee-section";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { customizedPageSchemas } from "@/lib/schema";
import {
  customizedFaqs,
  customizedProjectFilters,
  customizedProjects,
  customizedTickerPhrases,
} from "@/lib/data";
import { createMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createMetadata({
  title: "Customized Development",
  description:
    "Custom software development from scratch — websites, ecommerce platforms, SaaS dashboards, and mobile-ready products built for your brand from Nashik, India.",
  path: routes.customized,
  keywords: [
    "custom software development",
    "custom website development India",
    "ecommerce development Nashik",
    "SaaS development agency",
    "portfolio web development",
  ],
});

export default function CustomizedPage() {
  return (
    <MainLayout>
      <JsonLd data={customizedPageSchemas(customizedFaqs)} />

      <div className="flex min-h-[calc(100dvh-var(--site-marquee-height))] flex-col">
        <PageHero
          fullScreen
          badge="Customized"
          title="Customized Development From Scratch"
          description="Tailor-made websites, platforms, and digital products — designed, built, and launched around your business goals."
        />

        <TrustMarqueeSection mode="bar" items={customizedTickerPhrases} />
      </div>

      <AlternatingShowcaseSection
        items={customizedProjects}
        filters={[...customizedProjectFilters]}
        ctaLabel="View Project"
      />

      <FaqSection
        items={customizedFaqs}
        title="Frequently Asked Questions"
        description="Answers on custom builds, timelines, source code, and support."
        layout="split"
      />
    </MainLayout>
  );
}
