"use client";

import React from "react";

export default function ChapterFourSystems() {
  const domains = [
    {
      category: "CORE LANGUAGES",
      items: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
    },
    {
      category: "AI & INTELLIGENCE",
      items: ["PyTorch", "Gemini Live Audio", "Multi-Agent Systems", "Scikit-Learn", "NLP & PII Redaction", "Survival Analysis"],
    },
    {
      category: "FULL-STACK & SYSTEMS",
      items: ["Next.js 15", "React 19", "PostgreSQL", "Prisma ORM", "Node.js", "IndexedDB", "Tailwind CSS"],
    },
    {
      category: "DEVELOPER WORKFLOW",
      items: ["Agentic CLI Orchestration", "Linux/Bash", "Git Architecture", "Docker", "REST & WebSocket Protocols"],
    },
  ];

  return (
    <section id="systems" className="relative py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-12 font-mono text-xs uppercase tracking-widest text-ink-600">
        <span className="text-crimson font-bold">Chapter 04</span>
        <span>·</span>
        <span>Systems Matrix & Competency</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {domains.map((dom, i) => (
          <div key={i} className="border-t-2 border-ink-950 pt-4 space-y-3">
            <span className="font-mono text-xs text-crimson font-bold tracking-widest uppercase block">
              {dom.category}
            </span>
            <ul className="space-y-1.5 font-mono text-xs text-ink-800">
              {dom.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="text-ink-400">―</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
