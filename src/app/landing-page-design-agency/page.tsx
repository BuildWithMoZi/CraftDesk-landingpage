import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { SeoServiceLanding } from "@/components/seo/seo-service-landing";
import { createMetadata } from "@/lib/metadata";
import { getSeoPageByPath } from "@/lib/seo-pages";

const PATH = "/landing-page-design-agency";

export function generateMetadata(): Metadata {
  const page = getSeoPageByPath(PATH)!;
  return createMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: PATH,
    keywords: page.meta.keywords,
  });
}

export default function LandingPageDesignAgencyPage() {
  const page = getSeoPageByPath(PATH)!;

  return (
    <MainLayout>
      <SeoServiceLanding page={page} />
    </MainLayout>
  );
}
