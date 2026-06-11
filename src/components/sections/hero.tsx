import Image from "next/image";
import { siteConfig, socialLinks, terminalLines } from "@/config/portfolio";
import { Terminal } from "@/components/ui/terminal";
import { ArrowRightIcon, MapPinIcon, socialIcons } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-5xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <div>
          <div
            className="animate-fade-up flex items-center gap-3"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            <Image
              src={siteConfig.avatar}
              alt={`Foto de ${siteConfig.name}`}
              width={48}
              height={48}
              priority
              className="h-12 w-12 rounded-full border border-border object-cover"
            />
            <div className="font-mono text-sm text-muted">
              <span className="text-accent">~/</span>arthur-oliveira
            </div>
          </div>

          <h1
            className="animate-fade-up mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            style={{ "--delay": "100ms" } as React.CSSProperties}
          >
            {siteConfig.headlinePrefix}
            <span className="text-gradient">{siteConfig.headlineHighlight}</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-md text-[15px] leading-relaxed text-muted"
            style={{ "--delay": "200ms" } as React.CSSProperties}
          >
            {siteConfig.subheadline}
          </p>

          <p
            className="animate-fade-up mt-4 flex items-center gap-1.5 font-mono text-xs text-muted"
            style={{ "--delay": "250ms" } as React.CSSProperties}
          >
            <MapPinIcon width={13} height={13} className="text-accent" />
            {siteConfig.location}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ "--delay": "300ms" } as React.CSSProperties}
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Ver projetos
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            >
              Contato
            </a>

            <div className="flex items-center gap-1">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                  >
                    <Icon width={17} height={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div
          className="animate-fade-up"
          style={{ "--delay": "400ms" } as React.CSSProperties}
        >
          <Terminal lines={terminalLines} />
        </div>
      </div>
    </section>
  );
}
