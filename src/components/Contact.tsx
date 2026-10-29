"use client";

import { useState } from "react";
import { meta } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="section-pad hairline-b" aria-label="Contact">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label in cols 1-3 */}
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <div className="sticky top-12">
              <p className="label-mono text-muted">04 — Contact</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-2">
                Initiate
              </h2>
              <p className="text-sm text-muted mt-3 max-w-xs leading-relaxed">
                Open to full-stack engineering roles, software internships, and systems collaborations.
              </p>
            </div>
          </div>

          {/* Contact Details in cols 5-12 */}
          <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5 space-y-12">
            <div>
              <p className="label-mono text-[11px] text-muted mb-3">
                DIRECT INBOX // CLICK TO COPY
              </p>

              {/* Oversized Email as a Typographic Moment */}
              <div className="relative inline-block max-w-full">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group text-left cursor-pointer focus-visible:outline-none"
                  aria-label={`Copy email address ${meta.email}`}
                >
                  <span className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight hover:text-vermilion transition-colors break-all leading-none inline-block">
                    {meta.email}
                  </span>

                  <span className="block mt-3 label-mono text-xs text-muted group-hover:text-vermilion transition-colors">
                    {copied ? (
                      <span className="text-vermilion font-medium">
                        ✓ Copied to clipboard
                      </span>
                    ) : (
                      <span>Click to copy email address ↗</span>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Profiles & Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 hairline-t">
              <div>
                <p className="label-mono text-[11px] text-muted mb-2">
                  TELEPHONE
                </p>
                <a
                  href={`tel:${meta.phone.replace(/\s+/g, "")}`}
                  className="font-mono text-sm text-ink hover:text-vermilion transition-colors block"
                >
                  {meta.phone}
                </a>
              </div>

              <div>
                <p className="label-mono text-[11px] text-muted mb-2">
                  PROFILES
                </p>
                <ul className="space-y-1.5 font-mono text-sm">
                  <li>
                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-ink hover:text-vermilion"
                    >
                      GitHub // @VAIBHAV7848 ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href={meta.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-ink hover:text-vermilion"
                    >
                      LinkedIn // vaibhav-chavanpatil ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href={meta.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-ink hover:text-vermilion"
                    >
                      Kaggle // vaibhavchavanpatil ↗
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="label-mono text-[11px] text-muted mb-2">
                  RESUME / CV
                </p>
                <a
                  href={meta.resumeUrl}
                  download
                  className="cta-link text-ink hover:text-vermilion block"
                >
                  Download PDF (Single Page ATS) ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
