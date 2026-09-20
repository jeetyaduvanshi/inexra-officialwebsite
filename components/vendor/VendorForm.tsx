"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  RefreshCw,
  Globe,
  Users,
  Building2,
  ShieldCheck,
} from "lucide-react";

const SAMPLE_TYPES = [
  "Consumer General",
  "Consumer Niche",
  "B2B Decision Makers",
  "IT Decision Makers (ITDM)",
  "Healthcare Professionals (HCP)",
  "Financial Services",
  "HR & Recruitment",
  "C-Suite / Executives",
  "Gen-Pop (General Population)",
  "SME / Small Business",
];

export function VendorForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedSampleTypes, setSelectedSampleTypes] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === "success" || status === "error") && containerRef.current) {
      const yOffset = -110;
      const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  }, [status]);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    jobTitle: "",
    email: "",
    phone: "",
    website: "",
    geographies: "",
    panelSize: "",
    consumerCpi: "",
    b2bCpi: "",
    methodology: "double-optin",
    qualityChecks: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSampleType = (type: string) => {
    setSelectedSampleTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (selectedSampleTypes.length === 0) {
      setStatus("error");
      setErrorMessage("Please select at least one sample type / panel capability.");
      return;
    }

    try {
      const res = await fetch("/api/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sampleTypes: selectedSampleTypes.join(", "),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application. Please try again.");
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
      companyName: "",
      contactName: "",
      jobTitle: "",
      email: "",
      phone: "",
      website: "",
      geographies: "",
      panelSize: "",
      consumerCpi: "",
      b2bCpi: "",
      methodology: "double-optin",
      qualityChecks: "",
      notes: "",
    });
    setSelectedSampleTypes([]);
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
            Application Submitted to Vendor Desk
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B1C30] tracking-tight">
            Thank You, {formData.contactName || "Partner"}!
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Your vendor application for{" "}
            <strong className="text-slate-900">{formData.companyName}</strong> has been sent to our
            operations team at <strong className="text-teal-700">info@inexraresearch.com</strong>.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs text-slate-600 space-y-2 mt-4">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Company:</span>
              <span className="font-bold text-slate-800">{formData.companyName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-semibold text-slate-500">Geographies:</span>
              <span className="font-bold text-slate-800 text-right max-w-[55%]">
                {formData.geographies}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-500">Confirmation Sent To:</span>
              <span className="font-bold text-teal-700">{formData.email}</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-2">
            Our vendor onboarding team will review your profile and reach out within 1–2 business days.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleReset}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Application</span>
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
          Vendor / Sample Partner Application
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Share your panel capabilities and coverage. Our team will assess fit for project allocation and reach out within 1–2 business days.
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
        {/* Section 1: Company & Contact */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#0D9488]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              1. Company &amp; Contact Information
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="companyName">
                Company / Panel Name <span className="text-teal-600">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. PanelFirst Research Pvt. Ltd."
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="contactName">
                Key Contact Person <span className="text-teal-600">*</span>
              </label>
              <input
                id="contactName"
                name="contactName"
                type="text"
                required
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="jobTitle">
                Designation / Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="e.g. Director of Partnerships"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="phone">
                Phone / WhatsApp / Skype
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210 or Skype ID"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="website">
                Company Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourcompany.com"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Panel Capabilities */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#0D9488]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              2. Panel Coverage &amp; Capabilities
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="geographies">
              Geographies / Markets Covered <span className="text-teal-600">*</span>
            </label>
            <input
              id="geographies"
              name="geographies"
              type="text"
              required
              value={formData.geographies}
              onChange={handleChange}
              placeholder="e.g. India (All Tiers), US, UK, UAE, APAC"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Sample Types / Panel Capabilities <span className="text-teal-600">*</span>
            </label>
            <p className="text-xs text-slate-400 mb-3">Select all that apply to your panel inventory.</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleSampleType(type)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                    selectedSampleTypes.includes(type)
                      ? "bg-[#0D9488] text-white border-[#0D9488] shadow-sm"
                      : "bg-white text-slate-600 border-slate-300 hover:border-[#0D9488] hover:text-[#0D9488]"
                  }`}
                >
                  {selectedSampleTypes.includes(type) && (
                    <span className="mr-1">✓</span>
                  )}
                  {type}
                </button>
              ))}
            </div>
            {selectedSampleTypes.length > 0 && (
              <p className="text-xs text-teal-600 mt-2 font-medium">
                {selectedSampleTypes.length} capability{selectedSampleTypes.length > 1 ? " types" : ""} selected
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="panelSize">
                Active Panel Size / Capacity
              </label>
              <input
                id="panelSize"
                name="panelSize"
                type="text"
                value={formData.panelSize}
                onChange={handleChange}
                placeholder="e.g. 500K+ opted-in panelists"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="methodology">
                Panel Recruitment Methodology
              </label>
              <select
                id="methodology"
                name="methodology"
                value={formData.methodology}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium"
              >
                <option value="double-optin">Double Opt-in Panel</option>
                <option value="river">River / Programmatic</option>
                <option value="social">Social Media Recruitment</option>
                <option value="cati">CATI / Telephone</option>
                <option value="mixed">Mixed / Multi-mode</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Commercials */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#0D9488]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              3. Commercial Terms &amp; CPI Expectations
            </span>
          </div>

          <div className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-200/60 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Note:</strong> Inexra routes projects to vendor partners at competitive supplier rates. Please indicate your target CPI range for reference — final rates are agreed per-project.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="consumerCpi">
                Target Consumer CPI (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                <input
                  id="consumerCpi"
                  name="consumerCpi"
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={formData.consumerCpi}
                  onChange={handleChange}
                  placeholder="e.g. 4.00"
                  className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="b2bCpi">
                Target B2B / Niche CPI (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                <input
                  id="b2bCpi"
                  name="b2bCpi"
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={formData.b2bCpi}
                  onChange={handleChange}
                  placeholder="e.g. 15.00"
                  className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Quality & Notes */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              4. Quality Controls &amp; Additional Information
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="qualityChecks">
              Anti-fraud &amp; Quality Control Tools Used
            </label>
            <textarea
              id="qualityChecks"
              name="qualityChecks"
              rows={3}
              value={formData.qualityChecks}
              onChange={handleChange}
              placeholder="e.g. Digital fingerprinting, Research Defender, RelevantID, ReCAPTCHA, OQ checks, attention checks, etc."
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm leading-relaxed resize-none placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2" htmlFor="notes">
              Capabilities Deck / Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Share a link to your capabilities deck, specializations, or anything else that would help us assess fit."
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm leading-relaxed resize-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6 border-t border-slate-100">
          <button
            type="submit"
            disabled={status === "submitting"}
            id="vendor-form-submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#4FD1C5]" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <span>Submit Vendor Application</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </>
            )}
          </button>
          <p className="mt-4 text-xs text-slate-400">
            Your company information is handled confidentially and will only be used for vendor evaluation purposes.
          </p>
        </div>
      </form>
    </div>
  );
}
