import type { NextConfig } from "next";
import { appRedirects } from "./src/lib/redirects";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const configRedirects = Object.entries(appRedirects).map(
  ([source, destination]) => ({
    source,
    destination,
    permanent: true,
  })
);

const nextConfig: NextConfig = {
  ...(isStaticExport ?
    {
      output: "export",
      trailingSlash: true,
    }
  : {}),
  ...(basePath ?
    {
      basePath,
      assetPrefix: `${basePath}/`,
    }
  : {}),
  images: {
    unoptimized: true,
  },
  ...(!isStaticExport ?
    {
      async redirects() {
        return [
          ...configRedirects,
          {
            source: "/industries",
            destination: "/products",
            permanent: true,
          },
          {
            source: "/services/:slug",
            destination: "/products",
            permanent: true,
          },
          {
            source: "/blog",
            destination: "/",
            permanent: true,
          },
          {
            source: "/blog/:slug",
            destination: "/",
            permanent: true,
          },
        ];
      },
    }
  : {}),
};

export default nextConfig;
