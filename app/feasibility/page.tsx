import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Mail } from "lucide-react";

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
            {/* Left: Form Card (8 cols) */}
            <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-lg shadow-slate-900/5">
              <div className="border-b border-slate-100 pb-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C30] tracking-tight mb-2">
                  Project Specifications
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Provide as much detail as possible to help us assess incidence rate and delivery speed accurately.
                </p>
              </div>

              <form className="space-y-8" action="#" method="post">
                {/* Section 1: Contact Details */}
                <div className="space-y-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    1. Contact Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Full Name" id="name" type="text" placeholder="Your full name" required />
                    <FormField label="Company / Research Agency" id="company" type="text" placeholder="e.g. Kantar, Ipsos, etc." required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Work Email" id="email" type="email" placeholder="name@company.com" required />
                    <FormField label="Target Country / Geography" id="country" type="text" placeholder="e.g. India (Tier 1/2), US, UK" required />
                  </div>
                </div>

                {/* Section 2: Audience & Sample */}
                <div className="space-y-5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    2. Audience & Screening
                  </span>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="sample-type">
                      Sample Category <span className="text-teal-600">*</span>
                    </label>
                    <select
                      id="sample-type"
                      name="sample-type"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium"
                    >
                      <option value="">Select sample category</option>
                      <option value="consumer">Consumer General / Niche</option>
                      <option value="b2b">B2B / Professional Decision-Maker</option>
                      <option value="healthcare">Healthcare Professional (HCP)</option>
                      <option value="both">Mixed / Both Consumer & B2B</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="audience">
                      Target Profile & Screening Criteria <span className="text-teal-600">*</span>
                    </label>
                    <textarea
                      id="audience"
                      name="audience"
                      required
                      rows={4}
                      placeholder="Describe target criteria (e.g. IT Decision Makers in 250+ employee firms, or Smartphone users aged 18-35 in Tier 1 cities)"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm leading-relaxed resize-none"
                    />
                  </div>
                </div>

                {/* Section 3: Study Metrics */}
                <div className="space-y-5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    3. Study Parameters
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FormField label="Completes (n=)" id="completes" type="number" placeholder="e.g. 300" required />
                    <FormField label="Length of Survey (LOI mins)" id="loi" type="number" placeholder="e.g. 15" />
                    <FormField label="Estimated Incidence (IR %)" id="ir" type="number" placeholder="e.g. 25%" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="methodology">
                        Methodology
                      </label>
                      <select
                        id="methodology"
                        name="methodology"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium"
                      >
                        <option value="online">Online Survey (CAWI)</option>
                        <option value="mobile">Mobile / App Survey</option>
                        <option value="cati">CATI / Telephone</option>
                        <option value="other">Other / Multi-mode</option>
                      </select>
                    </div>
                    <FormField label="Expected Timeline / Start Date" id="timeline" type="text" placeholder="e.g. Within next 7 days" />
                  </div>

                  <FormField label="Survey Link or Screener URL (Optional)" id="survey-link" type="url" placeholder="https://your-platform.com/survey/..." />
                </div>

                {/* Submit Action */}
                <div className="pt-6 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <span>Submit Feasibility Request</span>
                    <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
                  </button>
                  <p className="mt-4 text-xs text-slate-400">
                    Your project details remain strictly confidential and will only be used to evaluate feasibility.
                  </p>
                </div>
              </form>
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

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

function FormField({ label, id, type, placeholder, required }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor={id}>
        {label} {required && <span className="text-teal-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
      />
    </div>
  );
}
