"use client";
import { useRef, useState } from "react";

export default function QuoteButton() {
  const rippleRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!hovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = rippleRef.current;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.remove("animate-ripple");
    void ripple.offsetWidth;
    ripple.classList.add("animate-ripple");
  };

  return (
    <a
      href="https://wa.me/59895436987?text=Hola!%20Me%20gustaría%20solicitar%20un%20presupuesto"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="relative overflow-hidden px-7 py-3 rounded-xl font-bold text-[#121212] border border-[#d6a200]/40 active:scale-[0.98] transition-all duration-300 select-none inline-block"
      style={{
        textShadow: "1px 0px 9px #e2c057",
        background: hovering 
          ? "radial-gradient(circle at var(--x, 50%) var(--y, 50%), #e9c55c, #bd942dff 50%)" 
          : "linear-gradient(90deg, #e9c55c, #bd942dff)",
        boxShadow: hovering 
          ? "0 0 0px 0px #896c2dff, inset 0 0 1px 1px #8f7938ff, 3px 3px 7px -6px #9c7b33ff, -3px -3px 5px -6px #8f7938ff, inset 0 1px 1px rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.2)" 
          : "0 0 0px 1px #896c2dff, inset 0 1px 1px rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <span
        ref={rippleRef}
        className="absolute block w-0 h-0 bg-[#ffd87562] rounded-full opacity-0 pointer-events-none"
      ></span>
      Solicitar presupuesto
    </a>
  );
}