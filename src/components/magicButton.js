"use client";

import { useRef, useState } from "react";

export default function MagicButton() {
  const rippleRef = useRef(null);
  const btnRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  // Efecto de luz (gradiente dinámico)
  const handleMouseMove = (e) => {
    if (!hovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  // Efecto burbuja dorada al click
  const handleClick = (e) => {
    const ripple = rippleRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.remove("animate-ripple");
    void ripple.offsetWidth; // reinicia la animación
    ripple.classList.add("animate-ripple");
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={(e) => {
        setHovering(false);
        e.currentTarget.style.background = "linear-gradient(135deg, #121212, #0c0c0c)";
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="relative overflow-hidden px-7 py-3 rounded-xl font-semibold 
                 text-[#fde5ab] border border-transparent shadow-md select-none
                 transition-all duration-300 active:scale-[0.98]"
      style={{
        background: hovering
          ? `radial-gradient(circle at var(--x, 50%) var(--y, 50%), #fde5ab33, #121212 80%)`
          : "linear-gradient(135deg, #121212, #0c0c0c)",
        boxShadow: hovering
          ? `0 0 0px 0px #bf963d,
             inset 0 0 1px 1px #e2c057,
             3px 3px 7px -6px #fbc34bff,
             -3px -3px 5px -6px #e2c057`
          : "0 0 0px 1px #bf963d",
      }}
    >
      {/* Efecto burbuja */}
      <span
        ref={rippleRef}
        className="absolute block w-0 h-0 bg-[#fde5ab33] rounded-full opacity-0 pointer-events-none"
        style={{
          animationTimingFunction: "cubic-bezier(0.4, 0, 0.2)",
        }}
      ></span>

      Ver proyectos
    </button>
  );
}
