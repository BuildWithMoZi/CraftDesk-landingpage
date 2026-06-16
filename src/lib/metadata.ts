import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://craftdesk.com";

export const siteConfig = {
  name: "CraftDesk Solutions",
  brand: "CraftDesk",
  logo: "/logo.png",
  /** Bump when replacing public/logo.png so browsers fetch the new file. */
  logoVersion: "20260614",
  tagline: "Engineering Digital Excellence",
  description:
    "CraftDesk Solutions is a full-service software development company specializing in custom web development, mobile apps, SaaS platforms, enterprise software, UI/UX design, cloud solutions, and AI integrations.",
  url: siteUrl,
  email: "craftdesk.tech@gmail.com",
  phone: "+91 94034 29923",
  address: "Ashoka Marg, Nashik, Maharashtra.",
};

export function logoUrl(version = siteConfig.logoVersion) {
  return `${siteConfig.logo}?v=${version}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;

  return {
    title: pageTitle,
    description: pageDescription,
    ...(keywords?.length ? { keywords } : {}),
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: logoUrl(),
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [logoUrl()],
    },
    robots: { index: true, follow: true },
  };
}
