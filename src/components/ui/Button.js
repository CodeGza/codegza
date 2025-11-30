'use client';

import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-[#D4AF37] hover:bg-[#E8C547] text-black font-semibold',
  outline: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10',
  ghost: 'text-gray-400 hover:text-white hover:bg-white/5'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300';
  const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
