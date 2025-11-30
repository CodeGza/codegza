'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';

const technologies = [
  {
    name: 'Next.js',
    description: 'Framework React',
    icon: (
      <svg viewBox="0 0 180 180" fill="none" className="w-10 h-10">
        <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    description: 'Lenguaje principal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F7DF1E]">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    description: 'Framework CSS',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#06B6D4]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    description: 'Control de versiones',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Supabase',
    description: 'Backend & Auth',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#3ECF8E]">
        <path d="M13.287 21.293c-.492.604-1.453.267-1.477-.518l-.365-12.02h8.87c1.607 0 2.502 1.867 1.482 3.093l-8.51 9.445z" />
        <path d="M10.713 2.707c.492-.604 1.453-.267 1.477.518l.183 12.02H3.772c-1.607 0-2.502-1.867-1.482-3.093l8.423-9.445z" fillOpacity=".6" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    description: 'Deployment',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path d="M12 2L2 19.5h20L12 2z" />
      </svg>
    )
  },
  {
    name: 'Figma',
    description: 'Diseño UI/UX',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M8.5 2A3.5 3.5 0 0 0 5 5.5 3.5 3.5 0 0 0 8.5 9H12V2H8.5z" fill="#F24E1E" />
        <path d="M12 2v7h3.5A3.5 3.5 0 0 0 19 5.5 3.5 3.5 0 0 0 15.5 2H12z" fill="#FF7262" />
        <path d="M12 9v7h3.5a3.5 3.5 0 0 0 0-7H12z" fill="#1ABCFE" />
        <path d="M5 12.5A3.5 3.5 0 0 0 8.5 16H12V9H8.5A3.5 3.5 0 0 0 5 12.5z" fill="#A259FF" />
        <path d="M5 19.5A3.5 3.5 0 0 0 8.5 23 3.5 3.5 0 0 0 12 19.5V16H8.5A3.5 3.5 0 0 0 5 19.5z" fill="#0ACF83" />
      </svg>
    )
  },
  {
    name: 'Framer Motion',
    description: 'Animaciones',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#0055FF]">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    )
  }
];

export default function Technologies() {
  const [horizontalBeams, setHorizontalBeams] = useState([]);
  const [verticalBeams, setVerticalBeams] = useState([]);
  const gridSize = 50; // Debe coincidir con bg-[size:50px_50px]

  useEffect(() => {
    const generateHorizontalBeams = () => {
      const count = Math.floor(Math.random() * 2) + 2; // 2-3 beams
      const positions = [];

      for (let i = 0; i < count; i++) {
        const y = Math.floor(Math.random() * 20) * gridSize; // Random grid line
        positions.push({
          id: Math.random(),
          y,
          duration: 8 + Math.random() * 6, // 8-14 segundos
        });
      }

      setHorizontalBeams(positions);

      const maxDuration = Math.max(...positions.map(b => b.duration));
      setTimeout(generateHorizontalBeams, (maxDuration - 1) * 1000);
    };

    const generateVerticalBeams = () => {
      const count = Math.floor(Math.random() * 2) + 2; // 2-3 beams
      const positions = [];

      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 25) * gridSize; // Random grid line
        positions.push({
          id: Math.random(),
          x,
          duration: 8 + Math.random() * 6, // 8-14 segundos
        });
      }

      setVerticalBeams(positions);

      const maxDuration = Math.max(...positions.map(b => b.duration));
      setTimeout(generateVerticalBeams, (maxDuration - 1) * 1000);
    };

    generateHorizontalBeams();
    generateVerticalBeams();
  }, []);

  return (
    <section id="tecnologias" className="py-20 md:py-32 lg:py-40 px-4 relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Grid Meteors */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Horizontal meteors */}
        {horizontalBeams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute left-0"
            style={{ top: beam.y }}
            initial={{ x: -100 }}
            animate={{ x: '100vw' }}
            transition={{
              duration: beam.duration,
              ease: 'linear',
            }}
          >
            <div
              className="w-14 h-px rounded-full bg-gradient-to-r from-transparent via-[#E8C547] to-transparent"
              style={{
                boxShadow: '0 0 10px rgba(232,197,71,0.8)',
              }}
            />
          </motion.div>
        ))}

        {/* Vertical meteors */}
        {verticalBeams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute top-0"
            style={{ left: beam.x }}
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: beam.duration,
              ease: 'linear',
            }}
          >
            <div
              className="h-14 w-px rounded-full bg-gradient-to-b from-transparent via-[#E8C547] to-transparent"
              style={{
                boxShadow: '0 0 10px rgba(232,197,71,0.8)',
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative w-full">
        <SectionHeading
          badge="Stack"
          title="Tecnologías que uso"
          subtitle="Herramientas modernas para crear sitios web rápidos, seguros y escalables"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={staggerItem}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D4AF37]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-xl bg-white/[0.05] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-500">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
