import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { getAllPublishedBlogs } from "@/lib/sanity/blog-service";
import { sectionImages } from "@/lib/images";
import { PageHero } from "@/components/ui/page-hero";
import { SectionImage } from "@/components/ui/section-image";
import { CTA } from "@/components/sections/cta";
import { Stagger, StaggerItem } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest News & Articles From the Blog",
};

export const revalidate = 60;

export default async function BlogPage() {
  const blogs = await getAllPublishedBlogs();

  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title="Latest News & Articles From the Blog"
        image={sectionImages.blogHero}
      />

      <section className="section-padding bg-surface">
        <div className="container-xl">
          {blogs.length === 0 ? (
            <p className="text-center text-sm leading-7 text-muted">
              No blog articles are available right now. Please check back soon.
            </p>
          ) : (
            <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <StaggerItem key={post.slug}>
                  <article className="pro-card group flex h-full flex-col overflow-hidden">
                    <SectionImage
                      {...post.image}
                      className="aspect-[16/10]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2.5 flex items-center gap-3 text-[11px] text-muted">
                        <span className="rounded-md bg-surface px-2 py-1 font-semibold uppercase tracking-[0.04em] text-primary">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                      </div>
                      <h2 className="font-display text-base font-bold leading-snug tracking-tight text-secondary group-hover:text-primary">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        Read more
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
