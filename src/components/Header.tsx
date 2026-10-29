"use client";

import { useEffect, useState } from "react";
import { meta } from "@/data/portfolio";

export function Header() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata (IST)
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setIstTime(`${formatter.format(now)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full pt-8 pb-8 md:pt-12 md:pb-12 hairline-b">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          {/* Name left */}
          <div className="flex items-baseline gap-4">
            <a
              href="#"
              className="font-serif text-2xl tracking-tight text-ink hover:text-vermilion transition-colors"
            >
              {meta.name}
            </a>
            <span className="label-mono text-muted hidden lg:inline">
              / {meta.role}
            </span>
          </div>

          {/* Right side: Live IST time + Plain text nav */}
          <div className="flex items-baseline gap-6 sm:gap-8 flex-wrap justify-between sm:justify-end">
            {istTime && (
              <div
                className="label-mono tabular-numbers text-muted tracking-widest text-[11px]"
                aria-label={`Current Indian Standard Time: ${istTime}`}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-vermilion mr-2 align-middle animate-pulse" />
                {istTime}
              </div>
            )}

            <nav aria-label="Main Navigation">
              <ul className="flex items-baseline gap-6 text-[12px] label-mono">
                <li>
                  <a
                    href="#work"
                    className="editorial-link text-ink hover:text-vermilion transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="editorial-link text-ink hover:text-vermilion transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="editorial-link text-ink hover:text-vermilion transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="editorial-link text-ink hover:text-vermilion transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
