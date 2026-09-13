"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedDataNetwork } from "@/components/shared/AnimatedDataNetwork";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/60 via-white to-white border-b border-slate-200/60 overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
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
        {/* Main Content Area */}
        <div className="max-w-4xl py-4 sm:py-6 my-auto">
          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1C30] tracking-tight leading-[1.08] mb-6 sm:mb-8">
            Reach the Right{" "}
            <span className="text-[#0D9488] underline decoration-teal-300/60 underline-offset-8">
              Respondents.
            </span>
            <br />
            Build Better Research.
          </h1>

          {/* Spacious Lead Copy */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
            Inexra Research &amp; Analytics delivers targeted consumer and B2B survey sample across India and 20+ international markets — connecting market research agencies with verified respondents.
          </p>

          {/* Pill CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/feasibility"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md hover:shadow-lg active:scale-98"
            >
              <span>Request Feasibility</span>
              <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all shadow-2xs active:scale-98"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>

        {/* Stats Bar — Clean, Docked at Bottom of Full-Screen Hero */}
        <div className="w-full pt-6 pb-4 sm:pb-6 border-t border-slate-200/80 mt-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "1,000+", label: "Completes per study" },
              { value: "20+", label: "Global markets" },
              { value: "Consumer & B2B", label: "Audience coverage" },
              { value: "< 45m", label: "Feasibility response" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A365D] block font-mono">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
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
