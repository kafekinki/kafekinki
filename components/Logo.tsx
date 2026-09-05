import React from "react";

interface LogoProps {
  variant?: "dark" | "light" | "burgundy";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "dark",
  showTagline = false,
  className = "",
  size = "md",
}: LogoProps) {
  const textColor =
    variant === "light"
      ? "text-white"
      : variant === "burgundy"
      ? "text-[#8C2D19]"
      : "text-[#1C1512]";

  const subtextColor =
    variant === "light"
      ? "text-amber-200/90"
      : variant === "burgundy"
      ? "text-[#5A4C45]"
      : "text-[#7E573C]";

  const iconBg =
    variant === "light" ? "bg-white/10 text-amber-300" : "bg-[#8C2D19]/10 text-[#8C2D19]";

  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl md:text-4xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Artisanal Coffee Bean Mark */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center border border-amber-600/30 ${iconBg} shadow-sm shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="w-5 h-5"
        >
          {/* Coffee bean with curved center crease */}
          <path
            d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z"
            strokeLinecap="round"
          />
          <path
            d="M12 3c-1.5 3-1.5 6 0 9s1.5 6 0 9"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif font-bold tracking-tight ${sizeClasses[size]} ${textColor}`}
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Kafé Kinki
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-widest px-1.5 py-0.5 rounded bg-amber-800/10 text-amber-900 border border-amber-700/20 hidden sm:inline-block">
            Artesanal
          </span>
        </div>
        {showTagline && (
          <span className={`text-[11px] font-medium tracking-wide uppercase ${subtextColor}`}>
            Sierra Nevada • Pueblo Bello
          </span>
        )}
      </div>
    </div>
  );
}
