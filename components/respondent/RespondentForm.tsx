"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  RefreshCw,
  User,
  Briefcase,
  Heart,
  ShieldCheck,
} from "lucide-react";

const AGE_GROUPS = ["18–24", "25–34", "35–44", "45–54", "55–64", "65+"];

const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];

const EDUCATION_LEVELS = [
  "High School / Secondary",
  "Diploma / Vocational",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate / PhD",
  "Professional (MBBS, CA, LLB, etc.)",
  "Other",
];

const EMPLOYMENT_STATUSES = [
  "Employed Full-time",
  "Employed Part-time",
  "Self-employed / Business Owner",
  "Freelancer / Consultant",
  "Student",
  "Homemaker",
  "Retired",
  "Not currently employed",
];

const INDUSTRIES = [
  "IT / Software / Technology",
  "Healthcare / Medical",
  "Banking / Finance / Insurance",
  "Manufacturing / Engineering",
  "Retail / E-commerce / FMCG",
  "Education / Academia",
  "Government / Public Sector",
  "Media / Marketing / Advertising",
  "Telecom",
  "Automotive",
  "Real Estate / Construction",
  "Hospitality / Travel",
  "Legal / Consulting",
  "Agriculture",
  "Other",
];

const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,001–5,000", "5,000+"];

const INCOME_RANGES = [
  "Below ₹3 Lakh / yr",
  "₹3–6 Lakh / yr",
  "₹6–12 Lakh / yr",
  "₹12–25 Lakh / yr",
  "₹25–50 Lakh / yr",
  "Above ₹50 Lakh / yr",
  "Outside India / Other currency",
  "Prefer not to say",
];

const INTERESTS = [
  "Technology & Gadgets",
  "Health & Wellness",
  "Automotive",
  "Food & Beverages",
  "Fashion & Beauty",
  "Finance & Investing",
  "Travel",
  "Gaming",
  "Entertainment & OTT",
  "Sports & Fitness",
  "Parenting & Family",
  "Home & Appliances",
  "Business & B2B Software",
  "Education & Careers",
];

const SURVEY_MODES = [
  "Online Surveys",
  "Phone Interviews",
  "Video / In-depth Interviews",
  "Focus Groups",
  "In-person / Product Testing",
];

const inputCls =
  "w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-sm font-medium placeholder:text-slate-400";
const labelCls = "block text-sm font-semibold text-slate-800 mb-2";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  ageGroup: "",
  country: "India",
  city: "",
  languages: "",
  education: "",
  employmentStatus: "",
  industry: "",
  jobTitle: "",
  companySize: "",
  householdIncome: "",
  referral: "",
  company_website: "", // honeypot
};

