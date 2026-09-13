import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Building2,
  Crown,
  UserCog,
  Monitor,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Store,
  Cog,
} from "lucide-react";

const b2bAudiences = [
  {
    icon: Building2,
    title: "Founders & Business Owners",
    desc: "SME owners, co-founders, and entrepreneurs across industries reachable for strategy and product research.",
  },
  {
    icon: Crown,
    title: "CEOs / CXOs / Leadership",
    desc: "Senior executive decision-makers for executive leadership, governance, and strategy research studies.",
  },
  {
    icon: UserCog,
    title: "HR & People Leaders",
    desc: "HR managers, talent heads, and people operations leads for workforce, benefits, and workplace studies.",
  },
  {
    icon: Monitor,
    title: "IT & Tech Decision Makers",
    desc: "Technology buyers, CIOs, CTOs, and IT directors for enterprise software, cloud, and security research.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Supply Chain",
    desc: "Purchasing directors and vendor management leads for enterprise procurement and supplier studies.",
  },
  {
    icon: Landmark,
    title: "Finance & Investment",
    desc: "CFOs, treasurers, and investment professionals for financial services, fintech, and banking research.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Professionals",
    desc: "Physicians, specialists, hospital administrators, and clinic owners for medical and health tech research.",
  },
  {
    icon: Store,
    title: "Retailers & Distributors",
    desc: "Retail chain buyers, store managers, and logistics partners for FMCG, retail, and trade studies.",
  },
  {
    icon: Cog,
    title: "Engineers & Operations",
    desc: "Sector-specific professionals across manufacturing, aerospace, energy, and commercial construction.",
  },
];

export function B2BAudiences() {
  return (
    <section className="py-24 lg:py-36 bg-slate-50/70 border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <SectionHeader
              overline="B2B Audience Reach"
              headline="Verified professional respondents. Zero guesswork."
              subtext="We support rigorous B2B studies by pre-screening respondents across verified job functions, company sizes, and industry sectors."
            />
          </div>

          {/* Context Highlight Box */}
          <div className="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="text-lg font-bold text-[#0B1C30] mb-3">
              Role-Level &amp; Firmographic Verification
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              B2B respondents are difficult to reach and expensive to replace. Inexra applies strict screening filters — including seniority, department, revenue band, and company headcount — to ensure the executives who enter your study genuinely qualify.
            </p>
            <p className="text-xs text-slate-400 font-medium">
              * Feasibility for niche professional titles is assessed on project requirements and market geography.
            </p>
          </div>
        </div>

        {/* 9 Audience Cards in Spacious 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {b2bAudiences.map((audience) => (
            <div
              key={audience.title}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  <audience.icon className="w-6 h-6 text-[#1A365D]" />
                </div>
                <h4 className="font-bold text-base text-[#0B1C30] mb-2.5">
                  {audience.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
