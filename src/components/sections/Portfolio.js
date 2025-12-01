'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ExternalLink, Gauge, Zap, Smartphone, FileText, Code, Clock, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { formatWhatsAppLink, cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

const projects = [
  {
    id: 'barberia',
    title: 'Landing Barbería',
    description: 'Landing básica para barbería con sistema de reservas conectado a Google Calendar para gestionar turnos automáticamente sin complicaciones.',
    link: 'https://barber-landing-muestra.vercel.app/',
    screenshots: [
      '/assets/paginas/barber/img1.png',
      '/assets/paginas/barber/img2.png',
      '/assets/paginas/barber/img3.png',
      '/assets/paginas/barber/img4.png',
      '/assets/paginas/barber/img5.png',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    stats: {
      performance: '100%',
      loadTime: '1.2s',
      responsive: '100%'
    },
    features: [
      'Sección de servicios completa',
      'Sistema de reservas con Google Calendar',
      'Comentarios reales de Google',
      'Optimizado para SEO'
    ]
  },
  {
    id: 'almafotografia',
    title: 'Alma Fotografía',
    description: 'Portfolio profesional con sistema avanzado de galerías, reservas automáticas y dashboard completo para gestión de clientes y entregas.',
    link: 'https://almafotografiauy.com',
    inProduction: true,
    screenshots: [
      '/assets/paginas/alma/img1.png',
      '/assets/paginas/alma/img2.png',
      '/assets/paginas/alma/img3.png',
      '/assets/paginas/alma/img4.png',
      '/assets/paginas/alma/img5.png',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Cloudinary', 'Vercel'],
    stats: {
      pages: 23,
      lines: '+42.000',
      hours: '250–350h'
    },
    features: [
      'Galerías profesionales (favoritos, descargas, links seguros)',
      'Dashboard administrativo',
      'Reservas con Google Calendar',
      'Upload de fotos/videos optimizado',
      'Notificaciones automáticas'
    ]
  }
];

// Lightbox component
function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [images.length, onClose]);

  const nextImage = () => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  const prevImage = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Image */}
      <div
        className="relative w-[90vw] h-[90vh] touch-pan-x"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          fill
          className="object-contain pointer-events-none"
          sizes="90vw"
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);

  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-[#fde5ab]/20">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Izquierda: Galería de capturas con Browser Mockup */}
            <div className="md:w-1/2">
              <div className="space-y-4">
                {/* Browser Mockup */}
                <div className="rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 flex justify-center mx-2">
                      <div className="w-full px-4 py-1 bg-white/[0.05] rounded-md text-xs text-gray-500 truncate text-center">
                        {project.link.replace('https://', '')}
                      </div>
                    </div>
                  </div>

                  {/* Captura principal (siempre muestra la primera - portada) */}
                  <div
                    className="aspect-video relative group cursor-pointer"
                    onClick={() => { setLightboxStartIndex(0); setLightboxOpen(true); }}
                  >
                    <Image
                      src={project.screenshots[0]}
                      alt={`${project.title} - Portada`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay en hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>

                {/* Galería de thumbnails (3 imágenes) */}
                <div className="grid grid-cols-3 gap-2">
                  {project.screenshots.slice(1, 4).map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => { setLightboxStartIndex(index + 1); setLightboxOpen(true); }}
                      className="aspect-video rounded-md overflow-hidden bg-white/[0.02] border border-white/10 hover:border-[#fde5ab]/50 relative transition-all cursor-pointer group"
                    >
                      <Image
                        src={screenshot}
                        alt={`${project.title} - Captura ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {/* Overlay en hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Derecha: Información del proyecto */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  {project.inProduction && (
                    <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20 whitespace-nowrap">
                      En producción
                    </span>
                  )}
                </div>
                <p className="text-gray-400">{project.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {project.stats.performance ? (
                  <>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <Gauge className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#fde5ab] mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-white">{project.stats.performance}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Rendimiento</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#fde5ab] mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-white">{project.stats.loadTime}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Carga rápida</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#fde5ab] mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-white">{project.stats.responsive}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Responsive</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center items-center">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#fde5ab] mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-white">{project.stats.pages}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Páginas</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center items-center">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#fde5ab] mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-white break-words">{project.stats.lines}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Líneas</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center items-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#fde5ab] mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-white break-words">{project.stats.hours}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Desarrollo</div>
                    </div>
                  </>
                )}
              </div>

              {/* Features */}
              <div className="space-y-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-[#fde5ab]" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium bg-[#fde5ab]/5 text-[#fde5ab] rounded-full border border-[#fde5ab]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-3 pt-2">
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="flex-1 border-[#fde5ab]/30 text-[#fde5ab] hover:bg-[#fde5ab]/10 hover:border-[#fde5ab]"
                >
                  Ver sitio <ExternalLink className="w-4 h-4" />
                </Button>
                <Button
                  href={formatWhatsAppLink(CONTACT.phone, `Hola! Me interesa un sitio similar a ${project.title}`)}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-[#fde5ab] to-[#bfa86a] text-black hover:from-[#bfa86a] hover:to-[#fde5ab]"
                >
                  Quiero uno así
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox - Renderizado en portal para pantalla completa */}
      {lightboxOpen && typeof document !== 'undefined' && createPortal(
        <Lightbox
          images={project.screenshots}
          initialIndex={lightboxStartIndex}
          onClose={() => setLightboxOpen(false)}
        />,
        document.body
      )}
    </>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-20 md:py-28 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
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
              <ProjectCard project={project} />
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
            variant="outline"
            size="lg"
            className="border-[#fde5ab]/30 text-[#fde5ab] hover:bg-[#fde5ab]/10 hover:border-[#fde5ab]"
          >
            Hablemos de tu proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
