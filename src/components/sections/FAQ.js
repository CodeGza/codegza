'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <SectionHeading
          badge="FAQ"
          title="Preguntas frecuentes"
          subtitle="Respuestas a las dudas más comunes sobre mis servicios"
        />

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
