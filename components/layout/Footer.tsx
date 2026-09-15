import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Inexra", href: "/about" },
    { label: "Our Capabilities", href: "/capabilities" },
    { label: "Quality & Validation", href: "/quality" },
    { label: "Resources & FAQs", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ],
  Solutions: [
    { label: "B2B Sample", href: "/b2b" },
    { label: "Consumer Sample", href: "/consumer" },
    { label: "Global / Multi-country", href: "/global-reach" },
    { label: "Pilot Studies", href: "/feasibility" },
  ],
  "Work With Us": [
    { label: "Request Feasibility", href: "/feasibility" },
    { label: "Partner With Inexra", href: "/contact?type=partnership" },
    { label: "Start a Pilot Wave", href: "/contact?type=pilot" },
    { label: "Panel & Sample Inquiries", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0B1C30] text-white border-t border-white/10">
      <div className="container-inexra pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center group" aria-label="Inexra Home">
              <div className="bg-white rounded-xl px-3.5 py-2 shadow-xs border border-slate-100 hover:shadow-sm transition-all">
                <Image
                  src="/inexra-logo-clean.png"
                  alt="Inexra Research & Analytics"
                  width={200}
                  height={78}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Inexra Research &amp; Analytics delivers verified consumer and B2B survey sample across India and 50+ international markets — connecting research teams with the respondents they need.
            </p>

            <div className="pt-2">
              <Link
                href="/feasibility"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4FD1C5] text-[#0B1C30] hover:bg-[#38B2AC] transition-all shadow-sm"
              >
                <span>Request Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-3 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-[#4FD1C5] shrink-0" />
              <span>info@inexraresearch.com</span>
            </div>
          </div>

          {/* Nav Links (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {group}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300/80 hover:text-[#4FD1C5] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Inexra Research &amp; Analytics. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-500">
            Survey Sample · Respondent Recruitment · Research Analytics
          </p>
        </div>
      </div>
    </footer>
  );
}
