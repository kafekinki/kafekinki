"use client";

import React, { useState } from "react";
import { BRAND_DATA } from "@/lib/data";
import { MapPin, Mail, MessageCircle, Send, CheckCircle2, Coffee } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Café en Grano Entero",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact details & Brand connection */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C2D19]/10 text-[#8C2D19] text-xs font-bold uppercase tracking-wider mb-4">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contacto Directo</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1512] leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Hablemos de{" "}
                <span className="text-[#8C2D19] italic font-normal">
                  buen café.
                </span>
              </h2>

              <p className="text-base text-[#5A4C45] leading-relaxed mb-8">
                ¿Deseas conocer más sobre nuestras cosechas, consultar disponibilidad de lotes
                o saludarnos directamente? Escríbenos y con gusto te atenderemos.
              </p>

              {/* Direct Info List */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#8C2D19]/10 text-[#8C2D19] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#84756D] tracking-wider">
                      Ubicación & Origen
                    </div>
                    <div className="text-sm font-bold text-[#1C1512] mt-0.5">
                      Pueblo Bello, Cesar
                    </div>
                    <div className="text-xs text-[#5A4C45]">
                      Sierra Nevada de Santa Marta, Colombia
                    </div>
                  </div>
                </div>

                <a
                  href={BRAND_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm hover:border-[#8C2D19] hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#7E573C] group-hover:bg-[#8C2D19] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#84756D] tracking-wider">
                      Instagram Oficial
                    </div>
                    <div className="text-sm font-bold text-[#8C2D19] mt-0.5 group-hover:underline">
                      {BRAND_DATA.instagramHandle}
                    </div>
                    <div className="text-xs text-[#5A4C45]">
                      Mensajes directos y novedades diarias
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#2D4F40]/10 text-[#2D4F40] flex items-center justify-center shrink-0 mt-0.5">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#84756D] tracking-wider">
                      Atención Directa
                    </div>
                    <div className="text-sm font-bold text-[#1C1512] mt-0.5">
                      Carlos — Productor
                    </div>
                    <div className="text-xs text-[#5A4C45]">
                      Café artesanal en grano entero y molido
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DFD3]/80 text-xs text-[#84756D]">
              Kafé Kinki • 100% Café Artesanal de Colombia
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD3] shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className="text-2xl font-serif font-bold text-[#1C1512]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    ¡Mensaje Recibido!
                  </h3>
                  <p className="text-sm text-[#5A4C45] max-w-md mx-auto">
                    Gracias por tu interés en Kafé Kinki. Carlos o nuestro equipo se pondrán en contacto
                    contigo muy pronto.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", interest: "Café en Grano Entero", message: "" });
                    }}
                    className="mt-4 text-xs font-bold text-[#8C2D19] uppercase tracking-wider hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-2xl font-serif font-bold text-[#1C1512] mb-2"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Envía un mensaje a Carlos
                  </h3>
                  <p className="text-xs text-[#84756D] mb-6">
                    Completa este breve formulario y te responderemos a la brevedad.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#1C1512] uppercase tracking-wider mb-2">
                        Tu Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Sofia Gomez"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8DFD3] text-sm text-[#1C1512] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8C2D19]/20 focus:border-[#8C2D19] transition-all bg-[#FAF6F0]/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#1C1512] uppercase tracking-wider mb-2">
                        Correo Electrónico / WhatsApp
                      </label>
                      <input
                        id="email"
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com o +57..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8DFD3] text-sm text-[#1C1512] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8C2D19]/20 focus:border-[#8C2D19] transition-all bg-[#FAF6F0]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-xs font-bold text-[#1C1512] uppercase tracking-wider mb-2">
                      Interés Principal
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFD3] text-sm text-[#1C1512] focus:outline-none focus:ring-2 focus:ring-[#8C2D19]/20 focus:border-[#8C2D19] transition-all bg-[#FAF6F0]/50"
                    >
                      <option value="Café en Grano Entero">Café en Grano Entero (250g / 500g)</option>
                      <option value="Café Molido Fresco">Café Molido Fresco (250g / 500g)</option>
                      <option value="Información de Origen & Cosecha">Información de Origen & Cosecha</option>
                      <option value="Colaboraciones & Alianzas">Colaboraciones & Alianzas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#1C1512] uppercase tracking-wider mb-2">
                      Tu Mensaje o Pregunta
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos qué te gustaría saber sobre Kafé Kinki..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DFD3] text-sm text-[#1C1512] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8C2D19]/20 focus:border-[#8C2D19] transition-all bg-[#FAF6F0]/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#8C2D19] hover:bg-[#732211] text-white font-semibold text-sm uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a Carlos</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
