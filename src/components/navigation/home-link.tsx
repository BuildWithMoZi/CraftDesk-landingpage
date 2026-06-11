"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { onHomeLinkClick } from "@/lib/navigation";

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
