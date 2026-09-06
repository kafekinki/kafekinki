"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Coffee as CoffeeIcon, Flame, MessageCircle } from "lucide-react";

export default function Coffee() {
  const t = useTranslations("coffee");
  const [selectedType, setSelectedType] = useState<"whole" | "ground">("whole");
  const [selectedSize, setSelectedSize] = useState<string>("250g");

  const productData = {
    whole: {
      name: t("wholeBean.name"),
      subtitle: t("wholeBean.subtitle"),
      grindType: t("wholeBean.grindType"),
      roastLevel: t("wholeBean.roastLevel"),
      tagline: t("wholeBean.tagline"),
      description: t("wholeBean.description"),
      image: "/images/kafe-kinki-black-bag.jpg",
      badge: t("wholeBean.badge"),
      sizes: ["250g", "500g"],
      specifications: [
        { label: t("specOrigin"), value: "Pueblo Bello, Sierra Nevada (Colombia)" },
        { label: t("specProducer"), value: "Carlos" },
        { label: t("specRoast"), value: t("wholeBean.roastLevel") },
        { label: t("specPresentation"), value: t("wholeBean.grindType") },
        { label: t("specComposition"), value: "100% Colombian Coffee" },
      ],
    },
    ground: {
      name: t("ground.name"),
      subtitle: t("ground.subtitle"),
      grindType: t("ground.grindType"),
      roastLevel: t("ground.roastLevel"),
      tagline: t("ground.tagline"),
      description: t("ground.description"),
      image: "/images/kafe-kinki-white-bag.jpg",
      badge: t("ground.badge"),
      sizes: ["250g", "500g"],
      specifications: [
        { label: t("specOrigin"), value: "Pueblo Bello, Sierra Nevada (Colombia)" },
        { label: t("specProducer"), value: "Carlos" },
        { label: t("specRoast"), value: t("ground.roastLevel") },
        { label: t("specPresentation"), value: t("ground.grindType") },
        { label: t("specComposition"), value: "100% Colombian Coffee" },
      ],
    },
  };

  const current = productData[selectedType];

  return (
    <section id="cafe" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-[#7E573C] text-xs font-bold uppercase tracking-wider mb-4">
            <CoffeeIcon className="w-3.5 h-3.5 text-[#8C2D19]" />
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

        {/* Product Toggle Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DFD3]">
            <button
              onClick={() => setSelectedType("whole")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedType === "whole"
                  ? "bg-[#8C2D19] text-white shadow-xs"
                  : "text-[#5A4C45] hover:text-[#1C1512]"
              }`}
            >
              {t("tabWhole")}
            </button>
            <button
              onClick={() => setSelectedType("ground")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedType === "ground"
                  ? "bg-[#8C2D19] text-white shadow-xs"
                  : "text-[#5A4C45] hover:text-[#1C1512]"
              }`}
            >
              {t("tabGround")}
            </button>
          </div>
        </div>

        {/* Interactive Feature Card for Selected Presentation */}
        <div className="bg-[#FBF8F3] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD3] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Product Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {current.badge && (
                  <div className="absolute top-4 left-4 bg-[#8C2D19] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {current.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Coffee Details & Specifications */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C2D19] uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>{current.roastLevel}</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1512] mb-3"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                {current.name}
              </h3>

              <p className="font-serif italic text-base text-[#7E573C] mb-4">
                &ldquo;{current.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#5A4C45] leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Sizes Available */}
              <div className="mb-6 w-full">
                <div className="text-xs uppercase tracking-wider text-[#84756D] font-bold mb-2">
                  {t("sizesLabel")}
                </div>
                <div className="flex gap-3">
                  {current.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                        selectedSize === size
                          ? "border-[#8C2D19] bg-[#8C2D19]/10 text-[#8C2D19] font-bold"
                          : "border-[#E8DFD3] bg-white text-[#5A4C45] hover:border-[#8C2D19]/50"
                      }`}
                    >
                      {t("bagLabel")} {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 pt-4 border-t border-[#E8DFD3]">
                {current.specifications.map((spec) => (
                  <div key={spec.label} className="text-xs">
                    <span className="text-[#84756D] font-medium block">{spec.label}</span>
                    <span className="text-[#1C1512] font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Inquire CTA */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#8C2D19] hover:bg-[#732211] text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-xs hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t("inquireButton")} ({current.grindType})</span>
                </a>

                <span className="text-xs text-[#84756D]">
                  {t("freshRoastNote")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
