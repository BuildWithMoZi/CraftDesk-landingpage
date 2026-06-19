"use client";

import { heroContent } from "@/lib/data";

export function SiteTaglineMarquee() {
  const taglineItems = Array.from({ length: 4 }, () => heroContent.tagline);

  return (
    <div className='site-tagline-marquee sticky top-0 z-[60] w-full overflow-hidden border-b border-white/10 bg-black'>
      <p className='sr-only'>{heroContent.tagline}</p>
      <div
        className='pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-20'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-20'
        aria-hidden
      />
      <div className='hero-tagline-marquee-track flex h-[var(--site-marquee-height)] w-max items-center'>
        {[...taglineItems, ...taglineItems].map((line, index) => (
          <span
            key={`${index}-${line.slice(0, 24)}`}
            className='flex shrink-0 items-center'
            aria-hidden>
            <span className='whitespace-nowrap px-8 text-xs font-bold tracking-wide text-white sm:px-12 sm:text-sm'>
              {line}
            </span>
            <span className='font-bold text-[var(--orange)]'>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
