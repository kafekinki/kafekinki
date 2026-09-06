"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (nextLocale: "es" | "en") => {
    if (nextLocale !== locale) {
      router.replace(pathname, { locale: nextLocale });
    }
  };

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#FAF6F0] border border-[#E8DFD3] text-xs font-semibold">
      <Globe className="w-3.5 h-3.5 text-[#8C2D19] ml-1.5" />
      <button
        onClick={() => toggleLanguage("es")}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          locale === "es"
            ? "bg-[#8C2D19] text-white shadow-xs font-bold"
            : "text-[#5A4C45] hover:text-[#1C1512]"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <span className="text-[#D5C7B7] text-[10px]">|</span>
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          locale === "en"
            ? "bg-[#8C2D19] text-white shadow-xs font-bold"
            : "text-[#5A4C45] hover:text-[#1C1512]"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
