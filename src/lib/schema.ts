import { homeFaqs, testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import { absoluteAssetUrl } from "@/lib/paths";
import type { SeoLandingPageData } from "@/lib/seo-pages";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteAssetUrl(siteConfig.logo),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com",
      "https://twitter.com",
      "https://github.com",
      "https://instagram.com",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function aggregateRatingSchema(): JsonLd {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function reviewSchemas(): JsonLd[] {
  return testimonials.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    author: {
      "@type": "Person",
      name: testimonial.author,
      jobTitle: testimonial.role,
      worksFor: {
        "@type": "Organization",
        name: testimonial.company,
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: testimonial.quote,
  }));
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
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      description: page.pricing.name,
      url: `${siteConfig.url}/contact`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function globalSchemas(): JsonLd[] {
  return [organizationSchema(), websiteSchema()];
}

export function homePageSchemas(): JsonLd[] {
  return [...globalSchemas(), faqSchema(homeFaqs), ...reviewSchemas()];
}

export function seoPageSchemas(page: SeoLandingPageData): JsonLd[] {
  return [
    organizationSchema(),
    servicePageSchema(page),
    faqSchema(page.faqs),
  ];
}
