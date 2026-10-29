import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <RevealSection>
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 md:py-14">
        {/* Architectural Specification Plate */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group h-full"
          >
            <div className="project-cover h-full">
              {/* Watermark Numeral */}
              <span className="cover-watermark" aria-hidden="true">
                {project.number}
              </span>

              {/* Plate Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-rule pb-2.5">
                <span className="label-mono text-[0.68rem]">
                  SYS.SPEC // {project.year}
                </span>
                <span className="label-mono text-terracotta text-[0.68rem]">
                  {project.number}
                </span>
              </div>

              {/* Plate Body */}
              <div className="relative z-10 my-6">
                <p className="label-mono text-[0.7rem] text-terracotta mb-1">
                  {project.archetype}
                </p>
                <h3 className="font-serif text-[length:var(--font-size-xl)] text-ink leading-tight">
                  {project.title}
                </h3>
                <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted mt-2 leading-relaxed">
                  {project.spec}
                </p>
              </div>

              {/* Plate Footer */}
              <div className="relative z-10 pt-2 flex items-center justify-between border-t border-rule text-[length:var(--font-size-xs)] font-mono text-ink group-hover:text-terracotta transition-colors">
                <span>View on GitHub</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Case Study Details */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="section-number text-xs">{project.number}</span>
              <h3 className="font-serif text-[length:var(--font-size-2xl)] text-ink">
                {project.title}
              </h3>
              <span className="text-ink-muted text-sm hidden sm:inline">—</span>
              <p className="text-[length:var(--font-size-sm)] text-ink-muted italic">
                {project.tagline}
              </p>
            </div>

            {project.award && (
              <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 bg-ivory-warm border border-rule text-terracotta text-[0.72rem] font-mono tracking-wide">
                <span>◆</span>
                <span className="font-medium">{project.award}</span>
              </div>
            )}

            <div className="space-y-3.5 text-[length:var(--font-size-sm)] text-ink-light leading-relaxed mt-1">
              <div>
                <p className="label-mono text-[0.68rem] text-ink-muted mb-1">
                  The Problem
                </p>
                <p>{project.problem}</p>
              </div>

              <div>
                <p className="label-mono text-[0.68rem] text-ink-muted mb-1">
                  Architecture & Implementation
                </p>
                <p>{project.solution}</p>
              </div>

              {project.outcome && (
                <div>
                  <p className="label-mono text-[0.68rem] text-ink-muted mb-1">
                    Outcome & Verification
                  </p>
                  <p className="font-medium text-ink">{project.outcome}</p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6">
            {/* Stack badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[0.72rem] font-mono text-ink-muted bg-ivory-warm border border-rule px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[length:var(--font-size-sm)] font-medium text-ink hover:text-terracotta transition-colors link-underline inline-flex items-center gap-1.5"
              >
                <span>GitHub Repository</span>
                <span aria-hidden="true">→</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[length:var(--font-size-sm)] font-medium text-terracotta hover:text-terracotta-dark transition-colors link-underline inline-flex items-center gap-1.5"
                >
                  <span>Live Demo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </RevealSection>
  );
}

export function Work() {
  return (
    <section id="work" className="py-(--spacing-section)">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-8">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div className="flex items-baseline gap-3">
              <span className="section-number text-xs">01</span>
              <h2 className="font-serif text-[length:var(--font-size-3xl)] text-ink">
                Selected Work
              </h2>
            </div>
            <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted">
              5 FEATURED CASE STUDIES
            </p>
          </div>
          <hr className="hairline" />
        </RevealSection>

        <div className="divide-y divide-rule">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
