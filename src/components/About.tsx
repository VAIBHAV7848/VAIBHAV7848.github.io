import Image from "next/image";
import { about, skillsGrouped } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-pad hairline-b" aria-label="About">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Label in cols 1-3 */}
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <div className="sticky top-12">
              <p className="label-mono text-muted">02 — About</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-2">
                Background
              </h2>
            </div>
          </div>

          {/* Content in cols 5-12 */}
          <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Short honest text */}
              <div className="lg:col-span-7 space-y-5 text-ink leading-relaxed">
                <p className="font-serif text-2xl text-ink leading-snug">
                  {about.lead}
                </p>

                {about.body.map((paragraph, i) => (
                  <p key={i} className="text-[17px] text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Grouped skills */}
                <div className="pt-6 hairline-t">
                  <p className="label-mono text-[11px] text-muted mb-4">
                    TECHNICAL CAPABILITIES
                  </p>
                  <div className="space-y-3">
                    {Object.entries(skillsGrouped).map(([category, items]) => (
                      <div
                        key={category}
                        className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-1 hairline-b last:border-b-0"
                      >
                        <span className="label-mono text-[11px] text-ink shrink-0 sm:w-36">
                          {category}
                        </span>
                        <span className="text-sm font-mono text-muted text-left sm:text-right">
                          {items.join(" · ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real Photo with hairline border and mono caption */}
              <div className="lg:col-span-5">
                <div className="hairline-all bg-paper p-2">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-tint">
                    <Image
                      src={about.photo.src}
                      alt={about.photo.alt}
                      fill
                      className="object-cover object-center grayscale contrast-[1.05]"
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                  </div>
                  <p className="label-mono text-[11px] text-muted mt-2 text-center">
                    {about.photo.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
