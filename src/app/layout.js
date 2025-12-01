import "./globals.css";

export const metadata = {
  title: {
    default: "Codegza | Desarrollo Web Profesional en Uruguay",
    template: "%s | Codegza"
  },
  description: "Diseño y desarrollo web profesional en Uruguay. Landing pages, sitios web corporativos y e-commerce optimizados para convertir visitas en clientes. Proyectos desde USD 250.",
  keywords: ["desarrollo web uruguay", "diseño web", "landing page", "sitio web profesional", "e-commerce", "tienda online", "desarrollo web montevideo", "páginas web", "codegza"],
  authors: [{ name: "Codegza" }],
  creator: "Codegza",
  publisher: "Codegza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codegza.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Codegza | Desarrollo Web Profesional en Uruguay",
    description: "Diseño y desarrollo web profesional en Uruguay. Landing pages, sitios web corporativos y e-commerce optimizados para convertir visitas en clientes.",
    url: 'https://codegza.com',
    siteName: 'Codegza',
    locale: 'es_UY',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codegza - Desarrollo Web Profesional',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Codegza | Desarrollo Web Profesional en Uruguay",
    description: "Diseño y desarrollo web profesional en Uruguay. Landing pages, sitios web y e-commerce optimizados.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="512x512" />
      </head>
      <body
        className="scroll-smooth min-h-screen text-white bg-[#0a0a0a] overflow-x-hidden overflow-y-auto"
      >
        {children}
      </body>
    </html>
  );
}