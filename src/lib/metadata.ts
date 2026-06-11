import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kyronsolutions.com";

export const siteConfig = {
  name: "Kyron Solutions",
  brand: "Kyron",
  tagline: "Transforming Ideas Into Powerful Digital Solutions",
  description:
    "Kyron Solutions is a full-service software development company specializing in custom web development, mobile apps, SaaS platforms, enterprise software, UI/UX design, cloud solutions, and AI integrations.",
  url: siteUrl,
  email: "hello@kyronsolutions.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, San Francisco, CA 94105",
};

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: { index: true, follow: true },
  };
}
