"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, Shield, UserRound, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import { isNavActive, onHomeLinkClick, scrollToTop } from "@/lib/navigation";
import { BrandName } from "@/components/ui/brand-name";
import { cn } from "@/lib/utils";

const pillLinks = navLinks.filter((l) => l.href !== "/contact");

function NavPill({
  onLinkClick,
  pathname,
}: {
  onLinkClick?: () => void;
  pathname: string;
}) {
  return (
    <nav
      className="flex max-w-[52vw] items-center gap-0.5 overflow-x-auto rounded-full border border-[var(--border)] bg-black/80 px-2 py-1.5 backdrop-blur-xl scrollbar-none xl:max-w-none"
      aria-label="Home navigation"
    >
      {pillLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => {
            onLinkClick?.();
            if (link.href === "/") {
              onHomeLinkClick(pathname);
              return;
            }
            if (isNavActive(pathname, link.href)) scrollToTop(true);
          }}
          className={cn(
            "shrink-0 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-4",
            isNavActive(pathname, link.href)
              ? "text-[var(--foreground)]"
              : "text-white/50 hover:text-[var(--foreground)]"
          )}
        >
          {link.label}
        </Link>
      ))}
      <span className="mx-1 hidden h-5 w-px shrink-0 bg-[var(--border)] sm:block" />
      <Link
        href="/contact"
        onClick={onLinkClick}
        className="hidden shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-[var(--orange)] sm:flex lg:px-4"
      >
        <Shield className="h-3.5 w-3.5 text-[var(--orange)]" />
        Contact
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </nav>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-3 rounded-2xl border border-[var(--border)] bg-black/90 p-4 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                onClose();
                if (isNavActive(pathname, link.href)) scrollToTop(true);
              }}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200",
                isNavActive(pathname, link.href)
                  ? "text-[var(--orange)]"
                  : "text-white/70 hover:bg-white/5 hover:text-[var(--foreground)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

/** Top navbar — scrolls away with hero frame */
export function HomeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-30 px-4 pt-5 sm:px-6 md:px-8">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => onHomeLinkClick(pathname)}
          className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <BrandName className="text-base" />
        </Link>

        <div className="hidden lg:block">
          <NavPill pathname={pathname} />
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--orange)] sm:flex"
        >
          Create Account
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)]">
            <UserRound className="h-4 w-4" />
          </span>
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}

function getBottomNavVisibleLinkCount(width: number): number {
  if (width >= 1024) return pillLinks.length;
  if (width >= 768) return 4;
  if (width >= 640) return 3;
  if (width >= 480) return 2;
  return 1;
}

