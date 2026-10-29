import { colophon, meta } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-paper" aria-label="Colophon and credits">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline">
          {/* Left Column: Copyright & Location */}
          <div className="col-span-12 md:col-span-4">
            <p className="font-serif text-xl text-ink">
              {meta.name}
            </p>
            <p className="label-mono text-[11px] text-muted mt-1">
              {meta.location} · {meta.role}
            </p>
            <p className="label-mono text-[11px] text-muted mt-4">
              © {new Date().getFullYear()} {meta.name}. {colophon.license}.
            </p>
          </div>

          {/* Right Column: Colophon (fonts, stack, last updated) */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 md:pt-0 border-t md:border-t-0 border-hairline">
            <div>
              <p className="label-mono text-[11px] text-muted mb-1">
                COLOPHON // TYPOGRAPHY
              </p>
              <p className="font-mono text-xs text-ink leading-relaxed">
                {colophon.typography}
              </p>
            </div>

            <div>
              <p className="label-mono text-[11px] text-muted mb-1">
                COLOPHON // STACK
              </p>
              <p className="font-mono text-xs text-ink leading-relaxed">
                {colophon.stack}
              </p>
            </div>

            <div>
              <p className="label-mono text-[11px] text-muted mb-1">
                LAST UPDATED
              </p>
              <p className="font-mono text-xs text-ink leading-relaxed">
                {colophon.updated}
              </p>
              <p className="label-mono text-[10px] text-vermilion mt-1">
                VERIFIED RELEASE // PRODUCTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
