import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Users,
  Globe,
  BarChart3,
  Target,
  Briefcase,
  ShieldCheck,
  DollarSign,
  FlaskConical,
} from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "Consumer & B2B Sample",
    desc: "Verified respondents for general public consumer research and specialized B2B professional panels across sectors.",
  },
  {
    icon: Globe,
    title: "Multi-Country Reach",
    desc: "Coordinated sample fielding across India and 20+ global markets, evaluated on a market-by-market feasibility basis.",
  },
  {
    icon: BarChart3,
    title: "Up to 1,000 Completes",
    desc: "Capacity to deliver up to 1,000 verified completes per project, ensuring statistical significance for strategic studies.",
  },
  {
    icon: Target,
    title: "Demographic Precision",
    desc: "Strict pre-screening by age, gender, geographic tier, income band, occupation, and bespoke behavioral screeners.",
  },
  {
    icon: Briefcase,
    title: "Professional Decision Makers",
    desc: "Direct access to enterprise executives, IT leadership, HR directors, procurement leads, and business owners.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Data Quality",
    desc: "Pre-survey verification, duplicate detection, speeder traps, and straight-lining filters to deliver clean survey results.",
  },
  {
    icon: DollarSign,
    title: "Agile & Transparent CPI",
    desc: "Project-based cost per interview determined by real incidence rate, survey length (LOI), and market availability.",
  },
  {
    icon: FlaskConical,
    title: "Pilot Projects Welcome",
    desc: "Run a small sample wave or pilot study to test our data quality, turnaround speed, and team responsiveness before scaling.",
  },
];

export function CapabilityCards() {
  return (
    <section className="py-24 lg:py-36 bg-white border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="max-w-3xl mb-20">
          <SectionHeader
            overline="Core Capabilities"
            headline="Full-spectrum sample supply. Tailored to your methodology."
            subtext="Eight specialized capabilities that cover the complete sample lifecycle — from feasibility assessment to validated survey delivery."
          />
        </div>

        {/* 8 Cards in Spacious Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-8 lg:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#0B1C30] mb-3 leading-snug">
                  {cap.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