const WORKING_STATUSES = [
  "Employed Full-time",
  "Employed Part-time",
  "Self-employed / Business Owner",
  "Freelancer / Consultant",
];

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer ${
        active
          ? "bg-[#0D9488] text-white border-[#0D9488] shadow-sm"
          : "bg-white text-slate-600 border-slate-300 hover:border-[#0D9488] hover:text-[#0D9488]"
      }`}
    >
      {active && <span className="mr-1">✓</span>}
      {label}
    </button>
  );
}

function SectionTitle({ icon: Icon, text }: { icon: typeof User; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-[#0D9488]" />
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{text}</span>
    </div>
  );
}

export function RespondentForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const [interests, setInterests] = useState<string[]>([]);
  const [surveyModes, setSurveyModes] = useState<string[]>(["Online Surveys"]);
  const [ageConfirm, setAgeConfirm] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isWorking = WORKING_STATUSES.includes(formData.employmentStatus);

  useEffect(() => {
    if ((status === "success" || status === "error") && containerRef.current) {
      const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggle = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!ageConfirm || !privacyConsent) {
      setStatus("error");
      setErrorMessage("Please confirm you are 18 or older and agree to the privacy terms.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/respondent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          industry: isWorking ? formData.industry : "",
          jobTitle: isWorking ? formData.jobTitle : "",
          companySize: isWorking ? formData.companySize : "",
          interests: interests.join(", "),
          surveyModes: surveyModes.join(", "),
          ageConfirm,
          privacyConsent,
          marketingConsent,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit registration. Please try again.");
      }
      setStatus("success");
    } catch (err: unknown) {
      console.error("Registration failed:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email us at info@inexraresearch.com."
      );
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setInterests([]);
    setSurveyModes(["Online Surveys"]);
    setAgeConfirm(false);
    setPrivacyConsent(false);
    setMarketingConsent(false);
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
            You&apos;re on the Panel
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B1C30] tracking-tight">
            Welcome aboard, {formData.fullName.split(" ")[0] || "Panelist"}!
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Your profile has been registered. We&apos;ve sent a welcome email to{" "}
            <strong className="text-teal-700">{formData.email}</strong>.
          </p>
          <p className="text-xs text-slate-500 pt-2">
            When a survey matches your profile, we&apos;ll email you an invitation. Please check your
            spam folder and mark us as a trusted sender.
          </p>
        </div>
        <div className="pt-4">
          <button
            onClick={handleReset}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Register Another Person</span>
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
          Join the Inexra Survey Panel
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Takes about 2 minutes. The more we know about you, the better we can match you with
          relevant paid surveys and research studies.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong className="block font-semibold">Registration Notice</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form className="space-y-8" onSubmit={handleSubmit} noValidate={false}>
        {/* Honeypot – hidden from humans */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_website">Leave this field empty</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_website}
            onChange={handleChange}
          />
        </div>

        {/* Section 1: Personal */}
        <div className="space-y-5">
          <SectionTitle icon={User} text="1. About You" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelCls} htmlFor="fullName">
                Full Name <span className="text-teal-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="email">
                Email Address <span className="text-teal-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelCls} htmlFor="phone">
                Mobile / WhatsApp Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="languages">
                Languages You&apos;re Comfortable With
              </label>
              <input
                id="languages"
                name="languages"
                type="text"
                value={formData.languages}
                onChange={handleChange}
                placeholder="e.g. English, Hindi, Tamil"
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelCls} htmlFor="gender">
                Gender <span className="text-teal-600">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="" disabled>
                  Select gender
                </option>
                {GENDERS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="ageGroup">
                Age Group <span className="text-teal-600">*</span>
              </label>
              <select
                id="ageGroup"
                name="ageGroup"
                required
                value={formData.ageGroup}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="" disabled>
                  Select age group
                </option>
                {AGE_GROUPS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelCls} htmlFor="country">
                Country <span className="text-teal-600">*</span>
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                autoComplete="country-name"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. India"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="city">
                City / State <span className="text-teal-600">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                autoComplete="address-level2"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Pune, Maharashtra"
                className={inputCls}
              />
            </div>
          </div>
        </div>

        {/* Section 2: Professional */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <SectionTitle icon={Briefcase} text="2. Education & Work" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelCls} htmlFor="employmentStatus">
                Employment Status <span className="text-teal-600">*</span>
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                required
                value={formData.employmentStatus}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="" disabled>
                  Select status
                </option>
                {EMPLOYMENT_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="education">
                Highest Education
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="">Select education</option>
                {EDUCATION_LEVELS.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isWorking && (
            <div className="space-y-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/70 animate-in fade-in">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-700">Professionals earn more:</strong> B2B and
                industry-specific studies typically offer higher rewards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls} htmlFor="industry">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select industry</option>
                    {INDUSTRIES.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="jobTitle">
                    Job Title / Role
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    autoComplete="organization-title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. IT Manager, Doctor, CFO"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="sm:w-1/2 sm:pr-3">
                <label className={labelCls} htmlFor="companySize">
                  Company Size (employees)
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="">Select size</option>
                  {COMPANY_SIZES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="sm:w-1/2 sm:pr-3">
            <label className={labelCls} htmlFor="householdIncome">
              Annual Household Income
            </label>
            <select
              id="householdIncome"
              name="householdIncome"
              value={formData.householdIncome}
              onChange={handleChange}
              className={inputCls}
            >
              <option value="">Select range (optional)</option>
              {INCOME_RANGES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Section 3: Preferences */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <SectionTitle icon={Heart} text="3. Interests & Survey Preferences" />

          <div>
            <span className={labelCls}>Topics You&apos;re Interested In</span>
            <p className="text-xs text-slate-400 mb-3">Select all that apply.</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <Chip
                  key={i}
                  label={i}
                  active={interests.includes(i)}
                  onClick={() => toggle(interests, setInterests, i)}
                />
              ))}
            </div>
          </div>

          <div>
            <span className={labelCls}>How Would You Like to Participate?</span>
            <div className="flex flex-wrap gap-2">
              {SURVEY_MODES.map((m) => (
                <Chip
                  key={m}
                  label={m}
                  active={surveyModes.includes(m)}
                  onClick={() => toggle(surveyModes, setSurveyModes, m)}
                />
              ))}
            </div>
          </div>

          <div className="sm:w-1/2 sm:pr-3">
            <label className={labelCls} htmlFor="referral">
              How Did You Hear About Us?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className={inputCls}
            >
              <option value="">Select an option</option>
              <option>Google Search</option>
              <option>Social Media</option>
              <option>Friend / Referral</option>
              <option>Email Invitation</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Section 4: Consent */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <SectionTitle icon={ShieldCheck} text="4. Consent" />

          {[
            {
              id: "ageConfirm",
              checked: ageConfirm,
              set: setAgeConfirm,
              required: true,
              text: "I confirm that I am 18 years of age or older.",
            },
            {
              id: "privacyConsent",
              checked: privacyConsent,
              set: setPrivacyConsent,
              required: true,
              text: "I agree that Inexra Research & Analytics may store my profile and contact me with survey invitations. My data will be kept confidential and never sold. I can unsubscribe at any time.",
            },
            {
              id: "marketingConsent",
              checked: marketingConsent,
              set: setMarketingConsent,
              required: false,
              text: "Send me occasional panel news and reward updates (optional).",
            },
          ].map((c) => (
            <label
              key={c.id}
              htmlFor={c.id}
              className="flex items-start gap-3 cursor-pointer text-sm text-slate-600 leading-relaxed"
            >
              <input
                id={c.id}
                type="checkbox"
                checked={c.checked}
                required={c.required}
                onChange={(e) => c.set(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 accent-[#0D9488] shrink-0 cursor-pointer"
              />
              <span>
                {c.text} {c.required && <span className="text-teal-600">*</span>}
              </span>
            </label>
          ))}
        </div>

        {/* Submit */}
        <div className="pt-6 border-t border-slate-100">
          <button
            type="submit"
            disabled={status === "submitting"}
            id="respondent-form-submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-md active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#4FD1C5]" />
                <span>Registering...</span>
              </>
            ) : (
              <>
                <span>Join the Panel</span>
                <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
              </>
            )}
          </button>
          <p className="mt-4 text-xs text-slate-400">
            Free to join. We never ask for payment or banking passwords.
          </p>
        </div>
      </form>
    </div>
  );
}
