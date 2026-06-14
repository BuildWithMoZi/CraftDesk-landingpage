import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { CoverImage } from "@/components/ui/cover-image";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return createMetadata({ title: "Post Not Found" });
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <MainLayout>
      <article className="pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)]">
            <CoverImage
              src={post.image}
              alt={post.title}
              className="absolute inset-0"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-invert mt-10 max-w-none">
            <p className="text-lg text-[var(--muted-strong)] leading-relaxed">{post.excerpt}</p>
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
              At CraftDesk Solutions, we help businesses navigate the complexities of modern
              software development. Whether you&apos;re building a new product from scratch or
              scaling an existing platform, our team brings the expertise and experience to
              deliver results that matter.
            </p>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              Stay tuned for the full article. In the meantime, reach out to our team for
              personalized guidance on your next project.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8 text-center">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Need expert guidance?</h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Our team is ready to help you implement these best practices.
            </p>
            <Button asChild className="mt-4">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
