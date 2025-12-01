"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const currentYear = new Date().getFullYear();

  const navigation = {
    servicios: [
      { name: "Landing Básica", href: "#planes" },
      { name: "Web Profesional", href: "#planes" },
      { name: "E-commerce Premium", href: "#planes" },
    ],
    empresa: [
      { name: "Sobre Nosotros", href: "#inicio" },
      { name: "Portafolio", href: "#portfolio" },
      { name: "Garantías", href: "#garantias" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "#privacy" },
      { name: "Términos y Condiciones", href: "#terms" },
    ],
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/59895436987?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20los%20servicios%20de%20Codegza.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codegzaa/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/codegza",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  return (
    <footer
      ref={ref}
      className="relative w-full bg-gradient-to-b from-[#0a0a0a] to-[#000000] text-white border-t border-[#cfae01]/20"
    >
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cfae01] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Columna 1: Logo y descripción */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a href="#inicio" className="inline-block mb-6 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Codegza Logo"
                  width={128}
                  height={128}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </a>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md">
              Creamos sitios web modernos y funcionales que hacen crecer tu negocio. 
              Tu presencia digital profesional comienza aquí.
            </p>
            
            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#1a1a1a] border border-[#cfae01]/20 rounded-lg flex items-center justify-center text-[#cfae01] hover:bg-[#cfae01] hover:text-black hover:border-[#cfae01] transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2: Servicios */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold text-[#ffe7b4] mb-4">Servicios</h4>
            <ul className="space-y-3">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#cfae01] transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#cfae01] group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Empresa */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold text-[#ffe7b4] mb-4">Empresa</h4>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#cfae01] transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#cfae01] group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-bold text-[#ffe7b4] mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:codegzaoficial@gmail.com"
                  className="text-gray-400 hover:text-[#cfae01] transition-colors duration-300 text-sm sm:text-base flex items-start gap-2 group"
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#cfae01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-words min-w-0">codegzaoficial@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/59895436987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#cfae01] transition-colors duration-300 text-sm sm:text-base flex items-start gap-2 group"
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#cfae01]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="whitespace-nowrap">+598 95 436 987</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#cfae01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Montevideo, Uruguay</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Separador */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-[#cfae01]/30 to-transparent"
        ></motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} <span className="text-[#cfae01] font-semibold">Codegza</span>. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-gray-500 hover:text-[#cfae01] transition-colors duration-300 text-xs sm:text-sm"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="text-gray-500 hover:text-[#cfae01] transition-colors duration-300 text-xs sm:text-sm"
            >
              Términos y Condiciones
            </button>
          </div>
        </motion.div>
      </div>

      {/* Brillo de fondo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-t from-[#cfae01]/5 to-transparent blur-3xl pointer-events-none"></div>

      {/* Modal de Política de Privacidad */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#cfae01]/30 rounded-2xl max-w-3xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-hidden"
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#cfae01]/20">
              <h3 className="text-xl sm:text-2xl font-bold text-[#ffe7b4]">Política de Privacidad</h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#cfae01]/10 hover:bg-[#cfae01]/20 text-[#cfae01] transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[55vh] sm:max-h-[60vh] text-gray-300 space-y-4">
              <p className="text-xs sm:text-sm">
                <strong className="text-[#cfae01]">Última actualización:</strong> {new Date().toLocaleDateString('es-UY')}
              </p>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">1. Información que Recopilamos</h4>
                <p className="text-xs sm:text-sm">
                  En Codegza, recopilamos información que nos proporcionas directamente al contactarnos a través de nuestros formularios, 
                  incluyendo nombre, email, teléfono y detalles sobre tu proyecto.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">2. Uso de la Información</h4>
                <p className="text-xs sm:text-sm">
                  Utilizamos tu información para:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm ml-4 mt-2 space-y-1">
                  <li>Responder a tus consultas y solicitudes de presupuesto</li>
                  <li>Proporcionarte información sobre nuestros servicios</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Enviarte actualizaciones sobre tu proyecto (si contratas nuestros servicios)</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">3. Protección de Datos</h4>
                <p className="text-xs sm:text-sm">
                  Implementamos medidas de seguridad para proteger tu información personal. No vendemos, 
                  intercambiamos ni transferimos tu información a terceros sin tu consentimiento.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">4. Cookies</h4>
                <p className="text-xs sm:text-sm">
                  Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. 
                  Puedes configurar tu navegador para rechazar cookies, aunque esto puede limitar algunas funcionalidades.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">5. Tus Derechos</h4>
                <p className="text-xs sm:text-sm">
                  Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. 
                  Para ejercer estos derechos, contáctanos en <a href="mailto:codegzaoficial@gmail.com" className="text-[#cfae01] hover:underline break-words">codegzaoficial@gmail.com</a>
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">6. Contacto</h4>
                <p className="text-xs sm:text-sm">
                  Si tienes preguntas sobre esta política de privacidad, contáctanos:
                </p>
                <ul className="text-xs sm:text-sm ml-4 mt-2 space-y-1">
                  <li>Email: <a href="mailto:codegzaoficial@gmail.com" className="text-[#cfae01] hover:underline break-words">codegzaoficial@gmail.com</a></li>
                  <li>WhatsApp: <a href="https://wa.me/59895436987" className="text-[#cfae01] hover:underline">+598 95 436 987</a></li>
                  <li>Ubicación: Montevideo, Uruguay</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal de Términos y Condiciones */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#cfae01]/30 rounded-2xl max-w-3xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-hidden"
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#cfae01]/20">
              <h3 className="text-xl sm:text-2xl font-bold text-[#ffe7b4]">Términos y Condiciones</h3>
              <button
                onClick={() => setShowTermsModal(false)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#cfae01]/10 hover:bg-[#cfae01]/20 text-[#cfae01] transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[55vh] sm:max-h-[60vh] text-gray-300 space-y-4">
              <p className="text-xs sm:text-sm">
                <strong className="text-[#cfae01]">Última actualización:</strong> {new Date().toLocaleDateString('es-UY')}
              </p>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">1. Aceptación de Términos</h4>
                <p className="text-xs sm:text-sm">
                  Al acceder y utilizar los servicios de Codegza, aceptas estar sujeto a estos términos y condiciones. 
                  Si no estás de acuerdo con alguna parte, no debes utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">2. Servicios Ofrecidos</h4>
                <p className="text-xs sm:text-sm">
                  Codegza ofrece servicios de diseño y desarrollo web, incluyendo:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm ml-4 mt-2 space-y-1">
                  <li>Diseño de landing pages y sitios web profesionales</li>
                  <li>Desarrollo de e-commerce</li>
                  <li>Mantenimiento y actualización de sitios web</li>
                  <li>Consultoría web</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">3. Proceso de Contratación</h4>
                <p className="text-xs sm:text-sm">
                  Al solicitar un presupuesto, recibirás una propuesta detallada que incluye alcance, 
                  plazos y costos. El proyecto comienza una vez confirmado el pago inicial del 50%.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">4. Pagos y Facturación</h4>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                  <li>Se requiere un pago inicial del 50% para comenzar el proyecto</li>
                  <li>El 50% restante se paga al finalizar y aprobar el proyecto</li>
                  <li>Los pagos se realizan mediante transferencia bancaria o métodos acordados</li>
                  <li>Los precios incluyen el desarrollo según el plan contratado</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">5. Plazos de Entrega</h4>
                <p className="text-xs sm:text-sm">
                  Los plazos de entrega varían según el plan:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm ml-4 mt-2 space-y-1">
                  <li>Landing Básica: 7-14 días hábiles</li>
                  <li>Web Profesional: 14-21 días hábiles</li>
                  <li>E-commerce Premium: 21-35 días hábiles</li>
                </ul>
                <p className="text-xs sm:text-sm mt-2">
                  Los plazos pueden extenderse si el cliente no proporciona el contenido necesario a tiempo.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">6. Revisiones y Modificaciones</h4>
                <p className="text-xs sm:text-sm">
                  Cada plan incluye un número específico de revisiones. Modificaciones adicionales 
                  fuera del alcance original pueden tener un costo extra.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">7. Propiedad Intelectual</h4>
                <p className="text-xs sm:text-sm">
                  Una vez completado el pago total, el cliente obtiene todos los derechos sobre el diseño 
                  y código desarrollado. Codegza retiene el derecho de usar el proyecto en su portafolio.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">8. Garantía</h4>
                <p className="text-xs sm:text-sm">
                  Ofrecemos 30 días de soporte post-lanzamiento para corregir errores o bugs. 
                  No incluye nuevas funcionalidades o cambios de diseño.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">9. Limitación de Responsabilidad</h4>
                <p className="text-xs sm:text-sm">
                  Codegza no se hace responsable por pérdidas indirectas, daños o problemas derivados 
                  del uso del sitio web desarrollado. Tampoco por contenido proporcionado por el cliente.
                </p>
              </section>

              <section>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">10. Contacto</h4>
                <p className="text-xs sm:text-sm">
                  Para cualquier consulta sobre estos términos:
                </p>
                <ul className="text-xs sm:text-sm ml-4 mt-2 space-y-1">
                  <li>Email: <a href="mailto:codegzaoficial@gmail.com" className="text-[#cfae01] hover:underline break-words">codegzaoficial@gmail.com</a></li>
                  <li>WhatsApp: <a href="https://wa.me/59895436987" className="text-[#cfae01] hover:underline">+598 95 436 987</a></li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
}