"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Sparkles, Mountain, MapPin, User, Coffee, ShieldCheck } from "lucide-react";

export default function KinkiMeaning() {
  const t = useTranslations("kinki");

  const pillars = [
    {
      key: "kinki",
      title: t("pillars.kinki.title"),
      desc: t("pillars.kinki.desc"),
      label: "Principio / Philosophy",
      icon: <Sparkles className="w-5 h-5 text-[#8C2D19]" />,
    },
    {
      key: "puebloBello",
      title: t("pillars.puebloBello.title"),
      desc: t("pillars.puebloBello.desc"),
      label: "Lugar / Place",
      icon: <MapPin className="w-5 h-5 text-[#7E573C]" />,
    },
    {
      key: "sierraNevada",
      title: t("pillars.sierraNevada.title"),
      desc: t("pillars.sierraNevada.desc"),
      label: "Tierra Sagrada / Land",
      icon: <Mountain className="w-5 h-5 text-[#1E382B]" />,
    },
    {
      key: "carlos",
      title: t("pillars.carlos.title"),
      desc: t("pillars.carlos.desc"),
      label: "Productor / Roots",
      icon: <User className="w-5 h-5 text-[#8C2D19]" />,
    },
    {
      key: "cafe",
      title: t("pillars.cafe.title"),
      desc: t("pillars.cafe.desc"),
      label: "El Fruto / The Craft",
      icon: <Coffee className="w-5 h-5 text-[#C69864]" />,
    },
  ];

  return (
    <section id="kinki" className="py-20 md:py-32 bg-[#FAF6F0] relative overflow-hidden border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C2D19]/10 border border-[#8C2D19]/20 text-[#8C2D19] text-xs font-bold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            {t("title")}{" "}
            <span className="text-[#8C2D19] italic font-normal">
              &ldquo;{t("titleHighlight")}&rdquo;
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4C45] leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Monumental Arhuaco Definition Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E8DFD3] shadow-md mb-16 relative overflow-hidden">
          {/* Subtle Background Mountain Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: Definition Quote */}
            <div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E8DFD3] pb-8 lg:pb-0 lg:pr-10">
              <span className="text-xs uppercase font-bold text-[#8C2D19] tracking-widest block mb-2">
                Lengua Arhuaca • Iku
              </span>
              <h3
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1512] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Kinki
              </h3>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#8C2D19] leading-snug">
                &ldquo;{t("quote")}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-[#E8DFD3]/80 flex items-center gap-2 text-xs text-[#7E573C] font-semibold">
                <Mountain className="w-4 h-4 text-[#8C2D19]" />
                <span>Sierra Nevada de Santa Marta, Colombia</span>
              </div>
            </div>

            {/* Right: Narrative Context */}
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#5A4C45] leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          </div>
        </div>

        {/* The 5 Pillars of Identity & Origin */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((item, idx) => (
            <div
              key={item.key}
              className="bg-white rounded-2xl p-6 border border-[#E8DFD3] hover:border-[#8C2D19]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] group-hover:bg-[#8C2D19]/10 flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#84756D] uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-[10px] font-bold text-[#8C2D19] uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <h4
                  className="text-lg font-serif font-bold text-[#1C1512] mb-2 group-hover:text-[#8C2D19] transition-colors"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-[#5A4C45] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
