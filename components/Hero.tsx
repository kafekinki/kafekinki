"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDown, Sparkles, MapPin, Coffee, Compass } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Warm Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0] via-[#FBF8F3] to-[#F3ECE1] -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8C2D19]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Story Anchor */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Origin & Badge pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C2D19]/10 border border-[#8C2D19]/20 text-[#8C2D19] text-xs font-semibold uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t("locationPill")}</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#1C1512] leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              {t("titlePrefix")}{" "}
              <span className="relative inline-block text-[#8C2D19] italic font-normal">
                {t("titleHighlight")}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2 text-[#C69864]/60"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>

            {/* Brand Authentic Tagline */}
            <p className="text-xl sm:text-2xl font-serif italic text-[#4A3328] mb-4">
              &ldquo;{t("tagline")}&rdquo;
            </p>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5A4C45] leading-relaxed max-w-xl mb-8">
              {t("description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#cafe"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8C2D19] hover:bg-[#732211] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Coffee className="w-4 h-4" />
                <span>{t("ctaDiscover")}</span>
              </a>

              <a
                href="#kinki"
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#221713] border border-[#D5C7B7] font-medium text-sm sm:text-base px-6 py-3.5 rounded-full hover:border-[#8C2D19] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#8C2D19]" />
                <span>{t("ctaStory")}</span>
              </a>
            </div>

            {/* Trust & Quality Markers */}
            <div className="mt-10 pt-8 border-t border-[#E8DFD3] w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#84756D] font-semibold">
                  {t("statOriginLabel")}
                </div>
                <div className="text-sm font-bold text-[#1C1512] mt-0.5">
                  {t("statOriginValue")}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#84756D] font-semibold">
                  {t("statRoastLabel")}
                </div>
                <div className="text-sm font-bold text-[#1C1512] mt-0.5">
                  {t("statRoastValue")}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#84756D] font-semibold">
                  {t("statHeritageLabel")}
                </div>
                <div className="text-sm font-bold text-[#1C1512] mt-0.5">
                  {t("statHeritageValue")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Image (Pouch & Coffee) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5] bg-stone-100">
                <Image
                  src="/images/kafe-kinki-black-bag.jpg"
                  alt="Kafé Kinki Café de Colombia Artesanal de la Sierra Nevada"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Floating Artisan Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-200 shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#1C1512]">
                    {t("badgeSpecialty")}
                  </span>
                </div>
              </div>

              {/* Secondary Floating Card (Carlos the Producer) */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white rounded-xl p-3 shadow-xl border border-[#E8DFD3] max-w-[210px] hidden sm:flex items-center gap-3 transform hover:-translate-y-1 transition-transform">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/images/carlos-portrait.jpg"
                    alt="Carlos - Productor de Kafe Kinki"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#8C2D19] uppercase tracking-wide">
                    {t("producerBadge")}
                  </div>
                  <div className="text-xs font-bold text-[#1C1512]">Carlos</div>
                  <div className="text-[10px] text-[#84756D]">Pueblo Bello, Cesar</div>
                </div>
              </div>

              {/* Secondary Floating Stamp (Tostión Media) */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-[#140E0C] text-[#FAF6F0] rounded-2xl p-3.5 shadow-xl border border-amber-900/40 max-w-[170px] text-center hidden sm:block">
                <div className="text-[10px] uppercase font-semibold text-amber-300 tracking-wider">
                  {t("roastBadge")}
                </div>
                <div className="text-xs font-serif font-medium mt-0.5 text-amber-100">
                  {t("roastBadgeSub")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <a
            href="#kinki"
            className="inline-flex flex-col items-center gap-1.5 text-[#84756D] hover:text-[#8C2D19] transition-colors group text-xs uppercase tracking-widest font-semibold"
            aria-label={t("scrollHint")}
          >
            <span>{t("scrollHint")}</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#8C2D19]" />
          </a>
        </div>
      </div>
    </section>
  );
}
