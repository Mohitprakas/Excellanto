"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/sanity/types";
import { SectionImage } from "@/components/ui/section-image";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/fade-in";

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const [featured, ...rest] = posts;

  if (!featured) return null;

  return (
    <section className="section-padding bg-surface" id="blog">
      <div className="container-xl">
        <FadeIn>
          <div className="mb-10 flex flex-col gap-3 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Our Blog
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                Latest News & Articles From the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Explore More
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:gap-10">
          <FadeIn>
            <article className="group">
              <SectionImage
                {...featured.image}
                className="aspect-[16/10] w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="mt-5">
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted">
                  <span className="font-semibold uppercase tracking-[0.08em] text-primary">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-secondary transition-colors group-hover:text-primary">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted line-clamp-3">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Explore More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </FadeIn>

          <Stagger className="flex flex-col divide-y divide-border border-t border-border lg:border-t-0">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="group grid gap-4 py-6 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <SectionImage
                    {...post.image}
                    className="aspect-[16/10] w-full sm:aspect-square"
                    sizes="160px"
                    imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <h3 className="font-display mt-2 text-base font-bold leading-snug tracking-tight text-secondary transition-colors group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                    >
                      Explore More
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
