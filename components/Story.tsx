"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BRAND_DATA } from "@/lib/data";
import { HeartHandshake, Mountain, Sprout } from "lucide-react";

export default function Story() {
  const t = useTranslations("story");

  return (
    <section id="historia" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Carlos in Field Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/4.5] border-8 border-[#FBF8F3]">
                <Image
                  src="/images/carlos-portrait.jpg"
                  alt="Carlos, caficultor y productor de Kafe Kinki en Pueblo Bello"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Secondary Inset Image - Harvest Action */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] hidden sm:block">
                <Image
                  src="/images/carlos-harvest.jpg"
                  alt="Carlos recolectando café en Pueblo Bello"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative Label Stamp */}
              <div className="absolute -top-4 -left-4 bg-[#8C2D19] text-white px-4 py-2 rounded-lg shadow-lg font-serif text-xs sm:text-sm italic">
                {t("producerStamp")}
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-[#7E573C] text-xs font-bold uppercase tracking-wider mb-4">
              <Sprout className="w-3.5 h-3.5 text-[#8C2D19]" />
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

            <div className="space-y-4 text-base sm:text-lg text-[#5A4C45] leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p className="font-serif italic text-lg sm:text-xl text-[#7E573C] border-l-2 border-[#8C2D19] pl-4 py-1">
                &ldquo;{t("quote")}&rdquo;
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FBF8F3] border border-[#E8DFD3]/80">
                <div className="w-8 h-8 rounded-lg bg-[#8C2D19]/10 text-[#8C2D19] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1C1512] uppercase tracking-wider">
                    {t("values.smallProducerTitle")}
                  </h3>
                  <p className="text-xs text-[#5A4C45] mt-0.5">
                    {t("values.smallProducerDesc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FBF8F3] border border-[#E8DFD3]/80">
                <div className="w-8 h-8 rounded-lg bg-[#2D4F40]/10 text-[#2D4F40] flex items-center justify-center shrink-0">
                  <Mountain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1C1512] uppercase tracking-wider">
                    {t("values.originTitle")}
                  </h3>
                  <p className="text-xs text-[#5A4C45] mt-0.5">
                    {t("values.originDesc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Link to Follow Carlos */}
            <div className="mt-8">
              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C2D19] hover:text-[#732211] group"
              >
                <span>{t("followLink")}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
