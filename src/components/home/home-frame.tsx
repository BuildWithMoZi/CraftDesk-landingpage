"use client";

import { HomeNav } from "./home-nav";
import { HomeHero } from "./home-hero";

export function HomeFrame() {
  return (
    <div className="bg-[var(--background)] px-3 py-3 sm:px-4 sm:py-4">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#050505] sm:rounded-[36px] md:rounded-[40px]">
        <HomeNav />
        <HomeHero />
      </div>
    </div>
  );
}
