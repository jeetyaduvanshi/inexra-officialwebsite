"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

/**
 * FOUNDERS & LEADERSHIP DATA
 * ----------------------------------------------------
 * You can easily update your names, roles, bios, photos,
 * LinkedIn profile links, and email addresses here.
 * Photos can be placed in /public/team/ (e.g. founder-1.jpg).
 */
export interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
  linkedin: string;
  email: string;
  focusAreas: string[];
}

export const foundersData: Founder[] = [
  {
    id: "founder-1",
    name: "Founder Name 1",
    role: "Founder & Chief Executive Officer",
    image: "/team/founder-1.jpg",
    bio: "Spearheading Inexra's mission to redefine sample quality and global fieldwork reliability. Leading agency partnerships and strategic market expansion across India and international territories.",
    quote: "Great research isn't just collected data. It resonates, empowers decisions, and drives real-world business impact.",
    linkedin: "https://www.linkedin.com/",
    email: "founder1@inexraresearch.com",
    focusAreas: ["Global Strategy", "Sample Feasibility", "Agency Alliances"],
  },
  {
    id: "founder-2",
    name: "Founder Name 2",
    role: "Co-Founder & Head of Operations",
    image: "/team/founder-2.jpg",
    bio: "Directing operational fieldwork delivery, multi-market feasibility analysis, and live quota management. Committed to rapid response times and dependable completion rates.",
    quote: "Transparent feasibility upfront protects client timelines, safeguards research budgets, and builds lasting trust.",
    linkedin: "https://www.linkedin.com/",
    email: "founder2@inexraresearch.com",
    focusAreas: ["Fieldwork Operations", "B2B Recruitment", "Quota Delivery"],
  },
  {
    id: "founder-3",
    name: "Founder Name 3",
    role: "Co-Founder & Head of Quality & Technology",
    image: "/team/founder-3.jpg",
    bio: "Architecting Inexra's respondent validation systems, fraud detection mechanisms, and digital fingerprinting protocols to ensure zero-compromise data integrity.",
    quote: "In today's research landscape, multi-tier participant verification and digital fraud prevention are non-negotiable.",
    linkedin: "https://www.linkedin.com/",
    email: "founder3@inexraresearch.com",
    focusAreas: ["Data Integrity", "Digital Fingerprinting", "Fraud Prevention"],
  },
];

export function FoundersSection() {
  const [activeFounder, setActiveFounder] = useState<Founder>(foundersData[0]);

  return (
    <section id="founders" className="py-24 lg:py-32 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="container-inexra">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] font-mono">
              Leadership &amp; Founders
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C30] tracking-tight leading-[1.12] mb-4">
            The Team Driving Inexra&apos;s Research Standard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Founded by market research and fieldwork professionals committed to delivering verified, high-integrity consumer and B2B sample with complete operational transparency.
          </p>
        </div>

        {/* 3 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {foundersData.map((founder) => (
            <div
              key={founder.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-9 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Role Tag */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-teal-500/20 mb-5 group-hover:ring-teal-500/50 transition-all">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1C30] tracking-tight mb-1">
                    {founder.name}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-[#0D9488] font-mono">
                    {founder.role}
                  </span>
                </div>

                {/* Bio Narrative */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Quote Box inspired by Epitome style */}
                <div className="p-4 rounded-xl bg-white border-l-3 border-[#0D9488] shadow-2xs mb-6">
                  <p className="text-xs sm:text-[13px] text-slate-700 italic leading-relaxed font-serif">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {founder.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center text-[11px] font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contact Links: LinkedIn & Email */}
              <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5 transition-all shadow-2xs"
                  aria-label={`LinkedIn profile of ${founder.name}`}
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={`mailto:${founder.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-semibold bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-xs"
                  aria-label={`Email ${founder.name}`}
                >
                  <Mail className="w-3.5 h-3.5 text-[#4FD1C5]" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-50 via-teal-50/20 to-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#0B1C30]">
              Direct Founder Oversight on Every Client Wave
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              When you partner with Inexra, your feasibility and sampling strategy are reviewed directly by our founding team.
            </p>
          </div>
          <a
            href="mailto:founders@inexraresearch.com"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#4FD1C5]" />
            <span>Speak with the Founders</span>
          </a>
        </div>
      </div>
    </section>
  );
}
