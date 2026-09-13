import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ForAgencies() {
  return (
    <section className="py-24 lg:py-36 bg-white border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                For Research Agencies
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-[1.15]">
              Looking for an agile sample supply partner?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are an established global research agency, an independent boutique consultancy, or a corporate insights division — Inexra provides the flexible, verified respondent supply you need to fulfill complex fielding goals.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Share your upcoming study specs with our feasibility team. We will evaluate incidence rate, projected turnaround, and provide confirmed project-level CPI — typically within 45 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact?type=partnership"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm"
              >
                <span>Partner With Inexra</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </Link>
              <Link
                href="/feasibility"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border-1.5 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all"
              >
                Request Feasibility
              </Link>
            </div>
          </div>

          {/* Right: Who We Work With Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#0B1C30] mb-1">
                  Who We Support
                </h3>
                <p className="text-xs text-slate-400">
                  Tailored respondent delivery for specialized research disciplines
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {[
                  "International market research agencies",
                  "Sample procurement & panel managers",
                  "Strategic insight & brand consultancies",
                  "B2B & technology research specialists",
                  "Healthcare & pharmaceutical researchers",
                  "University & institutional research teams",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  Flexible contracts, NDA protections, and dedicated project manager assignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
