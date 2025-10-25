"use client";

import { useState, useEffect } from "react";
import MagicButton from "@/components/magicButton";
import QuoteButton from "@/components/quoteButton";

export default function Hero() {
  const textos = [
    "Impulsá tu marca con una web profesional.",
    "Convertí visitas en ventas reales.",
    "Dejá atrás el diseño genérico: destacá online.",
    "Tu negocio online empieza con Codegza.",
  ];

  const [textoActual, setTextoActual] = useState("");
  const [indexTexto, setIndexTexto] = useState(0);
  const [borrando, setBorrando] = useState(false);
  const [pos, setPos] = useState(0);
  const [hideScroll, setHideScroll] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (!borrando && pos < textos[indexTexto].length) {
      // Escribiendo
      timeout = setTimeout(() => {
        setTextoActual((prev) => prev + textos[indexTexto][pos]);
        setPos(pos + 1);
      }, 80);
    } else if (!borrando && pos === textos[indexTexto].length) {
      // Terminó de escribir, esperar antes de borrar
      timeout = setTimeout(() => {
        setBorrando(true);
      }, 2000);
    } else if (borrando && pos > 0) {
      // Borrando
      timeout = setTimeout(() => {
        setTextoActual((prev) => prev.slice(0, -1));
        setPos(pos - 1);
      }, 40);
    } else if (borrando && pos === 0) {
      // Terminó de borrar, cambiar al siguiente texto
      setBorrando(false);
      setIndexTexto((prev) => (prev + 1) % textos.length);
    }
    
    return () => clearTimeout(timeout);
  }, [pos, borrando, indexTexto, textos]);

  useEffect(() => {
  if (typeof window === "undefined") return; // 🚫 Evita ejecutar en SSR

  const handleScroll = () => {
    setHideScroll(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 pt-16 sm:pt-20 md:pt-24 lg:pt-28 flex flex-col items-center min-w-[100vw] justify-center text-center px-4 sm:px-6 md:px-8 overflow-hidden min-h-[100vh]"
    >
      {/* Contenedor principal más compacto */}
      <div className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl mx-auto">
        
        {/* Contenedor destacado central */}
        <div
          className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 rounded-2xl sm:rounded-3xl border border-transparent
            bg-[radial-gradient(circle_at_top_left,rgba(253,229,171,0.10)_0%,transparent_40%),radial-gradient(circle_at_bottom_right,rgba(253,229,171,0.04)_0%,transparent_50%),linear-gradient(to_bottom_right,#0a0a0a,#0a0a0a)]"
          style={{
            boxShadow: `
              0 0 8px 2px #000,
              inset 0 0 20px 3px rgba(0, 0, 0, 0),
              3px 2px 2px -1px #bf963d,
              -4px -2px 2px -2px #e2bf57
            `,
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-snug sm:leading-tight text-[#ffe7b4] text-center mx-auto px-2">
            Transformá tu negocio con una web que vende por vos
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-[#fff] min-h-[1.5rem] sm:min-h-[1.75rem] md:min-h-[2rem] lg:min-h-[2.5rem] px-2">
            <span>{textoActual}</span>
            <span className="border-r-2 border-[#cfae01] animate-pulse ml-1"></span>
          </p>

          <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            <MagicButton />
            <QuoteButton />
          </div>
        </div>

        {/* Tarjetas más compactas y anchas */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-3 sm:gap-4 md:gap-5">
          {[
            {
              title: "Sin Complicaciones",
              description:
                "Nos encargamos de todo: vos solo nos contás tu idea y nosotros la hacemos realidad.",
            },
            {
              title: "Visible en Google",
              description:
                "Tu web optimizada para aparecer en las búsquedas y que tus clientes te encuentren fácilmente.",
            },
            {
              title: "Siempre Disponible",
              description:
                "Tu negocio abierto 24/7: vendé, informá y captá clientes mientras dormís.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex-1 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                         bg-[radial-gradient(circle_at_top_left,rgba(253,229,171,0.05)_0%,transparent_40%),linear-gradient(to_bottom_right,#0a0a0a,#0a0a0a)]"
              style={{
                boxShadow: `
                  0 0 8px 2px #000,
                  inset 0 0 20px 3px rgba(0, 0, 0, 0),
                  3px 2px 2px -1px #bf963d,
                  -4px -2px 2px -2px #e2c057
                `,
              }}
            >
              <h3 className="text-[#ffe7b4] text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-1.5">{card.title}</h3>
              <p className="text-[#d1cfc5] text-xs sm:text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Flecha - Más cerca */}
        <div className="mt-1 sm:mt-2">
          <div
            className={`flex flex-col items-center gap-1 transition-all duration-700 ${
              hideScroll ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="animate-bounce text-[#cfae01] drop-shadow-[0_0_10px_rgba(207,174,1,0.6)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}