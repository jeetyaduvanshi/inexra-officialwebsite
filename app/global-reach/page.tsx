import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { GlobalReach } from "@/components/home/GlobalReach";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Reach & Multi-country Sample | Inexra Research & Analytics",
  description:
    "Multi-country survey sample across India and 20+ international markets. Global research sample supply subject to target-audience feasibility.",
};

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        overline="International Coverage"
        headline="One research requirement. Multiple global markets."
        subtext="Inexra coordinates multi-country survey sample across India and 20+ key international markets, subject to target-audience availability and feasibility."
        breadcrumbs={[{ label: "Global Reach" }]}
      />

      <GlobalReach />

      {/* Multi-Country Best Practices */}
      <section className="py-28 lg:py-40 bg-white border-t border-slate-200/80">
        <div className="container-inexra max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Cross-Border Execution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-tight">
              Coordinated Multi-Market Fielding
            </h2>
          </div>

          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-md space-y-8">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              International research projects require managing distinct incidence rates, local language screening, and cultural respondent behavior. Inexra simplifies multi-market fielding under a single point of operational contact.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide individual market feasibility breakdowns before fielding starts — ensuring your agency receives realistic timelines and transparent pricing per geography.
            </p>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Market-by-market breakdown with single-invoice simplicity
                </span>
              </div>
              <Link
                href="/feasibility"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm"
              >
                <span>Request Global Feasibility</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
