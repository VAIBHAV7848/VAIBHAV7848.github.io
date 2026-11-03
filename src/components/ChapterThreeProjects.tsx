"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { GitBranch, ArrowUpRight, Cpu, X, Award, CheckCircle2 } from "lucide-react";

export default function ChapterThreeProjects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* Chapter header */}
      <div className="flex items-center gap-2 mb-16 font-mono text-xs uppercase tracking-widest text-ink-600">
        <span className="text-crimson font-bold">Chapter 03</span>
        <span>·</span>
        <span>Architectures & Project Nodes</span>
      </div>

      <div className="space-y-36">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={project.id}
              className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-12 items-start pl-12 md:pl-0 ${
                isEven ? "md:text-left" : ""
              }`}
            >
              {/* Central Spine Connection Node with wire tension hover */}
              <div
                id={`project-node-${project.id}`}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${project.name} system architecture node`}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-8 h-8 rounded-full border-2 border-ink-950 bg-paper-100 flex items-center justify-center z-30 transition-transform duration-300 hover:scale-125 cursor-pointer shadow-sm group print:hidden focus:outline-none focus:ring-2 focus:ring-crimson"
                onClick={() => setActiveModalProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalProject(project);
                  }
                }}
                title="Click to inspect system architecture"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-crimson group-hover:scale-150 transition-transform" />
              </div>

              {/* Project Meta Column */}
              <div
                className={`font-mono text-xs text-ink-600 space-y-3 pt-2 ${
                  isEven
                    ? "md:col-span-5 md:order-1"
                    : "md:col-span-5 md:col-start-8 md:order-2 md:text-right"
                }`}
              >
                <div className="flex items-center gap-2 text-crimson font-bold text-sm tracking-widest">
                  <span>NODE //</span>
                  <span>{project.number}</span>
                </div>

                {project.award && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-crimson/10 text-crimson border border-crimson/30 text-[11px] font-mono uppercase font-bold tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>{project.award}</span>
                  </div>
                )}

                <div className="pt-2 text-ink-800">
                  <div className="text-[10px] uppercase text-ink-400 mb-1">Architecture Stack</div>
                  <div className={`flex flex-wrap gap-1.5 ${isEven ? "justify-start" : "md:justify-end"}`}>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-paper-200 text-ink-900 px-2 py-0.5 border-b border-ink-200 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 flex items-center gap-4 ${isEven ? "justify-start" : "md:justify-end"}`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-ink-950 hover:text-crimson transition-colors border-b border-ink-950 hover:border-crimson pb-0.5"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  {project.architectureDetails && (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-crimson hover:text-ink-950 transition-colors border-b border-crimson hover:border-ink-950 pb-0.5"
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Architecture</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Project Body Column */}
              <div
                className={`space-y-4 ${
                  isEven
                    ? "md:col-span-5 md:col-start-8 md:order-2"
                    : "md:col-span-5 md:order-1"
                }`}
              >
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 leading-tight">
                  {project.name}
                </h3>

                <p className="font-serif text-lg sm:text-xl text-ink-800 italic leading-relaxed border-l-2 border-crimson pl-4 py-1">
                  &ldquo;{project.result}&rdquo;
                </p>

                {/* Key Bullet Points from Resume */}
                <ul className="space-y-2 font-serif text-base text-ink-700 leading-relaxed pt-2">
                  {project.details.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-crimson font-mono text-sm mt-0.5">―</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive System Architecture Deep-Dive Modal */}
      {activeModalProject && activeModalProject.architectureDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-paper-100 border-2 border-ink-950 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-ink-200 pb-4 mb-6">
              <div>
                <div className="font-mono text-xs uppercase text-crimson font-bold tracking-widest">
                  Architecture Blueprint // Node {activeModalProject.number}
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
                  {activeModalProject.name}
                </h4>
                <div className="font-mono text-xs text-ink-600 mt-1">
                  {activeModalProject.architectureDetails.type}
                </div>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1 hover:text-crimson transition-colors"
                title="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Pipeline Flow */}
            <div className="mb-6 space-y-3">
              <span className="font-mono text-xs uppercase text-ink-400 tracking-wider block">
                Execution & Verification Pipeline:
              </span>
              <div className="space-y-2">
                {activeModalProject.architectureDetails.flow.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 p-2.5 bg-paper-200/80 border-l-2 border-ink-950 font-mono text-xs text-ink-900"
                  >
                    <span className="text-crimson font-bold">0{sIdx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="border-t border-ink-200 pt-4 mb-6">
              <span className="font-mono text-xs uppercase text-ink-400 tracking-wider block mb-3">
                Empirical Metrics & SLA:
              </span>
              <div className="grid grid-cols-3 gap-3">
                {activeModalProject.architectureDetails.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="border border-ink-200 p-3 text-center bg-paper-50">
                    <div className="font-mono text-lg font-bold text-crimson">{m.value}</div>
                    <div className="font-mono text-[10px] text-ink-500 uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer action */}
            <div className="flex items-center justify-between border-t border-ink-200 pt-4 font-mono text-xs">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink-950 hover:text-crimson uppercase underline underline-offset-4"
              >
                <span>Inspect Repository Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-1.5 bg-ink-950 text-paper-100 hover:bg-crimson transition-colors uppercase font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
