import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Insights on software development, SaaS, AI integration, cloud migration, and digital transformation from Kyron Solutions.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <MainLayout>
      <PageHero
        badge="Blog"
        title="Insights & Resources"
        description="Expert perspectives on software development, technology trends, and digital transformation."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-xl transition-colors hover:border-orange-500/30"
              >
                <div className="h-48 bg-gradient-to-br from-orange-900/30 via-zinc-900 to-black p-6">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-zinc-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-zinc-400">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
