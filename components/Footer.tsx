import React from "react";
import Logo from "./Logo";
import { BRAND_DATA } from "@/lib/data";
import { MapPin, Heart, ArrowUp } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#140E0C] text-[#FAF6F0] pt-16 pb-12 border-t border-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Logo variant="light" showTagline={true} size="lg" className="mb-4" />
            <p className="font-serif italic text-amber-200/90 text-sm sm:text-base mb-4 max-w-sm">
              &ldquo;{BRAND_DATA.tagline}&rdquo;
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              Café de especialidad 100% colombiano, cultivado y producido por Carlos en el
              municipio de Pueblo Bello, en el corazón de la Sierra Nevada de Santa Marta.
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
              Navegación
            </div>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  Historia & Carlos
                </a>
              </li>
              <li>
                <a href="#origen" className="hover:text-white transition-colors">
                  Origen • Sierra Nevada
                </a>
              </li>
              <li>
                <a href="#cafe" className="hover:text-white transition-colors">
                  Café en Grano y Molido
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">
                  Proceso & Tostión Media
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">
                  Comunidad Instagram
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Origin & Production */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-4">
              Origen Garantizado
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-amber-100 font-semibold">
                <MapPin className="w-4 h-4 text-[#8C2D19]" />
                <span>Pueblo Bello, Cesar, Colombia</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Tierra sagrada, microclima de montaña y tradición cafetera artesanal sin procesos
                industriales invasivos.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-amber-300/80 font-bold uppercase tracking-wider">
                <span>100% Café Artesanal</span>
                <span>Tostión Media</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Kafé Kinki. Cultivado con</span>
            <Heart className="w-3.5 h-3.5 text-[#8C2D19] fill-[#8C2D19]" />
            <span>en Pueblo Bello, Colombia.</span>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors text-xs"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
