import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyWebsiteSection from "@/components/whyWebSite";
import ValueSection from "@/components/valueSection";
import ProcessSection from "@/components/processSection";
import PricingSection from "@/components/pricingSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";

// Nuevas secciones
import Technologies from "@/components/sections/Technologies";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Codegza",
  description: "Diseño y desarrollo web profesional",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyWebsiteSection />
      <ValueSection />
      <Technologies />
      <ProcessSection />
      <Portfolio />
      <About />
      <PricingSection />
      <FAQ />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
