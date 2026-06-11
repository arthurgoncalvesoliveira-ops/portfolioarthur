import { experiences } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BriefcaseIcon } from "@/components/ui/icons";

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiência"
      title="Minha trajetória profissional"
      description="Do atendimento ao cliente ao desenvolvimento de sistemas educacionais usados por uma instituição inteira."
    >
      <ol className="relative space-y-10 border-l border-border pl-8">
        {experiences.map((exp, index) => (
          <Reveal as="li" key={exp.role} delay={index * 120} className="relative">
            <span className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card">
              <BriefcaseIcon
                width={13}
                height={13}
                className={exp.current ? "text-accent" : "text-muted"}
              />
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              {exp.current && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
                  Atual
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{exp.company}</p>

            <ul className="mt-3 space-y-2">
              {exp.tasks.map((task) => (
                <li key={task} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {task}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
      
    </Section>
  );
}
