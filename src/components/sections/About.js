'use client';

import { motion } from 'framer-motion';
import { Code2, MessageSquare, Target, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GradientText from '@/components/ui/GradientText';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '@/lib/animations';

const values = [
  {
    icon: Target,
    title: 'Enfoque en resultados',
    description: 'Cada proyecto está diseñado para cumplir objetivos de negocio específicos'
  },
  {
    icon: Code2,
    title: 'Código limpio',
    description: 'Desarrollo con las mejores prácticas para un sitio rápido y mantenible'
  },
  {
    icon: MessageSquare,
    title: 'Comunicación constante',
    description: 'Te mantengo informado en cada etapa del proyecto'
  },
  {
    icon: Zap,
    title: 'Entrega eficiente',
    description: 'Cumplo con los plazos acordados sin sacrificar calidad'
  }
];

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-32 md:py-40 lg:py-48 px-4 relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f] to-[#1a1208] min-h-screen">
      {/* Background con luz central */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/6 rounded-full blur-[120px]" />
        {/* Luces laterales sutiles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col justify-center min-h-screen">
        <SectionHeading
          title="Sobre mí"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <RevealOnScroll>
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Soy <GradientText>Gonzalo</GradientText>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Desde que empecé en el desarrollo web descubrí que lo que más disfruto es convertir ideas en algo real, funcional y que la gente pueda usar de verdad. Me apasiona crear sitios que no solo se vean bien, sino que aporten valor, simplifiquen procesos y ayuden a crecer.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Trabajo con compromiso, cuidando cada detalle del diseño, la experiencia y el rendimiento. Me gusta mantener una comunicación clara durante todo el proceso para que el proyecto avance sin sorpresas y con resultados concretos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Construyo cada web como si fuera para mí, buscando que marque la diferencia.
              </p>
            </div>
          </RevealOnScroll>

          {/* Values grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-[#D4AF37] mb-4" />
                <h3 className="font-semibold text-white mb-2 text-base">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
