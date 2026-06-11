export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "mail";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TerminalLine {
  type: "cmd" | "out";
  text: string;
}
