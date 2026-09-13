import { SectionHeader } from "@/components/shared/SectionHeader";
import { Globe, MapPin } from "lucide-react";

const markets = [
  "India (National)", "United States", "United Kingdom", "Germany", "France",
  "Australia", "Canada", "UAE", "Singapore", "Saudi Arabia",
  "Japan", "South Korea", "Brazil", "Mexico", "Indonesia",
  "South Africa", "Netherlands", "Sweden", "Italy", "Spain",
];

export function GlobalReach() {
  return (
    <section className="py-24 lg:py-36 bg-slate-50/70 border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeader
              overline="Global Sample Reach"
              headline="One brief. Cross-market execution."
              subtext="Inexra coordinates multi-country survey fielding across India and 50+ key global markets — managing market-specific incidence rates and feasibility under a unified project framework."
            />

            <div className="space-y-4 pt-2">
              {[
                {
                  title: "Comprehensive Pan-India Coverage",
                  desc: "Urban, semi-urban, and rural sampling across Tier 1, 2, and 3 cities with multilingual support.",
                },
                {
                  title: "Tier-1 International Reach",
                  desc: "Validated respondent availability across North America, Western Europe, APAC, and the Middle East.",
                },
                {
                  title: "Realistic Market-by-Market Feasibility",
                  desc: "Every geography is individually assessed for incidence rate and LOI feasibility prior to fielding.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1C30] mb-1">
                      {point.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Market Tags Card */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A365D]/5 flex items-center justify-center text-[#1A365D]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1C30]">
                      Key Regional Footprint
                    </h3>
                    <p className="text-xs text-slate-400">
                      Representative coverage zones
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  50+ Markets
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {markets.map((market) => (
                  <span
                    key={market}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-default ${
                      market.includes("India")
                        ? "bg-[#1A365D] text-white shadow-xs"
                        : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60"
                    }`}
                  >
                    {market}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-teal-50 text-[#0D9488] border border-teal-100">
                  + Custom Markets on Request
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  * Multi-country project delivery is confirmed post-feasibility check based on target demographic and screening complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
