import React from "react";
import Image from "next/image";
import { CRAFT_PROCESS } from "@/lib/data";
import { Hammer, CheckCircle2 } from "lucide-react";

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-32 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C2D19]/10 text-[#8C2D19] text-xs font-bold uppercase tracking-wider mb-4">
            <Hammer className="w-3.5 h-3.5" />
            <span>Oficio & Dedicación</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            El Cuidado en{" "}
            <span className="text-[#8C2D19] italic font-normal">
              Cada Detalle
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4C45] leading-relaxed">
            Hacer café especial no es un proceso industrial masivo; es un compromiso diario de paciencia,
            atención y respeto por la tierra en Pueblo Bello.
          </p>
        </div>

        {/* 4 Process Stages Alternating Layout */}
        <div className="space-y-16 lg:space-y-24">
          {CRAFT_PROCESS.map((stage, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={stage.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image side */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#8C2D19] uppercase tracking-wider shadow-sm">
                      {stage.badge}
                    </div>
                  </div>
                </div>

                {/* Text content side */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="font-serif text-3xl font-bold text-[#8C2D19] mb-2">
                    {stage.number}
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7E573C] mb-1">
                    {stage.subtitle}
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1512] mb-4"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-base text-[#5A4C45] leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 w-full">
                    {stage.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1C1512]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8C2D19] shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
