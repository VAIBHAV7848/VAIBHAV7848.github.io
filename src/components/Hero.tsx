import { hero, siteConfig } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

export function Hero() {
  return (
    <section
      className="min-h-[85vh] md:min-h-[90vh] flex items-end pb-12 md:pb-20"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Left column — name and headline */}
          <div className="md:col-span-7 lg:col-span-8">
            <RevealSection>
              <p className="label-mono mb-4 md:mb-6">Full-Stack Developer</p>
            </RevealSection>

            <RevealSection delay={1}>
              <h1 className="font-serif text-[length:var(--font-size-4xl)] leading-[1.05] tracking-tight mb-6 md:mb-8">
                {siteConfig.name}
              </h1>
            </RevealSection>

            <RevealSection delay={2}>
              <p className="text-[length:var(--font-size-lg)] text-ink-light leading-relaxed max-w-[540px]">
                {hero.sub}
              </p>
            </RevealSection>
          </div>

          {/* Right column — CTA and links */}
          <div className="md:col-span-5 lg:col-span-4">
            <RevealSection delay={3}>
              <div className="flex flex-col gap-4">
                <p className="font-serif text-[length:var(--font-size-xl)] italic text-ink leading-snug">
                  {hero.headline}
                </p>

                <hr className="hairline my-2" />

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <a
                    href={siteConfig.resumeFile}
                    className="inline-flex items-center gap-2 text-[length:var(--font-size-sm)] font-medium text-terracotta hover:text-terracotta-dark transition-colors link-underline"
                    download
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Resume
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-[length:var(--font-size-sm)] font-medium text-ink hover:text-terracotta transition-colors link-underline"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email
                  </a>

                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[length:var(--font-size-sm)] font-medium text-ink hover:text-terracotta transition-colors link-underline"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>

                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[length:var(--font-size-sm)] font-medium text-ink hover:text-terracotta transition-colors link-underline"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
