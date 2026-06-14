"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  isHomeDestination,
  markInternalHomeNavigation,
  onHomeLinkClick,
  resetHomeLoaderCache,
  scrollToTop,
} from "@/lib/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);

  return null;
}

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

interface HomeLinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function HomeLink({ children, className, onClick }: HomeLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      onClick={() => onHomeLinkClick(pathname, onClick)}
    >
      {children}
    </Link>
  );
}
