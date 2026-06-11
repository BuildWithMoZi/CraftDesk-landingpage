"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Code2,
  Cpu,
  Smartphone,
} from "lucide-react";
import { HomeCircuitLines } from "./home-circuit-lines";

const floatingNodes = [
  {
    label: "Web Apps",
    value: "150+",
    icon: Code2,
    position: "top-[18%] left-[8%] md:left-[12%]",
    delay: 0,
  },
  {
    label: "Mobile",
    value: "98%",
    icon: Smartphone,
    position: "bottom-[28%] left-[6%] md:left-[10%]",
    delay: 0.15,
  },
  {
    label: "Cloud",
    value: "50+",
    icon: Cloud,
    position: "top-[20%] right-[6%] md:right-[10%]",
    delay: 0.1,
  },
  {
    label: "AI Tech",
    value: "12+",
    icon: Cpu,
    position: "bottom-[26%] right-[8%] md:right-[12%]",
    delay: 0.2,
  },
];

const partnerLogos = [
  "React",
  "Next.js",
  "AWS",
  "Flutter",
  "Node.js",
  "Azure",
  "PostgreSQL",
];

export function HomeHero() {
  return (
    <section
      id="home-hero"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden"
    >
      {/* Ambient glows — orange & white */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[var(--orange)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[var(--orange-light)]/8 blur-[100px]" />

      {/* Star field */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-px w-px rounded-full bg-white/30"
            style={{
              top: `${(i * 17 + 7) % 100}%`,
              left: `${(i * 23 + 11) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.12,
            }}
          />
        ))}
      </div>

      {/* Center light streaks */}
      <div className="pointer-events-none absolute bottom-[22%] left-1/2 flex -translate-x-1/2 gap-6 md:gap-10">
        {[80, 120, 60].map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0.15, 0.4, 0.15], scaleY: 1 }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.4 },
              scaleY: { duration: 1, delay: 0.3 + i * 0.15 },
            }}
            className="w-px origin-bottom bg-gradient-to-t from-transparent via-white/50 to-white/10"
            style={{ height: h }}
          />
        ))}
      </div>

      {/* Orthogonal circuit lines with traveling pulses */}
      <HomeCircuitLines />

      {floatingNodes.map((node) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + node.delay, duration: 0.6 }}
          className={`absolute ${node.position} z-10 hidden md:block`}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + node.delay * 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 backdrop-blur-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5">
              <node.icon className="h-4 w-4 text-[var(--orange)]" />
            </span>
            <div>
              <p className="text-xs text-white/40">{node.label}</p>
              <p className="text-sm font-semibold text-[var(--foreground)]">{node.value}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Hero copy — centered */}
      <div className="relative z-20 mx-auto flex flex-1 flex-col items-center justify-center px-4 pb-36 pt-8 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur-md"
        >
          <Image src="/logo.png" alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
          <span className="text-sm text-white/70">
            Unlock Your Digital Spark!
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[var(--orange)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          One-Click for
          <br />
          <span className="text-[var(--foreground)]">Digital Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-lg text-sm leading-relaxed text-white/45 sm:text-base"
        >
          Dive into smart software solutions, where innovative technology meets
          engineering expertise for startups and enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-medium text-[var(--foreground)] backdrop-blur-md transition-all hover:border-[var(--orange)]/40 hover:bg-white/5"
          >
            Get Free Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:bg-white/90"
          >
            Discover More
          </Link>
        </motion.div>
      </div>

      {/* Bottom bar — scroll + progress + logos */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-6 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <a
            href="#services"
            className="group flex items-center gap-3 text-white/40 transition-colors hover:text-[var(--foreground)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] transition-colors group-hover:border-[var(--orange)]/30">
              <ArrowDown className="h-4 w-4" />
            </span>
            <span className="hidden text-xs sm:inline">
              <span className="text-white/30">01/08</span>
              <span className="mx-2">·</span>
              Scroll down
            </span>
          </a>

          <div className="text-right">
            <p className="mb-2 text-xs text-white/40">Digital horizons</p>
            <div className="flex gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === 0
                      ? "w-8 bg-[var(--orange)]"
                      : "w-4 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-[var(--border)] pt-6 opacity-40 sm:justify-between sm:gap-8">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold tracking-wide text-[var(--foreground)]"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
