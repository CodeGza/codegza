'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Globe from '@/components/Globe';

const SUBTITLES = [
  'Sitios web que convierten visitas en clientes',
  'Landing pages optimizadas para ventas',
  'Sistemas de gestión y reservas automáticas',
  'Soluciones web a medida para tu negocio',
];

export default function Hero() {
  const subtitles = useMemo(() => SUBTITLES, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = subtitles[currentIndex];

    if (!isDeleting && displayText.length === currentText.length) {
      // Terminó de escribir, esperar antes de borrar
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pauseTimeout);
    }

    const typingSpeed = isDeleting ? 30 : 50;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        // Borrando
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          // Terminó de borrar, pasar al siguiente texto
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, subtitles]);

  const handleCTAClick = (type) => {
    if (type === 'contact') {
      window.open('https://wa.me/59895436987?text=¡Hola%20Codegza!%20Quiero%20hablar%20sobre%20mi%20proyecto', '_blank');
    } else if (type === 'portfolio') {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,229,171,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(191,168,106,0.05)_0%,transparent_50%)]" />

        {/* Dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(253,229,171,0.4) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Globe Background (Mobile/Tablet) */}
      <div className="absolute inset-0 z-0 lg:hidden flex items-center justify-center opacity-20">
        <div className="w-full h-full max-w-[500px] max-h-[500px]">
          <Globe className="w-full h-full" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-6 relative z-20"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Tu negocio merece</span>
              <br />
              <span className="bg-gradient-to-r from-[#fde5ab] via-[#e2c674] to-[#bfa86a] bg-clip-text text-transparent">
                una presencia online profesional
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-14 sm:h-16"
            >
              <p className="text-base sm:text-lg text-gray-400">
                <span className="inline-block">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-5 sm:h-6 bg-[#fde5ab] ml-1 animate-pulse" />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed"
            >
              Diseño y desarrollo web profesional adaptado a tus objetivos.
              Transformamos tu idea en un sitio web moderno que convierte visitas en resultados.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Primary CTA */}
              <button
                onClick={() => handleCTAClick('contact')}
                className="group relative px-6 py-3 bg-gradient-to-r from-[#fde5ab] to-[#bfa86a] rounded-xl font-semibold text-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,229,171,0.4)]"
              >
                <span className="relative z-10">Hablemos hoy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#bfa86a] to-[#fde5ab] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => handleCTAClick('portfolio')}
                className="px-6 py-3 bg-transparent border-2 border-[#fde5ab]/30 rounded-xl font-semibold text-[#fde5ab] hover:bg-[#fde5ab]/10 hover:border-[#fde5ab] transition-all duration-300"
              >
                Ver proyectos
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-4 sm:pt-6 border-t border-white/10"
            >
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Responsive</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">7-35</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Días entrega</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">SEO</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Incluido</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Globe (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            className="relative hidden lg:flex items-center justify-center z-10"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#fde5ab]/20 rounded-full blur-3xl" />

              {/* Globe */}
              <Globe className="relative w-full h-full" />

              {/* Orbiting dots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#fde5ab] rounded-full blur-sm" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#fde5ab]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
