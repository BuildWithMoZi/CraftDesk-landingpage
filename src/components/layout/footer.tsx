import Link from "next/link";
import { Mail, MapPin, Phone, Shield } from "lucide-react";
import { navLinks, services, socialLinks } from "@/lib/data";
import { legalPolicies } from "@/lib/legal";
import { seoLandingPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/metadata";
import { HomeLink } from "@/components/navigation/home-navigation";
import { BrandName, Logo } from "@/components/ui/brand-name";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Gmail: Mail,
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
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
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

        <div className='mt-12 flex flex-col items-center justify-between gap-5 border-t border-[var(--border-subtle)] pt-8 sm:flex-row'>
          <p className='text-sm text-[var(--muted-foreground)]'>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {legalPolicies.map((policy) => (
              <Link
                key={policy.slug}
                href={policy.path}
                className='group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--subtle)] px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400'>
                <Shield className='h-3.5 w-3.5 transition-colors group-hover:text-orange-400' />
                {policy.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
