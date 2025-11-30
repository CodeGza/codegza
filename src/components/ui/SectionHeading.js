'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function SectionHeading({ badge, title, subtitle, centered = true }) {
  return (
    <motion.div
      {...fadeInUp}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-[#D4AF37] uppercase bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
