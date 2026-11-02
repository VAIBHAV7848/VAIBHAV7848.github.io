"use client";

import React from "react";
import { PROFILE } from "@/data/projects";

export default function ChapterTwoManifesto() {
  return (
    <section id="manifesto" className="relative min-h-[90vh] py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest text-ink-600">
        <span className="text-crimson font-bold">Chapter 02</span>
        <span>·</span>
        <span>The Page Spine & Manifesto</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-baseline">
        <div className="md:col-span-5 font-mono text-xs text-ink-600 uppercase tracking-wider space-y-4">
          <p className="border-l-2 border-crimson pl-3 text-ink-950 font-bold">
            ARCHITECTURAL THESIS
          </p>
          <p>
            Computer Science & Engineering at KLE Technological University.
            Focused on distributed systems, multimodal inference pipelines, and agentic autonomy.
          </p>
          <div className="pt-4 border-t border-ink-200/60 space-y-2">
            <div className="flex justify-between">
              <span className="text-ink-400">LOCATION</span>
              <span className="text-ink-950">Hubballi, India</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-400">DISCIPLINE</span>
              <span className="text-ink-950">Full-Stack & AI Systems</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-400">CORE ETHOS</span>
              <span className="text-ink-950">Zero-Trust & Determinism</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-950 leading-snug font-normal">
            &ldquo;Code should behave like an unbroken line: purposeful in every curve, resilient across transitions, and without synthetic decoration.&rdquo;
          </blockquote>

          <p className="font-serif text-lg text-ink-800 leading-relaxed">
            I build systems where state machines govern payments, audio companion agents run directly on real-time neural streams, and privacy is guaranteed at the edge. No superfluous abstractions. No decorative filler. Just resilient engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
