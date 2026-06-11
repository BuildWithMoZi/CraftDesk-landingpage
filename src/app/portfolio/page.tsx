import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { createMetadata } from "@/lib/metadata";
import { portfolioProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "View Kyron Solutions' portfolio of successful web, mobile, and SaaS projects with measurable business impact.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PageHero
        badge="Portfolio"
        title="Projects That Drive Results"
        description="Explore our featured case studies showcasing real business impact across industries."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {portfolioProjects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl lg:grid lg:grid-cols-2"
              >
                <div
                  className={`relative flex min-h-[240px] items-end bg-gradient-to-br ${project.gradient} p-8`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative">
                    <Badge>{project.category}</Badge>
                    <h2 className="mt-3 text-3xl font-bold text-white">{project.title}</h2>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8">
                  <p className="text-zinc-400 leading-relaxed">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-lg border border-orange-500/20 bg-orange-500/5 px-3 py-1.5 text-sm font-medium text-orange-400"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                    <div className="mb-2 flex gap-0.5">
                      {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <p className="text-sm italic text-zinc-300">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-3 text-sm text-zinc-500">
                      — {project.testimonial.author}, {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white">Ready to be our next success story?</h2>
            <p className="mt-3 text-zinc-400">Let&apos;s discuss how we can help achieve your goals.</p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </MainLayout>
  );
}
