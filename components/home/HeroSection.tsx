"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedDataNetwork } from "@/components/shared/AnimatedDataNetwork";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/60 via-white to-white border-b border-slate-200/60 overflow-hidden h-[calc(100vh-5rem)] min-h-[520px] flex flex-col justify-between pt-3 pb-3 sm:pt-4 sm:pb-4">
      {/* Subtle interactive canvas */}
      <div className="opacity-50">
        <AnimatedDataNetwork />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-inexra relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Centered Main Content Area */}
        <div className="max-w-4xl mx-auto text-center py-2 sm:py-4 my-auto flex flex-col items-center">
          {/* Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#0B1C30] tracking-tight leading-[1.12] mb-4 sm:mb-5">
            Reach the Right{" "}
            <span className="text-[#0D9488] underline decoration-teal-300/60 underline-offset-8">
              Respondents.
            </span>
            <br />
            Build Better Research.
          </h1>

          {/* Spacious Lead Copy */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-6 font-normal">
            Inexra Research &amp; Analytics delivers targeted consumer and B2B survey sample across India and 50+ international markets — connecting market research agencies with verified respondents.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/feasibility"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md hover:shadow-lg active:scale-98"
            >
              <span>Request Feasibility</span>
              <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
            </Link>
            <Link
              href="/capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white border-1.5 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all active:scale-98"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>

        {/* Stats Bar — Clean, Docked at Bottom of 100% Screen Viewport */}
        <div className="w-full pt-4 pb-3 sm:pb-4 border-t border-slate-200/80 mt-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: "Up to 1,000", label: "Completes per project", isLong: true },
              { value: "50+", label: "Global markets" },
              { value: "Consumer & B2B", label: "Audience coverage", isLong: true },
              { value: "< 45m", label: "Feasibility response" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-0.5">
                <span
                  className={`${
                    stat.isLong
                      ? "text-lg sm:text-xl lg:text-2xl"
                      : "text-xl sm:text-2xl lg:text-3xl"
                  } font-extrabold text-[#1A365D] block font-mono whitespace-nowrap`}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
