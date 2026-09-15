import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { MovingStrip } from "@/components/shared/MovingStrip";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Inexra Research & Analytics",
  description:
    "Learn about Inexra Research & Analytics — a survey sample supply and respondent recruitment partner for market research agencies and insight teams globally.",
};

const pillars = [
  {
    icon: Target,
    title: "Audience-First Recruitment",
    desc: "We screen every respondent against project-specific demographic or professional parameters before survey entry.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Quality Checks",
    desc: "Multi-point validation, attention filters, and duplicate prevention to ensure complete data integrity.",
  },
  {
    icon: Globe,
    title: "Pan-India & Global Reach",
    desc: "In-depth respondent availability across India Tier 1-3 cities, plus verified reach across 50+ international markets.",
  },
  {
    icon: Users,
    title: "Agency-Centric Partnership",
    desc: "Fast turnaround feasibility, responsive project managers, and dedicated sample delivery designed for research firms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        overline="About Inexra"
        headline="Connecting research teams with the respondents they need."
        subtext="Inexra Research & Analytics is an agile survey sample supply and respondent recruitment partner, helping market research agencies, consultancies, and insight teams reach targeted consumer and professional audiences."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Main Editorial Story Section — Inspired by Epitome "Driven by Insight" */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="container-inexra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Big Headline & Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Our Purpose
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-[1.15]">
                Driven by Quality. Defined by Feasibility.
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Inexra Research &amp; Analytics was founded on a simple operational philosophy: research agencies need sample partners who are transparent about capabilities, obsessive about respondent quality, and structured for fast, reliable fielding.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Rather than treating respondent supply as a volume game, we focus on verified consumer demographics and specialized B2B profiles. Every study is evaluated on a true feasibility basis — incidence rate, survey length, and targeting specificity — before fielding begins.
              </p>

              {/* Quote highlight bar */}
              <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-[#0D9488] shadow-xs space-y-3">
                <p className="text-base sm:text-lg font-medium text-[#0B1C30] italic leading-relaxed">
                  &ldquo;Honest feasibility upfront protects research budgets, maintains field schedules, and delivers data that insight leaders can present with complete confidence.&rdquo;
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block">
                  — The Inexra Operating Standard
                </span>
              </div>
            </div>

            {/* Right Column: Key Metrics & At-a-Glance */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm space-y-8">
                <h3 className="text-xl font-bold text-[#0B1C30]">
                  Inexra at a Glance
                </h3>

                <div className="grid grid-cols-2 gap-5 pt-2">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-3xl lg:text-4xl font-extrabold text-[#1A365D] block">
                      Up to 1,000
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                      Completes per Project
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-3xl lg:text-4xl font-extrabold text-[#0D9488] block">
                      50+
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                      Global Markets
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-3xl lg:text-4xl font-extrabold text-[#1A365D] block">
                      &lt; 45m
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                      Feasibility Desk
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-3xl lg:text-4xl font-extrabold text-[#0D9488] block">
                      100%
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                      Pre-screened
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Have an upcoming sample requirement? Get a quick feasibility assessment and pricing estimate.
                  </p>
                  <Link
                    href="/feasibility"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-colors shadow-sm"
                  >
                    <span>Request Feasibility</span>
                    <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Strip Ticker Banner matching Epitome screenshot */}
      <MovingStrip />

      {/* Core Pillars Section — Spacious 4 Cards */}
      <section className="py-28 lg:py-40 bg-slate-50/70 border-t border-slate-200/80">
        <div className="container-inexra">
          <div className="max-w-2xl mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Core Principles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight mb-4">
              Built for Research Integrity
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              How our operational workflow ensures reliable data and dependable project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 lg:p-9 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] mb-6">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1C30] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
