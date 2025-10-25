"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Por qué tener una web", href: "#why-website" },
    { name: "Proceso", href: "#proceso" },
    { name: "Proyectos", href: "#portfolio" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300
      bg-[radial-gradient(circle_at_top_left,rgba(253,229,171,0.1),transparent_70%),rgba(10,10,10,0.95)]
      backdrop-blur-md shadow-lg border-b border-[#fde5ab]/10 rounded-b-xl"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="transition-all duration-300">
          <a href="#inicio" className="group relative">
            <img
              src="/isotipo.png"
              alt="Logo"
              className="w-12 sm:w-14 drop-shadow-[0_0_2px_rgba(253,229,171,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(253,229,171,0.7)] transition-all duration-300"
            />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 text-sm font-semibold uppercase tracking-wider text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group inline-block px-1 py-[2px]"
            >
              <span
                className="bg-gradient-to-r from-[#fde5ab] to-[#bfa86a]
                bg-[length:200%_100%] bg-[position:-100%]
                bg-clip-text text-transparent
                transition-all duration-300 ease-in-out
                group-hover:bg-[position:0]
                group-hover:drop-shadow-[0_0_6px_rgba(253,229,171,0.6)]"
              >
                {link.name}
              </span>
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0
                bg-gradient-to-r from-[#fde5ab] to-[#bfa86a]
                transition-all duration-300 ease-in-out
                group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#fde5ab] focus:outline-none text-2xl hover:drop-shadow-[0_0_10px_rgba(253,229,171,0.6)] transition-all duration-300"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
        px-6 backdrop-blur-sm rounded-b-xl text-center border-b border-[#fde5ab]/60`}
      >
        <div className="space-y-4 text-white font-semibold tracking-wide text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block transition hover:text-[#fde5ab] hover:drop-shadow-[0_0_8px_rgba(253,229,171,0.6)]"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div 
          className={`mt-6 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="block w-full px-6 py-3 rounded-xl font-bold text-[#121212]
              border border-[#d6a200]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_1px_3px_rgba(0,0,0,0.2)]
              active:scale-[0.98] transition-all duration-300 select-none"
            style={{
              textShadow: "1px 0px 9px #e2c057",
              background: "linear-gradient(90deg, #e9c55c, #bd942dff)",
              boxShadow: "0 0 0px 1px #896c2dff",
            }}
          >
            Consulta Gratis
          </a>
        </div>
      </div>
    </header>
  );
}