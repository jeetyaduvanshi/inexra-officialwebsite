import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";
import { ArrowRight, FileText, HelpCircle, BookOpen, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & FAQs | Inexra Research & Analytics",
  description:
    "Research resources from Inexra — capability overview, FAQs, sample methodology, and how to partner with us for consumer and B2B survey sample.",
};

const faqs = [
  {
    q: "What type of research does Inexra support?",
    a: "Inexra primarily supports survey-based market research — consumer and B2B — across online and digital methodologies. We supply targeted, verified respondents and manage sample delivery directly to your survey link or platform.",
  },
  {
    q: "How many completes can Inexra deliver per project?",
    a: "We support projects requiring up to 1,000 verified completes per study across consumer and professional audiences. For higher volumes or longitudinal waves, please reach out so our team can evaluate tiered feasibility and delivery windows.",
  },
  {
    q: "What markets does Inexra cover?",
    a: "We provide comprehensive pan-India coverage across urban and rural zones, Tier 1, 2, and 3 cities, and multilingual respondent pools. We also support 20+ international markets subject to target-audience availability. Contact us for market-specific feasibility.",
  },
  {
    q: "How do you handle B2B respondents?",
    a: "B2B respondents undergo role-level, seniority, and firmographic screening before entering your survey. We verify professional background to ensure that participants genuinely match your requested profile (e.g. IT leaders, HR directors, SME founders).",
  },
  {
    q: "What is your CPI (cost per interview)?",
    a: "CPI is determined on a project-by-project basis depending on target audience difficulty, incidence rate (IR), geography, and length of interview (LOI). We offer competitive, transparent, and flexible pricing without rigid rate cards.",
  },
  {
    q: "Can we run a pilot project before committing?",
    a: "Yes — we actively welcome pilot projects. Running a small pilot allows your research team to evaluate our sample quality, recruitment speed, and response accuracy before scaling a broader engagement.",
  },
  {
    q: "How fast can you respond to a feasibility request?",
    a: "Our feasibility desk typically responds within 45 minutes to a few hours during standard business hours. For urgent overnight bids, mark your request as urgent and our team will prioritize it.",
  },
  {
    q: "What happens if completes do not meet quality standards?",
    a: "Quality-based replacements are built into our agreements. If any respondent fails agreed attention checks or displays straight-lining, we replace the complete at no additional cost.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        overline="Resources & Guides"
        headline="Everything you need to work with Inexra."
        subtext="Clear capability overviews, sample methodology details, and direct answers to the most common questions from research agencies and sample buyers."
        breadcrumbs={[{ label: "Resources" }]}
      />

      {/* Main Section */}
      <section className="py-24 lg:py-36 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container-inexra">
          {/* Top Resource Cards — Spacious, Clean, Modern */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-28">
            {[
              {
                icon: FileText,
                label: "Capability Overview",
                desc: "A comprehensive breakdown of Inexra's consumer, B2B, and multi-country respondent recruitment capabilities.",
                href: "/capabilities",
                cta: "View Capabilities",
              },
              {
                icon: BookOpen,
                label: "Sample Methodology",
                desc: "Discover how we recruit, screen, and validate survey respondents to protect data integrity across studies.",
                href: "/quality",
                cta: "View Quality Process",
              },
              {
                icon: HelpCircle,
                label: "FAQs & Guidelines",
                desc: "Quick answers to common questions about feasibility turnaround, minimums, CPI calculation, and pilot studies.",
                href: "#faqs",
                cta: "Read FAQs Below",
              },
            ].map((resource) => (
              <div
                key={resource.label}
                className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] mb-8 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1C30] mb-3">
                    {resource.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {resource.desc}
                  </p>
                </div>
                <Link
                  href={resource.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1A365D] group-hover:text-[#0D9488] transition-colors"
                >
                  <span>{resource.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* FAQs Section with clean breathing room */}
          <div id="faqs" className="pt-16 border-t border-slate-200/80">
            <div className="max-w-3xl mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Knowledge Base
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Everything you need to know about partnering with Inexra for your survey sample requirements.
              </p>
            </div>

            {/* 2-Column Spacious FAQ Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all duration-200 flex flex-col justify-start"
                >
                  <h3 className="text-lg font-bold text-[#0B1C30] mb-3 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Card — Executive, Spacious, High-Contrast */}
          <div className="mt-32 p-10 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0B1C30] to-[#1A365D] text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                <MessageSquare className="w-3.5 h-3.5 text-[#4FD1C5]" />
                <span className="text-xs font-semibold tracking-wider text-[#4FD1C5] uppercase">
                  Have a specific question?
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Ready to assess feasibility for your next study?
              </h3>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Share your target audience, sample size, and market specs with our team. We respond with realistic options, estimated timelines, and transparent CPI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/feasibility"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#4FD1C5] text-[#0B1C30] hover:bg-[#38B2AC] transition-all shadow-md active:scale-98"
                >
                  <span>Request Feasibility</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-98"
                >
                  Contact Team
                </Link>
              </div>
            </div>

            {/* Subtle background glow */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#4FD1C5]/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}
