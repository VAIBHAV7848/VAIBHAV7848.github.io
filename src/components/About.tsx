import { education, skills, achievements } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

export function About() {
  return (
    <section id="about" className="py-(--spacing-section) bg-ivory-warm">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <RevealSection>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-number">02</span>
            <h2 className="font-serif text-[length:var(--font-size-2xl)]">
              About
            </h2>
          </div>
          <hr className="hairline" />
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-10 md:mt-14">
          {/* Left column — Education & Achievements */}
          <div className="lg:col-span-5">
            {/* Education */}
            <RevealSection>
              <h3 className="label-mono mb-5">Education</h3>
              {education.map((edu) => (
                <div key={edu.institution} className="mb-6">
                  <p className="font-serif text-[length:var(--font-size-lg)] text-ink leading-snug">
                    {edu.degree}
                  </p>
                  <p className="text-[length:var(--font-size-sm)] text-ink-light mt-1">
                    {edu.institution} · {edu.location}
                  </p>
                  <p className="text-[length:var(--font-size-xs)] font-mono text-ink-muted mt-1">
                    {edu.period} · {edu.detail}
                  </p>
                  <p className="text-[length:var(--font-size-xs)] text-ink-muted mt-2 leading-relaxed">
                    {edu.coursework}
                  </p>
                </div>
              ))}
            </RevealSection>

            <hr className="hairline my-8" />

            {/* Achievements */}
            <RevealSection>
              <h3 className="label-mono mb-5">Achievements & Certifications</h3>
              <ul className="space-y-4">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <p className="text-[length:var(--font-size-sm)] font-medium text-ink">
                      {a.title}
                      {a.year && (
                        <span className="text-ink-muted font-normal">
                          {" "}
                          · {a.year}
                        </span>
                      )}
                    </p>
                    <p className="text-[length:var(--font-size-xs)] text-ink-light mt-0.5">
                      {a.detail}
                    </p>
                    {a.links && (
                      <div className="flex flex-wrap gap-3 mt-1">
                        {a.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[length:var(--font-size-xs)] text-terracotta hover:text-terracotta-dark link-underline transition-colors"
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

          {/* Right column — Skills */}
          <div className="lg:col-span-7">
            <RevealSection>
              <h3 className="label-mono mb-5">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-[length:var(--font-size-xs)] font-mono text-terracotta uppercase tracking-wider mb-2">
                      {category}
                    </p>
                    <p className="text-[length:var(--font-size-sm)] text-ink-light leading-relaxed">
                      {items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </RevealSection>

            <hr className="hairline my-8" />

            {/* Brief personal note */}
            <RevealSection>
              <div className="max-w-md">
                <p className="font-serif text-[length:var(--font-size-lg)] text-ink italic leading-relaxed">
                  I like building things that work correctly under pressure — escrow 
                  systems that don&apos;t lose money, chatbots that don&apos;t leak data, 
                  dashboards that work offline.
                </p>
                <p className="text-[length:var(--font-size-sm)] text-ink-light mt-4 leading-relaxed">
                  Currently in my third year of CS at KLE Tech. I compete in
                  hackathons and datathons, contribute to open source, and spend 
                  too much time in the terminal. Based in Karnataka, India.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
