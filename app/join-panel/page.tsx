import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CheckCircle2, Mail, Gift, Lock, Clock, MessageSquare } from "lucide-react";
import { RespondentForm } from "@/components/respondent/RespondentForm";

export const metadata: Metadata = {
  title: "Join Our Survey Panel | Inexra Research & Analytics",
  description:
    "Register as a survey respondent with Inexra Research & Analytics. Share your opinions in paid online surveys, interviews, and focus groups. Free to join, privacy-first.",
};

const panelPerks = [
  {
    icon: Gift,
    title: "Earn Rewards",
    desc: "Get compensated for every qualifying survey, interview, or focus group you complete.",
  },
  {
    icon: MessageSquare,
    title: "Shape Real Decisions",
    desc: "Your feedback directly influences products, services, and policies from leading brands.",
  },
  {
    icon: Clock,
    title: "Participate on Your Terms",
    desc: "Choose which invitations to accept. Most online surveys take 10–20 minutes.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "Your personal data is kept confidential, never sold, and only used to match you to studies.",
  },
];

export default function JoinPanelPage() {
  return (
    <>
      <PageHero
        overline="Respondent Panel"
        headline="Your Opinion Matters. Get Rewarded for It."
        subtext="Join the Inexra survey panel and get invited to paid research studies that match your profile — from quick online surveys to in-depth interviews and product tests."
        breadcrumbs={[{ label: "Join Our Panel" }]}
      />

      <section className="pt-12 pb-24 lg:pt-16 lg:pb-36 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container-inexra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left: Respondent Form (8 cols) */}
            <div className="lg:col-span-8">
              <RespondentForm />
            </div>

            {/* Right: Why Join + Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block mb-2">
                    Why Join Inexra?
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1C30] leading-snug">
                    Share your views. Make an impact.
                  </h3>
                </div>

                <div className="space-y-5">
                  {panelPerks.map((perk) => (
                    <div key={perk.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0 mt-0.5">
                        <perk.icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0B1C30]">{perk.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {[
                    "100% free to join",
                    "Open to adults 18+",
                    "Consumer & professional studies",
                    "Unsubscribe anytime",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Questions?
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To update your profile or ask about panel membership:
                </p>
                <a
                  href="mailto:info@inexraresearch.com?subject=Survey Panel Inquiry"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1A365D] hover:text-[#0D9488] transition-colors pt-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@inexraresearch.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
