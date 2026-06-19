import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, socialLinks } from "@/lib/data";
import { seoLandingPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/metadata";
import { HomeLink } from "@/components/navigation/home-navigation";
import { BrandName, Logo } from "@/components/ui/brand-name";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Gmail: Mail,
  Instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className='border-t border-[var(--border-subtle)] bg-[var(--footer-bg)]'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='lg:col-span-1'>
            <HomeLink className='mb-4 flex items-center gap-2.5'>
              <Logo size={40} className='h-10 w-10' />
              <BrandName className='text-xl' />
            </HomeLink>
            <p className='mb-6 text-sm leading-relaxed text-[var(--muted-foreground)]'>
              {siteConfig.description.slice(0, 120)}...
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:") ?
                        undefined
                      : "noopener noreferrer"
                    }
                    className='flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle)] text-[var(--muted-foreground)] transition-colors hover:border-orange-500/30 hover:text-orange-400'
                    aria-label={social.name}>
                    {Icon ?
                      <Icon className='h-4 w-4' />
                    : null}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]'>
              Services
            </h3>
            <ul className='space-y-2.5'>
              {seoLandingPages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className='text-sm text-[var(--muted-foreground)] transition-colors hover:text-orange-400'>
                    {page.meta.title}
                  </Link>
                </li>
              ))}
              {services.slice(0, 2).map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className='text-sm text-[var(--muted-foreground)] transition-colors hover:text-orange-400'>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]'>
              Company
            </h3>
            <ul className='space-y-2.5'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href === "/" ?
                    <HomeLink className='text-sm text-[var(--muted-foreground)] transition-colors hover:text-orange-400'>
                      {link.label}
                    </HomeLink>
                  : <Link
                      href={link.href}
                      className='text-sm text-[var(--muted-foreground)] transition-colors hover:text-orange-400'>
                      {link.label}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]'>
              Newsletter
            </h3>
            <p className='mb-4 text-sm text-[var(--muted-foreground)]'>
              Get insights on software development, tech trends, and digital
              transformation.
            </p>
            <form className='flex flex-col gap-2' action='/contact'>
              <Input
                type='email'
                name='newsletter'
                placeholder='your@email.com'
                aria-label='Email for newsletter'
              />
              <Button type='submit' size='sm'>
                Subscribe
              </Button>
            </form>
            <div className='mt-6 space-y-3'>
              <a
                href={`mailto:${siteConfig.email}`}
                className='flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-orange-400'>
                <Mail className='h-4 w-4 shrink-0' />
                {siteConfig.email}
              </a>
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className='flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-orange-400'>
                  <Phone className='h-4 w-4 shrink-0' />
                  {phone}
                </a>
              ))}
              <p className='flex items-start gap-2 text-sm text-[var(--muted-foreground)]'>
                <MapPin className='mt-0.5 h-4 w-4 shrink-0' />
                {siteConfig.address}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 sm:flex-row'>
          <p className='text-sm text-[var(--muted-foreground)]'>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className='flex gap-6 text-sm text-[var(--muted-foreground)]'>
            <Link href='/contact' className='hover:text-orange-400'>
              Privacy Policy
            </Link>
            <Link href='/contact' className='hover:text-orange-400'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
