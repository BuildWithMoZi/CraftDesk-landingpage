"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  isHomeDestination,
  markInternalHomeNavigation,
  resetHomeLoaderCache,
} from "@/lib/navigation";

function handleHomeLinkInteraction(event: Event) {
  if (window.location.pathname === "/") return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const anchor = target.closest("a[href]");
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (isHomeDestination(href)) {
    markInternalHomeNavigation();
  }
}

/**
 * Catches every in-app click to `/` (navbar, footer, logo)
 * and resets loader cache when leaving home.
 */
export function HomeLoaderGuard() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useLayoutEffect(() => {
    document.addEventListener("click", handleHomeLinkInteraction, true);
    document.addEventListener("mousedown", handleHomeLinkInteraction, true);

    return () => {
      document.removeEventListener("click", handleHomeLinkInteraction, true);
      document.removeEventListener("mousedown", handleHomeLinkInteraction, true);
    };
  }, []);

  useLayoutEffect(() => {
    if (prevPathname.current === "/" && pathname !== "/") {
      resetHomeLoaderCache();
    }
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
