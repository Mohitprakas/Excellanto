import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { BlogPortableText } from "@/components/blog/portable-text";
import { getBlogBySlug, getPublishedBlogSlugs } from "@/lib/sanity/blog-service";
import { getBlogPage } from "@/lib/cms/content";
import { PageHero } from "@/components/ui/page-hero";
import { SectionImage } from "@/components/ui/section-image";
import { CTA } from "@/components/sections/cta";
import { FadeIn } from "@/components/animations/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [post, page] = await Promise.all([getBlogBySlug(slug), getBlogPage()]);
  if (!post) return { title: page.articleFallbackTitle };

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, page] = await Promise.all([getBlogBySlug(slug), getBlogPage()]);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {page.backToBlog}
            </Link>
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-border">
              <SectionImage
                {...post.image}
                className="aspect-[16/9]"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              {post.author ? <span>{page.byPrefix} {post.author}</span> : null}
            </div>
            {post.content?.length ? (
              <BlogPortableText value={post.content} />
            ) : (
              <div className="space-y-5 text-base leading-7 text-muted">
                <p>{post.excerpt}</p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
