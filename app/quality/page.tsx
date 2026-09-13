import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { QualityValidation } from "@/components/home/QualityValidation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Validation Framework | Inexra Research & Analytics",
  description:
    "How Inexra ensures respondent quality — from pre-screening and targeting verification to duplicate detection, attention checks, and response monitoring.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        overline="Quality Assurance"
        headline="Research quality starts and ends with the respondent."
        subtext="Inexra applies a structured, multi-stage quality framework to every project — protecting data integrity from initial invitation through to final completes."
        breadcrumbs={[{ label: "Quality & Validation" }]}
      />

      <QualityValidation />

      {/* Quality Philosophy Section */}
      <section className="py-28 lg:py-40 bg-white border-t border-slate-200/80">
        <div className="container-inexra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Our Standards
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-[1.15]">
                Quality is a continuous discipline, not a post-survey filter.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Inattentive participants, bot traffic, and duplicate respondents introduce noise into datasets and erode trust in findings. Inexra prevents poor data by intercepting invalid respondents before they enter your questionnaire.
              </p>

              <div className="pt-2">
                <Link
                  href="/feasibility"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm"
                >
                  <span>Start a Quality-Validated Study</span>
                  <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-6">
                <h3 className="text-lg font-bold text-[#0B1C30]">
                  Core Quality Filters
                </h3>

                <div className="space-y-4 pt-1">
                  {[
                    "Pre-survey profile qualification & ID check",
                    "Device fingerprinting & proxy / VPN detection",
                    "Straight-lining & flat-line response detection",
                    "LOI speeder threshold filters",
                    "In-survey attention traps & red-herrings",
                    "Immediate replacement guarantee for flagged completes",
                  ].map((check) => (
                    <div key={check} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
