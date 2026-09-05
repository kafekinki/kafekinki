"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COFFEE_PRODUCTS, BRAND_DATA } from "@/lib/data";
import { Coffee as CoffeeIcon, Sparkles, Check, Flame, PackageCheck, MessageCircle } from "lucide-react";

export default function Coffee() {
  const [selectedProduct, setSelectedProduct] = useState(COFFEE_PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState<string>("250g");

  return (
    <section id="cafe" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-[#7E573C] text-xs font-bold uppercase tracking-wider mb-4">
            <CoffeeIcon className="w-3.5 h-3.5 text-[#8C2D19]" />
            <span>Café de Especialidad 100% Colombiano</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Nuestras{" "}
            <span className="text-[#8C2D19] italic font-normal">
              Presentaciones
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A4C45] leading-relaxed">
            Cultivado, seleccionado y tostado de forma artesanal. Disponible en grano entero para
            los amantes del molido fresco, y en café molido listo para disfrutar.
          </p>
        </div>

        {/* Product Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DFD3]">
            {COFFEE_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedProduct.id === prod.id
                    ? "bg-[#8C2D19] text-white shadow-sm"
                    : "text-[#5A4C45] hover:text-[#1C1512]"
                }`}
              >
                {prod.grindType}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Feature Card for Selected Presentation */}
        <div className="bg-[#FBF8F3] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD3] shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Product Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {selectedProduct.badge && (
                  <div className="absolute top-4 left-4 bg-[#8C2D19] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {selectedProduct.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Coffee Details & Specifications */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C2D19] uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>{selectedProduct.roastLevel}</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1512] mb-3"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                {selectedProduct.name}
              </h3>

              <p className="font-serif italic text-base text-[#7E573C] mb-4">
                &ldquo;{selectedProduct.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#5A4C45] leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              {/* Sizes Available */}
              <div className="mb-6 w-full">
                <div className="text-xs uppercase tracking-wider text-[#84756D] font-bold mb-2">
                  Tamaños Disponibles
                </div>
                <div className="flex gap-3">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                        selectedSize === size
                          ? "border-[#8C2D19] bg-[#8C2D19]/10 text-[#8C2D19] font-bold"
                          : "border-[#E8DFD3] bg-white text-[#5A4C45] hover:border-[#8C2D19]/50"
                      }`}
                    >
                      Bolsa {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 pt-4 border-t border-[#E8DFD3]">
                {selectedProduct.specifications.map((spec) => (
                  <div key={spec.label} className="text-xs">
                    <span className="text-[#84756D] font-medium block">{spec.label}</span>
                    <span className="text-[#1C1512] font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Inquire CTA */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                <a
                  href={`#contacto`}
                  className="inline-flex items-center justify-center gap-2 bg-[#8C2D19] hover:bg-[#732211] text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-sm hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar con Carlos ({selectedProduct.grindType})</span>
                </a>

                <span className="text-xs text-[#84756D]">
                  Lotes artesanales con tostión fresca por encargo.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Both Options Side-by-Side Cards (Modular Card Structure for future /shop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COFFEE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DFD3] hover:border-[#8C2D19]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-white border border-[#E8DFD3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full">
                    {product.roastLevel.split(" ")[0]}
                  </div>
                </div>

                <div className="text-xs font-bold text-[#8C2D19] uppercase tracking-wider mb-1">
                  {product.grindType}
                </div>
                <h4
                  className="text-xl font-serif font-bold text-[#1C1512] mb-2"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {product.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A4C45] mb-4">
                  {product.tagline}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#7E573C] font-medium mb-6">
                  <PackageCheck className="w-4 h-4 text-[#8C2D19]" />
                  <span>Presentaciones de 250g y 500g</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1C1512]">Pueblo Bello, Colombia</span>
                <a
                  href="#contacto"
                  className="text-xs font-bold text-[#8C2D19] hover:text-[#732211] inline-flex items-center gap-1 group"
                >
                  <span>Saber más</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
