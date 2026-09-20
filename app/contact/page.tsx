import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, Users, Package, Clock, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Inexra Research & Analytics",
  description:
    "Get in touch with Inexra Research & Analytics for sample requirements, partnership enquiries, pilot projects, or general questions.",
};

const enquiryTypes = [
  {
    icon: Package,
    label: "Sample Requirement",
    desc: "Share an active study or RFP to receive fast feasibility, quotas, and CPI.",
    href: "/feasibility",
  },
  {
    icon: Handshake,
    label: "Vendor / Panel Partner",
    desc: "Register as a sample vendor or panel supply partner. We allocate B2B, Consumer, and HCP projects to vetted partners.",
    href: "/vendors",
  },
  {
    icon: ArrowRight,
    label: "Initiate a Pilot",
    desc: "Run a small pilot project to evaluate our sample quality and turnaround speed.",
    href: "mailto:info@inexraresearch.com?subject=Pilot Project Enquiry",
  },
  {
    icon: MessageSquare,
    label: "General Inquiry",
    desc: "General questions about Inexra, our panels, coverage, or methodology.",
    href: "mailto:info@inexraresearch.com?subject=General Enquiry",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="Get In Touch"
        headline="Talk to our research operations team."
        subtext="Reach out with your survey requirements, partnership inquiries, or RFP briefs. Our team responds promptly during standard business hours."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-24 lg:py-36 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container-inexra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left: Enquiry Types (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Select Your Inquiry Type
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1C30] tracking-tight">
                  How can we assist your research?
                </h2>
              </div>

              <div className="space-y-4">
                {enquiryTypes.map((type) => (
                  <Link
                    key={type.label}
                    href={type.href}
                    className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0 group-hover:scale-110 transition-transform">
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base text-[#0B1C30] mb-1 group-hover:text-[#1A365D] transition-colors">
                        {type.label}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#0D9488] transition-all group-hover:translate-x-1 shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Direct Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1A365D] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:info@inexraresearch.com"
                      className="text-base font-bold text-[#1A365D] hover:text-[#0D9488] transition-colors"
                    >
                      info@inexraresearch.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-[#0D9488]" />
                  <span>Feasibility inquiries answered within 45 mins</span>
                </div>
              </div>

              {/* Fast Path Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1C30] to-[#1A365D] text-white shadow-xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4FD1C5] block">
                  Fastest Turnaround
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Have an RFP ready?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Submit your study parameters directly into our feasibility form for instantaneous prioritization and pricing calculation.
                </p>
                <div className="pt-2">
                  <Link
                    href="/feasibility"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#4FD1C5] text-[#0B1C30] hover:bg-[#38B2AC] transition-all shadow-md"
                  >
                    <span>Open Feasibility Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
