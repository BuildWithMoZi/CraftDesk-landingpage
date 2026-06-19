import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { SeoServiceLanding } from "@/components/seo/seo-service-landing";
import { createMetadata } from "@/lib/metadata";
import { appRedirectSlugs, getAppRedirect } from "@/lib/redirects";
import { getSeoPageBySlug, seoPageSlugs } from "@/lib/seo-pages";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ seoSlug: string }>;
};

export function generateStaticParams() {
  const slugs = new Set([...seoPageSlugs, ...appRedirectSlugs]);

  return [...slugs].map((seoSlug) => ({ seoSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { seoSlug } = await params;
  const page = getSeoPageBySlug(seoSlug);

  if (!page) return {};

  return createMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.path,
    keywords: page.meta.keywords,
  });
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { seoSlug } = await params;
  const path = `/${seoSlug}`;
  const redirectTo = getAppRedirect(path);

  if (redirectTo) redirect(redirectTo);

  const page = getSeoPageBySlug(seoSlug);
  if (!page) notFound();

  return (
    <MainLayout>
      <SeoServiceLanding page={page} />
    </MainLayout>
  );
}
