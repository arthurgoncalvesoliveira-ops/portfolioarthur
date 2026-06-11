"use client";

import { useEffect, useState } from "react";

/** Barra de progresso de leitura sutil no topo da página. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setProgress(scrolled);
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Calcular inicialmente
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] w-full bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent via-[#8b5cf6] to-accent transition-all duration-75 ease-out shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
