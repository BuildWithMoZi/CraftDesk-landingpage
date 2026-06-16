import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { seoPagePaths } from "@/lib/seo-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/products",
    "/contact",
    ...seoPagePaths,
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      path === "" ? 1
      : seoPagePaths.includes(path) ? 0.9
      : 0.8,
  }));
}
