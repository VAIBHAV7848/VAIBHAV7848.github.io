import { hero, meta } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="section-pad hairline-b" aria-label="Introduction">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Main Statement spanning 8+ columns */}
          <div className="col-span-12 md:col-span-10 lg:col-span-9">
            <h1 className="hero-statement">
              {hero.statementLead}{" "}
              <span className="relative inline-block">
                <em className="italic-serif">{hero.statementAccent}</em>
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-[6px] sm:h-[8px] text-vermilion pointer-events-none"
                  viewBox="0 0 120 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 6C32 2 82 1.5 118.5 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              {hero.statementRest}
            </h1>
          </div>
        </div>

        {/* 3 Small Mono Facts + Underlined CTAs */}
        <div className="mt-12 sm:mt-16 md:mt-24 pt-8 hairline-t grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {hero.facts.map((fact, index) => (
            <div
              key={fact.label}
              className="col-span-1 md:col-span-3 lg:col-span-3"
            >
              <p className="label-mono text-[11px] text-muted">
                0{index + 1} {"//"} {fact.label}
              </p>
              <p className="font-mono text-sm text-ink mt-1 tracking-tight">
                {fact.value}
              </p>
            </div>
          ))}

          {/* Underlined CTAs (not buttons) */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-6 md:gap-3 md:items-end">
            <a
              href={`mailto:${meta.email}`}
              className="cta-link"
              aria-label="Send email to Vaibhav Chavanpatil"
            >
              Write an email →
            </a>
            <a
              href={meta.resumeUrl}
              download
              className="cta-link text-muted hover:text-vermilion"
              aria-label="Download Vaibhav Chavanpatil's resume as PDF"
            >
              Download resume (PDF) ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
