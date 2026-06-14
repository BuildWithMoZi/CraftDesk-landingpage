import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CoverImage } from "@/components/ui/cover-image";
import { createMetadata } from "@/lib/metadata";
import { stats } from "@/lib/data";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about CraftDesk Solutions — our mission, values, and the experienced team behind 150+ successful software projects.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHero
        badge="About Us"
        title="Building the Future of Software"
        description="We're a passionate team of developers, designers, and strategists dedicated to transforming businesses through innovative technology."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl">Our Story</h2>
              <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
                Founded with a vision to bridge the gap between innovative ideas and
                production-ready software, CraftDesk Solutions has grown into a trusted
                partner for startups and enterprises across India. We believe great software
                is built through collaboration, transparency, and a relentless focus on quality.
              </p>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Our team brings together expertise across web, mobile, cloud, and AI
                technologies. We don&apos;t just write code — we craft digital experiences
                that drive business growth and delight users.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
                <CoverImage
                  src="/about/team.jpg"
                  alt="CraftDesk Solutions team collaborating"
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center backdrop-blur-xl"
                  >
                    <div className="text-3xl font-bold text-orange-400">{stat.value}</div>
                    <div className="mt-1 text-sm text-[var(--muted-foreground)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-[var(--foreground)]">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Innovation",
                  desc: "We stay ahead of technology trends to deliver cutting-edge solutions.",
                },
                {
                  title: "Integrity",
                  desc: "Honest communication and ethical practices in every engagement.",
                },
                {
                  title: "Excellence",
                  desc: "We hold ourselves to the highest standards of code quality and design.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-xl"
                >
                  <h3 className="text-lg font-semibold text-orange-400">{value.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
    </MainLayout>
  );
}
