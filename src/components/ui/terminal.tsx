"use client";

import { useEffect, useRef, useState } from "react";
import type { TerminalLine } from "@/types";

interface TerminalProps {
  lines: TerminalLine[];
  /** Velocidade de digitação em ms por caractere */
  speed?: number;
}

interface RenderedLine extends TerminalLine {
  visibleChars: number;
}

/** Janela de terminal com animação de digitação. */
export function Terminal({ lines, speed = 38 }: TerminalProps) {
  const [rendered, setRendered] = useState<RenderedLine[]>([]);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function tick() {
      if (lineIndex >= lines.length) return;
      const line = lines[lineIndex];

      if (line.type === "out") {
        // Saída aparece inteira de uma vez, após uma pequena pausa
        setRendered((prev) => [...prev, { ...line, visibleChars: line.text.length }]);
        lineIndex += 1;
        charIndex = 0;
        timeouts.push(setTimeout(tick, 300));
        return;
      }

      // Comandos são digitados caractere por caractere
      charIndex += 1;
      setRendered((prev) => {
        const next = [...prev];
        const current = next[next.length - 1];
        if (current && current.type === "cmd" && current.text === line.text && charIndex > 1) {
          next[next.length - 1] = { ...line, visibleChars: charIndex };
        } else {
          next.push({ ...line, visibleChars: charIndex });
        }
        return next;
      });

      if (charIndex >= line.text.length) {
        lineIndex += 1;
        charIndex = 0;
        timeouts.push(setTimeout(tick, 350));
      } else {
        timeouts.push(setTimeout(tick, speed));
      }
    }

    function start() {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        setRendered(lines.map((l) => ({ ...l, visibleChars: l.text.length })));
        return;
      }
      tick();
    }

    timeouts.push(setTimeout(start, 600));
    return () => timeouts.forEach(clearTimeout);
  }, [lines, speed]);

  const done =
    rendered.length === lines.length &&
    rendered.every((l, i) => l.visibleChars >= lines[i].text.length);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40">
      {/* Barra de título */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">arthur@dev — zsh</span>
      </div>

      {/* Corpo */}
      <div className="min-h-[230px] space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {rendered.map((line, i) => (
          <p key={`${i}-${line.text}`} className="break-words">
            {line.type === "cmd" ? (
              <>
                <span className="select-none text-accent">$ </span>
                <span>{line.text.slice(0, line.visibleChars)}</span>
                {line.visibleChars < line.text.length && (
                  <span className="animate-pulse text-accent">▍</span>
                )}
              </>
            ) : (
              <span className={line.text.startsWith("●") ? "text-emerald-500" : "text-muted"}>
                {line.text}
              </span>
            )}
          </p>
        ))}
        {done && (
          <p>
            <span className="select-none text-accent">$ </span>
            <span className="animate-pulse text-accent">▍</span>
          </p>
        )}
      </div>
    </div>
  );
}
