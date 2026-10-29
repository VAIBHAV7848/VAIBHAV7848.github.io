"use client";

import { siteConfig } from "@/data/portfolio";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-sm border-b border-rule-light"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <nav
          className="flex items-center justify-between h-14 md:h-16"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="font-serif text-lg tracking-tight text-ink hover:text-terracotta transition-colors"
            aria-label="Back to top"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-terracotta">.</span>
          </a>

          <ul className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label-mono link-underline text-ink-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
