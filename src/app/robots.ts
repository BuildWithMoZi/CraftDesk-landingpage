import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/paths";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/products",
          "/pre-built",
          "/pre-built/",
          "/services",
          "/services/",
          "/portfolio",
          "/pricing",
        ],
      },
    ],
    sitemap: pageUrl("/sitemap.xml"),
    host: pageUrl("/"),
  };
}
