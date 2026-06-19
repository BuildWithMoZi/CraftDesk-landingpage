/** Single-segment app routes that should permanently redirect elsewhere. */
export const appRedirects: Record<string, string> = {
  "/pricing": "/contact",
  "/services": "/products",
  "/pre-built": "/products",
  "/portfolio": "/customized",
};

export const appRedirectSlugs = Object.keys(appRedirects).map((path) =>
  path.replace(/^\//, "")
);

export function getAppRedirect(path: string): string | undefined {
  return appRedirects[path];
}
