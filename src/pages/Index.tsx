
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
    // Update the document title for better SEO
    document.title = "Restyle Me GPT - Transform Your Photos with AI | AI Web Tools";
    
    // Add meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Restyle Me GPT by AI Web Tools: Transform yourself into anime, Ghibli characters, action figures & more. Best AI photo transformation tool. Try it free now!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-hidden">
      {/* Schema.org structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI Web Tools - Photo Transformation with AI",
            "description": "Transform your photos using advanced AI technology. Convert images to anime, Ghibli style, action figures and more with Restyle Me GPT.",
            "url": "https://aiwebtools.ai/",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Restyle Me GPT",
              "applicationCategory": "AI Photo Editor",
              "operatingSystem": "Web Browser"
            }
          })
        }}
      />
      
      <Header />
      <main role="main">
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
