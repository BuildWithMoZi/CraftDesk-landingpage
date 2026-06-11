"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToTop } from "@/lib/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);

  return null;
}
