import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/shared/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Oliveira — Desenvolvedor Full Stack",
  description:
    "Portfólio de Arthur Oliveira, desenvolvedor full stack especializado em React, Next.js e TypeScript. Estudante de Ciência da Computação na Unisinos e desenvolvedor no Colégio Farroupilha.",
  keywords: [
    "Arthur Oliveira",
    "desenvolvedor",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfólio",
    "Porto Alegre",
  ],
  authors: [{ name: "Arthur Oliveira" }],
  openGraph: {
    title: "Arthur Oliveira — Desenvolvedor Full Stack",
    description:
      "Construo aplicações web modernas, rápidas e funcionais com React, Next.js e TypeScript.",
    locale: "pt_BR",
    type: "website",
  },
};

/** Aplica o tema salvo antes da primeira pintura para evitar flash (FOUC). */
const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    var dark = theme ? theme === "dark" : true;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
