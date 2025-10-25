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
      "¡Hola Codegza! %0A%0AQuiero consultar por el *PRECIO DE LANZAMIENTO EXCLUSIVO* que vi en la web.%0A%0AEstoy entre los primeros 10 clientes y me gustaría conocer:%0A• Los precios especiales disponibles%0A• Qué planes están en oferta%0A• Hasta cuándo dura la promoción%0A%0A¡No quiero perder esta oportunidad!";
    const whatsappUrl = `https://wa.me/59895436987?text=${message}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
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
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
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

        {/* Banner especial - MEJORADO PARA RESPONSIVE */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#1a1510] via-[#2a2010] to-[#1a1510] border-2 border-[#cfae01] text-center">
            <motion.h3 
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#cfae01] mb-3 sm:mb-4 px-2 leading-tight"
            >
              Precio de Lanzamiento Exclusivo
            </motion.h3>
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 px-2 leading-relaxed">
              Para los <span className="text-[#cfae01] font-bold">primeros 10 clientes</span> de Codegza.{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#e2c674] font-semibold">
                ¡Consultá antes de que suban los precios!
              </span>
            </p>
            <motion.button
              onClick={handleSpecialPriceClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black font-bold text-sm sm:text-base md:text-lg rounded-full shadow-[0_0_30px_rgba(207,174,1,0.5)] transition-all duration-300"
            >
              Solicitar Precio Especial
            </motion.button>
          </div>
        </motion.div>

        {/* Garantía */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#0a0a0a] border border-[#cfae01]/30 rounded-lg sm:rounded-xl">
            <Check
              size={windowWidth < 640 ? 20 : 28}
              color="#cfae01"
              strokeWidth={2.5}
            />
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Todos los planes incluyen{" "}
              <span className="text-white font-semibold">revisiones</span> y{" "}
              <span className="text-white font-semibold">
                garantía de satisfacción
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}