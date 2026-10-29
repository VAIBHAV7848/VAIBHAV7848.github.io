import { education, skills, achievements } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

export function About() {
  return (
    <section id="about" className="py-(--spacing-section) bg-ivory-warm border-y border-rule">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-8">
        {/* Section header */}
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div className="flex items-baseline gap-3">
              <span className="section-number text-xs">02</span>
              <h2 className="font-serif text-[length:var(--font-size-3xl)] text-ink">
                About & Expertise
              </h2>
            </div>
            <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted">
              EDUCATION · HONORS · SKILLS
            </p>
          </div>
          <hr className="hairline" />
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-8 md:mt-12">
          {/* Left column — Education & Achievements */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Education */}
              <RevealSection>
                <h3 className="label-mono mb-4 text-ink">Education</h3>
                {education.map((edu) => (
                  <div key={edu.institution} className="mb-6">
                    <p className="font-serif text-[length:var(--font-size-lg)] text-ink leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-[length:var(--font-size-sm)] text-ink-light mt-1">
                      {edu.institution} · {edu.location}
                    </p>
                    <p className="text-[length:var(--font-size-xs)] font-mono text-terracotta mt-1">
                      {edu.period} · {edu.detail}
                    </p>
                    <p className="text-[length:var(--font-size-xs)] text-ink-muted mt-2.5 leading-relaxed">
                      <span className="font-medium text-ink-light">Coursework:</span>{" "}
                      {edu.coursework}
                    </p>
                  </div>
                ))}
              </RevealSection>

              <hr className="hairline my-8" />

              {/* Achievements */}
              <RevealSection>
                <h3 className="label-mono mb-4 text-ink">Achievements & Certifications</h3>
                <ul className="space-y-4">
                  {achievements.map((a) => (
                    <li key={a.title} className="text-[length:var(--font-size-sm)]">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-medium text-ink">{a.title}</p>
                        {a.year && (
                          <span className="text-[0.72rem] font-mono text-ink-muted shrink-0">
                            {a.year}
                          </span>
                        )}
                      </div>
                      <p className="text-[length:var(--font-size-xs)] text-ink-light mt-0.5">
                        {a.detail}
                      </p>
                      {a.links && (
                        <div className="flex flex-wrap gap-3 mt-1.5">
                          {a.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[length:var(--font-size-xs)] text-terracotta hover:text-terracotta-dark link-underline transition-colors font-mono"
                            >
                              {link.label} ↗
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </RevealSection>
            </div>
          </div>

          {/* Right column — Technical Skills & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <RevealSection>
              <h3 className="label-mono mb-4 text-ink">Technical Skills</h3>
              <div className="space-y-5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="border-b border-rule/60 pb-3.5 last:border-0">
                    <p className="text-[length:var(--font-size-xs)] font-mono text-terracotta uppercase tracking-wider mb-1.5 font-medium">
                      {category}
                    </p>
                    <p className="text-[length:var(--font-size-sm)] text-ink-light leading-relaxed">
                      {items.join("  ·  ")}
                    </p>
                  </div>
                ))}
              </div>
            </RevealSection>

            <hr className="hairline my-8" />

            {/* Engineering standard & statement */}
            <RevealSection>
              <div className="bg-ivory border border-rule p-5 sm:p-6">
                <p className="label-mono text-[0.68rem] text-terracotta mb-2">
                  Engineering Philosophy
                </p>
                <p className="font-serif text-[length:var(--font-size-lg)] text-ink italic leading-relaxed">
                  &ldquo;I build software that doesn&apos;t fail silently. Escrow ledgers with double-entry balance conservation, sentiment chatbots with privacy-preserving PII masking, and offline stores that keep working when connectivity drops.&rdquo;
                </p>
                <p className="text-[length:var(--font-size-xs)] text-ink-muted mt-3">
                  Currently 3rd Year B.Tech CSE at KLE Tech. Active in hackathons, datathons, and open-source systems.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
