import type {
  Education,
  Experience,
  NavItem,
  Project,
  SkillGroup,
  SocialLink,
  TerminalLine,
} from "@/types";

export const siteConfig = {
  name: "Arthur Oliveira",
  role: "Desenvolvedor Full Stack",
  location: "Porto Alegre, RS",
  email: "arthurgoncalvesoliveira@gmail.com",
  avatar: "/arthur-perfil.jpg",
  headlinePrefix: "Construo aplicações web ",
  headlineHighlight: "modernas, rápidas e funcionais.",
  subheadline:
    "Desenvolvedor no Colégio Farroupilha e estudante de Ciência da Computação na Unisinos. Especializado em React, Next.js e TypeScript.",
  about: [
    "Tenho 19 anos e sou estudante de Ciência da Computação na Unisinos. Atualmente trabalho no setor de TI do Colégio Farroupilha como desenvolvedor, criando softwares e sites educacionais e administrativos usados diariamente por alunos, professores e equipe administrativa.",
    "Sou proativo, aprendo rápido e gosto de trabalhar em equipe. Meu objetivo é crescer profissionalmente aplicando minhas habilidades em projetos reais e aprendendo algo novo todos os dias.",
  ],
};

export const terminalLines: TerminalLine[] = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "arthur-oliveira · full stack developer" },
  { type: "cmd", text: "cat stack.txt" },
  { type: "out", text: "typescript · react · next.js · node.js" },
  { type: "cmd", text: "ls projetos/" },
  { type: "out", text: "agendamento-labs  autoavaliacao  processos  portfolio-te" },
  { type: "cmd", text: "./status.sh" },
  { type: "out", text: "● disponível para novos projetos" },
];

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/arthurgoncalvesoliveira-ops",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/arthur-oliveira-5888333a7/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/oliveira_arthurrr",
    icon: "instagram",
  },
  {
    label: "Email",
    url: "mailto:arthurgoncalvesoliveira@gmail.com",
    icon: "mail",
  },
];

export const projects: Project[] = [
  {
    title: "Sistema de Checklist",
    description:
      "Plataforma para criação, acompanhamento e auditoria de checklists de processos escolares internos, otimizando fluxos de trabalho e a colaboração entre as equipes.",
    image: "/checklist print.png",
    url: "",
    tags: ["next.js", "typescript", "tailwind-css"],
  },
  {
    title: "Agendamento de Laboratórios",
    description:
      "Plataforma de reserva de laboratórios com visualização de disponibilidade e integração ao Google Calendar para criar e gerir eventos automaticamente.",
    image: "/projeto-agendamento.png",
    url: "https://agendamento.soufarroupilha.g12.br/",
    tags: ["next.js", "typescript", "google-calendar"],
  },
  {
    title: "Desenvolvimento Socioemocional",
    description:
      "Plataforma de autoavaliação socioemocional para estudantes, com login Google institucional e área exclusiva para educadores.",
    image: "/projeto-autoavaliacao.png",
    url: "https://autoavaliacao.soufarroupilha.g12.br/",
    tags: ["react", "typescript", "oauth"],
  },
  {
    title: "Formulário de Processos",
    description:
      "Mapeamento e modelagem de fluxos de trabalho, centralizando informações com formulários estruturados e painel administrativo.",
    image: "/projeto-processos.png",
    url: "https://formulario-processos.soufarroupilha.g12.br/",
    tags: ["next.js", "typescript", "node.js"],
  },
  {
    title: "Portfólio Tecnologia Educacional",
    description:
      "Site institucional do setor de Tecnologia Educacional do Colégio Farroupilha: projetos, materiais, jogos e catálogo de equipamentos.",
    image: "/projeto-portfoliote.png",
    url: "https://portfoliote.soufarroupilha.g12.br/",
    tags: ["react", "typescript", "web-design"],
  },
];

export const education: Education[] = [
  {
    degree: "Ciência da Computação",
    institution: "Unisinos",
    period: "2025 — presente",
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio São Judas Tadeu",
    period: "concluído",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "linguagens",
    skills: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    label: "frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "backend",
    skills: ["Node.js", "MongoDB", "Docker", "APIs REST"],
  },
  {
    label: "ferramentas",
    skills: ["Git & GitHub", "VS Code", "Google Gemini", "Photoshop"],
  },
  {
    label: "idiomas",
    skills: ["Português", "Inglês", "Espanhol"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor de Software",
    company: "Colégio Farroupilha",
    current: true,
    tasks: [
      "Desenvolvimento de aplicações web e sistemas internos com React, Next.js e TypeScript.",
      "Criação e manutenção de plataformas educacionais integradas a APIs do ecossistema Google (como Google Calendar e OAuth).",
      "Modelagem e otimização de fluxos de processos administrativos e ferramentas pedagógicas usadas por milhares de usuários (alunos, professores e administração).",
      "Colaboração no mapeamento de demandas e na definição de soluções tecnológicas para o setor de Tecnologia Educacional."
    ]
  }
];
