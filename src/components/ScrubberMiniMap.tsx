"use client";

import React, { useEffect, useState } from "react";

export default function ScrubberMiniMap() {
  const [activeSection, setActiveSection] = useState("portrait");
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: "portrait", label: "01. Face" },
    { id: "manifesto", label: "02. Ethos" },
    { id: "projects", label: "03. Code" },
    { id: "achievements", label: "04. Certs" },
    { id: "contact", label: "05. End" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setProgress(window.scrollY / total);
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-6 pointer-events-auto print:hidden">
      {/* Vertical Thread Line */}
      <div className="relative w-px h-48 bg-ink-200" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-full bg-crimson transition-all duration-150"
          style={{ height: `${Math.min(100, progress * 100)}%` }}
        />
        {/* Moving Dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-crimson shadow-sm"
          style={{ top: `${Math.min(100, progress * 100)}%` }}
        />
      </div>

      {/* Chapter Marker Links */}
      <nav aria-label="Chapter quick links" className="flex flex-col gap-3 font-mono text-[10px] text-ink-500 uppercase">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`transition-colors flex items-center gap-1.5 ${
              activeSection === sec.id ? "text-crimson font-bold" : "hover:text-ink-950"
            }`}
          >
            <span>{sec.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
