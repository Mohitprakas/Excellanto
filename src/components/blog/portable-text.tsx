import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { buildSanityImageUrl } from "@/lib/sanity/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-7 text-muted">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display mt-8 text-2xl font-bold tracking-tight text-secondary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display mt-6 text-xl font-bold tracking-tight text-secondary">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/30 pl-4 italic text-secondary/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-5 list-disc space-y-2 text-muted">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 list-decimal space-y-2 text-muted">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-secondary">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className="font-medium text-primary underline-offset-2 hover:underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = buildSanityImageUrl(value, 1200, { quality: 85 });
      const alt = value.alt || "Blog image";
      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-border">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {value.alt ? (
            <figcaption className="px-4 py-2 text-xs text-muted">{value.alt}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

interface BlogPortableTextProps {
  value: PortableTextBlock[];
}

export function BlogPortableText({ value }: BlogPortableTextProps) {
  if (!value?.length) return null;
  return (
    <div className="space-y-5">
      <PortableText value={value} components={components} />
    </div>
  );
}
