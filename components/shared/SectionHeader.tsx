import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  headline: string;
  subtext?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/**
 * Editorial section header pattern inspired by Epitome Research:
 *   [✦ OVERLINE BADGE]
 *   Headline (Bold, Large, Deep Navy)
 *   Subtext (Airy, Slate-600, Relaxed)
 */
export function SectionHeader({
  overline,
  headline,
  subtext,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      {overline && (
        <div>
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
              dark
                ? "bg-white/10 text-[#4FD1C5] border border-white/15"
                : "bg-teal-50 text-[#0D9488] border border-teal-200/60"
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                dark ? "bg-[#4FD1C5]" : "bg-[#0D9488]"
              )}
            />
            <span>{overline}</span>
          </div>
        </div>
      )}

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]"
        style={{ color: dark ? "#F8FAFC" : "#0B1C30" }}
      >
        {headline}
      </h2>

      {subtext && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            dark ? "text-slate-300" : "text-slate-600"
          )}
          style={{
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
