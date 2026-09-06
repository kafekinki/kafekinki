"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin, Mountain, Trees, Sparkles, Sun, Coffee, Compass } from "lucide-react";

export default function Origin() {
  const t = useTranslations("origin");

  const icons = [
    <MapPin key="1" className="w-5 h-5" />,
    <Mountain key="2" className="w-5 h-5" />,
    <Trees key="3" className="w-5 h-5" />,
    <Sparkles key="4" className="w-5 h-5" />,
    <Sun key="5" className="w-5 h-5" />,
    <Coffee key="6" className="w-5 h-5" />,
  ];

  const stepsCount = 6;
  const steps = Array.from({ length: stepsCount }, (_, i) => ({
    step: t(`steps.${i}.step`),
    title: t(`steps.${i}.title`),
    location: t(`steps.${i}.location`),
    desc: t(`steps.${i}.desc`),
    metric: t(`steps.${i}.metric`),
  }));

  return (
    <section id="origen" className="py-20 md:py-32 bg-[#F3ECE1]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E382B]/10 text-[#1E382B] text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            {t("title")}{" "}
            <span className="text-[#8C2D19] italic font-normal">
              {t("titleHighlight")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4C45] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Origin Hero Banner / Geographic Snapshot */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 border border-[#E8DFD3]">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/images/hero-sierra-nevada.jpg"
              alt="Paisaje de Pueblo Bello en la Sierra Nevada de Santa Marta"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140E0C]/90 via-[#140E0C]/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/30 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Pueblo Bello, Cesar, Colombia
              </div>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                {t("locationBannerTitle")}
              </h3>
              <p className="text-sm sm:text-base text-stone-200 mt-1 max-w-xl">
                {t("locationBannerDesc")}
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shrink-0">
              <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                {t("originUniqueBadge")}
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Pueblo Bello • Cesar
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Interactive Path Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl border border-[#E8DFD3] transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              {/* Step indicator tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl font-bold text-[#8C2D19]/40 group-hover:text-[#8C2D19] transition-colors">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] group-hover:bg-[#8C2D19]/10 text-[#7E573C] group-hover:text-[#8C2D19] flex items-center justify-center transition-colors">
                  {icons[index] || <Coffee className="w-5 h-5" />}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E573C] block mb-1">
                  {item.location}
                </span>
                <h4
                  className="text-xl font-serif font-bold text-[#1C1512] mb-3 group-hover:text-[#8C2D19] transition-colors"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-[#5A4C45] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-[#E8DFD3]/60 flex items-center justify-between text-xs font-semibold text-[#84756D]">
                <span>{t("stageLabel")} {index + 1} / {stepsCount}</span>
                <span className="text-[#8C2D19] font-medium">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
