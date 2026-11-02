"use client";

import React from "react";
import { ACHIEVEMENTS, PROFILE } from "@/data/projects";
import { Award, GraduationCap, CheckCircle2, FileText, ArrowUpRight } from "lucide-react";

export default function ChapterFourAchievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-ink-200/50">
      <div className="flex items-center gap-2 mb-12 font-mono text-xs uppercase tracking-widest text-ink-600">
        <span className="text-crimson font-bold">Chapter 04</span>
        <span>·</span>
        <span>Credentials & Verified Accolades</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Education & Academic Rigor */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-ink-950 font-mono text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-crimson" />
            <span>Academic Foundation</span>
          </div>

          <div className="p-6 bg-paper-200/60 border-l-2 border-crimson space-y-3">
            <h4 className="font-serif text-2xl font-bold text-ink-950">
              {PROFILE.college}
            </h4>
            <div className="font-mono text-xs text-ink-700">
              {PROFILE.degree}
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-ink-600 pt-1">
              <span>CGPA: <strong className="text-crimson font-bold">{PROFILE.cgpa}</strong></span>
              <span>·</span>
              <span>{PROFILE.location}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="font-mono text-[11px] text-ink-500 uppercase tracking-wider block">
              Core Technical Coursework:
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs text-ink-800">
              {PROFILE.coursework.map((course, cIdx) => (
                <span
                  key={cIdx}
                  className="bg-paper-200 px-2.5 py-1 border-b border-ink-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Download Resume Action */}
          <div className="pt-4">
            <a
              href="/Vaibhav_Chavanpatil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink-950 text-paper-100 hover:bg-crimson transition-colors font-mono text-xs uppercase font-bold tracking-wider"
            >
              <FileText className="w-4 h-4" />
              <span>Download Verified Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Verified Accolades & Competitions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-ink-950 font-mono text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-crimson" />
            <span>Hackathon & Certification Honors</span>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, aIdx) => (
              <div
                key={aIdx}
                className="p-5 border-b border-ink-200/80 hover:bg-paper-200/30 transition-colors space-y-1.5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h5 className="font-serif text-lg font-bold text-ink-950">
                    {ach.title}
                  </h5>
                  <span className="font-mono text-xs text-crimson font-bold shrink-0">
                    {ach.year}
                  </span>
                </div>
                <div className="font-mono text-xs text-ink-500 uppercase tracking-wider">
                  {ach.issuer}
                </div>
                <p className="font-serif text-sm text-ink-700 leading-relaxed pt-1">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
