"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Smartphone, Zap, MessageCircle, Calendar } from "lucide-react";

export default function ProjectDemoSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024); // ✅ Evita SSR crash

  // ✅ Manejar window.innerWidth de forma segura
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const demoProject = {
    title: "Barbería Profesional",
    subtitle: "Landing Page Moderna",
    description:
      "Una landing page profesional para barberías con sistema de reservas integrado con Google Calendar y WhatsApp, galería de trabajos, descripción de servicios y diseño totalmente responsive.",
    url: "https://barber-landing-muestra.vercel.app/",
    features: [
      { icon: Smartphone, text: "Diseño Adaptativo", detail: "Optimizado para móviles, tablets y escritorio", color: "#cfae01" },
      { icon: Zap, text: "Rendimiento Superior", detail: "Carga rápida y experiencia fluida", color: "#e2c674" },
      { icon: MessageCircle, text: "Integración con WhatsApp", detail: "Contacto directo desde el sitio", color: "#cfae01" },
      { icon: Calendar, text: "Reservas Automáticas", detail: "Conexión real con Google Calendar", color: "#e2c674" },
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { value: "95+", label: "Performance" },
      { value: "<2s", label: "Carga" },
      { value: "100%", label: "Responsive" },
    ],
  };

  // ✅ Proteger uso de window.open
  const handleRequestSite = () => {
    const message =
      "Hola Codegza!%0A%0AVisualice el proyecto de demostracion de la Barberia Profesional en su web y me interesa mucho.%0A%0AMe gustaria solicitar un sitio similar para mi negocio:%0A%0A- Nombre de mi negocio:%0A- Tipo de servicio:%0A- Que funcionalidades necesito:%0A%0APor favor, podrian enviarme informacion sobre:%0A- Precio aproximado%0A- Tiempo de desarrollo%0A- Proceso de trabajo%0A%0AMuchas gracias!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#121212] to-[#1a1208] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Fondo con efecto de spotlight */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] md:w-[800px] h-[600px] sm:h-[700px] md:h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(207, 174, 1, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
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
              PROYECTO DE DEMOSTRACIÓN
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Ejemplo de </span>
            <span className="text-[#e2c674]">Proyecto Real</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Una demostración funcional del tipo de sitio que Codegza puede desarrollar: moderno, optimizado y con integraciones reales.
          </p>
        </motion.div>

        {/* Contenedor principal del demo */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Barra navegador falsa */}
            <div className="hidden sm:flex bg-[#1a1a1a] px-3 sm:px-4 py-2 sm:py-3 items-center gap-2 border-b border-gray-700">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 ml-2 sm:ml-4 bg-[#0f0f0f] rounded-lg px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-gray-400 text-xs sm:text-sm truncate">{demoProject.url}</span>
              </div>
            </div>

            {/* Imagen del demo */}
            <div className="relative bg-gradient-to-br from-[#cfae01]/10 to-[#0a0a0a] aspect-video flex items-center justify-center overflow-hidden group">
              {/* Overlay hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10 flex items-center justify-center"
              >
                <div className="text-center space-y-3 sm:space-y-4 px-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href={demoProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-xs sm:text-sm md:text-base"
                    >
                      <span>Ver Sitio en Vivo</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </motion.div>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white text-xs sm:text-sm font-medium"
                  >
                    Haz clic para explorar el sitio completo
                  </motion.p>
                </div>
              </motion.div>

              <img
                src="./capturaLandingBarberia.png"
                alt="Demo Barbería Profesional"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Información del proyecto */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Izquierda */}
            <motion.div initial={{ x: -50, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffe7b4] mb-3 sm:mb-4">{demoProject.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">{demoProject.description}</p>

              {/* Features */}
              <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
                {demoProject.features.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: -30, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-2 sm:gap-3 group cursor-pointer"
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <IconComponent
                          size={windowWidth < 640 ? 20 : 24}
                          color={feature.color}
                          strokeWidth={2}
                          className="group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div>
                        <p className="text-white text-sm sm:text-base font-semibold group-hover:text-[#cfae01] transition-colors">
                          {feature.text}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">{feature.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Tecnologías utilizadas:</p>
                <div className="flex flex-wrap gap-2">
                  {demoProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#1a1a1a] border border-[#cfae01]/30 rounded-full text-[#cfae01] text-xs sm:text-sm font-medium hover:bg-[#cfae01]/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Derecha */}
            <motion.div initial={{ x: 50, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                {demoProject.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className="text-center p-2.5 sm:p-3 md:p-4 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-lg sm:rounded-xl border border-[#cfae01]/20 hover:border-[#cfae01]/50 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#cfae01] mb-0.5 sm:mb-1 break-words">{metric.value}</div>
                    <div className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#cfae01]/10 to-transparent border border-[#cfae01]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">¿Tu Negocio Necesita Esto?</h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  Codegza puede desarrollar un sitio igual de funcional, adaptado a la identidad y necesidades de tu negocio.
                </p>
                <div className="space-y-2.5 sm:space-y-3">
                  <motion.button
                    onClick={handleRequestSite}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold text-sm sm:text-base rounded-full transition-transform duration-300 shadow-lg"
                  >
                    Solicitar Mi Sitio
                  </motion.button>
                  <motion.a
                    href={demoProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-[#cfae01] text-[#cfae01] font-bold text-sm sm:text-base rounded-full hover:bg-[#cfae01]/10 transition-all duration-300 text-center"
                  >
                    Explorar Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Nota final */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ delay: 1, duration: 0.6 }} className="mt-10 sm:mt-12 md:mt-16 text-center px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-[#cfae01]/20 rounded-full">
            <span className="text-[#cfae01] text-lg sm:text-xl md:text-2xl">✨</span>
            <span className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">
              Este es solo un ejemplo de demostración. Cada proyecto se desarrolla desde cero, con un enfoque totalmente personalizado.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
