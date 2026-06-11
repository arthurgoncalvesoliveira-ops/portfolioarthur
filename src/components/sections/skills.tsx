import { skillGroups } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="habilidades"
      title="Stack e competências"
    >
      <div className="divide-y divide-border border-y border-border">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 80}>
            <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:items-baseline">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {group.label}
              </p>
              <p className="text-[15px] text-foreground/85">
                {group.skills.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
