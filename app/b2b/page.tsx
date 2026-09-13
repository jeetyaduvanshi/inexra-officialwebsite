import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { B2BAudiences } from "@/components/home/B2BAudiences";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Sample & Professional Respondents | Inexra Research & Analytics",
  description:
    "Inexra provides targeted B2B survey sample and professional respondent recruitment — C-suite, IT, HR, Finance, Healthcare, and more — subject to feasibility.",
};

export default function B2BPage() {
  return (
    <>
      <PageHero
        overline="B2B Sample Supply"
        headline="Verified professional respondents for decisive research."
        subtext="Inexra recruits pre-screened business leaders, specialized professionals, and enterprise decision-makers across industries — verified through firmographic and role-level criteria."
        breadcrumbs={[{ label: "B2B Sample" }]}
      />

      <B2BAudiences />

      {/* B2B Process Deep Dive */}
      <section className="py-28 lg:py-40 bg-white border-t border-slate-200/80">
        <div className="container-inexra max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Screening Discipline
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-tight">
              Targeted. Verified. Delivered.
            </h2>
          </div>

          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-md space-y-8">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              B2B studies require a fundamentally different recruitment rigor than general consumer polls. Senior executives and technical specialists have limited availability and strict qualification parameters.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Inexra applies job-role authentication, corporate domain verification, and company size screening to ensure every respondent who reaches your survey link genuinely possesses the authority your study examines.
            </p>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Custom B2B feasibility evaluated per project spec
                </span>
              </div>
              <Link
                href="/feasibility"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm"
              >
                <span>Request B2B Feasibility</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
