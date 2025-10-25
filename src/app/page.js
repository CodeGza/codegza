import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyWebsiteSection from "@/components/whyWebSite";
import ValueSection from "@/components/valueSection";
import ProcessSection from "@/components/processSection";
import ProjectDemoSection from "@/components/projectDemoSection";
import TrustBuildingSection from "@/components/trustBuildingSection";
import PricingSection from "@/components/pricingSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";

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
      <ProcessSection />
      <ProjectDemoSection />
      <TrustBuildingSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
