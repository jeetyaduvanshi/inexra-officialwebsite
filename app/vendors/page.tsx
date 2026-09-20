import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CheckCircle2, Mail, Zap, TrendingUp, Shield, Users } from "lucide-react";
import { VendorForm } from "@/components/vendor/VendorForm";

export const metadata: Metadata = {
  title: "Become a Sample Vendor & Partner | Inexra Research & Analytics",
  description:
    "Join the Inexra vendor and sample partner network. Supply verified Consumer, B2B, and Healthcare sample completes across India and global markets. Register your panel capabilities today.",
};

const partnerPerks = [
  {
    icon: Zap,
    title: "Consistent Project Flow",
    desc: "Receive regular, well-scoped project allocations with clear screener specs, quotas, and delivery timelines.",
  },
  {
    icon: TrendingUp,
    title: "Transparent CPI & POs",
    desc: "Agreed per-project CPI rates with prompt purchase orders and structured payment terms on completion.",
  },
  {
    icon: Shield,
    title: "Quality-First Approach",
    desc: "We maintain strict quality benchmarks — vetted vendor networks only, with ongoing performance reviews.",
  },
  {
    icon: Users,
    title: "Dedicated Project Managers",
    desc: "Direct access to our operations team for real-time project coordination, fielding issues, and quota updates.",
  },
];

export default function VendorsPage() {
  return (
    <>
      <PageHero
        overline="Partner & Vendor Network"
        headline="Supply Verified Sample. Scale With Inexra."
        subtext="Join our global panel partner network. We regularly allocate high-volume B2B and Consumer study completes to vetted sample providers and field partners across India and international markets."
        breadcrumbs={[{ label: "Vendor Network" }]}
      />

      <section className="pt-12 pb-24 lg:pt-16 lg:pb-36 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container-inexra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left: Vendor Form (8 cols) */}
            <div className="lg:col-span-8">
              <VendorForm />
            </div>

            {/* Right: Why Partner With Us + Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Why Partner Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block mb-2">
                    Why Partner With Inexra?
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1C30] leading-snug">
                    A reliable partner for sample supply at scale.
                  </h3>
                </div>

                <div className="space-y-5">
                  {partnerPerks.map((perk) => (
                    <div key={perk.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0 mt-0.5">
                        <perk.icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0B1C30]">{perk.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {[
                    "Consumer & B2B project allocations",
                    "Healthcare & HCP studies",
                    "Multi-country / APAC projects",
                    "Pilot & full-scale waves",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Reach Us Directly
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For urgent vendor inquiries or to share your capabilities deck:
                </p>
                <a
                  href="mailto:info@inexraresearch.com?subject=Vendor Partnership Inquiry"
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
