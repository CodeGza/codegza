"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('codegzaoficial@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Configuración de EmailJS (reemplazar con tus credenciales reales)
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    
    // Si no está configurado EmailJS, usar WhatsApp como alternativa
    const isEmailJSConfigured = SERVICE_ID !== 'YOUR_SERVICE_ID' && 
                                TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
                                PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';
    
    if (!isEmailJSConfigured) {
      // Opción alternativa: Enviar por WhatsApp
      const whatsappMessage = `¡Hola Codegza! %0A%0AMe gustaría consultar sobre sus servicios.%0A%0A *Mis datos:*%0A• Nombre: ${formData.name}%0A• Email: ${formData.email}%0A• Teléfono: ${formData.phone || 'No proporcionado'}%0A• Servicio de interés: ${formData.service}%0A%0A *Mi consulta:*%0A${formData.message}%0A%0AGracias!`;
      
      window.open(`https://wa.me/59895436987?text=${whatsappMessage}`, '_blank');
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1000);
      
      return;
    }
    
    try {
      // Parámetros para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        service: formData.service,
        message: formData.message,
        to_email: 'codegzaoficial@gmail.com'
      };

      // Enviar email usando EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Error al enviar el email');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "codegzaoficial@gmail.com",
      link: "mailto:codegzaoficial@gmail.com?subject=Consulta%20desde%20el%20sitio%20web&body=Hola%20Codegza,%0D%0A%0D%0AMe%20gustar%C3%ADa%20consultar%20sobre..."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      title: "WhatsApp",
      value: "+598 95 436 987",
      link: "https://wa.me/59895436987?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20los%20servicios%20de%20Codegza.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ubicación",
      value: "Montevideo, Uruguay",
      link: null
    }
  ];

  const services = [
    "Landing Básica",
    "Web Profesional",
    "E-commerce Premium",
    "Consultoría Web",
    "Otro servicio"
  ];

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative min-w-[100vw] bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(207, 174, 1, 0.3) 0%, transparent 60%),
            radial-gradient(circle at 10% 90%, rgba(226, 198, 116, 0.2) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#cfae01] rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
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
              CONTACTO
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="text-white">Hablemos de tu </span>
            <span className="text-[#e2c674]">próximo proyecto</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Estamos listos para convertir tu idea en realidad.
            <br className="hidden sm:block" />
            <span className="text-[#cfae01] font-semibold"> Contactanos y comenzá hoy mismo.</span>
          </p>
        </motion.div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Formulario */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#cfae01]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#ffe7b4] mb-4 sm:mb-6">
                Envianos tu consulta
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border-2 border-[#cfae01]/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:border-[#cfae01] focus:outline-none transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border-2 border-[#cfae01]/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:border-[#cfae01] focus:outline-none transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border-2 border-[#cfae01]/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:border-[#cfae01] focus:outline-none transition-all duration-300"
                    placeholder="+598 XX XXX XXX"
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border-2 border-[#cfae01]/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:border-[#cfae01] focus:outline-none transition-all duration-300 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
                  >
                    <option value="" className="bg-[#1a1a1a] text-gray-400">Seleccioná un servicio</option>
                    {services.map((service, i) => (
                      <option key={i} value={service} className="bg-[#1a1a1a] text-white">{service}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border-2 border-[#cfae01]/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:border-[#cfae01] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#cfae01] to-[#e2c674] text-black shadow-[0_0_20px_rgba(207,174,1,0.4)] hover:shadow-[0_0_30px_rgba(207,174,1,0.6)]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando mensaje...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </motion.button>

                {/* Mensaje de éxito */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg sm:rounded-xl"
                  >
                    <p className="text-green-400 text-xs sm:text-sm text-center font-semibold flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ¡Mensaje enviado! Te responderemos pronto.
                    </p>
                  </motion.div>
                )}

                {/* Mensaje de error */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg sm:rounded-xl"
                  >
                    <p className="text-red-400 text-xs sm:text-sm text-center font-semibold flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Error al enviar. Por favor, contactanos por WhatsApp.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Cards de contacto */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  {info.link ? (
                    <div className="relative">
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#cfae01]/20 rounded-xl sm:rounded-2xl hover:border-[#cfae01]/60 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#cfae01]/10 rounded-lg sm:rounded-xl text-[#cfae01] group-hover:bg-[#cfae01] group-hover:text-black transition-all duration-300">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-0.5 sm:mb-1">
                            {info.title}
                          </h4>
                          <p className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-[#cfae01] transition-colors break-words">
                            {info.value}
                          </p>
                        </div>
                      </a>
                      
                      {/* Botón de copiar solo para email */}
                      {info.title === "Email" && (
                        <motion.button
                          onClick={handleCopyEmail}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-[#cfae01]/20 hover:bg-[#cfae01] rounded-lg transition-all duration-300 group/copy"
                          title="Copiar email"
                        >
                          {emailCopied ? (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#cfae01] group-hover/copy:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </motion.button>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#cfae01]/20 rounded-xl sm:rounded-2xl">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#cfae01]/10 rounded-lg sm:rounded-xl text-[#cfae01]">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-0.5 sm:mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA adicional */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#cfae01]/10 to-transparent border-2 border-[#cfae01]/30 rounded-xl sm:rounded-2xl text-center"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                ¿Preferís hablar directamente?
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6">
                Escribinos por WhatsApp y te respondemos al instante
              </p>
              <motion.a
                href="https://wa.me/59895436987?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20los%20servicios%20de%20Codegza.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 bg-[#25D366] text-white text-xs sm:text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chatear ahora
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}