import { SectionHeader } from "@/components/shared/SectionHeader";
import { UserCheck, Target, Copy, Eye, BarChart2 } from "lucide-react";

const stages = [
  {
    number: "01",
    icon: UserCheck,
    title: "Participant Pre-Screening",
    desc: "Every prospective respondent is authenticated against stated study eligibility criteria before survey entry.",
  },
  {
    icon: Target,
    number: "02",
    title: "Targeting Verification",
    desc: "Demographic and firmographic profiles are cross-checked against recruitment specs to ensure precision.",
  },
  {
    number: "03",
    icon: Copy,
    title: "Duplicate Prevention",
    desc: "Digital fingerprinting and IP validation detect and remove duplicate or repeat entries across fielding.",
  },
  {
    number: "04",
    icon: Eye,
    title: "In-Survey Attention Traps",
    desc: "Integrated red-herring checks and straight-lining monitors filter out inattentive or bot responses.",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Real-Time Quality Audits",
    desc: "Continuous monitoring of completion speed (LOI outliers) and response consistency until quota completion.",
  },
];

export function QualityValidation() {
  return (
    <section className="py-24 lg:py-36 bg-slate-50/70 border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="max-w-3xl mb-20">
          <SectionHeader
            overline="Quality & Validation"
            headline="Data integrity begins with verified respondents."
            subtext="We apply a multi-tier quality framework across every fielding cycle — protecting research integrity from initial outreach to final deliverable."
          />
        </div>

        {/* 5 Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488]">
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0D9488] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                    {stage.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B1C30] mb-3 leading-snug">
                  {stage.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-medium italic">
            * Specific validation parameters and trap question implementations are customized per client methodology and survey platform.
          </p>
        </div>
      </div>
    </section>
  );
}
