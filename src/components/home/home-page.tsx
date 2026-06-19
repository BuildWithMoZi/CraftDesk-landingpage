"use client";

import { useState, useCallback, useLayoutEffect } from "react";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Footer } from "@/components/layout/footer";
import { HomeNav, HomeBottomNav } from "@/components/home/home-nav";
import { HomeHero } from "@/components/home/home-hero";
import { TrustMarqueeSection } from "@/components/sections/trust-marquee-section";
import { SolutionsSplitSection } from "@/components/sections/solutions-split-section";
import {
  FaqSection,
  FinalCtaSection,
  ProcessSection,
  TeamSection,
  TestimonialsSection,
} from "@/components/sections";
import { resolveHomeLoaderOnMount } from "@/lib/navigation";

const HOME_VARIANT = "home" as const;

export function HomePage() {
  const [showLoader, setShowLoader] = useState(false);
  const [loaderReady, setLoaderReady] = useState(false);

  useLayoutEffect(() => {
    setShowLoader(resolveHomeLoaderOnMount());
    setLoaderReady(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {loaderReady && showLoader && (
        <LoadingScreen onComplete={handleLoaderComplete} />
      )}

      <div className="bg-[var(--background)] px-3 py-3 max-md:max-w-full max-md:overflow-x-clip sm:px-4 sm:py-4">
        <div className="relative mx-auto flex max-w-[1440px] flex-col rounded-[28px] border border-[var(--border)] bg-[var(--surface)] max-md:min-h-[calc(100svh-1.5rem)] max-md:h-auto max-md:max-h-none max-md:overflow-visible md:h-[calc(100dvh-2rem)] md:max-h-[calc(100dvh-2rem)] md:overflow-hidden sm:rounded-[36px] md:rounded-[40px]">
          <HomeNav />
          <div
            className='max-md:h-[4.25rem] shrink-0 md:hidden'
            aria-hidden='true'
          />
          <HomeHero />
        </div>
      </div>
      <HomeBottomNav />
      <main className="bg-[var(--background)] px-3 pb-4 pt-4 max-md:max-w-full max-md:overflow-x-clip sm:px-4 sm:pb-5 sm:pt-5">
        <div className="home-section-stack relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[32px]">
          <TrustMarqueeSection variant={HOME_VARIANT} sectionIndex={1} />
          <SolutionsSplitSection variant={HOME_VARIANT} sectionIndex={2} />
          <ProcessSection variant={HOME_VARIANT} sectionIndex={3} />
          <TestimonialsSection variant={HOME_VARIANT} sectionIndex={4} />
          <FaqSection variant={HOME_VARIANT} sectionIndex={5} />
          <TeamSection variant={HOME_VARIANT} sectionIndex={6} />
          <FinalCtaSection variant={HOME_VARIANT} sectionIndex={7} />
        </div>
      </main>
      <Footer />
    </>
  );
}
