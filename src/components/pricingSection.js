"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Rocket, Briefcase, ShoppingCart, Check } from "lucide-react";

export default function PricingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024); // ✅ previene error en SSR

  // ✅ Manejar el ancho de ventana de forma segura
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
        "Diseño responsive (móviles, tablets y PC)",
      ],
      deliveryTime: "7-14 días hábiles",
      cta: "Solicitá tu presupuesto",
      whatsappMessage:
        "¡Hola Codegza! %0A%0AEstoy interesado/a en el plan *Landing Básica*.%0A%0AMe gustaría recibir más información sobre:%0A• Precio%0A• Tiempo de entrega%0A• Proceso de trabajo%0A%0A¡Gracias!",
      color: "#cfae01",
      popular: false,
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
        "Panel de gestión simple (opcional)",
      ],
      deliveryTime: "14-21 días hábiles",
      cta: "Quiero una Web Profesional",
      whatsappMessage:
        "¡Hola Codegza! %0A%0AEstoy muy interesado/a en el plan *Web Profesional* (el más elegido).%0A%0AMe gustaría que me cuenten:%0A• Precio del plan%0A• Qué incluye exactamente%0A• Cómo funciona el proceso%0A• Ejemplos de trabajos anteriores%0A%0A¡Muchas gracias!",
      color: "#e2c674",
      popular: true,
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
        "Capacitación para manejar tu tienda",
      ],
      deliveryTime: "21-35 días hábiles",
      cta: "Comenzá tu Tienda Online",
      whatsappMessage:
        "¡Hola Codegza! %0A%0AQuiero empezar mi tienda online con el plan *E-commerce Premium*.%0A%0APor favor, necesito información sobre:%0A• Precio del e-commerce%0A• Qué métodos de pago puedo integrar%0A• Cómo funciona la gestión de productos%0A• Capacitación incluida%0A%0A¡Espero su respuesta!",
      color: "#d4af37",
      popular: false,
    },
  ];

  // ✅ Evitar window en SSR
  const handlePlanClick = (plan) => {
    const whatsappUrl = `https://wa.me/59895436987?text=${plan.whatsappMessage}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleSpecialPriceClick = () => {
    const message =
      "¡Hola Codegza! %0A%0AQuiero aprovechar la *OFERTA DE LANZAMIENTO* del 15% OFF que vi en la web.%0A%0AEstoy entre los próximos 4 clientes y me gustaría conocer:%0A• Qué planes están en oferta%0A• Los precios con el descuento aplicado%0A• Cómo puedo reservar mi lugar%0A%0A¡No quiero perder esta oportunidad!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section
      id="planes"
      ref={ref}
      className="scroll-mt-24 relative w-full bg-gradient-to-b from-[#1a1208] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(207, 174, 1, 0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Resplandores */}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Elegí el Plan </span>
            <span className="text-[#e2c674]">Ideal para Vos</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Cada negocio es diferente. En Codegza desarrollamos sitios web adaptados a tus objetivos, con precios claros y resultados reales.
          </p>
        </motion.div>

        {/* Banner especial - Precio de lanzamiento */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 mb-10 sm:mb-12 md:mb-14"
        >
          <div className="relative overflow-hidden rounded-xl p-4 sm:p-6 bg-gradient-to-r from-[#1a1510]/50 via-[#2a2010]/50 to-[#1a1510]/50 backdrop-blur-sm border border-[#cfae01]/40 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left side - Info */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[#cfae01] font-semibold text-sm sm:text-base mb-1">
                  Oferta de Lanzamiento
                </p>
                <p className="text-white text-base sm:text-lg font-bold mb-1">
                  15% OFF en tu nueva página web
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Solo para los próximos 4 clientes
                </p>
              </div>

              {/* Right side - CTA */}
              <motion.button
                onClick={handleSpecialPriceClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-semibold text-sm rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 group"
              >
                Aprovechar oferta
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>
            </div>
          </div>
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
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                className="relative group"
              >
                {/* Badge popular */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#cfae01] to-[#e2c674] rounded-full shadow-lg">
                    <span className="text-black text-[10px] sm:text-xs font-bold tracking-wide">
                      MÁS ELEGIDO
                    </span>
                  </div>
                )}

                {/* Card */}
                <div
                  className="relative h-full p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 flex flex-col"
                  style={{
                    background:
                      isHovered || plan.popular
                        ? "linear-gradient(135deg, #1f1f1f, #0f0f0f)"
                        : "linear-gradient(135deg, #1a1a1a, #0f0f0f)",
                    boxShadow: isHovered
                      ? `0 0 40px ${plan.color}40`
                      : plan.popular
                      ? `0 0 30px ${plan.color}30`
                      : "0 0 20px rgba(0,0,0,0.8)",
                    transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0)",
                    border: `1px solid ${isHovered || plan.popular ? plan.color : "rgba(207,174,1,0.2)"}`,
                  }}
                >
                  {/* Icono */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? [0, -10, 10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        size={windowWidth < 640 ? 36 : 48}
                        color={plan.color}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#ffe7b4] group-hover:text-[#ffd98e] transition-colors">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    {plan.subtitle}
                  </p>

                  <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 bg-black/30 rounded-lg border border-[#cfae01]/20">
                    <p className="text-gray-300 text-xs sm:text-sm italic">
                      {plan.idealFor}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3">
                        <Check
                          size={windowWidth < 640 ? 16 : 18}
                          color={plan.color}
                          strokeWidth={3}
                        />
                        <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tiempo de entrega */}
                  <div className="mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-[#cfae01]/20">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs sm:text-sm">
                        Tiempo de entrega:
                      </span>
                      <span className="text-[#cfae01] font-bold text-xs sm:text-sm">
                        {plan.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={() => handlePlanClick(plan)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg"
                    style={{
                      background:
                        isHovered || plan.popular
                          ? `linear-gradient(to right, ${plan.color}, #e2c674)`
                          : "#1a1a1a",
                      color: isHovered || plan.popular ? "#000" : plan.color,
                      border: `2px solid ${plan.color}`,
                    }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Plan de Mantenimiento Anual */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#cfae01]/30">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              {/* Left side - Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e2c674] mb-3">
                  Mantenimiento y Hosting Anual
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  Mantené tu sitio web actualizado, seguro y online sin preocupaciones durante todo el año.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div className="flex items-start gap-2">
                    <Check size={18} color="#cfae01" strokeWidth={3} />
                    <span className="text-xs sm:text-sm text-gray-300">Hosting premium incluido</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} color="#cfae01" strokeWidth={3} />
                    <span className="text-xs sm:text-sm text-gray-300">Renovación de dominio</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} color="#cfae01" strokeWidth={3} />
                    <span className="text-xs sm:text-sm text-gray-300">Certificado SSL renovado</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} color="#cfae01" strokeWidth={3} />
                    <span className="text-xs sm:text-sm text-gray-300">Actualizaciones de seguridad</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} color="#cfae01" strokeWidth={3} />
                    <span className="text-xs sm:text-sm text-gray-300">Soporte técnico prioritario</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={18} color="#cfae01" strokeWidth={3} />
                    <span className="text-xs sm:text-sm text-gray-300">Cambios menores de contenido</span>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex-shrink-0 text-center lg:text-right">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Todo incluido</p>
                <p className="text-3xl sm:text-4xl font-bold text-[#cfae01] mb-1">USD 150</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">por año</p>
                <motion.button
                  onClick={() => {
                    const message = "¡Hola Codegza! %0A%0AMe interesa conocer más sobre el *Plan de Mantenimiento y Hosting Anual* de USD 150/año.%0A%0A¿Podrían darme más detalles sobre:%0A• Qué incluye exactamente%0A• Cómo funciona el servicio%0A• Formas de pago%0A%0A¡Gracias!";
                    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
                    if (typeof window !== "undefined") {
                      window.open(whatsappUrl, "_blank");
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg"
                >
                  Más información
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}