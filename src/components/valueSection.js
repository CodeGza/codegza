"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Diamond, Smartphone, Zap, MessageSquare, FileCheck, Clock, Wrench, Handshake } from "lucide-react";

export default function ValueSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const benefits = [
    {
      icon: Diamond,
      title: "Diseño Premium",
      description:
        "Tu marca, con presencia profesional. Creamos diseños modernos, coherentes y memorables que reflejan la esencia de tu negocio.",
    },
    {
      icon: Smartphone,
      title: "Responsive Total",
      description:
        "Perfecta en cualquier dispositivo. Tu web se adapta automáticamente a celulares, tablets y escritorio para brindar una experiencia impecable.",
    },
    {
      icon: Zap,
      title: "Carga Optimizada",
      description:
        "Cada web se entrega lista para cargar rápido y optimizada para SEO. Velocidad y rendimiento garantizados.",
    },
    {
      icon: MessageSquare,
      title: "Comunicación Clara",
      description:
        "Durante todo el proyecto, sabés en qué etapa estamos y qué se está trabajando. Transparencia total, sin sorpresas.",
    },
    {
      icon: FileCheck,
      title: "Presupuesto Cerrado",
      description:
        "El precio se define antes de comenzar y se mantiene hasta la entrega final. Sin costos ocultos ni cambios de último momento.",
    },
    {
      icon: Clock,
      title: "Tiempos Definidos",
      description:
        "Establezco un plazo estimado realista según la complejidad del proyecto y me comprometo a cumplirlo.",
    },
    {
      icon: Wrench,
      title: "Soporte Post-Lanzamiento",
      description:
        "Durante las primeras semanas después de la entrega, ofrezco ayuda para resolver dudas o hacer pequeños ajustes.",
    },
    {
      icon: Handshake,
      title: "Trato Personalizado",
      description:
        "Atención directa, sin intermediarios. Me enfoco en tus objetivos reales para lograr el mejor resultado.",
    },
  ];

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
      className="relative min-w-[100vw] bg-[#222] text-white overflow-hidden py-20 md:py-32 lg:py-40"
      style={{
        background: 'linear-gradient(to bottom, #222 0%, #222 20%, #0f0f0f 100%)'
      }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-[#fde5ab] rounded-full blur-[100px] opacity-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#bfa86a] rounded-full blur-[120px] opacity-10" />
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
            <span className="text-white">Lo que nos hace </span>
            <span className="text-[#e2c674]">diferentes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Mi compromiso con cada proyecto va más allá del código. Esto es lo que garantizo en cada trabajo:
          </p>
        </motion.div>

        {/* Grid 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.icon;

            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex items-start gap-5 md:gap-6"
              >
                {/* Icono con fondo negro y borde dorado */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#2d2d2d] border-2 border-[#fde5ab] flex items-center justify-center">
                    <IconComponent
                      size={32}
                      className="text-[#fde5ab]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-400 mb-6 text-lg md:text-xl">
            ¿Listo para destacar online y atraer más clientes?
          </p>
          <motion.button
            onClick={handleRequestQuote}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-transparent font-bold text-base rounded-full
                       border-2 border-[#fde5ab] overflow-hidden
                       transition-all duration-300 hover:border-[#bfa86a] hover:shadow-[0_0_30px_rgba(253,229,171,0.4)]"
          >
            {/* Fondo con blur en hover */}
            <span className="absolute inset-0 bg-[#fde5ab]/0 backdrop-blur-none group-hover:bg-[#fde5ab]/20 group-hover:backdrop-blur-sm transition-all duration-300" />

            {/* Brillo dorado animado */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fde5ab] to-transparent" />
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fde5ab] to-transparent" />
            </span>

            <span className="relative z-10 bg-gradient-to-r from-[#fde5ab] to-[#bfa86a] bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
              Solicitar Cotización Gratis
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
