import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <RevealSection>
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-14">
        {/* Typographic project cover */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            aria-label={`View ${project.title} on GitHub`}
          >
            <div className="project-cover group-hover:border-terracotta transition-colors">
              <span className="cover-number" aria-hidden="true">
                {project.number}
              </span>
              <div>
                <p className="label-mono mb-1">{project.year}</p>
                <h3 className="font-serif text-[length:var(--font-size-xl)] text-ink leading-tight">
                  {project.title}
                </h3>
                <p className="text-[length:var(--font-size-sm)] text-ink-muted mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Project details */}
        <div
          className={`lg:col-span-7 flex flex-col justify-center ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="flex items-baseline gap-3 mb-3">
            <span className="section-number">{project.number}</span>
            <h3 className="font-serif text-[length:var(--font-size-xl)] text-ink">
              {project.title}
            </h3>
          </div>

          {project.award && (
            <p className="text-[length:var(--font-size-xs)] font-mono tracking-wide uppercase text-terracotta mb-4">
              ◆ {project.award}
            </p>
          )}

          <div className="space-y-3 text-[length:var(--font-size-sm)] text-ink-light leading-relaxed">
            <p>
              <span className="font-medium text-ink">The problem:</span>{" "}
              {project.problem}
            </p>
            <p>
              <span className="font-medium text-ink">What I built:</span>{" "}
              {project.solution}
            </p>
            {project.outcome && (
              <p>
                <span className="font-medium text-ink">Outcome:</span>{" "}
                {project.outcome}
              </p>
            )}
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[length:var(--font-size-xs)] font-mono text-ink-muted border border-rule px-2.5 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-5 mt-5">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--font-size-sm)] text-ink hover:text-terracotta transition-colors link-underline"
            >
              Source →
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[length:var(--font-size-sm)] text-terracotta hover:text-terracotta-dark transition-colors link-underline"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </RevealSection>
  );
}

export function Work() {
  return (
    <section id="work" className="py-(--spacing-section)">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <RevealSection>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-number">01</span>
            <h2 className="font-serif text-[length:var(--font-size-2xl)]">
              Selected Work
            </h2>
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
