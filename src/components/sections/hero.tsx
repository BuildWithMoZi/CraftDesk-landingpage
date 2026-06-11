"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400"
            >
              <Sparkles className="h-4 w-4" />
              Full-Service Software Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Transforming Ideas Into{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Powerful Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-zinc-400"
            >
              Kyron Solutions helps startups, businesses, and enterprises build scalable
              web applications, mobile apps, SaaS platforms, and custom software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <Image
                src="/logo.png"
                alt="Kyron Solutions"
                width={400}
                height={400}
                className="mx-auto h-72 w-72 object-contain drop-shadow-[0_0_60px_rgba(249,115,22,0.3)]"
                priority
              />
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Web", "Mobile", "Cloud"].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-xl border border-white/5 bg-white/5 py-3 text-center text-sm font-medium text-zinc-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
