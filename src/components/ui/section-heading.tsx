import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4",
            align === "center" && "justify-center",
            light ? "text-accent" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[1.75rem] font-bold tracking-[-0.035em] text-balance sm:text-3xl md:text-4xl md:leading-[1.15]",
          light ? "text-white" : "text-secondary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[0.975rem] leading-7 md:text-base md:leading-7",
            light ? "text-slate-300" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
