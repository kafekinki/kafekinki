"use client";

import React from "react";
import Image from "next/image";
import { INSTAGRAM_POSTS, BRAND_DATA } from "@/lib/data";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

export default function InstagramFeed() {
  const t = useTranslations("instagram");

  return (
    <section id="instagram" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C2D19]/10 text-[#8C2D19] text-xs font-bold uppercase tracking-wider mb-4">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              {t("title")}{" "}
              <span className="text-[#8C2D19] italic font-normal">
                {BRAND_DATA.name}
              </span>
            </h2>

            <p className="text-base text-[#5A4C45] mt-2 max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          <a
            href={BRAND_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FAF6F0] hover:bg-[#8C2D19] text-[#1C1512] hover:text-white border border-[#E8DFD3] hover:border-[#8C2D19] px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 self-start md:self-auto shadow-xs group"
          >
            <InstagramIcon className="w-4 h-4 text-[#8C2D19] group-hover:text-white transition-colors" />
            <span>{t("button")}</span>
            <span className="font-bold text-[#8C2D19] group-hover:text-white transition-colors">{BRAND_DATA.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Curated Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-[#E8DFD3] shadow-xs block"
              aria-label={post.title}
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Hover Overlay with Editorial Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0C]/90 via-[#140E0C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 mb-0.5">
                  {post.category}
                </span>
                <p className="text-[11px] font-medium leading-snug line-clamp-3 text-stone-200">
                  {post.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-amber-200 font-semibold">
                  <InstagramIcon className="w-3 h-3" />
                  <span>{t("viewOnIg")}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bio snippet */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#84756D]">
            {t("bioSnippet")}
          </p>
        </div>
      </div>
    </section>
  );
}
