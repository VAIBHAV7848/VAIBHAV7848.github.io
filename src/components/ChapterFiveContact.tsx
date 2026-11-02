"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/projects";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export default function ChapterFiveContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative min-h-[85vh] py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-widest text-ink-600">
          <span className="text-crimson font-bold">Chapter 05</span>
          <span>·</span>
          <span>The Terminal Line</span>
        </div>

        <div className="max-w-3xl space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink-950 leading-tight">
            Initiate Conversation.
          </h2>

          <p className="font-serif text-xl text-ink-700 leading-relaxed italic">
            Looking for high-leverage engineering roles, distributed systems challenges, and agentic AI collaborations.
          </p>

          <div className="pt-8">
            <span className="font-mono text-xs text-ink-500 uppercase tracking-widest block mb-2">
              Primary Endpoint / Direct Channel
            </span>

            {/* The Email Target where the continuous spine terminates as an ink underline */}
            <div className="inline-block relative">
              <a
                id="terminal-email-target"
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-ink-950 hover:text-crimson transition-colors block py-2 select-all"
              >
                {PROFILE.email}
              </a>

              {/* Copy trigger */}
              <button
                onClick={copyEmail}
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase text-ink-600 hover:text-crimson transition-colors border-b border-ink-300 hover:border-crimson pb-0.5"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-crimson" />
                    <span className="text-crimson font-bold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta & Socials */}
      <div className="pt-24 border-t border-ink-200/60 flex flex-col sm:flex-row items-baseline justify-between gap-6 font-mono text-xs text-ink-600">
        <div className="space-y-1">
          <div className="text-ink-950 font-bold uppercase">{PROFILE.name}</div>
          <div className="text-ink-500">ENGINEERED AROUND ONE CONTINUOUS LINE · {new Date().getFullYear()}</div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-ink-900 hover:text-crimson transition-colors uppercase"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-ink-900 hover:text-crimson transition-colors uppercase"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
