"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// Componente independiente para cada tarjeta
function ReasonCard({ reason, index, inView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <motion.div
        className="select-none bg-[#222] p-0.5 rounded-2xl sm:rounded-3xl w-full"
        style={{
          boxShadow: `0 0 8px 2px #000, inset 0 0 20px 3px rgba(0, 0, 0, 0), 3px 2px 2px -1px #bf963d, -4px -2px 2px -2px #e2c057`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 30,
          transition: { delay: 0.2 + index * 0.1, duration: 0.5, ease: "easeOut" },
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        {/* Encabezado clickeable */}
        <button 
          className="w-full flex items-start gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-base md:text-lg bg-[#000] p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#cfae01]/30 cursor-pointer text-left transition-all duration-300 hover:border-[#cfae01]/70 hover:bg-[#0a0a0a] group"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="text-[#e2c674] flex-shrink-0 mt-0.5 sm:mt-1 text-xs sm:text-sm group-hover:text-[#f4d35e] transition-colors"
          >
            ▶
          </motion.span>
          <span className="flex-1 leading-snug">{reason.title}</span>
        </button>

        {/* Contenido expandible */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1,
                transition: { 
                  height: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
                  opacity: { duration: 0.25, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
                  opacity: { duration: 0.15 }
                }
              }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-2 sm:pt-3 text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                {reason.description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function WhyWebsiteSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const reasons = [
    {
      title: "Aparecé donde tus clientes te buscan",
      description:
        "El 97% de las personas buscan negocios en Google antes de comprar. Sin una web, simplemente no existís para ellos.",
    },
    {
      title: "Vendé mientras dormís",
      description:
        "Tu web trabaja 24/7: recibe consultas, muestra productos y cierra ventas incluso cuando tu negocio está cerrado.",
    },
    {
      title: "Tu marca, tu identidad profesional",
      description:
        "Una web profesional comunica seriedad, transmite tus valores y diferencia tu negocio de la competencia amateur.",
    },
    {
      title: "La confianza atrae más clientes",
      description:
        "Los clientes confían más en negocios con web. Testimonios, casos de éxito y presencia digital te posicionan como líder.",
    },
  ];

  return (
    <section
      id="why-website"
      ref={ref}
      className="relative bg-[#222] text-white overflow-visible min-w-[100vw]"
    >
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={controls}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        className="relative z-30 min-w-[100vw]
                   bg-[radial-gradient(circle_at_top_left,rgba(253,229,171,0.12),transparent_70%),linear-gradient(to_bottom,#bf963a,#e2c685)]
                   text-black overflow-hidden shadow-[0_-10px_10px_rgba(210,180,91,.5)]"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 text-center">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.6 },
              },
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 drop-shadow-xl px-4"
          >
            ¿Por qué tu negocio necesita una web profesional?
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.8, duration: 0.6 },
              },
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-medium text-gray-900/90 max-w-3xl mx-auto px-4"
          >
          </motion.p>

          {/* Layout independiente - Cada tarjeta es completamente independiente */}
          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10">
            {/* Fila 1 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
              <ReasonCard 
                reason={reasons[0]} 
                index={0} 
                inView={inView}
              />
              <ReasonCard 
                reason={reasons[1]} 
                index={1} 
                inView={inView}
              />
            </div>
            
            {/* Fila 2 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
              <ReasonCard 
                reason={reasons[2]} 
                index={2} 
                inView={inView}
              />
              <ReasonCard 
                reason={reasons[3]} 
                index={3} 
                inView={inView}
              />
            </div>
          </div>

          {/* Llamado final contundente */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 1.2, duration: 0.6 },
              },
            }}
            className="text-sm sm:text-base md:text-lg font-bold text-gray-900/95 max-w-2xl mx-auto italic px-4"
          >
            Si tu negocio no está en Internet, tus competidores ya están captando a tus clientes.
          </motion.p>

        </div>

        {/* Divisor decorativo inferior - responsive */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg 
            className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-[#222]"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}