"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, Shield, X } from "lucide-react";
import { navLinks, heroSocialLinks } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import { isNavActive, onHomeLinkClick, scrollToTop } from "@/lib/navigation";
import { BrandName, Logo } from "@/components/ui/brand-name";
import { ThemeToggle } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

const pillLinks = navLinks.filter((l) => l.href !== "/contact");

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden='true'>
      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden='true'>
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  );
}

function HeaderSocialButtons() {
  return (
    <>
      <a
        href={heroSocialLinks.whatsapp.href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={heroSocialLinks.whatsapp.label}
        className='flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[#25D366] transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/10'>
        <WhatsAppIcon className='h-4 w-4' />
      </a>
      <a
        href={heroSocialLinks.instagram.href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={heroSocialLinks.instagram.label}
        className='flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[#E4405F] transition-all hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10'>
        <InstagramIcon className='h-4 w-4' />
      </a>
    </>
  );
}

function BottomNavSocialButtons() {
  const buttonClass =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--subtle)] transition-colors min-[400px]:h-9 min-[400px]:w-9 sm:h-10 sm:w-10";

  return (
    <div className='hidden shrink-0 items-center gap-1.5 min-[400px]:gap-2 md:flex'>
      <a
        href={heroSocialLinks.whatsapp.href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={heroSocialLinks.whatsapp.label}
        className={`${buttonClass} text-[#25D366] hover:bg-[#25D366]/10`}>
        <WhatsAppIcon className='h-4 w-4 min-[400px]:h-[18px] min-[400px]:w-[18px] sm:h-5 sm:w-5' />
      </a>
      <a
        href={heroSocialLinks.instagram.href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={heroSocialLinks.instagram.label}
        className={`${buttonClass} text-[#E4405F] hover:bg-[#E4405F]/10`}>
        <InstagramIcon className='h-4 w-4 min-[400px]:h-[18px] min-[400px]:w-[18px] sm:h-5 sm:w-5' />
      </a>
    </div>
  );
}

function NavPill({
  onLinkClick,
  pathname,
}: {
  onLinkClick?: () => void;
  pathname: string;
}) {
  return (
    <nav
      className='flex max-w-[52vw] items-center gap-0.5 overflow-x-auto rounded-full border border-[var(--border)] bg-[var(--header-bg)] px-2 py-1.5 backdrop-blur-xl scrollbar-none xl:max-w-none'
      aria-label='Home navigation'>
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
            isNavActive(pathname, link.href) ?
              "text-[var(--foreground)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]",
          )}>
          {link.label}
        </Link>
      ))}
      <span className='mx-1 hidden h-5 w-px shrink-0 bg-[var(--border)] sm:block' />
      <Link
        href='/contact'
        onClick={onLinkClick}
        className='hidden shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[var(--muted-strong)] transition-colors duration-200 hover:text-[var(--orange)] sm:flex lg:px-4'>
        <Shield className='h-3.5 w-3.5 text-[var(--orange)]' />
        Contact
        <ArrowUpRight className='h-3.5 w-3.5' />
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
          className='mt-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 backdrop-blur-xl lg:hidden'
          aria-label='Mobile navigation'>
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
                isNavActive(pathname, link.href) ?
                  "text-[var(--orange)]"
                : "text-[var(--muted-strong)] hover:bg-[var(--subtle)] hover:text-[var(--foreground)]",
              )}>
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
    <header
      className={cn(
        "relative z-30 shrink-0 px-4 pt-5 sm:px-6 md:px-8",
        "max-md:fixed max-md:inset-x-0 max-md:top-[var(--site-marquee-height)] max-md:z-50 max-md:box-border max-md:w-full max-md:max-w-full max-md:min-w-0 max-md:overflow-hidden max-md:border-b max-md:border-[var(--border)] max-md:bg-[var(--header-bg)] max-md:px-4 max-md:py-3 max-md:backdrop-blur-xl",
      )}>
      <div className='flex w-full min-w-0 max-w-full items-center justify-between gap-2 overflow-hidden sm:gap-3'>
        <Link
          href='/'
          onClick={() => onHomeLinkClick(pathname)}
          className='group flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90 max-md:gap-1.5 md:shrink-0 md:gap-2.5'>
          <Logo
            size={44}
            priority
            alt=''
            className='h-11 w-11 shrink-0 transition-transform group-hover:scale-105 max-md:h-9 max-md:w-9'
          />
          <span className='min-w-0 overflow-hidden text-ellipsis whitespace-nowrap'>
            <BrandName className='text-lg max-md:text-base' />
          </span>
        </Link>

        <div className='hidden lg:block'>
          <NavPill pathname={pathname} />
        </div>

        <div className='hidden items-center gap-2 sm:flex'>
          <ThemeToggle size='sm' />
          <HeaderSocialButtons />
        </div>

        <div className='flex shrink-0 items-center gap-1.5 sm:gap-2 sm:hidden'>
          <ThemeToggle size='sm' />
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] lg:hidden'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ?
              <X className='h-5 w-5' />
            : <Menu className='h-5 w-5' />}
          </button>
        </div>
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
  const [isMobileBottomNav, setIsMobileBottomNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.12),
      { threshold: [0, 0.12, 0.3, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const updateVisibleLinks = () => {
      setVisibleLinkCount(getBottomNavVisibleLinkCount(window.innerWidth));
      setIsMobileBottomNav(window.innerWidth < 768);
    };

    updateVisibleLinks();
    window.addEventListener("resize", updateVisibleLinks, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleLinks);
  }, []);

  const isDesktopNav = visibleLinkCount >= pillLinks.length;
  const inlineLinks = pillLinks.slice(0, visibleLinkCount);
  const overflowLinks = pillLinks.slice(visibleLinkCount);
  const showCenterMenuButton =
    !isMobileBottomNav && !isDesktopNav && overflowLinks.length > 0;
  const showRightMenuButton = isMobileBottomNav;
  const menuLinks = isMobileBottomNav ? pillLinks : overflowLinks;

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
          className='bottom-nav-root fixed bottom-0 left-0 right-0 z-50 hidden justify-center px-2 pt-2 md:flex sm:px-4 sm:pb-6'
          style={{
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          }}>
          <div className='bottom-nav-shell relative w-full min-w-0 max-md:!max-w-full max-w-[min(100%,22rem)] min-[400px]:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl'>
            <div className='bottom-nav-glow-ring w-full rounded-full'>
              <div className='bottom-nav-ambient-glow' aria-hidden='true' />
              <div className='bottom-nav-beam-lanes' aria-hidden='true'>
                <div className='bottom-nav-single-beam' />
              </div>
              <div
                className={cn(
                  "bottom-nav-inner relative grid w-full min-w-0 max-w-full grid-cols-[1fr_auto_1fr] items-center gap-1 rounded-full bg-[var(--surface-elevated)] px-1.5 py-1.5 shadow-lg shadow-black/50 backdrop-blur-xl",
                  "min-[400px]:gap-1.5 min-[400px]:px-2 min-[400px]:py-2 sm:gap-2 sm:px-2.5 sm:py-2 lg:px-3 lg:py-2.5",
                  "max-md:!flex max-md:justify-between max-md:gap-2 max-md:overflow-hidden max-md:!px-2.5 max-md:!py-2",
                )}>
                <div className='flex min-w-0 shrink-0 items-center justify-start'>
                  <Link
                    href='/'
                    onClick={() => handleLinkClick("/")}
                    className='group flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-90 min-[400px]:gap-2'
                    aria-label={siteConfig.name}>
                    <Logo
                      size={26}
                      alt=''
                      className='h-6 w-6 shrink-0 transition-transform group-hover:scale-105 max-md:!h-7 max-md:!w-7 min-[400px]:h-7 min-[400px]:w-7'
                    />
                    <BrandName className='hidden min-[400px]:inline min-[400px]:text-sm sm:text-base max-md:!hidden' />
                  </Link>
                </div>

                <nav
                  className='hidden min-w-0 items-center justify-center gap-0.5 md:flex'
                  aria-label='Home navigation'>
                  {inlineLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        linkClass,
                        isNavActive(pathname, link.href) ?
                          "text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]",
                      )}>
                      {link.label}
                    </Link>
                  ))}

                  {isDesktopNav && (
                    <>
                      <span className='mx-0.5 hidden h-6 w-px shrink-0 bg-[var(--border)] lg:block' />
                      <Link
                        href='/contact'
                        onClick={() => handleLinkClick("/contact")}
                        className={cn(
                          linkClass,
                          "hidden items-center gap-1.5 text-[var(--muted-strong)] hover:text-[var(--orange)] lg:inline-flex",
                        )}>
                        <Shield className='h-3.5 w-3.5 text-[var(--orange)]' />
                        <span className='hidden xl:inline'>Contact</span>
                        <ArrowUpRight className='h-3.5 w-3.5 xl:hidden' />
                      </Link>
                    </>
                  )}

                  {showCenterMenuButton && (
                    <button
                      type='button'
                      onClick={() => setMenuOpen(!menuOpen)}
                      className='hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-[var(--subtle)] min-[400px]:h-9 min-[400px]:w-9 md:flex'
                      aria-label={menuOpen ? "Close menu" : "More links"}
                      aria-expanded={menuOpen}>
                      {menuOpen ?
                        <X className='h-4 w-4' />
                      : <Menu className='h-4 w-4' />}
                    </button>
                  )}
                </nav>

                <div className='flex shrink-0 items-center justify-end'>
                  <BottomNavSocialButtons />
                  {showRightMenuButton && (
                    <button
                      type='button'
                      onClick={() => setMenuOpen(!menuOpen)}
                      className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors hover:bg-[var(--subtle)] md:hidden'
                      aria-label={menuOpen ? "Close menu" : "Open menu"}
                      aria-expanded={menuOpen}>
                      {menuOpen ?
                        <X className='h-4 w-4' />
                      : <Menu className='h-4 w-4' />}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (showCenterMenuButton || showRightMenuButton) && (
                <motion.nav
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className='bottom-nav-dropdown absolute bottom-full left-0 right-0 z-[60] mb-2 max-h-[min(60vh,20rem)] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-2 shadow-xl backdrop-blur-xl sm:mb-3 sm:p-3'
                  aria-label='More navigation'>
                  {menuLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm transition-colors min-[400px]:text-[15px]",
                        isNavActive(pathname, link.href) ?
                          "bg-[var(--subtle)] text-[var(--orange)]"
                        : "text-[var(--muted-strong)] hover:bg-[var(--subtle)] hover:text-[var(--foreground)]",
                      )}>
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href='/contact'
                    onClick={() => handleLinkClick("/contact")}
                    className='mt-0.5 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-[var(--orange)] transition-colors hover:bg-[var(--subtle)] min-[400px]:text-[15px]'>
                    <Shield className='h-4 w-4' />
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
