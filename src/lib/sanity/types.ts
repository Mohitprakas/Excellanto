import type { PortableTextBlock } from "@portabletext/react";

type SanityImageSource = unknown;

export type SanityBlogListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  category: string | null;
  author: string | null;
  featuredImage: SanityImageSource | null;
  featuredImageAlt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  tags?: string[] | null;
};

export type SanityBlogDetail = SanityBlogListItem & {
  content?: PortableTextBlock[] | null;
};

/** Normalized shape consumed by existing blog UI components. */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author?: string;
  tags?: string[];
  image: {
    src: string;
    alt: string;
  };
  content?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
};
