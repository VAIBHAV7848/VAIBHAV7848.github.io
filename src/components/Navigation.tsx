"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/projects";
import { FileText, ArrowUpRight } from "lucide-react";

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolledPastIntro, setScrolledPastIntro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const p = Math.min(100, Math.max(0, Math.round((window.scrollY / total) * 100)));
        setScrollProgress(p);
      }
      setScrolledPastIntro(window.scrollY > window.innerHeight * 1.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-6 md:px-12 py-4 flex items-center justify-between text-ink-950 font-mono text-xs uppercase tracking-widest border-b border-ink-200/50 bg-paper-100/90 backdrop-blur-md">
      <div className="flex items-center gap-3 pointer-events-auto">
        <span className="inline-block w-2 h-2 rounded-full bg-crimson animate-pulse" />
        <a href="#origin" className="font-bold tracking-wider hover:text-crimson transition-colors flex items-center gap-2">
          <span>{PROFILE.name}</span>
          {scrolledPastIntro && (
            <span className="hidden sm:inline-block px-1.5 py-0.5 border border-ink-300 text-[10px] text-ink-600">
              PORTRAIT COMPLETE
            </span>
          )}
        </a>
      </div>

      <nav className="flex items-center gap-5 sm:gap-6 pointer-events-auto">
        <a href="#portrait" className="hidden lg:inline hover:text-crimson transition-colors">
          01. Identity
        </a>
        <a href="#manifesto" className="hidden lg:inline hover:text-crimson transition-colors">
          02. Philosophy
        </a>
        <a href="#projects" className="hidden md:inline hover:text-crimson transition-colors">
          03. Projects
        </a>
        <a href="#achievements" className="hidden md:inline hover:text-crimson transition-colors">
          04. Credentials
        </a>
        <a href="#contact" className="hover:text-crimson transition-colors">
          05. Contact
        </a>

        {/* Resume PDF Action */}
        <a
          href="/Vaibhav_Chavanpatil_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink-950 text-paper-100 hover:bg-crimson transition-colors font-mono text-[11px] font-bold tracking-wider uppercase"
        >
          <FileText className="w-3 h-3" />
          <span>Resume</span>
          <ArrowUpRight className="w-2.5 h-2.5" />
        </a>

        <div className="flex items-center gap-2 pl-2 sm:pl-4 border-l border-ink-200">
          <span className="text-ink-400 hidden sm:inline">LINE</span>
          <span className="font-bold text-crimson w-9 text-right">{scrollProgress}%</span>
        </div>
      </nav>
    </header>
  );
}
