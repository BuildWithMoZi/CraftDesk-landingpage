import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { absoluteAssetUrl } from "@/lib/paths";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.brand,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#f97316",
    lang: "en-IN",
    icons: [
      {
        src: absoluteAssetUrl("/logo.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
