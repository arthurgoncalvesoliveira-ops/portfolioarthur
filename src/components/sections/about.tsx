import { education, siteConfig } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Section id="sobre" eyebrow="sobre" title="Um pouco sobre mim">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4">
          {siteConfig.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-[15px] leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={150}>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted">formação</p>
          <ul className="space-y-5">
            {education.map((item) => (
              <li key={item.degree} className="border-l border-accent/50 pl-4">
                <p className="text-sm font-medium">{item.degree}</p>
                <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
                <p className="mt-1 font-mono text-xs text-accent">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
