import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
          {
            source: "/industries",
            destination: "/services",
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
