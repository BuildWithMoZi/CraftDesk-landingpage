"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { onHomeLinkClick } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function BackToHomeButton() {
  const pathname = usePathname();

  return (
    <Button asChild className="mt-8">
      <Link href="/" onClick={() => onHomeLinkClick(pathname)}>
        Back to Home
      </Link>
    </Button>
  );
}
