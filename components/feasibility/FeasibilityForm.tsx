"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Sparkles, RefreshCw } from "lucide-react";

export function FeasibilityForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === "success" || status === "error") && containerRef.current) {
      const yOffset = -110; // offset so header doesn't cover top of card
      const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  }, [status]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    sampleType: "",
    audience: "",
    completes: "",
    loi: "",
    ir: "",
    methodology: "online",
    timeline: "",
    surveyLink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/feasibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email us directly at info@inexraresearch.com."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      country: "",
      sampleType: "",
      audience: "",
      completes: "",
      loi: "",
      ir: "",
      methodology: "online",
      timeline: "",
      surveyLink: "",
    });
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div
        ref={containerRef}
        className="bg-white border border-teal-200/80 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-500 min-h-[520px] flex flex-col justify-center items-center"
      >
        <div className="w-20 h-20 bg-teal-50 border border-teal-200 rounded-3xl flex items-center justify-center text-[#0D9488] mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="max-w-lg mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100/70 text-[#0F766E]">
            <Sparkles className="w-3.5 h-3.5" />
            Inquiry Dispatched to Feasibility Desk
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B1C30] tracking-tight">
            Thank You, {formData.name || "Colleague"}!
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Your feasibility study parameters for{" "}
            <strong className="text-slate-900">{formData.company}</strong> have been sent to our
            operations team at <strong className="text-teal-700">info@inexraresearch.com</strong>.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs text-slate-600 space-y-2 mt-4">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Target Country:</span>
              <span className="font-bold text-slate-800">{formData.country}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Completes (n=):</span>
              <span className="font-bold text-slate-800">{formData.completes}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-500">Confirmation Sent To:</span>
              <span className="font-bold text-teal-700">{formData.email}</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-2">
            Expect an incidence breakdown, delivery timeline, and CPI options within 45 minutes.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleReset}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Feasibility Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-lg shadow-slate-900/5"
    >
      <div className="border-b border-slate-100 pb-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C30] tracking-tight mb-2">
          Project Specifications
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Provide as much detail as possible to help us assess incidence rate, timeline, and CPI accurately.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong className="block font-semibold">Submission Notice</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Section 1: Contact Details */}
        <div className="space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            1. Contact Information
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="name">
                Full Name <span className="text-teal-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="company">
                Company / Research Agency <span className="text-teal-600">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Kantar, Ipsos, Nielsen"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="email">
                Work Email <span className="text-teal-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="country">
                Target Country / Geography <span className="text-teal-600">*</span>
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. India (Tier 1/2), US, UK, APAC"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Audience & Sample */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            2. Audience & Screening
          </span>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="sampleType">
              Sample Category <span className="text-teal-600">*</span>
            </label>
            <select
              id="sampleType"
              name="sampleType"
              required
              value={formData.sampleType}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium"
            >
              <option value="">Select sample category</option>
              <option value="consumer">Consumer General / Niche</option>
              <option value="b2b">B2B / Professional Decision-Maker</option>
              <option value="healthcare">Healthcare Professional (HCP)</option>
              <option value="mixed">Mixed / Both Consumer & B2B</option>
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
              value={formData.audience}
              onChange={handleChange}
              placeholder="Describe target criteria (e.g. IT Decision Makers in 250+ employee firms, or Smartphone users aged 18-35 in Tier 1 cities)"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm leading-relaxed resize-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Section 3: Study Metrics */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            3. Study Parameters
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="completes">
                Completes (n=) <span className="text-teal-600">*</span>
              </label>
              <input
                id="completes"
                name="completes"
                type="number"
                required
                min="1"
                value={formData.completes}
                onChange={handleChange}
                placeholder="e.g. 300"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="loi">
                LOI (mins)
              </label>
              <input
                id="loi"
                name="loi"
                type="number"
                min="1"
                value={formData.loi}
                onChange={handleChange}
                placeholder="e.g. 15"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="ir">
                Estimated IR (%)
              </label>
              <input
                id="ir"
                name="ir"
                type="number"
                min="1"
                max="100"
                value={formData.ir}
                onChange={handleChange}
                placeholder="e.g. 25"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="methodology">
                Methodology
              </label>
              <select
                id="methodology"
                name="methodology"
                value={formData.methodology}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium"
              >
                <option value="online">Online Survey (CAWI)</option>
                <option value="mobile">Mobile / App Survey</option>
                <option value="cati">CATI / Telephone</option>
                <option value="other">Other / Multi-mode</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="timeline">
                Expected Timeline / Start Date
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g. Within next 7 days"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="surveyLink">
              Survey Link or Screener URL (Optional)
            </label>
            <input
              id="surveyLink"
              name="surveyLink"
              type="url"
              value={formData.surveyLink}
              onChange={handleChange}
              placeholder="https://your-platform.com/survey/..."
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-6 border-t border-slate-100">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#4FD1C5]" />
                <span>Transmitting Feasibility Request...</span>
              </>
            ) : (
              <>
                <span>Submit Feasibility Request</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </>
            )}
          </button>
          <p className="mt-4 text-xs text-slate-400">
            Your project details remain strictly confidential and will only be used to evaluate feasibility.
          </p>
        </div>
      </form>
    </div>
  );
}
