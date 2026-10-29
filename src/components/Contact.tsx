"use client";

import { siteConfig } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-(--spacing-section)">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-8">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div className="flex items-baseline gap-3">
              <span className="section-number text-xs">03</span>
              <h2 className="font-serif text-[length:var(--font-size-3xl)] text-ink">
                Get in Touch
              </h2>
            </div>
            <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted">
              HIRING & COLLABORATION
            </p>
          </div>
          <hr className="hairline" />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 mt-8 md:mt-12">
          {/* Left Column — Direct Call to Action */}
          <div className="md:col-span-7">
            <RevealSection>
              <p className="font-serif text-[length:var(--font-size-xl)] italic text-ink leading-relaxed max-w-lg">
                Seeking full-stack developer roles and software engineering internships where I can build dependable systems.
              </p>

              <p className="text-[length:var(--font-size-sm)] text-ink-light mt-4 max-w-lg leading-relaxed">
                Whether you have an open engineering role, a hackathon collaboration, or want to discuss multi-agent systems and escrow architectures, my inbox is open.
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 bg-ink text-ivory px-5 py-3 text-[length:var(--font-size-sm)] font-medium hover:bg-terracotta transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 border border-rule bg-ivory-warm px-4 py-3 text-[length:var(--font-size-sm)] font-mono text-ink hover:border-ink transition-colors cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-terracotta"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-terracotta font-medium">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted mt-3">
                {siteConfig.email} · {siteConfig.phone}
              </p>
            </RevealSection>
          </div>

          {/* Right Column — Social Profiles & Resume */}
          <div className="md:col-span-5">
            <RevealSection delay={1}>
              <h3 className="label-mono mb-4 text-ink">Profiles & Credentials</h3>
              <ul className="space-y-3.5 border-t border-rule pt-4">
                {[
                  {
                    label: "GitHub",
                    href: siteConfig.github,
                    handle: "VAIBHAV7848",
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
                      className="group flex items-baseline justify-between border-b border-rule/50 pb-2"
                    >
                      <span className="text-[length:var(--font-size-xs)] font-mono text-ink-muted">
                        {link.label}
                      </span>
                      <span className="text-[length:var(--font-size-sm)] text-ink group-hover:text-terracotta transition-colors link-underline font-mono">
                        {link.handle} ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-2">
                <a
                  href={siteConfig.resumeFile}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 border border-terracotta text-terracotta px-5 py-3 text-[length:var(--font-size-sm)] font-medium hover:bg-terracotta hover:text-ivory transition-colors"
                >
                  <svg
                    width="15"
                    height="15"
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
                  <span>Download Verified Resume (PDF)</span>
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
