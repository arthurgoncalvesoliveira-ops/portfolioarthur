import Image from "next/image";
import { projects } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="projetos"
      title="Projetos em produção"
      description="Aplicações reais desenvolvidas para o Colégio Farroupilha, usadas diariamente por alunos, professores e equipe administrativa."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 120}>
            <SpotlightCard className="flex h-full flex-col">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-border">
                <Image
                  src={project.image}
                  alt={`Captura de tela do projeto ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-medium transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <p className="mt-4 font-mono text-xs text-muted">
                  {project.tags.join("  ·  ")}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
