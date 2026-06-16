const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!path) return basePath || "/";
  if (/^https?:\/\//i.test(path)) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function absoluteAssetUrl(path: string): string {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://buildwithmozi.github.io/CraftDesk-landingpage";

  return `${siteUrl.replace(/\/$/, "")}${assetPath(path)}`;
}
