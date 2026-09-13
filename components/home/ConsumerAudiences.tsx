import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const dimensions = [
  { label: "Age Demographics", example: "18–24, 25–34, 35–49, 50–65+" },
  { label: "Gender & Identity", example: "Male, Female, Non-binary, Custom splits" },
  { label: "Geographic Zones", example: "Pan-India Tier 1/2/3, Metro, Urban vs Rural" },
  { label: "Household Income", example: "Custom SEC classification, Income brackets" },
  { label: "Employment & Career", example: "Full-time, Self-employed, Student, Homemaker" },
  { label: "Consumer Lifestyle", example: "Fitness habits, dietary preferences, tech adopters" },
  { label: "Brand & Usage Habits", example: "Frequent buyers, category users, lapsed users" },
  { label: "Custom Screener", example: "Bespoke quotas aligned with your survey screener" },
];

export function ConsumerAudiences() {
  return (
    <section className="py-24 lg:py-36 bg-white border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Narrative & Description */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              overline="Consumer Sample"
              headline="Targeted consumers. Representative research."
              subtext="Consumer insights require precision. We recruit and screen participants matching your exact demographic and behavioral specs — ensuring your data reflects your true target market."
            />

            <div className="p-8 rounded-3xl bg-teal-50/60 border border-teal-100/80 mt-8 shadow-xs">
              <h4 className="text-sm font-bold text-[#0D9488] mb-2">
                Feasibility-Backed Recruitment
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All consumer quotas are evaluated against target incidence rate (IR), length of interview (LOI), and market availability before fielding begins.
              </p>
            </div>
          </div>

          {/* Right: Targeting Dimensions Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8 block">
              Core Targeting Dimensions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dimensions.map((dim) => (
                <div
                  key={dim.label}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-teal-300 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#0D9488] group-hover:scale-125 transition-transform" />
                    <h4 className="text-sm font-bold text-[#0B1C30]">
                      {dim.label}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-4.5">
                    {dim.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
