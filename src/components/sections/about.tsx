import { education, siteConfig } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="sobre"
      title={
        <div className="flex items-center gap-4 sm:gap-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Um pouco sobre mim
          </h2>
          <div className="relative group shrink-0">
            {/* Ambient glowing effect */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-lg opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out" />
            
            {/* Outer border container with gradient, hover scale and rotate */}
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full p-[3px] bg-gradient-to-tr from-accent via-accent/70 to-[#8b5cf6] shadow-xl shadow-accent/15 transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-3">
              {/* Inner container to crop the image to a circle */}
              <div className="h-full w-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/arthur-perfil.jpg"
                  alt="Arthur Oliveira"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      }
    >
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
