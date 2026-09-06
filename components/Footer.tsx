"use client";

import React from "react";
import Logo from "./Logo";
import { BRAND_DATA } from "@/lib/data";
import { useTranslations } from "next-intl";
import { MapPin, Heart, ArrowUp } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-[#140E0C] text-[#FAF6F0] pt-16 pb-12 border-t border-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Logo variant="light" showTagline={true} size="lg" className="mb-4" />
            <p className="font-serif italic text-amber-200/90 text-sm sm:text-base mb-4 max-w-sm">
              &ldquo;{t("tagline")}&rdquo;
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {t("description")}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C2D19] flex items-center justify-center text-amber-200 hover:text-white transition-colors"
                aria-label="Instagram de Kafe Kinki"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-300 font-medium">{BRAND_DATA.instagramHandle}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-4">
              {t("navTitle")}
            </div>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <a href="#kinki" className="hover:text-white transition-colors">
                  {tNav("heritage")}
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  {tNav("story")}
                </a>
              </li>
              <li>
                <a href="#origen" className="hover:text-white transition-colors">
                  {tNav("origin")}
                </a>
              </li>
              <li>
                <a href="#cafe" className="hover:text-white transition-colors">
                  {tNav("coffee")}
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">
                  {tNav("instagram")}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  {tNav("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Origin & Production */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-4">
              {t("originTitle")}
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-amber-100 font-semibold">
                <MapPin className="w-4 h-4 text-[#8C2D19]" />
                <span>Pueblo Bello, Cesar, Colombia</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                {t("originDesc")}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-amber-300/80 font-bold uppercase tracking-wider">
                <span>{t("badgeArtisan")}</span>
                <span>{t("badgeRoast")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {t("rights")}</span>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors text-xs"
          >
            <span>{t("backToTop")}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
