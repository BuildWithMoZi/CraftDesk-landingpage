const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://buildwithmozi.github.io/CraftDesk-landingpage"
  ).replace(/\/$/, "");
}

export function assetPath(path: string): string {
  if (!path) return basePath || "/";
  if (/^https?:\/\//i.test(path)) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Absolute public URL for a page (canonical, sitemap, Open Graph). */
export function pageUrl(path = "/"): string {
  const siteUrl = getSiteUrl();
  const bp = basePath.replace(/\/$/, "");
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  if (bp && siteUrl.endsWith(bp)) {
    return `${siteUrl}${normalized}`;
  }

  if (bp) {
    return `${siteUrl}${bp}${normalized || "/"}`;
  }

  return `${siteUrl}${normalized}`;
}

export function absoluteAssetUrl(path: string): string {
  const siteUrl = getSiteUrl();
  const bp = basePath.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (bp && siteUrl.endsWith(bp)) {
    return `${siteUrl}${normalized}`;
  }

  if (bp) {
    return `${siteUrl}${bp}${normalized}`;
  }

  return `${siteUrl}${normalized}`;
}
