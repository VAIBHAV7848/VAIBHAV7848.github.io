import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-pad hairline-b" aria-label="Experience & Milestones">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label in cols 1-3 */}
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <div className="sticky top-12">
              <p className="label-mono text-muted">03 — Experience</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-2">
                Milestones
              </h2>
              <p className="text-sm text-muted mt-3 max-w-xs leading-relaxed">
                Academic education, hackathon victories, datathons, and certified software engineering credentials.
              </p>
            </div>
          </div>

          {/* Hairline-separated rows in cols 5-12 */}
          <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5">
            <div className="hairline-t">
              {experience.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  className="py-8 sm:py-10 hairline-b grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-paper-tint/30 transition-colors"
                >
                  {/* Left column: Date in Mono tabular numbers */}
                  <div className="md:col-span-4">
                    <span className="label-mono tabular-numbers text-xs text-muted block">
                      {item.period}
                    </span>
                    <span className="label-mono text-[10px] text-muted/80 block mt-0.5">
                      {item.location}
                    </span>
                  </div>

                  {/* Right column: Role, Org, Description */}
                  <div className="md:col-span-8 space-y-2">
                    <h3 className="font-serif text-2xl text-ink leading-tight">
                      {item.role}
                    </h3>
                    <p className="label-mono text-xs text-vermilion">
                      {item.organization}
                    </p>
                    <p className="text-[16px] text-muted leading-relaxed">
                      {item.description}
                    </p>
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-[14px] font-mono text-muted/90 leading-normal"
                          >
                            — {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
