import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Use on light backgrounds (inverts white-on-black asset) */
  dark?: boolean;
  height?: number;
  /** Set to false to render without a link wrapper */
  href?: string | false;
  priority?: boolean;
};

export function Logo({
  className,
  dark = false,
  height = 36,
  href = "/",
  priority = false,
}: LogoProps) {
  const width = Math.round(height * (240 / 52));

  const image = (
    <Image
      src="/images/excellanto-logo-white.png"
      alt="Excellanto"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        dark && "invert",
        className
      )}
      style={{ height, width: "auto" }}
    />
  );

  if (href === false) return image;

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Excellanto home">
      {image}
    </Link>
  );
}
