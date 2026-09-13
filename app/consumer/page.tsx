import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ConsumerAudiences } from "@/components/home/ConsumerAudiences";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Consumer Sample | Inexra Research & Analytics",
  description:
    "Targeted consumer survey sample across demographic, behavioral, and lifestyle segments — India and international markets, subject to feasibility.",
};

export default function ConsumerPage() {
  return (
    <>
      <PageHero
        overline="Consumer Sample Supply"
        headline="The right consumers for your brand and market research."
        subtext="We recruit consumer respondents matching your exact demographic, geographic, and behavioral criteria — across India and 50+ international markets."
        breadcrumbs={[{ label: "Consumer Sample" }]}
      />

      <ConsumerAudiences />

      {/* Consumer Methodology */}
      <section className="py-28 lg:py-40 bg-slate-50/70 border-t border-slate-200/80">
        <div className="container-inexra max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Audience Accuracy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-tight">
              Demographic Precision. Representative Sample.
            </h2>
          </div>

          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-8">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Consumer research requires more than volume — it demands audience fidelity. From broad nationally representative quotas to highly granular product category buyers, Inexra screens candidates against strict pre-qualification criteria.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We monitor incidence rate (IR) and drop-off trends in real time to ensure balanced demographic cells and representative sub-groups across every completed quota.
            </p>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Pan-India Tier 1-3 &amp; international coverage
                </span>
              </div>
              <Link
                href="/feasibility"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm"
              >
                <span>Request Consumer Feasibility</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
