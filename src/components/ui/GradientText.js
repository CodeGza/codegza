'use client';

export default function GradientText({ children, className = '' }) {
  return (
    <span className={`bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
