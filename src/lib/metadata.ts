import type { Metadata } from "next";
import { absoluteAssetUrl, assetPath, pageUrl } from "@/lib/paths";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://buildwithmozi.github.io/CraftDesk-landingpage";

export const siteConfig = {
  name: "CraftDesk Solutions",
  brand: "CraftDesk",
  logo: "/logo.png",
  /** Bump when replacing public/logo.png so browsers fetch the new file. */
  logoVersion: "20260614",
  tagline: "Engineering Digital Excellence",
  description:
    "CraftDesk Solutions is a software development company in Nashik, Maharashtra — custom web apps, React Native mobile apps, and MVP development for startup founders across India.",
  url: siteUrl,
  email: "craftdesk.tech@gmail.com",
  phone: "+91 94034 29923",
  phones: ["+91 9403429923", "+91 7666009723"] as const,
  streetAddress: "Ashoka Marg",
  addressLocality: "Nashik",
  addressRegion: "Maharashtra",
  postalCode: "422001",
  addressCountry: "IN",
  /** Full single-line address for display */
  address: "Ashoka Marg, Nashik, Maharashtra, India",
  geo: {
    latitude: 19.9975,
    longitude: 73.7898,
  },
};

export const defaultKeywords = [
  "software development company Nashik",
  "web development Nashik",
  "React Native app development India",
  "MVP development startup",
  "custom web application development",
  "mobile app development Maharashtra",
  "CraftDesk Solutions",
] as const;

export function logoUrl(version = siteConfig.logoVersion) {
  return `${assetPath(siteConfig.logo)}?v=${version}`;
}

export function logoAbsoluteUrl(version = siteConfig.logoVersion) {
  return `${absoluteAssetUrl(siteConfig.logo)}?v=${version}`;
}

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  /** Set false for maintenance or redirect-only pages */
  index?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  index = true,
}: CreateMetadataOptions): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;
  const canonical = pageUrl(path || "/");
  const ogImage = absoluteAssetUrl("/opengraph-image");
  const mergedKeywords = keywords ?? [...defaultKeywords];

  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: mergedKeywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: pageUrl("/") }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    metadataBase: new URL(pageUrl("/")),
    alternates: { canonical },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Web & Mobile App Development in Nashik`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
    ...(googleVerification ? { verification: { google: googleVerification } } : {}),
    other: {
      "geo.region": "IN-MH",
      "geo.placename": siteConfig.addressLocality,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  };
}
