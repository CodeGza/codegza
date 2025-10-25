"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Rocket, Briefcase, ShoppingCart, Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Landing Básica",
      subtitle: "Presencia profesional en una sola página",
      icon: Rocket,
      idealFor: "Ideal para marcas personales, profesionales o negocios que recién comienzan",
      features: [
        "1 página completamente personalizada",
        "Diseño profesional adaptado a tu marca",
        "Formulario de contacto funcional",
        "Optimización para velocidad y SEO básico",
        "Diseño responsive (móviles, tablets y PC)"
      ],
      deliveryTime: "7-14 días hábiles",
      cta: "Solicitá tu presupuesto",
      whatsappMessage: "¡Hola Codegza! %0A%0AEstoy interesado/a en el plan *Landing Básica*.%0A%0AMe gustaría recibir más información sobre:%0A• Precio%0A• Tiempo de entrega%0A• Proceso de trabajo%0A%0A¡Gracias!",
      color: "#cfae01",
      popular: false
    },
    {
      name: "Web Profesional",
      subtitle: "Diseño integral para negocios consolidados",
      icon: Briefcase,
      idealFor: "Ideal para empresas, estudios o servicios que buscan una web moderna y funcional",
      features: [
        "Hasta 5 secciones personalizadas",
        "Diseño 100% adaptado a tu identidad",
        "Integraciones funcionales (WhatsApp, Maps, Redes)",
        "Optimización de carga y SEO técnico básico",
        "Formularios múltiples (contacto, presupuestos, etc.)",
        "Panel de gestión simple (opcional)"
      ],
      deliveryTime: "14-21 días hábiles",
      cta: "Quiero una Web Profesional",
      whatsappMessage: "¡Hola Codegza! %0A%0AEstoy muy interesado/a en el plan *Web Profesional* (el más elegido).%0A%0AMe gustaría que me cuenten:%0A• Precio del plan%0A• Qué incluye exactamente%0A• Cómo funciona el proceso%0A• Ejemplos de trabajos anteriores%0A%0A¡Muchas gracias!",
      color: "#e2c674",
      popular: true
    },
    {
      name: "E-commerce Premium",
      subtitle: "Tu tienda online, lista para vender",
      icon: ShoppingCart,
      idealFor: "Ideal para negocios que buscan vender productos o servicios online de forma sencilla",
      features: [
        "Tienda funcional con carrito y pasarela de pagos",
        "Gestión básica de productos y pedidos",
        "Integración con WhatsApp y redes sociales",
        "Diseño a medida y adaptable a todos los dispositivos",
        "SEO básico para productos",
        "Capacitación para manejar tu tienda"
      ],
      deliveryTime: "21-35 días hábiles",
      cta: "Comenzá tu Tienda Online",
      whatsappMessage: "¡Hola Codegza! %0A%0AQuiero empezar mi tienda online con el plan *E-commerce Premium*.%0A%0APor favor, necesito información sobre:%0A• Precio del e-commerce%0A• Qué métodos de pago puedo integrar%0A• Cómo funciona la gestión de productos%0A• Capacitación incluida%0A%0A¡Espero su respuesta!",
      color: "#d4af37",
      popular: false
    }
  ];

  const handlePlanClick = (plan) => {
    const whatsappUrl = `https://wa.me/59895436987?text=${plan.whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSpecialPriceClick = () => {
    const message = "¡Hola Codegza! %0A%0AQuiero consultar por el *PRECIO DE LANZAMIENTO EXCLUSIVO* que vi en la web.%0A%0AEstoy entre los primeros 10 clientes y me gustaría conocer:%0A• Los precios especiales disponibles%0A• Qué planes están en oferta%0A• Hasta cuándo dura la promoción%0A%0A¡No quiero perder esta oportunidad!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="planes"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#1a1208] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(207, 174, 1, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Resplandores de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#cfae01] rounded-full blur-[120px] sm:blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#e2c674] rounded-full blur-[120px] sm:blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Encabezado */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#cfae01]/10 border border-[#cfae01]/30 rounded-full"
          >
            <span className="text-[#cfae01] font-semibold text-xs sm:text-sm tracking-wide">
              PLANES Y SERVICIOS
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Elegí el Plan </span>
            <span className="text-[#e2c674]">Ideal para Vos</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Cada negocio es diferente. En Codegza desarrollamos sitios web adaptados a tus objetivos, con precios claros y resultados reales.
          </p>
        </motion.div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isHovered = hoveredPlan === index;
            
            return (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.15, 
                  duration: 0.6,
                  ease: "easeOut" 
                }}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                className="relative group"
              >
                {/* Badge "POPULAR" */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#cfae01] to-[#e2c674] rounded-full shadow-lg">
                    <span className="text-black text-[10px] sm:text-xs font-bold tracking-wide">MÁS ELEGIDO</span>
                  </div>
                )}

                {/* Card del plan */}
                <div
                  className="relative h-full p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 flex flex-col"
                  style={{
                    background: isHovered || plan.popular
                      ? 'linear-gradient(135deg, #1f1f1f, #0f0f0f)'
                      : 'linear-gradient(135deg, #1a1a1a, #0f0f0f)',
                    boxShadow: isHovered
                      ? `0 0 40px ${plan.color}40, inset 0 0 30px rgba(0,0,0,0.5)`
                      : plan.popular
                      ? `0 0 30px ${plan.color}30, inset 0 0 20px rgba(0,0,0,0.5)`
                      : '0 0 20px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5)',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    border: `1px solid ${isHovered || plan.popular ? plan.color : 'rgba(207,174,1,0.2)'}`
                  }}
                >
                  {/* Borde superior brillante */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 origin-center"
                    style={{
                      background: `linear-gradient(to right, transparent, ${plan.color}, transparent)`
                    }}
                  />

                  {/* Contenido superior de la card */}
                  <div className="flex-grow">
                    {/* Icono y nombre */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? [0, -10, 10, 0] : 0
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent 
                          size={window.innerWidth < 640 ? 36 : 48}
                          color={plan.color}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#ffe7b4] group-hover:text-[#ffd98e] transition-colors">
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    {/* Subtítulo */}
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      {plan.subtitle}
                    </p>

                    {/* Ideal para */}
                    <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 bg-black/30 rounded-lg border border-[#cfae01]/20">
                      <p className="text-gray-300 text-xs sm:text-sm italic">
                        {plan.idealFor}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {plan.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={inView ? { x: 0, opacity: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.15 + i * 0.05, duration: 0.4 }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            <Check 
                              size={window.innerWidth < 640 ? 16 : 18}
                              color={plan.color}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tiempo de entrega */}
                    <div className="mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-[#cfae01]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs sm:text-sm">Tiempo de entrega:</span>
                        <span className="text-[#cfae01] font-bold text-xs sm:text-sm">{plan.deliveryTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Al final de la card */}
                  <motion.button
                    onClick={() => handlePlanClick(plan)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg"
                    style={{
                      background: isHovered || plan.popular
                        ? `linear-gradient(to right, ${plan.color}, #e2c674)`
                        : '#1a1a1a',
                      color: isHovered || plan.popular ? '#000' : plan.color,
                      border: `2px solid ${plan.color}`,
                    }}
                  >
                    {plan.cta}
                  </motion.button>

                  {/* Partícula brillante animada */}
                  {isHovered && (
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ background: plan.color }}
                      animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner de oferta especial */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#1a1510] via-[#2a2010] to-[#1a1510] border-2 border-[#cfae01]">
            {/* Efecto de brillo animado */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-30"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(207, 174, 1, 0.3) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
              }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
              >
                <Sparkles size={window.innerWidth < 640 ? 24 : 32} color="#cfae01" strokeWidth={2} />
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#cfae01]">
                  Precio de Lanzamiento Exclusivo
                </h3>
                <Sparkles size={window.innerWidth < 640 ? 24 : 32} color="#cfae01" strokeWidth={2} />
              </motion.div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-4">
                Para los <span className="text-[#cfae01] font-bold">primeros 10 clientes</span> de Codegza
                <br className="hidden sm:block" />
                <span className="text-[#e2c674] font-semibold">¡Consultá antes de que suban los precios!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <motion.button
                  onClick={handleSpecialPriceClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold text-sm sm:text-base md:text-lg rounded-full shadow-[0_0_30px_rgba(207,174,1,0.5)] hover:shadow-[0_0_40px_rgba(207,174,1,0.7)] transition-all duration-300"
                >
                  Solicitar Precio Especial
                </motion.button>
                
                <motion.a
                  href="https://wa.me/59895436987?text=¡Hola%20Codegza!%20%0A%0AQuiero%20consultar%20por%20el%20*PRECIO%20DE%20LANZAMIENTO*%20que%20vi%20en%20la%20web.%0A%0A¿Podrían%20darme%20más%20información?"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] text-white font-semibold text-sm sm:text-base rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escribinos por WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Garantía final */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#0a0a0a] border border-[#cfae01]/30 rounded-lg sm:rounded-xl">
            <Check size={window.innerWidth < 640 ? 20 : 28} color="#cfae01" strokeWidth={2.5} />
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Todos los planes incluyen <span className="text-white font-semibold">revisiones</span> y <span className="text-white font-semibold">garantía de satisfacción</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}