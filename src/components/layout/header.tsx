"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { isNavActive, onHomeLinkClick, scrollToTop } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { BrandName, Logo } from "@/components/ui/brand-name";
import { ThemeToggle } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "/") {
      onHomeLinkClick(pathname);
      return;
    }
    if (isNavActive(pathname, href)) {
      scrollToTop(true);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ?
          "border-b border-[var(--border-subtle)] bg-[var(--header-bg)] backdrop-blur-xl"
        : "bg-transparent",
      )}>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          onClick={() => onHomeLinkClick(pathname)}
          className='flex items-center gap-2.5 group'>
          <Logo
            size={36}
            className='h-14 w-14 transition-transform group-hover:scale-105'
          />
          <BrandName />
        </Link>

        <nav
          className='hidden items-center gap-1 lg:flex'
          aria-label='Main navigation'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                isNavActive(pathname, link.href) ? "text-orange-400" : (
                  "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                ),
              )}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-2 lg:flex'>
          <ThemeToggle size='sm' />
          <Button asChild size='sm'>
            <Link href='/contact'>Get Free Consultation</Link>
          </Button>
        </div>

        <div className='flex items-center gap-2 lg:hidden'>
          <ThemeToggle size='sm' />
          <button
            type='button'
            className='rounded-lg p-2 text-[var(--muted-foreground)] hover:bg-[var(--subtle)] hover:text-[var(--foreground)]'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}>
            {isOpen ?
              <X className='h-6 w-6' />
            : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)] backdrop-blur-xl lg:hidden'>
            <nav
              className='flex flex-col gap-1 px-4 py-4'
              aria-label='Mobile navigation'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
                    isNavActive(pathname, link.href) ?
                      "bg-orange-500/10 text-orange-400"
                    : "text-[var(--muted-foreground)] hover:bg-[var(--subtle)] hover:text-[var(--foreground)]",
                  )}>
                  {link.label}
                </Link>
              ))}
              <Button asChild className='mt-2'>
                <Link href='/contact' onClick={() => setIsOpen(false)}>
                  Get Free Consultation
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
