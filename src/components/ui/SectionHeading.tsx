import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal variant="up">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
              light
                ? "border-white/20 text-white/80"
                : "border-accent/20 bg-accent-light text-accent"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal variant="up" delay={0.08}>
        <h2
          className={cn(
            "text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal variant="up" delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-balance text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-ink/60"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
