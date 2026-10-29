"use client";

import { siteConfig } from "@/data/portfolio";
import { useState, useEffect } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-rule bg-ivory">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-[length:var(--font-size-xs)] font-mono text-ink">
              © {currentYear} {siteConfig.name}
            </p>
            <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted mt-0.5">
              Full-Stack Developer · {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--font-size-xs)] font-mono text-ink-muted hover:text-terracotta transition-colors link-underline"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--font-size-xs)] font-mono text-ink-muted hover:text-terracotta transition-colors link-underline"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--font-size-xs)] font-mono text-ink-muted hover:text-terracotta transition-colors link-underline"
            >
              Kaggle
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[length:var(--font-size-xs)] font-mono text-ink-muted hover:text-terracotta transition-colors link-underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
