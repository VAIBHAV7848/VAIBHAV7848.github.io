"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hairline-b last:border-b-0 group transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Index Row */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`case-study-${project.slug}`}
        className="w-full py-8 sm:py-10 text-left flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion"
      >
        {/* Left: Number + Title */}
        <div className="flex items-baseline gap-6 sm:gap-10 transition-transform duration-200 group-hover:translate-x-2">
          <span className="label-mono tabular-numbers text-muted text-sm shrink-0">
            {project.number}
          </span>
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink group-hover:text-vermilion transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted mt-1 max-w-md hidden sm:block">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Right: Year + Stack + Arrow */}
        <div className="flex items-baseline justify-between md:justify-end gap-6 sm:gap-10 shrink-0 pl-12 md:pl-0">
          <div className="hidden lg:block text-right">
            <span className="label-mono text-[11px] block">
              {project.stack.slice(0, 3).join(" · ")}
            </span>
          </div>

          <span className="label-mono tabular-numbers text-muted text-xs shrink-0">
            {project.year}
          </span>

          <span
            className={`font-serif text-2xl text-ink transition-transform duration-300 ${
              isOpen
                ? "rotate-90 text-vermilion"
                : "group-hover:translate-x-1 group-hover:text-vermilion"
            }`}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </button>

      {/* Floating Hover Preview (Desktop only) */}
      {isHovered && !isOpen && (
        <div
          className="hidden xl:block fixed pointer-events-none z-40 transition-opacity duration-200 shadow-sm"
          style={{
            top: "35%",
            right: "10%",
            width: "320px",
            height: "200px",
          }}
        >
          <div className="relative w-full h-full bg-paper hairline-all p-2">
            <div className="relative w-full h-full overflow-hidden bg-paper-tint">
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
            <p className="label-mono text-[10px] mt-1 text-center truncate">
              {project.title} {"//"} PREVIEW
            </p>
          </div>
        </div>
      )}

      {/* Expandable Case Study Drawer */}
      {isOpen && (
        <div
          id={`case-study-${project.slug}`}
          className="pb-12 pt-2 animate-fadeIn"
        >
          <div className="bg-paper-tint hairline-all p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Problem, Solution, Outcome */}
              <div className="lg:col-span-7 space-y-6">
                {project.award && (
                  <div className="inline-block border border-vermilion/40 bg-paper px-3 py-1">
                    <span className="label-mono text-vermilion text-[11px]">
                      ◆ {project.award}
                    </span>
                  </div>
                )}

                <div>
                  <p className="label-mono text-[11px] text-muted mb-1.5">
                    01 // THE PROBLEM
                  </p>
                  <p className="text-[16px] text-ink leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <p className="label-mono text-[11px] text-muted mb-1.5">
                    02 // WHAT I BUILT
                  </p>
                  <p className="text-[16px] text-ink leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <p className="label-mono text-[11px] text-muted mb-1.5">
                    03 // VERIFIED OUTCOME
                  </p>
                  <p className="text-[16px] text-ink leading-relaxed font-medium">
                    {project.outcome}
                  </p>
                </div>

                {/* Stack Tags */}
                <div>
                  <p className="label-mono text-[11px] text-muted mb-2">
                    TECHNOLOGY STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="label-mono text-[11px] bg-paper hairline-all px-2.5 py-1 text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-2 flex flex-wrap gap-6 items-baseline">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-link text-ink hover:text-vermilion inline-flex items-center gap-1.5"
                  >
                    <span>View GitHub Repository</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-link text-vermilion inline-flex items-center gap-1.5"
                    >
                      <span>Live Deployment</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Real Project Screenshot */}
              <div className="lg:col-span-5 flex flex-col justify-start">
                <div className="hairline-all bg-paper p-2">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-tint">
                    <Image
                      src={project.image}
                      alt={`${project.title} verified capture`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>
                  <p className="label-mono text-[10px] text-muted mt-2 text-center">
                    FIG // {project.number}. {project.title.toUpperCase()} INTERFACE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First case study open by default

  return (
    <section id="work" className="section-pad hairline-b" aria-label="Selected Work">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label in cols 1-3 */}
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <div className="sticky top-12">
              <p className="label-mono text-muted">01 — Work</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-2">
                Selected Index
              </h2>
              <p className="text-sm text-muted mt-3 max-w-xs leading-relaxed">
                Four engineering case studies built under concrete performance, privacy, and correctness requirements.
              </p>
            </div>
          </div>

          {/* Index List in cols 5-12 */}
          <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5">
            <div className="hairline-t">
              {projects.map((project, idx) => (
                <ProjectRow
                  key={project.slug}
                  project={project}
                  isOpen={openIndex === idx}
                  onToggle={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
