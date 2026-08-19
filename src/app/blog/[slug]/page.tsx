import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailContent } from "@/components/blog/blog-detail-content";
import {
  getAllPublishedBlogs,
  getBlogBySlug,
  getPublishedBlogSlugs,
} from "@/lib/sanity/blog-service";
import { getBlogPage } from "@/lib/cms/content";
import { CTA } from "@/components/sections/cta";

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
  const [post, page, recentPosts] = await Promise.all([
    getBlogBySlug(slug),
    getBlogPage(),
    getAllPublishedBlogs(),
  ]);
  if (!post) notFound();

  return (
    <>
      <BlogDetailContent
        post={post}
        recentPosts={recentPosts}
        backLabel={page.backToBlog}
        byPrefix={page.byPrefix}
      />

      <CTA />
    </>
  );
}
