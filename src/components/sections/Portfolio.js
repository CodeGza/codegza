'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Gauge, Zap, Smartphone, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { formatWhatsAppLink, cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

const projects = [
  {
    id: 'barberia',
    title: 'Landing Barbería',
    description: 'Landing page moderna para barbería con sistema de reservas y diseño oscuro elegante.',
    link: 'https://barber-landing-muestra.vercel.app/',
    image: '/projects/barberia.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    stats: {
      performance: 98,
      speed: '1.2s',
      responsive: '100%'
    },
    features: [
      'Diseño oscuro y elegante',
      'Sistema de reservas integrado',
      'Galería de trabajos',
      'Optimizado para SEO'
    ]
  },
  {
    id: 'almafotografia',
    title: 'Alma Fotografía',
    description: 'Portfolio profesional para fotógrafa con galería de alta calidad y diseño minimalista.',
    link: 'https://almafotografiauy.com',
    image: '/projects/almafoto.png',
    inProduction: true,
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
    stats: {
      performance: 95,
      speed: '1.5s',
      responsive: '100%'
    },
    features: [
      'Galería de imágenes optimizada',
      'Diseño minimalista',
      'Formulario de contacto',
      'Blog integrado'
    ]
  }
];

function BrowserMockup({ project }) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 bg-white/[0.05] rounded-md text-xs text-gray-500 max-w-[200px] truncate">
            {project.link.replace('https://', '')}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left: Info */}
          <div className="flex-1 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {project.inProduction && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                    En producción
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                <Gauge className="w-4 h-4 mx-auto text-[#D4AF37] mb-1" />
                <div className="text-lg font-bold text-white">{project.stats.performance}</div>
                <div className="text-xs text-gray-500">Performance</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                <Zap className="w-4 h-4 mx-auto text-[#D4AF37] mb-1" />
                <div className="text-lg font-bold text-white">{project.stats.speed}</div>
                <div className="text-xs text-gray-500">Load Time</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                <Smartphone className="w-4 h-4 mx-auto text-[#D4AF37] mb-1" />
                <div className="text-lg font-bold text-white">{project.stats.responsive}</div>
                <div className="text-xs text-gray-500">Responsive</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-white/[0.05] text-gray-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col gap-3 md:w-48">
            <Button
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="w-full"
            >
              Ver sitio <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              href={formatWhatsAppLink(CONTACT.phone, `Hola! Me interesa un sitio similar a ${project.title}`)}
              target="_blank"
              variant="outline"
              size="sm"
              className="w-full"
            >
              Quiero uno así
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          badge="Portfolio"
          title="Proyectos recientes"
          subtitle="Algunos de los sitios web que he desarrollado para clientes"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <BrowserMockup project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">¿Te gustaría tener un sitio web como estos?</p>
          <Button
            href={formatWhatsAppLink(CONTACT.phone, CONTACT.whatsappMessage)}
            target="_blank"
            size="lg"
          >
            Hablemos de tu proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
