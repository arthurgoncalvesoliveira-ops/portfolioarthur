import { siteConfig, socialLinks } from "@/config/portfolio";
import { socialIcons } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} {siteConfig.name} · next.js + tailwind
        </p>
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
                <Icon width={16} height={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
