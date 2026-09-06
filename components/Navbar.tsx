"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { BRAND_DATA } from "@/lib/data";
import { useTranslations } from "next-intl";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("heritage"), href: "#kinki" },
    { label: t("story"), href: "#historia" },
    { label: t("origin"), href: "#origen" },
    { label: t("coffee"), href: "#cafe" },
    { label: t("instagram"), href: "#instagram" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF8F3]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD3]/80 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group transition-opacity hover:opacity-95" aria-label="Kafe Kinki">
            <Logo showTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-[#4A3328] hover:text-[#8C2D19] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8C2D19] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs + Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href="https://www.instagram.com/kafe_kinki/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#4A3328] hover:text-[#8C2D19] hover:bg-[#8C2D19]/10 transition-colors"
              aria-label="Instagram de Kafe Kinki"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 bg-[#8C2D19] hover:bg-[#732211] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full shadow-xs hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t("contact")}</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="sm:hidden">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#1C1512] hover:bg-black/5 transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FBF8F3] border-b border-[#E8DFD3] shadow-xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD3]/80">
              <div className="flex items-center gap-2 text-xs text-[#7E573C] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#8C2D19]" />
                <span>{t("locationBadge")}</span>
              </div>
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif font-medium text-[#1C1512] hover:text-[#8C2D19] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8DFD3] flex flex-col gap-3">
              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#4A3328] bg-white border border-[#E8DFD3] py-2.5 rounded-full hover:bg-amber-50/50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#8C2D19]" />
                <span>{t("followInstagram")} {BRAND_DATA.instagramHandle}</span>
              </a>

              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#8C2D19] py-2.5 rounded-full hover:bg-[#732211] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("contactCarlos")}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