/** Bottom floating navbar — appears when hero scrolls out of view */
export function HomeBottomNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleLinkCount, setVisibleLinkCount] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.12),
      { threshold: [0, 0.12, 0.3, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const updateVisibleLinks = () => {
      setVisibleLinkCount(getBottomNavVisibleLinkCount(window.innerWidth));
    };

    updateVisibleLinks();
    window.addEventListener("resize", updateVisibleLinks, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleLinks);
  }, []);

  const isDesktopNav = visibleLinkCount >= pillLinks.length;
  const inlineLinks = pillLinks.slice(0, visibleLinkCount);
  const overflowLinks = pillLinks.slice(visibleLinkCount);
  const showMenuButton = !isDesktopNav && overflowLinks.length > 0;

  const linkClass =
    "shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 min-[400px]:px-3 min-[400px]:py-2 min-[400px]:text-sm sm:px-3.5 sm:py-2";

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href === "/") {
      onHomeLinkClick(pathname);
      return;
    }
    if (isNavActive(pathname, href)) scrollToTop(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-2 pt-2 sm:px-4 sm:pb-6"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="relative w-full max-w-[min(100%,22rem)] min-[400px]:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <div className="bottom-nav-glow-ring w-full rounded-full">
              <div className="bottom-nav-ambient-glow" aria-hidden="true" />
              <div className="bottom-nav-beam-lanes" aria-hidden="true">
                <div className="bottom-nav-single-beam" />
              </div>
              <div className="bottom-nav-inner relative flex w-full min-w-0 items-center gap-1 rounded-full bg-black/95 px-1.5 py-1.5 shadow-lg shadow-black/50 backdrop-blur-xl min-[400px]:gap-1.5 min-[400px]:px-2 min-[400px]:py-2 sm:gap-2 sm:px-2.5 sm:py-2 lg:px-3 lg:py-2.5">
                <Link
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className="group flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-90 min-[400px]:gap-2 sm:pr-1"
                  aria-label={siteConfig.name}
                >
                  <Image
                    src="/logo.png"
                    alt=""
                    width={26}
                    height={26}
                    className="h-6 w-6 shrink-0 object-contain transition-transform group-hover:scale-105 min-[400px]:h-7 min-[400px]:w-7"
                  />
                  <BrandName className="hidden text-xs min-[400px]:inline min-[400px]:text-sm sm:text-base" />
                </Link>

                <span
                  className="hidden h-6 w-px shrink-0 bg-[var(--border)] min-[400px]:block sm:h-7"
                  aria-hidden="true"
                />

                <nav
                  className={cn(
                    "flex min-w-0 flex-1 items-center",
                    isDesktopNav ?
                      "gap-0.5 overflow-x-auto scrollbar-none"
                    : "gap-0.5 overflow-x-auto scrollbar-none touch-pan-x"
                  )}
                  aria-label="Home navigation"
                >
                  {inlineLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        linkClass,
                        isNavActive(pathname, link.href)
                          ? "text-[var(--foreground)]"
                          : "text-white/50 hover:text-[var(--foreground)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {isDesktopNav && (
                    <>
                      <span className="mx-0.5 hidden h-6 w-px shrink-0 bg-[var(--border)] lg:block" />
                      <Link
                        href="/contact"
                        onClick={() => handleLinkClick("/contact")}
                        className={cn(
                          linkClass,
                          "hidden items-center gap-1.5 text-white/70 hover:text-[var(--orange)] lg:inline-flex"
                        )}
                      >
                        <Shield className="h-3.5 w-3.5 text-[var(--orange)]" />
                        <span className="hidden xl:inline">Contact</span>
                        <ArrowUpRight className="h-3.5 w-3.5 xl:hidden" />
                      </Link>
                    </>
                  )}
                </nav>

                {showMenuButton && (
                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-white/5 min-[400px]:h-9 min-[400px]:w-9"
                    aria-label={menuOpen ? "Close menu" : "More links"}
                    aria-expanded={menuOpen}
                  >
                    {menuOpen ?
                      <X className="h-4 w-4" />
                    : <Menu className="h-4 w-4" />}
                  </button>
                )}

                <span
                  className="h-6 w-px shrink-0 bg-[var(--border)] sm:h-7"
                  aria-hidden="true"
                />

                <Link
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--foreground)] transition-colors hover:bg-white/10 hover:text-[var(--orange)] min-[400px]:h-9 min-[400px]:w-9 sm:h-10 sm:w-10"
                  aria-label="Create Account"
                >
                  <UserRound className="h-4 w-4 min-[400px]:h-[18px] min-[400px]:w-[18px] sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && showMenuButton && (
                <motion.nav
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 right-0 mb-2 max-h-[min(60vh,20rem)] overflow-y-auto rounded-2xl border border-[var(--border)] bg-black/95 p-2 shadow-xl backdrop-blur-xl sm:mb-3 sm:p-3"
                  aria-label="More navigation"
                >
                  {overflowLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm transition-colors min-[400px]:text-[15px]",
                        isNavActive(pathname, link.href)
                          ? "bg-white/5 text-[var(--orange)]"
                          : "text-white/70 hover:bg-white/5 hover:text-[var(--foreground)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => handleLinkClick("/contact")}
                    className="mt-0.5 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-[var(--orange)] transition-colors hover:bg-white/5 min-[400px]:text-[15px]"
                  >
                    <Shield className="h-4 w-4" />
                    Contact
                  </Link>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
