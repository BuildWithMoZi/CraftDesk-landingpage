"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroContent } from "@/lib/data";
import { routes } from "@/lib/routes";

const circuits = [
  {
    id: "tl",
    d: "M 16 26 L 34 26 L 34 44 L 50 46",
    duration: 3.8,
    delay: 0,
  },
  {
    id: "bl",
    d: "M 16 70 L 30 70 L 30 54 L 50 52",
    duration: 4.2,
    delay: 0.6,
  },
  {
    id: "tr",
    d: "M 84 28 L 66 28 L 66 44 L 50 46",
    duration: 3.6,
    delay: 0.3,
  },
  {
    id: "br",
    d: "M 84 68 L 70 68 L 70 54 L 50 52",
    duration: 4.4,
    delay: 0.9,
  },
];

const junctions = [
  { cx: 34, cy: 26 },
  { cx: 34, cy: 44 },
  { cx: 30, cy: 70 },
  { cx: 30, cy: 54 },
  { cx: 66, cy: 28 },
  { cx: 66, cy: 44 },
  { cx: 70, cy: 68 },
  { cx: 70, cy: 54 },
  { cx: 50, cy: 49 },
];

function HomeCircuitLines() {
  return (
    <svg
      className='pointer-events-none absolute inset-0 z-[5] hidden h-full w-full md:block'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      aria-hidden='true'>
      <defs>
        <filter id='circuit-glow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='0.35' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx='50'
        cy='49'
        r='1.2'
        fill='none'
        stroke='rgba(255,255,255,0.12)'
        strokeWidth='0.15'
        className='circuit-hub'
      />
      <circle
        cx='50'
        cy='49'
        r='0.35'
        fill='var(--orange)'
        className='circuit-hub-core'
      />

      {junctions.map((j, i) => (
        <circle
          key={`${j.cx}-${j.cy}-${i}`}
          cx={j.cx}
          cy={j.cy}
          r='0.45'
          fill='rgba(255,255,255,0.06)'
          stroke='rgba(255,255,255,0.1)'
          strokeWidth='0.12'
          className='circuit-junction'
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}

      {circuits.map((circuit) => (
        <g key={circuit.id}>
          <path
            d={circuit.d}
            fill='none'
            stroke='rgba(255,255,255,0.05)'
            strokeWidth='0.18'
            vectorEffect='non-scaling-stroke'
          />

          <path
            d={circuit.d}
            fill='none'
            stroke='rgba(255,255,255,0.03)'
            strokeWidth='0.35'
            vectorEffect='non-scaling-stroke'
            strokeLinecap='round'
            strokeLinejoin='round'
          />

          <path
            d={circuit.d}
            fill='none'
            stroke='var(--orange)'
            strokeWidth='0.3'
            vectorEffect='non-scaling-stroke'
            strokeLinecap='round'
            strokeLinejoin='round'
            pathLength={100}
            className='circuit-pulse-orange'
            style={{
              animationDuration: `${circuit.duration}s`,
              animationDelay: `${circuit.delay}s`,
            }}
            filter='url(#circuit-glow)'
          />

          <path
            d={circuit.d}
            fill='none'
            stroke='var(--foreground)'
            strokeWidth='0.22'
            vectorEffect='non-scaling-stroke'
            strokeLinecap='round'
            strokeLinejoin='round'
            pathLength={100}
            className='circuit-pulse-white'
            style={{
              animationDuration: `${circuit.duration + 1.4}s`,
              animationDelay: `${circuit.delay + 1.6}s`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}

export function HomeHero() {
  return (
    <section
      id='home-hero'
      className='relative flex min-h-0 flex-1 flex-col max-md:overflow-visible md:overflow-hidden'>

      {/* Ambient glows — orange & white */}
      <div className='pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[var(--orange)]/10 blur-[120px]' />
      <div className='pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[var(--subtle)] blur-[100px]' />
      <div className='pointer-events-none absolute bottom-1/4 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[var(--orange-light)]/8 blur-[100px]' />

      {/* Star field */}
      <div className='pointer-events-none absolute inset-0'>
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className='absolute h-px w-px rounded-full bg-[var(--foreground)]/30'
            style={{
              top: `${(i * 17 + 7) % 100}%`,
              left: `${(i * 23 + 11) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.12,
            }}
          />
        ))}
      </div>

      {/* Center light streaks */}
      <div className='pointer-events-none absolute bottom-[30%] left-1/2 flex -translate-x-1/2 gap-6 md:gap-10'>
        {[80, 120, 60].map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0.15, 0.4, 0.15], scaleY: 1 }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.4 },
              scaleY: { duration: 1, delay: 0.3 + i * 0.15 },
            }}
            className='w-px origin-bottom bg-gradient-to-t from-transparent via-white/50 to-white/10'
            style={{ height: h }}
          />
        ))}
      </div>

      {/* Orthogonal circuit lines with traveling pulses */}
      <HomeCircuitLines />

      {/* Hero copy — image + title centered as one stack */}
      <div className='relative z-20 mx-auto flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-14 pt-6 text-center max-md:pb-16 sm:px-6 sm:pb-24 sm:pt-8 md:pb-28 md:pt-10'>
        <div className='relative flex w-full max-w-3xl flex-col items-center'>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='relative mx-auto mt-4 w-full max-w-[120px] sm:mt-6 sm:max-w-[180px] md:mt-8 md:max-w-[220px] lg:mt-10 lg:max-w-[260px]'>
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              width={560}
              height={560}
              priority
              className='mx-auto h-auto w-full object-contain'
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='relative z-10 mx-auto -mt-5 w-full max-w-3xl px-2 sm:-mt-7 md:-mt-9 lg:-mt-11'>
            <span className='block text-balance text-2xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl'>
              Turn Your Startup Vision
            </span>
            <span className='mt-1 block text-balance text-lg font-bold leading-[1.15] tracking-tight sm:mt-1.5 sm:text-2xl md:text-3xl lg:text-4xl'>
              <span className='bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] bg-clip-text text-transparent brand-accent-glow'>
                Into a Scalable Web or
                <br />
                Mobile Product
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='mt-6 flex w-full flex-col items-center gap-2.5 sm:mt-8'>
            <div className='flex flex-wrap items-center justify-center gap-3'>
              <Link
                href='/contact'
                className='inline-flex h-12 min-w-[11rem] items-center justify-center gap-2 rounded-full bg-black px-7 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:bg-zinc-900 hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)] dark:border dark:border-white/10 dark:shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:min-w-[12.5rem]'>
                Let&apos;s Build Together
                <ArrowUpRight className='h-4 w-4 shrink-0' />
              </Link>
              <Link
                href={routes.customized}
                className='inline-flex h-12 min-w-[10rem] items-center justify-center rounded-full border border-[var(--border)] bg-transparent px-6 text-sm font-normal text-[var(--muted)] transition-all hover:border-[var(--muted)]/30 hover:bg-[var(--subtle)] hover:text-[var(--foreground)] sm:min-w-[11rem]'>
                View Our Work
              </Link>
            </div>
            <p className='text-xs text-[var(--muted)]'>
              Book a quick 15-min discovery call
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — scroll + progress */}
      <div className='absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 sm:px-8 md:pb-6'>
        <div className='mb-6 flex items-end justify-between gap-4'>
          <a
            href='#trust'
            className='group flex items-center gap-3 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]'>
            <span className='hidden text-xs sm:inline'>
              <span className='text-[var(--muted-subtle)]'>01/06</span>
              <span className='mx-2'>·</span>
              Scroll down
            </span>
          </a>

          <div className='text-right'>
            <p className='mb-2 text-xs text-[var(--muted)]'>Digital horizons</p>
            <div className='flex justify-end gap-1'>
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === 0 ?
                      "w-8 bg-[var(--orange)]"
                    : "w-4 bg-[var(--subtle-strong)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
