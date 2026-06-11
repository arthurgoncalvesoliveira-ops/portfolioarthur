import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-accent">{`// ${eyebrow}`}</p>
          {typeof title === "string" ? (
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          ) : (
            title
          )}
          {description && (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
          )}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
