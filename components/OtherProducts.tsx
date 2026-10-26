"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MessageCircle, Package, AlertCircle } from "lucide-react";

const PRODUCTS = [
  {
    id: "mochila",
    image: "/images/product-mochila.jpg",
    accentColor: "#8C2D19",
    bgColor: "#FDF3EE",
  },
  {
    id: "panela",
    image: "/images/product-panela.jpg",
    accentColor: "#B5810A",
    bgColor: "#FEFAEE",
  },
  {
    id: "cacao",
    image: "/images/product-cacao.jpg",
    accentColor: "#3D1F0D",
    bgColor: "#F5EDE8",
  },
];

export default function OtherProducts() {
  const t = useTranslations("otherProducts");
  const items = t.raw("items") as Array<{
    id: string;
    name: string;
    badge: string;
    tag: string;
    description: string;
    detail1Label: string;
    detail1Value: string;
    detail2Label: string;
    detail2Value: string;
  }>;

  return (
    <section
      id="otros-productos"
      className="py-20 md:py-32 bg-[#FAF6F0] relative overflow-hidden border-t border-[#E8DFD3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C2D19]/10 border border-[#8C2D19]/20 text-[#8C2D19] text-xs font-bold uppercase tracking-wider mb-5">
            <Package className="w-3.5 h-3.5" />
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {items.map((item, idx) => {
            const meta = PRODUCTS.find((p) => p.id === item.id) ?? PRODUCTS[idx];
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8DFD3] hover:border-[#8C2D19]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ backgroundColor: meta.bgColor }}
                >
                  <Image
                    src={meta.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Badge */}
                  <div
                    className="absolute top-4 left-4 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm"
                    style={{ backgroundColor: meta.accentColor }}
                  >
                    {item.badge}
                  </div>
                  {/* Reference model tag */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    <AlertCircle className="w-2.5 h-2.5" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-serif font-bold text-[#1C1512] mb-3 group-hover:text-[#8C2D19] transition-colors"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#5A4C45] leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>

                  {/* Quick specs */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E8DFD3] mb-5">
                    <div className="text-xs">
                      <span className="text-[#84756D] font-medium block">
                        {item.detail1Label}
                      </span>
                      <span
                        className="font-semibold"
                        style={{ color: meta.accentColor }}
                      >
                        {item.detail1Value}
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-[#84756D] font-medium block">
                        {item.detail2Label}
                      </span>
                      <span className="text-[#1C1512] font-semibold">
                        {item.detail2Value}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 w-full border-2 hover:text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
                    style={{
                      borderColor: meta.accentColor,
                      color: meta.accentColor,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = meta.accentColor;
                      (e.currentTarget as HTMLAnchorElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = meta.accentColor;
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t("inquireButton")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reference note */}
        <p className="text-center text-xs text-[#84756D] italic">
          {t("modelNote")}
        </p>
      </div>
    </section>
  );
}
