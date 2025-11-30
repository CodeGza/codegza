"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, FileCheck, Clock, Wrench, Zap, Handshake } from "lucide-react";

export default function TrustBuildingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const guarantees = [
    {
      icon: MessageSquare,
      title: "Comunicación Clara",
      description:
        "Durante todo el proyecto, sabés en qué etapa estamos y qué se está trabajando. Transparencia total, sin sorpresas.",
      color: "#cfae01",
    },
    {
      icon: FileCheck,
      title: "Presupuesto Cerrado",
      description:
        "El precio se define antes de comenzar y se mantiene hasta la entrega final. Sin costos ocultos ni cambios de último momento.",
      color: "#e2c674",
    },
    {
      icon: Clock,
      title: "Tiempos Definidos",
      description:
        "Establezco un plazo estimado realista según la complejidad del proyecto y me comprometo a cumplirlo.",
      color: "#cfae01",
    },
    {
      icon: Wrench,
      title: "Soporte Post-Lanzamiento",
      description:
        "Durante las primeras semanas después de la entrega, ofrezco ayuda para resolver dudas o hacer pequeños ajustes.",
      color: "#e2c674",
    },
    {
      icon: Zap,
      title: "Sitios Optimizados",
      description:
        "Cada web se entrega lista para cargar rápido y adaptada a cualquier dispositivo. Performance garantizada.",
      color: "#cfae01",
    },
    {
      icon: Handshake,
      title: "Trato Personalizado",
      description:
        "Atención directa, sin intermediarios. Me enfoco en tus objetivos reales para lograr el mejor resultado.",
      color: "#e2c674",
    },
  ];

  return (
    <section
      id="garantias"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#1a1208] via-[#0f0e0a] to-[#0a0a0a] text-white overflow-hidden py-20 md:py-32 lg:py-40"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#cfae01] rounded-full blur-[100px] opacity-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#e2c674] rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Cómo </span>
            <span className="text-[#e2c674]">trabajo</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Mi compromiso con cada proyecto va más allá del código. Esto es lo que garantizo en cada trabajo:
          </p>
        </motion.div>

        {/* Garantías - grid 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {guarantees.map((guarantee, i) => {
            const IconComponent = guarantee.icon;

            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex items-start gap-5 md:gap-6 group"
              >
                {/* Icono */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#cfae01]/20 to-[#e2c674]/10 border-2 border-[#cfae01]/40 flex items-center justify-center md:group-hover:scale-110 md:group-hover:border-[#cfae01] transition-all duration-300">
                    <IconComponent
                      size={32}
                      color={guarantee.color}
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Punto brillante - solo en desktop */}
                  <div className="hidden md:block absolute -top-1 -right-1 w-4 h-4 bg-[#cfae01] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Contenido */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:group-hover:text-[#e2c674] transition-colors">
                    {guarantee.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
