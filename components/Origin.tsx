import React from "react";
import Image from "next/image";
import { ORIGIN_JOURNEY } from "@/lib/data";
import { MapPin, Mountain, Trees, Sparkles, Sun, Coffee, Compass } from "lucide-react";

export default function Origin() {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-5 h-5" />,
    Mountain: <Mountain className="w-5 h-5" />,
    Trees: <Trees className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Sun: <Sun className="w-5 h-5" />,
    Coffee: <Coffee className="w-5 h-5" />,
  };

  return (
    <section id="origen" className="py-20 md:py-32 bg-[#F3ECE1]/60 relative overflow-hidden">
      {/* Background Subtle Mountain Contour Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E382B]/10 text-[#1E382B] text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>El Viaje del Origen</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            De la Sierra Nevada a tu taza,{" "}
            <span className="text-[#8C2D19] italic font-normal">
              paso a paso.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4C45] leading-relaxed">
            La magia de Kafé Kinki reside en la geografía única de Pueblo Bello y en el respeto
            absoluto por cada etapa de transformación del grano.
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
                Sierra Nevada de Santa Marta
              </h3>
              <p className="text-sm sm:text-base text-stone-200 mt-1 max-w-xl">
                Tierra fértil de montaña, aire puro y tradición cafetera donde Carlos cultiva
                con pasión cada grano.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shrink-0">
              <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                100% Origen Único
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Pueblo Bello • Cesar
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Interactive Path Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ORIGIN_JOURNEY.map((item, index) => (
            <div
              key={item.step}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-[#E8DFD3] transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              {/* Step indicator tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl font-bold text-[#8C2D19]/40 group-hover:text-[#8C2D19] transition-colors">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] group-hover:bg-[#8C2D19]/10 text-[#7E573C] group-hover:text-[#8C2D19] flex items-center justify-center transition-colors">
                  {iconMap[item.iconName] || <Coffee className="w-5 h-5" />}
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
                  {item.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-[#E8DFD3]/60 flex items-center justify-between text-xs font-semibold text-[#84756D]">
                <span>Etapa {index + 1} de 6</span>
                <span className="text-[#8C2D19] font-medium">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
