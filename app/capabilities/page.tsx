import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { MovingStrip } from "@/components/shared/MovingStrip";
import { CapabilityCards } from "@/components/home/CapabilityCards";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Capabilities | Inexra Research & Analytics",
  description:
    "Explore Inexra's full range of survey sample and respondent recruitment capabilities — consumer, B2B, multi-country, quality validation, and more.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        overline="Capabilities Overview"
        headline="Full-spectrum sample supply. High-precision fielding."
        subtext="Eight specialized capabilities built around targeted recruitment, strict data verification, and flexible fielding workflows across India and 20+ global markets."
        breadcrumbs={[{ label: "Capabilities" }]}
      />

      {/* Moving Strip Ticker */}
      <MovingStrip />

      {/* Capability Cards Reused */}
      <CapabilityCards />

      {/* Extended Delivery Model Section */}
      <section className="py-28 lg:py-40 bg-slate-50/70 border-t border-slate-200/80">
        <div className="container-inexra max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                How We Deliver
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-tight">
              Feasibility First. Then Flawless Execution.
            </h2>
          </div>

          <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-8">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every project engagement at Inexra begins with an honest, rigorous feasibility assessment. Before committing to quotas or timelines, our feasibility desk analyzes audience incidence rate (IR), survey length (LOI), and demographic availability in your target market.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              This feasibility-first discipline prevents over-promising, protects your research schedule, and gives research agencies complete confidence in their fielding milestones.
            </p>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">
                  Confirmed turnaround typically within 45 minutes
                </span>
              </div>
              <Link
                href="/feasibility"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Request Feasibility Check</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
