'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'border-b border-white/10 last:border-0',
        className
      )}
      {...props}
    />
  );
}

export function AccordionTrigger({ children, className, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between py-5 text-left text-lg font-medium text-white transition-all hover:text-[#D4AF37] [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-300" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ children, className, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-gray-400 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-5 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
}
