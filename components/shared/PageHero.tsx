import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  overline?: string;
  headline: string;
  subtext?: string;
  breadcrumbs?: Breadcrumb[];
}

/**
 * Editorial Page Hero — Clean, spacious Epitome-inspired design
 * Crisp white/off-white background with large bold typography and generous whitespace.
 */
export function PageHero({ overline, headline, subtext, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-200/70 pt-8 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Subtle decorative grid/dots in background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="container-inexra relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 mb-4" aria-label="Breadcrumb">
              <Link
                href="/"
                className="text-xs font-medium text-slate-500 hover:text-[#1A365D] transition-colors"
              >
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-slate-300" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="text-xs font-medium text-slate-500 hover:text-[#1A365D] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-xs font-semibold text-[#1A365D]">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Overline / Badge */}
          {overline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                {overline}
              </span>
            </div>
          )}

          {/* Headline — Massive, crisp editorial typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1C30] tracking-tight leading-[1.1] mb-6">
            {headline}
          </h1>

          {/* Subtext with generous breathing room */}
          {subtext && (
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
