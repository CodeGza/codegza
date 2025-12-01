"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { MessageCircle, FileText, Settings, Rocket } from "lucide-react";

export default function ProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeStep, setActiveStep] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024); // ✅ evita error en SSR

  // ✅ Manejamos el ancho de ventana de forma segura
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const steps = [
    {
      number: "01",
      title: "Consulta y Análisis",
      description:
        "Charlamos sobre tu negocio, tus objetivos y el estilo que buscás. Te asesoro sobre la mejor opción para tu web.",
      icon: MessageCircle,
      details: [
        "Reunión o contacto inicial",
        "Identificación de necesidades",
        "Evaluación del tipo de sitio ideal",
        "Orientación y asesoramiento inicial",
      ],
      color: "#fde5ab",
    },
    {
      number: "02",
      title: "Propuesta & Plan de Acción",
      description:
        "Te envío una propuesta clara con el costo final, tiempos estimados y lo que incluye. Todo sin letra chica.",
      icon: FileText,
      details: [
        "Presupuesto detallado",
        "Alcance y tiempos definidos",
        "Condiciones transparentes",
        "Revisión y aprobación",
      ],
      color: "#bfa86a",
    },
    {
      number: "03",
      title: "Desarrollo del Proyecto",
      description:
        "Una vez confirmado el anticipo, arranco con el diseño y desarrollo. Te voy mostrando avances para que puedas opinar.",
      icon: Settings,
      details: [
        "Diseño visual adaptado a tu marca",
        "Desarrollo técnico optimizado",
        "Adaptación a móviles y tablets",
        "Feedback y revisiones intermedias",
      ],
      color: "#fde5ab",
    },
    {
      number: "04",
      title: "Entrega, Publicación y Soporte",
      description:
        "Publicamos tu sitio y te ayudo a que empieces a usarlo sin complicaciones. También podés sumar mantenimiento mensual si querés que siga al día.",
      icon: Rocket,
      details: [
        "Revisión final y ajustes",
        "Publicación profesional",
        "Entrega de accesos y guía de uso",
        "Opción de mantenimiento mensual",
      ],
      color: "#bfa86a",
    },
  ];

  // ✅ Evita usar window directamente
  const handleStartProject = () => {
    const message =
      "Hola Codegza!%0A%0AQuiero iniciar un proyecto con ustedes.%0A%0APor favor, me gustaria coordinar una reunion inicial para:%0A- Conversar sobre mi negocio y objetivos%0A- Conocer las opciones disponibles%0A- Recibir asesoramiento sobre el mejor tipo de sitio%0A- Entender los proximos pasos del proceso%0A%0ADatos de mi negocio:%0A- Nombre:%0A- Rubro:%0A- Que busco lograr con el sitio:%0A%0AQuedo atento a su respuesta. Muchas gracias!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section
      id="proceso"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fde5ab 0px, #fde5ab 2px, transparent 2px, transparent 20px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Encabezado */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#fde5ab]/10 border border-[#fde5ab]/30 rounded-full"
          >
            <span className="text-[#fde5ab] font-semibold text-xs sm:text-sm tracking-wide">
              NUESTRO PROCESO
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Cómo Trabajamos </span>
            <span className="text-[#bfa86a]">Contigo</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Un proceso transparente y colaborativo en 4 pasos simples
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Línea central */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#fde5ab] via-[#bfa86a] to-[#fde5ab] hidden lg:block"
            style={{ transform: "translateX(-50%)" }}
          />

          {/* Pasos */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-20">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-12`}
                >
                  {/* Número en la línea central - solo desktop */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-[#fde5ab] items-center justify-center z-10 shadow-[0_0_15px_rgba(253,229,171,0.4)]"
                  >
                    <span className="text-lg font-bold text-[#fde5ab]">
                      {step.number}
                    </span>
                  </motion.div>

                  <div
                    className={`w-full lg:w-[calc(50%-3rem)] ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <motion.div
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                      className="relative group"
                    >
                      <div
                        className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer"
                        style={{
                          background:
                            activeStep === index
                              ? "linear-gradient(135deg, #1a1a1a, #0f0f0f)"
                              : "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
                          boxShadow:
                            activeStep === index
                              ? `0 0 30px rgba(207, 174, 1, 0.3), inset 0 0 20px rgba(0,0,0,0.5)`
                              : "0 0 20px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5)",
                          transform:
                            activeStep === index ? "scale(1.03)" : "scale(1)",
                        }}
                      >
                        {/* Número + Icono */}
                        <div
                          className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${
                            isLeft
                              ? "lg:flex-row-reverse lg:justify-start"
                              : "lg:flex-row lg:justify-start"
                          } flex-row justify-start`}
                        >
                          <span
                            className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                            style={{ color: step.color }}
                          >
                            {step.number}
                          </span>
                          <motion.div
                            animate={{
                              rotate:
                                activeStep === index ? [0, -10, 10, 0] : 0,
                              scale: activeStep === index ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent
                              size={
                                windowWidth < 640
                                  ? 36
                                  : windowWidth < 768
                                  ? 42
                                  : 48
                              }
                              color={step.color}
                              strokeWidth={1.5}
                            />
                          </motion.div>
                        </div>

                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#ffe7b4] mb-2 sm:mb-3 group-hover:text-[#ffd98e] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors">
                          {step.description}
                        </p>

                        {/* Detalles expandibles */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: activeStep === index ? "auto" : 0,
                            opacity: activeStep === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-[#fde5ab]/20">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                                  style={{ backgroundColor: step.color }}
                                />
                                <span className="text-xs sm:text-sm text-gray-300">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 md:mt-20 px-4"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            ¿Listo para comenzar tu proyecto?
          </p>
          <motion.button
            onClick={handleStartProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fde5ab] to-[#bfa86a] text-black text-sm sm:text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(253,229,171,0.5)]"
          >
            Hablemos de Tu Proyecto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
