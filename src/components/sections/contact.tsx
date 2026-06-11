import { siteConfig, socialLinks } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon, socialIcons } from "@/components/ui/icons";

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="contato"
      title="Vamos conversar?"
      description="Estou aberto a oportunidades, projetos e conversas sobre tecnologia."
    >
      <Reveal>
        <a
          href={`mailto:${siteConfig.email}`}
          className="group inline-flex items-center gap-2 font-mono text-lg text-foreground transition-colors hover:text-accent sm:text-2xl"
        >
          {siteConfig.email}
          <ArrowUpRightIcon
            width={20}
            height={20}
            className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {socialLinks
            .filter((link) => link.icon !== "mail")
            .map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  <Icon width={15} height={15} />
                  {link.label}
                </a>
              );
            })}
        </div>
      </Reveal>
    </Section>
  );
}
