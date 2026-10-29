import { siteConfig } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

export function Contact() {
  return (
    <section id="contact" className="py-(--spacing-section)">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <RevealSection>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-number">03</span>
            <h2 className="font-serif text-[length:var(--font-size-2xl)]">
              Get in Touch
            </h2>
          </div>
          <hr className="hairline" />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-10 md:mt-14">
          <div className="md:col-span-7">
            <RevealSection>
              <p className="font-serif text-[length:var(--font-size-xl)] italic text-ink leading-relaxed max-w-lg">
                Looking for internships and full-stack roles where I can build
                things that matter. Open to collaborating on interesting
                problems.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 text-[length:var(--font-size-lg)] text-terracotta hover:text-terracotta-dark transition-colors link-underline group"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {siteConfig.email}
                </a>
              </div>
            </RevealSection>
          </div>

          <div className="md:col-span-5">
            <RevealSection delay={1}>
              <h3 className="label-mono mb-4">Elsewhere</h3>
              <ul className="space-y-3">
                {[
                  {
                    label: "GitHub",
                    href: siteConfig.github,
                    handle: "@VAIBHAV7848",
                  },
                  {
                    label: "LinkedIn",
                    href: siteConfig.linkedin,
                    handle: "vaibhav-chavanpatil",
                  },
                  {
                    label: "Kaggle",
                    href: siteConfig.kaggle,
                    handle: "vaibhavchavanpatil",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-3"
                    >
                      <span className="text-[length:var(--font-size-xs)] font-mono text-ink-muted w-16 shrink-0">
                        {link.label}
                      </span>
                      <span className="text-[length:var(--font-size-sm)] text-ink group-hover:text-terracotta transition-colors link-underline">
                        {link.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <hr className="hairline my-6" />

              <a
                href={siteConfig.resumeFile}
                download
                className="inline-flex items-center gap-2 text-[length:var(--font-size-sm)] border border-terracotta text-terracotta px-5 py-2.5 hover:bg-terracotta hover:text-ivory transition-colors"
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
                Download Resume
              </a>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
