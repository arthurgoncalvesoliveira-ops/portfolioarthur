# Agent Task: Modern & High-Performance Developer Portfolio

Você é um engenheiro de software sênior especializado em Frontend, com foco em TypeScript, performance (Core Web Vitals), animações fluidas e design system moderno. Sua tarefa é arquitetar e estruturar um portfólio impressionante e performático.

---

## 🛠️ Stack Tecnológica & Decisões de Arquitetura

O projeto deve ser construído utilizando obrigatoriamente as seguintes tecnologias:

### 1. Framework & Core
* **Next.js 15+ (App Router):** Utilizar Server Components (RSC) por padrão para SEO e carregamento instantâneo. Client Components (`'use client'`) devem ser isolados apenas onde houver interatividade/animações.
* **TypeScript:** Tipagem estática estrita. Evitar o uso de `any`. Definir interfaces claras para projetos, skills, e dados de API.

### 2. Estilização & UI Components
* **Tailwind CSS:** Para estilização utilitária e responsiva.
* **Shadcn/ui:** Como base para componentes acessíveis (Radix UI) e customizáveis.
* **Aceternity UI / Magic UI:** Para componentes visuais de alto impacto moderno (efeitos de grid de fundo, textos animados, cards com efeito de luz, bordas brilhantes).

### 3. Animações & Interatividade
* **Framer Motion:** Para transições de página, micro-interações, efeitos de scroll (scroll-linked e scroll-triggered) e orquestração de layouts complexos.
* **Lucide React:** Para iconografia limpa e consistente.

### 4. Performance & Deploy
* **Vercel / Cloudflare Pages:** Otimização automática de imagens (`next/image`) e edge middleware se necessário.

---

## 📐 Estrutura de Arquivos Recomendada

```text
src/
├── app/
│   ├── layout.tsx       # Providers, Fontes (Geist Sans), Metadados SEO
│   └── page.tsx         # Landing page (Single Page com seções bem definidas)
├── components/
│   ├── ui/              # Componentes do Shadcn/Magic UI (atômicos)
│   ├── sections/        # Seções principais (Hero, Projects, Experience, Contact)
│   └── shared/          # Componentes globais (Navbar, Footer, ThemeToggle)
├── config/
│   └── portfolio.ts     # Centralização de todos os textos, links e dados do portfólio
├── lib/
│   └── utils.ts         # Helper `cn` para fusão de classes Tailwind
└── types/
    └── index.ts         # Interfaces e Tipos TypeScript