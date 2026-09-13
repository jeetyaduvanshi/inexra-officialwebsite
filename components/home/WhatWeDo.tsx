import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Study Brief & Targeting",
    desc: "Your research team outlines the target demographic or professional criteria, required volume, and fielding timeline.",
  },
  {
    number: "02",
    title: "Audience Segmentation",
    desc: "We screen and map qualified candidate pools matching your exact quotas, incidence rate, and geographic markets.",
  },
  {
    number: "03",
    title: "Targeted Outreach",
    desc: "Direct engagement and pre-qualification of respondents through tailored invitation workflows.",
  },
  {
    number: "04",
    title: "Multi-Point Validation",
    desc: "Participants pass digital fingerprinting, attention trap questions, and consistency verification prior to survey entry.",
  },
  {
    number: "05",
    title: "Complete Delivery",
    desc: "Verified completes routed to your survey platform with live quota tracking and quality replacement support.",
  },
];

export function WhatWeDo() {
  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="container-inexra">
        {/* Top Explainer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          <div className="lg:col-span-6">
            <SectionHeader
              overline="Operational Workflow"
              headline="High-quality research starts with the right sample partner."
              subtext="Market research agencies and brand insight teams rely on Inexra for precision targeting, responsive recruitment, and verified respondent delivery — so you can focus entirely on uncovering strategic insights."
            />
          </div>

          {/* 3 Key Value Cards */}
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                label: "Dedicated to Research Agencies",
                text: "Purpose-built to support agency deadlines with rapid feasibility turnaround and flexible fielding capacity.",
              },
              {
                label: "Consumer & B2B In Harmony",
                text: "Single-source supply for both general public audiences and high-level enterprise decision-makers.",
              },
              {
                label: "Pan-India & Global Coverage",
                text: "Deep multi-tier regional presence across India combined with verified international market reach.",
              },
            ].map((point) => (
              <div
                key={point.label}
                className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-1.5 h-12 rounded-full bg-[#0D9488] shrink-0 mt-0.5 group-hover:scale-y-110 transition-transform" />
                <div>
                  <h4 className="text-base font-bold text-[#0B1C30] mb-1">
                    {point.label}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Process Flow — Clean & Spacious */}
        <div>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                End-to-End Delivery
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C30] tracking-tight">
              Our 5-Stage Fielding Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-mono font-bold text-base text-[#1A365D] mb-6 shadow-2xs">
                    {step.number}
                  </div>

                  <h4 className="text-base font-bold text-[#0B1C30] mb-2.5 leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
