import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CheckCircle2, Clock, Mail } from "lucide-react";
import { FeasibilityForm } from "@/components/feasibility/FeasibilityForm";

export const metadata: Metadata = {
  title: "Request Feasibility | Inexra Research & Analytics",
  description:
    "Share your survey research requirement and we will respond with feasibility, sample options, and CPI — typically within 45 minutes.",
};

export default function FeasibilityPage() {
  return (
    <>
      <PageHero
        overline="Feasibility Desk"
        headline="Share your requirement. Get fast, honest feasibility."
        subtext="Fill in your project parameters below and our sample team will review targeting feasibility, estimated timeline, and competitive CPI for your study."
        breadcrumbs={[{ label: "Request Feasibility" }]}
      />

      <section className="py-24 lg:py-36 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container-inexra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left: Interactive Form (8 cols) */}
            <div className="lg:col-span-8">
              <FeasibilityForm />
            </div>

            {/* Right: Guarantee & Speed Badge (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1C30]">
                  Rapid Turnaround
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our feasibility desk reviews project specs immediately. You will receive confirmed sample availability, projected timeline, and clear CPI options promptly.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {[
                    "Same-day feasibility response",
                    "No minimum spend required",
                    "Pilot projects welcomed",
                    "Transparent project-level CPI",
                  ].map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct email card */}
              <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Prefer Direct Email?
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send your project brief or RFP directly to our research operations desk:
                </p>
                <a
                  href="mailto:info@inexraresearch.com"
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
