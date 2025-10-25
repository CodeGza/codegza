"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, FileCheck, Clock, Wrench, Zap, Handshake } from "lucide-react";

export default function TrustBuildingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const technologies = [
    { name: "Next.js", icon: "⚛️", color: "#000000" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4" },
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "CSS3", icon: "💅", color: "#1572B6" },
    { name: "Java", icon: "☕", color: "#007396" },
    { name: "MySQL", icon: "🗄️", color: "#4479A1" }
  ];

  const guarantees = [
    {
      icon: MessageSquare,
      title: "Comunicación Clara",
      description: "Durante todo el proyecto, el cliente sabe en qué etapa estamos y qué se está trabajando.",
      highlight: "Transparencia total",
      color: "#cfae01"
    },
    {
      icon: FileCheck,
      title: "Presupuesto Cerrado",
      description: "El precio se define antes de comenzar y se mantiene hasta la entrega final.",
      highlight: "Sin costos ocultos",
      color: "#e2c674"
    },
    {
      icon: Clock,
      title: "Tiempos Definidos",
      description: "Se establece un plazo estimado realista según la complejidad del proyecto.",
      highlight: "Compromiso real",
      color: "#cfae01"
    },
    {
      icon: Wrench,
      title: "Soporte Post-Lanzamiento",
      description: "Durante las primeras semanas después de la entrega, se ofrece ayuda para resolver dudas o pequeños ajustes.",
      highlight: "Incluido",
      color: "#e2c674"
    },
    {
      icon: Zap,
      title: "Sitios Optimizados",
      description: "Cada web se entrega lista para cargar rápido y adaptada a cualquier dispositivo.",
      highlight: "Performance",
      color: "#cfae01"
    },
    {
      icon: Handshake,
      title: "Trato Personalizado",
      description: "Cada cliente recibe atención directa, sin intermediarios, con enfoque en sus objetivos reales.",
      highlight: "Atención directa",
      color: "#e2c674"
    }
  ];

  const optionalServices = [
    {
      title: "Plan de Mantenimiento Anual",
      features: [
        "Hasta 2 mantenimientos o actualizaciones mensuales",
        "Revisión de seguridad y rendimiento cada mes",
        "Optimización ligera de velocidad o estructura",
        "Actualización de contenido básico si el cliente lo solicita"
      ],
      badge: "Opcional"
    }
  ];

  const handleMaintenanceClick = () => {
    const message = "¡Hola Codegza! %0A%0AEstoy interesado/a en el *Plan de Mantenimiento Anual* que vi en la web.%0A%0AMe gustaría consultar:%0A• Precio del plan anual%0A• Qué tipos de actualizaciones incluye%0A• Cómo funciona el servicio mensual%0A• Condiciones y disponibilidad%0A%0A¡Gracias!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="garantias"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#1a1208] via-[#0f0e0a] to-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Fondo decorativo estático - sin animación para mejor performance */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(207, 174, 1, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(207, 174, 1, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orbes brillantes - solo en desktop y con animación simplificada */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#cfae01] rounded-full blur-[80px] sm:blur-[100px] opacity-15" />
        <div className="absolute bottom-20 right-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-[#e2c674] rounded-full blur-[100px] sm:blur-[120px] opacity-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Encabezado */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#cfae01]/10 border border-[#cfae01]/30 rounded-full"
          >
            <span className="text-[#cfae01] font-semibold text-xs sm:text-sm tracking-wide">
              TU TRANQUILIDAD ES PRIORIDAD
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Trabajo con </span>
            <span className="text-[#e2c674]">Transparencia</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            En Codegza la confianza se construye con claridad, compromiso y resultados visibles.
          </p>
        </motion.div>

        {/* Tecnologías dominadas - optimizado y responsive */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8 px-4">
            Tecnologías que utiliza Codegza
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ 
                  delay: 0.3 + i * 0.03,
                  duration: 0.3
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-gradient-to-br from-[#2a2416] to-[#1a1510] border border-[#cfae01]/30 rounded-full hover:border-[#cfae01] hover:shadow-[0_0_20px_rgba(207,174,1,0.4)] transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-base sm:text-lg md:text-xl">{tech.icon}</span>
                    <span className="text-xs sm:text-sm md:text-base text-white font-medium group-hover:text-[#cfae01] transition-colors">{tech.name}</span>
                  </div>
                </div>
                {/* Tooltip simplificado */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
                  <div className="bg-[#cfae01] text-black text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                    {tech.name}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#cfae01] rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Garantías principales con iconos de Lucide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
          {guarantees.map((guarantee, i) => {
            const IconComponent = guarantee.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  delay: 0.4 + i * 0.08,
                  duration: 0.4
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="relative h-full p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#2a2416] to-[#1a1510] rounded-xl sm:rounded-2xl border border-[#cfae01]/30 hover:border-[#cfae01] transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,174,1,0.3)]">
                  {/* Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#cfae01]/20 border border-[#cfae01]/50 rounded-full">
                    <span className="text-[#cfae01] text-[10px] sm:text-xs font-bold">{guarantee.highlight}</span>
                  </div>

                  {/* Icono de Lucide */}
                  <div className="mb-3 sm:mb-4">
                    <IconComponent 
                      size={window.innerWidth < 640 ? 36 : 48}
                      color={guarantee.color}
                      strokeWidth={1.5}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>

                  {/* Contenido */}
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#ffe7b4] mb-2 sm:mb-3 group-hover:text-[#cfae01] transition-colors pr-16 sm:pr-0">
                    {guarantee.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-xs sm:text-sm">
                    {guarantee.description}
                  </p>

                  {/* Línea decorativa inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#cfae01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Servicios opcionales - Plan de Mantenimiento */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#cfae01]/10 via-[#1a1a1a] to-[#0f0f0f] border-2 border-[#cfae01]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* Badge "Opcional" mejorado y responsive */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#cfae01] to-[#e2c674] rounded-full shadow-lg">
              <span className="text-black text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">OPCIONAL</span>
            </div>

            {/* Contenido con padding-right para evitar solapamiento */}
            <div className="mb-4 sm:mb-6 pr-20 sm:pr-0">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                {optionalServices[0].title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                Para quienes desean mantener su sitio optimizado y actualizado sin preocuparse por los aspectos técnicos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {optionalServices[0].features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#cfae01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#cfae01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Botón para consultar */}
            <motion.button
              onClick={handleMaintenanceClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-3.5 md:py-4 mb-4 sm:mb-6 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(207,174,1,0.5)] transition-all duration-300"
            >
              Consultar Plan de Mantenimiento
            </motion.button>

            <div className="pt-4 sm:pt-6 border-t border-[#cfae01]/20">
              <p className="text-gray-400 text-xs sm:text-sm text-center">
                Incluye mantenimiento mensual planificado. No aplica a rediseños o nuevas funcionalidades.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}