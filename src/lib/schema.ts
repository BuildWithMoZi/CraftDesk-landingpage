import { customizedProjects, homeFaqs, socialLinks } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import { absoluteAssetUrl, pageUrl } from "@/lib/paths";
import type { SeoLandingPageData } from "@/lib/seo-pages";

type JsonLd = Record<string, unknown>;

type BreadcrumbItem = { name: string; path: string };

function postalAddressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.addressCountry,
  };
}

function socialProfileUrls(): string[] {
  return socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: pageUrl(path),
    isPartOf: { "@type": "WebSite", url: pageUrl("/"), name: siteConfig.name },
    inLanguage: "en-IN",
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${pageUrl("/")}#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.brand,
    url: pageUrl("/"),
    logo: absoluteAssetUrl(siteConfig.logo),
    image: absoluteAssetUrl(siteConfig.logo),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: [...siteConfig.phones],
    address: postalAddressSchema(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Nashik" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "$$",
    knowsAbout: [
      "Web Application Development",
      "React Native Mobile Apps",
      "MVP Development",
      "Micro SaaS Development",
      "Landing Page Design",
      "Custom Software Development",
    ],
    sameAs: socialProfileUrls(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phones[0],
        contactType: "customer service",
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${pageUrl("/")}#website`,
    name: siteConfig.name,
    url: pageUrl("/"),
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${pageUrl("/")}#organization` },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function servicePageSchema(page: SeoLandingPageData): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.serviceName,
    description: page.serviceDescription,
    url: pageUrl(page.path),
    provider: { "@id": `${pageUrl("/")}#organization` },
    areaServed: [
      { "@type": "City", name: "Nashik" },
      { "@type": "Country", name: "India" },
    ],
    offers: {
      "@type": "Offer",
      description: page.pricing.name,
      url: pageUrl("/contact"),
      availability: "https://schema.org/InStock",
    },
  };
}

export function contactPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description:
      "Book a free discovery call with CraftDesk Solutions for MVP, web, and mobile app development.",
    url: pageUrl("/contact"),
    mainEntity: { "@id": `${pageUrl("/")}#organization` },
  };
}

export function aboutPageSchema(): JsonLd {
  return webPageSchema({
    name: `About ${siteConfig.name}`,
    description:
      "CraftDesk Solutions is a software development company in Nashik, Maharashtra — MVP development, custom web apps, and React Native mobile apps.",
    path: "/about",
  });
}

export function customizedPortfolioSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CraftDesk Customized Development Portfolio",
    description:
      "Custom websites, ecommerce platforms, and digital products built by CraftDesk Solutions.",
    numberOfItems: customizedProjects.length,
    itemListElement: customizedProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.href ?? pageUrl("/customized"),
    })),
  };
}

export function pageSchemas(
  breadcrumbs: BreadcrumbItem[],
  extra: JsonLd[] = [],
): JsonLd[] {
  return [
    organizationSchema(),
    breadcrumbSchema(breadcrumbs),
    ...extra,
  ];
}

export function globalSchemas(): JsonLd[] {
  return [organizationSchema(), websiteSchema()];
}

export function homePageSchemas(): JsonLd[] {
  return [
    ...globalSchemas(),
    webPageSchema({
      name: `${siteConfig.name} — Web & Mobile App Development in Nashik`,
      description: siteConfig.description,
      path: "/",
    }),
    faqSchema(homeFaqs),
  ];
}

export function aboutPageSchemas(): JsonLd[] {
  return pageSchemas(
    [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
    [aboutPageSchema()],
  );
}

export function contactPageSchemas(): JsonLd[] {
  return pageSchemas(
    [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    [contactPageSchema()],
  );
}

export function customizedPageSchemas(
  faqs: { question: string; answer: string }[],
): JsonLd[] {
  return pageSchemas(
    [
      { name: "Home", path: "/" },
      { name: "Customized", path: "/customized" },
    ],
    [
      webPageSchema({
        name: "Customized Development — CraftDesk Solutions",
        description:
          "Custom software development from scratch — websites, ecommerce platforms, SaaS dashboards, and mobile-ready products.",
        path: "/customized",
      }),
      customizedPortfolioSchema(),
      faqSchema(faqs),
    ],
  );
}

export function seoPageSchemas(page: SeoLandingPageData): JsonLd[] {
  return [
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.meta.title, path: page.path },
    ]),
    webPageSchema({
      name: page.hero.h1,
      description: page.meta.description,
      path: page.path,
    }),
    servicePageSchema(page),
    faqSchema(page.faqs),
  ];
}
