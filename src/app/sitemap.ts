import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/paths";
import { routes } from "@/lib/routes";
import { seoPagePaths } from "@/lib/seo-pages";

export const dynamic = "force-static";

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: routes.customized, priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const seoEntries = seoPagePaths.map((path) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const pageEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: pageUrl(path || "/"),
    lastModified,
    changeFrequency,
    priority,
  }));

  return [...pageEntries, ...seoEntries];
}
