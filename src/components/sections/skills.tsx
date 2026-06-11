import { skillGroups } from "@/config/portfolio";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { SVGProps } from "react";

interface SkillIconProps extends SVGProps<SVGSVGElement> {
  skill: string;
}

function SkillIcon({ skill, ...props }: SkillIconProps) {
  const normSkill = skill.toLowerCase();

  switch (normSkill) {
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <text
            x="12"
            y="15.5"
            fontSize="9.5"
            fontFamily="var(--font-geist-mono), ui-monospace, monospace"
            fontWeight="bold"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
          >
            TS
          </text>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <text
            x="12"
            y="15.5"
            fontSize="9.5"
            fontFamily="var(--font-geist-mono), ui-monospace, monospace"
            fontWeight="bold"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
          >
            JS
          </text>
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M11.928 0c-2.457 0-4.303.178-5.385.539C5.39.92 4.675 1.571 4.417 2.6c-.463 1.849-.463 3.864 0 5.713.204.816.634 1.341 1.258 1.579 1.135.434 2.762.612 4.444.646l.169.006v-1.954c0-1.42 1.151-2.571 2.571-2.571h3.857c.71 0 1.286-.576 1.286-1.286V2.857A2.857 2.857 0 0 0 15.143 0H11.93Zm-3.214 1.607a.964.964 0 1 1 0 1.929.964.964 0 0 1 0-1.929ZM12.072 24c2.457 0 4.303-.178 5.385-.539 1.153-.38 1.868-1.032 2.126-2.06.463-1.85.463-3.865 0-5.714-.204-.816-.634-1.341-1.258-1.579-1.135-.434-2.762-.612-4.444-.646l-.169-.006v1.954c0 1.42-1.151 2.571-2.571 2.571H7.286a1.286 1.286 0 0 0-1.286 1.286v2.571A2.857 2.857 0 0 0 8.857 24h3.214Zm3.214-1.607a.964.964 0 1 1 0 1.929.964.964 0 0 1 0 1.929Z" />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" x2="14" y1="2" y2="2" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case "next.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <polygon points="12 3 2 21 22 21" />
        </svg>
      );
    case "tailwind css":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M12 3H4v8h8V3Z" />
          <path d="M20 13h-8v8h8v-8Z" />
          <path d="M12 13H4v8h8v-8Z" />
          <path d="M20 3h-8v8h8V3Z" />
        </svg>
      );
    case "html & css":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      );
    case "node.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M12 2 2 7l10 5 10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M12 22s-8-5-8-10V5l8-3 8 3v7c0 5-8 10-8 10Z" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="6" x2="18" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "apis rest":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="3" width="20" height="8" rx="2" />
          <rect x="2" y="13" width="20" height="8" rx="2" />
          <line x1="6" x2="6" y1="7" y2="7" />
          <line x1="6" x2="6" y1="17" y2="17" />
        </svg>
      );
    case "git & github":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "vs code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="m3 9 9-7 9 7v6l-9 7-9-7V9Z" />
          <line x1="12" x2="12" y1="22" y2="2" />
        </svg>
      );
    case "google gemini":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    case "photoshop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 11h3a2 2 0 0 0 0-4H8v8" />
          <path d="M14 15c2 0 3-1 3-2.5s-1-2.5-3-2.5" />
        </svg>
      );
    case "português":
    case "inglês":
    case "espanhol":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="8" x2="16" y1="12" y2="12" />
          <line x1="12" x2="12" y1="8" y2="16" />
        </svg>
      );
  }
}

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
            <div className="grid gap-4 py-6 sm:grid-cols-[180px_1fr] sm:items-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group/skill flex items-center gap-2 rounded-lg border border-border bg-card/45 px-3 py-1.5 text-sm text-foreground/80 hover:border-accent/40 hover:bg-accent-soft hover:text-accent transition-all duration-300"
                  >
                    <SkillIcon
                      skill={skill}
                      className="h-4 w-4 text-muted group-hover/skill:text-accent transition-colors shrink-0"
                    />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
