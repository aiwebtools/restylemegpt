
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ConsentPopup from "@/components/ConsentPopup";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Restyle Me GPT | Transform Your Photos With AI";
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
