"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const solutionsMenu = [
  { label: "B2B Sample", href: "/b2b", desc: "Decision-makers & verified professionals" },
  { label: "Consumer Sample", href: "/consumer", desc: "Targeted audience & demographic recruitment" },
  { label: "Global / Multi-country", href: "/global-reach", desc: "Pan-India & 50+ international markets" },
];

const navItems = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  {
    label: "Solutions",
    href: "#",
    children: solutionsMenu,
  },
  { label: "Quality", href: "/quality" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="container-inexra">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1" aria-label="Inexra Home">
            <Image
              src="/inexra-logo-clean.png"
              alt="Inexra Research & Analytics"
              width={260}
              height={101}
              className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation with Epitome-style bullet dots */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && (
                  <span className="text-slate-300 mx-3 text-xs select-none" aria-hidden="true">
                    •
                  </span>
                )}

                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1.5 py-2 px-1 text-[15px] font-medium text-slate-700 hover:text-[#1A365D] transition-colors cursor-pointer"
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                          solutionsOpen && "rotate-180 text-[#1A365D]"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 transition-all duration-200",
                        solutionsOpen
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none -translate-y-2"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex flex-col px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-[#1A365D]">
                            {child.label}
                          </span>
                          <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="py-2 px-1 text-[15px] font-medium text-slate-700 hover:text-[#1A365D] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop Right Actions: Pill Buttons like Epitome */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/feasibility"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-[#1A365D] text-white hover:bg-[#0B1C30] transition-all shadow-sm hover:shadow-md active:scale-98"
            >
              <span>Request Feasibility</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4FD1C5]" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-2 pt-1 pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <div className="pl-3 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm font-medium text-slate-700 hover:text-[#1A365D]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-semibold text-slate-800 hover:text-[#1A365D] border-b border-slate-100 last:border-0"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="pt-3">
            <Link
              href="/feasibility"
              onClick={() => setMobileOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#1A365D] text-white shadow-sm"
            >
              <span>Request Feasibility</span>
              <ArrowRight className="w-4 h-4 text-[#4FD1C5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
