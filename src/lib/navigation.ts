const SKIP_HOME_LOADER_KEY = "kyron-skip-home-loader";
const LEGACY_SKIP_HOME_LOADER_KEY = "aurex-skip-home-loader";

let skipNextHomeLoader = false;

/** Survives React Strict Mode double-mount within the same navigation */
let loaderDecisionCache: boolean | null = null;

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function scrollToTop(smooth = true) {
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
}

/** Call before any client-side navigation TO home from another route */
export function markInternalHomeNavigation() {
  skipNextHomeLoader = true;
  loaderDecisionCache = false;
  try {
    sessionStorage.setItem(SKIP_HOME_LOADER_KEY, "1");
  } catch {
    // sessionStorage unavailable
  }
}

export function onHomeLinkClick(pathname: string, onAfter?: () => void) {
  if (pathname !== "/") {
    markInternalHomeNavigation();
  } else {
    scrollToTop(true);
  }
  onAfter?.();
}

export function resetHomeLoaderCache() {
  loaderDecisionCache = null;
  skipNextHomeLoader = false;
  try {
    sessionStorage.removeItem(SKIP_HOME_LOADER_KEY);
    sessionStorage.removeItem(LEGACY_SKIP_HOME_LOADER_KEY);
  } catch {
    // ignore
  }
}

function hasSkipHomeLoaderFlag(): boolean {
  if (skipNextHomeLoader) return true;
  try {
    return (
      sessionStorage.getItem(SKIP_HOME_LOADER_KEY) === "1" ||
      sessionStorage.getItem(LEGACY_SKIP_HOME_LOADER_KEY) === "1"
    );
  } catch {
    return false;
  }
}

function getNavigationType(): PerformanceNavigationTiming["type"] | undefined {
  if (typeof window === "undefined") return undefined;

  const nav = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming | undefined;

  return nav?.type;
}

function computeShouldShowHomeLoader(): boolean {
  if (hasSkipHomeLoaderFlag()) {
    return false;
  }

  const navType = getNavigationType();

  if (navType === "reload") return true;
  if (navType === "navigate") return true;
  if (navType === "back_forward") return false;

  return false;
}

/**
 * Show loader on direct visit or hard refresh.
 * Skip when navigating to home via any in-app link.
 */
export function shouldShowHomeLoader(): boolean {
  return computeShouldShowHomeLoader();
}

/** Client-only — call inside useLayoutEffect */
export function resolveHomeLoaderOnMount(): boolean {
  if (loaderDecisionCache !== null) {
    return loaderDecisionCache;
  }

  const show = computeShouldShowHomeLoader();
  loaderDecisionCache = show;
  return show;
}

export function isHomeDestination(href: string | null): boolean {
  if (!href || typeof window === "undefined") return false;

  if (href === "/") return true;

  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin && url.pathname === "/";
  } catch {
    return false;
  }
}
