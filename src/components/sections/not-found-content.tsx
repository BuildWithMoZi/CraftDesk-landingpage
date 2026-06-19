"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { onHomeLinkClick } from "@/lib/navigation";
import { Logo } from "@/components/ui/brand-name";
import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  const pathname = usePathname();

  return (
    <MainLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <Logo size={72} className="mb-6 h-[72px] w-[72px]" />
        <h1 className="text-8xl font-bold text-orange-400">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">Page Not Found</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/" onClick={() => onHomeLinkClick(pathname)}>
            Back to Home
          </Link>
        </Button>
      </div>
    </MainLayout>
  );
}
