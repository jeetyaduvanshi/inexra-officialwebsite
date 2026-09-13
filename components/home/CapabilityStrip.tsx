"use client";

import { CheckCircle2, Users, Globe, BarChart3, Shield, Tag } from "lucide-react";

const capabilities = [
  { icon: Users, label: "Consumer & B2B" },
  { icon: Globe, label: "Global / Multi-country" },
  { icon: BarChart3, label: "Up to 1,000 Completes" },
  { icon: CheckCircle2, label: "Targeted Recruitment" },
  { icon: Shield, label: "Quality Validated" },
  { icon: Tag, label: "Flexible CPI" },
];

export function CapabilityStrip() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="container-inexra py-0">
        <div className="overflow-x-auto scrollbar-hide">
          <div
            className="flex items-stretch gap-0 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-6"
          >
            {capabilities.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-6 py-5 flex-1 group"
                style={{
                  borderRight: i < capabilities.length - 1 ? "1px solid #E2E8F0" : "none",
                }}
              >
                <div
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm transition-colors duration-200 group-hover:bg-[#4FD1C5]"
                  style={{ backgroundColor: "rgba(79, 209, 197, 0.10)" }}
                >
                  <item.icon
                    className="w-4 h-4 transition-colors duration-200 group-hover:text-[#0B1C30]"
                    style={{ color: "#4FD1C5" }}
                  />
                </div>
                <span
                  className="text-sm font-semibold whitespace-nowrap transition-colors duration-200"
                  style={{ color: "#1A365D" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
