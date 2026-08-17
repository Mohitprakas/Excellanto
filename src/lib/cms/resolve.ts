import type { SiteImage } from "@/lib/images";
import { buildSanityImageUrlOrNull } from "@/lib/sanity/image";

export type CmsImageValue = {
  image?: unknown;
  url?: string | null;
  alt?: string | null;
} | null;

export function resolveCmsImage(
  value: CmsImageValue | undefined,
  fallback: SiteImage,
  width = 1600
): SiteImage {
    const uploaded = buildSanityImageUrlOrNull(value?.image as never, width, { quality: 85 });
  const src = uploaded || value?.url || fallback.src;
  return {
    src,
    alt: value?.alt || fallback.alt,
  };
}

export function pickText(value: string | null | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export function pickArray<T>(value: T[] | null | undefined, fallback: T[]): T[] {
  return value && value.length > 0 ? value : fallback;
}
