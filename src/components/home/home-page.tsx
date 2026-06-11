"use client";

import { useState, useCallback, useLayoutEffect } from "react";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Footer } from "@/components/layout/footer";
import { HomeFrame } from "@/components/home/home-frame";
import { HomeBottomNav } from "@/components/home/home-nav";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TechStack } from "@/components/sections/tech-stack";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ContactSection } from "@/components/sections/contact-section";
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
      <HomeFrame />
      <HomeBottomNav />
      <main className="bg-[var(--background)] px-3 pb-4 pt-4 sm:px-4 sm:pb-5 sm:pt-5">
        <div className="home-section-stack relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[#050505] sm:rounded-[32px]">
          <ServicesSection variant={HOME_VARIANT} sectionIndex={1} />
          <WhyChooseUs variant={HOME_VARIANT} sectionIndex={2} />
          <PortfolioSection variant={HOME_VARIANT} sectionIndex={3} />
          <ProcessSection variant={HOME_VARIANT} sectionIndex={4} />
          <TechStack variant={HOME_VARIANT} sectionIndex={5} />
          <IndustriesSection variant={HOME_VARIANT} sectionIndex={6} />
          <TestimonialsSection variant={HOME_VARIANT} sectionIndex={7} />
          <PricingSection variant={HOME_VARIANT} sectionIndex={8} />
          <ContactSection variant={HOME_VARIANT} sectionIndex={9} />
        </div>
      </main>
      <Footer />
    </>
  );
}
