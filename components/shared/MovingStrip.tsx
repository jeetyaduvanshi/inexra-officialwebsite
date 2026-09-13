"use client";

import React from "react";

interface MovingStripProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
  variant?: "light" | "dark" | "teal";
}

export function MovingStrip({
  className = "",
  variant = "light",
}: MovingStripProps) {
  const phrases = [
    { title: "Inexra Research", symbol: "&", sub: "Analytics." },
    { title: "Survey Sample", symbol: "&", sub: "Fieldwork." },
    { title: "Targeted B2B", symbol: "&", sub: "Consumer Supply." },
    { title: "Pan-India", symbol: "&", sub: "50+ Global Markets." },
    { title: "Data Integrity", symbol: "&", sub: "Quality Validation." },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden border-y ${
        variant === "dark"
          ? "bg-[#0B1C30] border-white/10 text-white"
          : "bg-white border-slate-200/90 text-[#0B1C30]"
      } py-7 sm:py-8 lg:py-10 select-none ${className}`}
      aria-label="Inexra Research & Analytics ticker"
    >
      {/* Left/Right soft gradient edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Marquee Track */}
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {/* Set 1 */}
        <div className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 px-4">
          {phrases.map((p, idx) => (
            <div
              key={`p1-${idx}`}
              className="flex items-center gap-3.5 sm:gap-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap"
            >
              <span className="text-[#0B1C30]">{p.title}</span>
              <span className="text-[#0D9488] font-black">{p.symbol}</span>
              <span className="text-[#0B1C30]">{p.sub}</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Seamless loop duplicate) */}
        <div className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 px-4" aria-hidden="true">
          {phrases.map((p, idx) => (
            <div
              key={`p2-${idx}`}
              className="flex items-center gap-3.5 sm:gap-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap"
            >
              <span className="text-[#0B1C30]">{p.title}</span>
              <span className="text-[#0D9488] font-black">{p.symbol}</span>
              <span className="text-[#0B1C30]">{p.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


