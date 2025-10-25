// layout.jsx
import "./globals.css";
import { plus_Jakarta_Sans } from "../fonts/fonts";

export const metadata = {
  title: "Codegza",
  description: "Diseño y desarrollo web profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${plus_Jakarta_Sans.className} scroll-smooth`}>
      <body
        className="scroll-smooth min-h-screen text-white bg-[#0a0a0a] overflow-x-hidden overflow-y-auto"
      >
        {/* Fondo decorativo suave */}
        <div className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-0">
          <img
            src="/isotipo.png"
            alt="Fondo Codegza"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[700px] opacity-5"
          />
        </div>

        {/* Contenido principal */}
        <main className="relative z-10 w-full max-w-[1280px] ">
          {children}
        </main>
      </body>
    </html>
  );
}