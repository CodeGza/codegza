"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Rocket, Diamond, Smartphone, Zap, Wrench, Wallet } from "lucide-react";

export default function ValueSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  // ✅ Manejamos el tamaño de la ventana de forma segura (solo en cliente)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); // inicializa
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const benefits = [
    {
      icon: Rocket,
      title: "Entrega Rápida",
      description:
        "Desarrollamos con procesos ágiles para que tu sitio esté online en menos de dos semanas, sin comprometer calidad ni detalle.",
      highlight: "7-14 días hábiles según el alcance del proyecto",
    },
    {
      icon: Diamond,
      title: "Diseño Premium",
      description:
        "Tu marca, con presencia profesional. Creamos diseños modernos, coherentes y memorables que reflejan la esencia de tu negocio.",
      highlight: "100% personalizado",
    },
    {
      icon: Smartphone,
      title: "Responsive Total",
      description:
        "Perfecta en cualquier dispositivo. Tu web se adapta automáticamente a celulares, tablets y escritorio para brindar una experiencia impecable.",
      highlight: "Todas las pantallas",
    },
    {
      icon: Zap,
      title: "Carga Optimizada",
      description:
        "Velocidad que marca la diferencia. Sitios rápidos, livianos y optimizados para SEO y experiencia de usuario.",
      highlight: "<5 segundos",
    },
    {
      icon: Wrench,
      title: "Garantía de Funcionamiento",
      description:
        "Acompañamiento post-lanzamiento. Incluye soporte inicial y ajustes menores para asegurar que todo funcione como debe.",
      highlight: "Soporte incluido",
    },
    {
      icon: Wallet,
      title: "Precio Transparente",
      description:
        "Sin sorpresas ni costos ocultos. Desde el primer día sabés exactamente qué incluye cada paquete y cuánto vas a invertir.",
      highlight: "Precio claro",
    },
  ];

  // ✅ Verificación de window antes de abrir WhatsApp
  const handleRequestQuote = () => {
    const message =
      "Hola Codegza!%0A%0AQuiero solicitar una cotizacion gratuita para mi proyecto web.%0A%0APor favor, necesito informacion sobre:%0A- Precio estimado para mi tipo de proyecto%0A- Tiempo de desarrollo%0A- Que incluye el servicio%0A- Proceso de trabajo%0A%0AInformacion de mi proyecto:%0A- Tipo de sitio que necesito:%0A- Funcionalidades que busco:%0A- Plazo que manejo:%0A%0AMuchas gracias por su atencion!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section
      id="value-section"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#222] to-[#0f0f0f] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-10 md:pt-12">
        {/* Encabezado */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#cfae01]/10 border border-[#cfae01]/30 rounded-full"
          >
            <span className="text-[#cfae01] font-semibold text-xs sm:text-sm tracking-wide">
              ¿POR QUÉ ELEGIRNOS?
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Lo que nos hace </span>
            <span className="text-[#e2c674]">diferentes</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Llevá tu negocio online con una web profesional, diseñada para vender y generar confianza desde el primer clic.
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Resplandor dorado de fondo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 0.4 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(207,174,1,0.3) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <div
                  className="relative h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer"
                  style={{
                    background:
                      hoveredIndex === index
                        ? "radial-gradient(circle at top left, rgba(207,174,1,0.08) 0%, transparent 50%), linear-gradient(to bottom right, #1a1a1a, #0f0f0f)"
                        : "linear-gradient(to bottom right, #1a1a1a, #0f0f0f)",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 0 12px 2px rgba(0,0,0,0.8), inset 0 0 25px 3px rgba(0,0,0,0.3), 3px 3px 4px -1px #cfae01, -4px -3px 4px -2px #e2c057"
                        : "0 0 8px 2px #000, inset 0 0 20px 3px rgba(0,0,0,0), 2px 2px 2px -1px #6b5d2e, -3px -2px 2px -2px #7a6b3a",
                    transform:
                      hoveredIndex === index
                        ? "translateY(-8px) scale(1.02)"
                        : "translateY(0) scale(1)",
                  }}
                >
                  {/* Borde brillante superior */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#cfae01] to-transparent origin-center"
                  />

                  {/* Icono de Lucide */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                      rotate:
                        hoveredIndex === index ? [0, -8, 8, 0] : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="mb-3 sm:mb-4"
                  >
                    <IconComponent
                      size={
                        windowWidth < 640
                          ? 40
                          : windowWidth < 768
                          ? 48
                          : 56
                      }
                      color="#cfae01"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Badge de highlight */}
                  <div className="inline-block mb-2 sm:mb-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#cfae01]/10 border border-[#cfae01]/30 rounded-full">
                    <span className="text-[#cfae01] text-[10px] sm:text-xs font-bold tracking-wide">
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#ffe7b4] mb-2 sm:mb-3 group-hover:text-[#ffd98e] transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-xs sm:text-sm">
                    {benefit.description}
                  </p>

                  {/* Brillo en esquina */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#cfae01]"
                    style={{
                      boxShadow:
                        "0 0 10px #cfae01, 0 0 20px #cfae01",
                    }}
                  />

                  {/* Partícula brillante central */}
                  <motion.div
                    animate={{
                      scale:
                        hoveredIndex === index
                          ? [0, 1.5, 0]
                          : 0,
                      opacity:
                        hoveredIndex === index
                          ? [0, 0.8, 0]
                          : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat:
                        hoveredIndex === index ? Infinity : 0,
                      repeatDelay: 0.5,
                    }}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#cfae01] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10 sm:mt-12 md:mt-16 px-4"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            ¿Listo para destacar online y atraer más clientes?
          </p>
          <motion.button
            onClick={handleRequestQuote}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold text-sm sm:text-base rounded-full 
                       transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(207,174,1,0.5)]"
          >
            Solicitar Cotización Gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
