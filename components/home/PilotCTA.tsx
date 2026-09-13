import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

export function PilotCTA() {
  return (
    <section className="py-24 lg:py-36 bg-slate-50/70 border-t border-slate-200/80">
      <div className="container-inexra">
        <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0B1C30] via-[#1A365D] to-[#0B1C30] text-white shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Decorative Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-6 mx-auto">
            <FlaskConical className="w-7 h-7 text-[#4FD1C5]" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4FD1C5] block">
              Evaluate Without Risk
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Start with a Pilot Study.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto pb-4">
              Evaluate Inexra&apos;s sample quality, recruitment precision, and turnaround speed on a small, low-risk test wave before scaling your full study.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact?type=pilot"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#4FD1C5] text-[#0B1C30] hover:bg-[#38B2AC] transition-all shadow-md active:scale-98"
              >
                <span>Initiate a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/feasibility"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-98"
              >
                Check Feasibility First
              </Link>
            </div>
          </div>

          {/* Background subtle radial glow */}
          <div
            className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#4FD1C5]/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
