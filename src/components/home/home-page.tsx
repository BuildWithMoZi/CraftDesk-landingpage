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
  PortfolioSection,
  TestimonialsSection,
} from "@/components/sections";
import { resolveHomeLoaderOnMount } from "@/lib/navigation";

const HOME_VARIANT = "home" as const;

type LoaderState = "pending" | "show" | "skip";

export function HomePage() {
  const [loaderState, setLoaderState] = useState<LoaderState>("pending");

  useLayoutEffect(() => {
    const show = resolveHomeLoaderOnMount();
    setLoaderState(show ? "show" : "skip");
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setLoaderState("skip");
  }, []);

  if (loaderState === "pending") {
    return (
      <div
        className="min-h-screen bg-[var(--background)]"
        aria-hidden="true"
        suppressHydrationWarning
      />
    );
  }

  if (loaderState === "show") {
    return <LoadingScreen onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <div className="bg-[var(--background)] px-3 py-3 sm:px-4 sm:py-4">
        <div className="relative mx-auto flex h-[calc(100dvh-1.5rem)] max-h-[calc(100dvh-1.5rem)] max-w-[1440px] flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] sm:h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[36px] md:rounded-[40px]">
          <HomeNav />
          <HomeHero />
        </div>
      </div>
      <HomeBottomNav />
      <main className="bg-[var(--background)] px-3 pb-4 pt-4 sm:px-4 sm:pb-5 sm:pt-5">
        <div className="home-section-stack relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[32px]">
          <TrustMarqueeSection variant={HOME_VARIANT} sectionIndex={1} />
          <SolutionsSplitSection variant={HOME_VARIANT} sectionIndex={2} />
          <PortfolioSection variant={HOME_VARIANT} sectionIndex={3} />
          <TestimonialsSection variant={HOME_VARIANT} sectionIndex={4} />
          <FaqSection variant={HOME_VARIANT} sectionIndex={5} />
          <FinalCtaSection variant={HOME_VARIANT} sectionIndex={6} />
        </div>
      </main>
      <Footer />
    </>
  );
}
