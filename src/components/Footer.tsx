
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wand } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-cyberpunk-dark border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-dark via-cyberpunk-purple/10 to-cyberpunk-blue/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyberpunk-vivid/20 filter blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-cyberpunk-blue/20 filter blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-cyberpunk-pink/15 filter blur-2xl animate-glow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <a 
              href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt" 
              className="flex items-center gap-3 hover-scale mb-6 group"
            >
              <div className="rounded-full p-3 bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue shadow-lg group-hover:shadow-cyberpunk-vivid/50 transition-all duration-300">
                <Wand className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-xl sm:text-2xl group-hover:text-gradient transition-all duration-300">Restyle Me GPT</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Presented by AiWebTools.Ai</div>
              </div>
            </a>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
              Transform your photos into any artistic style while maintaining your likeness.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-500 w-full justify-start text-base sm:text-lg hover:scale-105"
                  asChild
                >
                  <a href="#faq">FAQ</a>
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-500 w-full justify-start text-base sm:text-lg hover:scale-105"
                  asChild
                >
                  <a href="#disclaimer">Disclaimer</a>
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-500 w-full justify-start text-base sm:text-lg hover:scale-105"
                  asChild
                >
                  <a href="https://aiwebtools.lovable.app/?via=aiwebtools">More AI Tools</a>
                </Button>
              </li>
              <li>
                <Button 
                  className="w-full bg-gradient-to-r from-cyberpunk-vivid via-cyberpunk-blue to-cyberpunk-purple text-white hover:brightness-125 transition-all duration-500 button-glow text-base sm:text-lg py-4 hover:scale-105 shadow-lg hover:shadow-cyberpunk-vivid/50"
                  asChild
                >
                  <a href="https://chat.openai.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                    Try Restyle Me GPT
                  </a>
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">Legal</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-300 hover:text-cyberpunk-purple transition-all duration-300 text-base sm:text-lg hover:scale-105 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-gray-300 hover:text-cyberpunk-purple transition-all duration-300 text-base sm:text-lg hover:scale-105 inline-block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-300 hover:text-cyberpunk-purple transition-all duration-300 flex items-center gap-3 text-base sm:text-lg hover:scale-105"
                >
                  <span>Phone:</span>
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-cyberpunk-purple transition-all duration-300 flex items-center gap-3 text-base sm:text-lg hover:scale-105 break-all"
                >
                  <span>Email:</span>
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="inline-block mt-6 sm:mt-8 bg-gradient-to-r from-cyberpunk-vivid via-cyberpunk-blue to-cyberpunk-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:brightness-125 transition-all duration-500 shadow-lg hover:shadow-cyberpunk-vivid/50 hover:scale-105 text-base sm:text-lg font-medium"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-base sm:text-lg text-center md:text-left">
            <Button 
              variant="link" 
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-500 p-0 h-auto text-base sm:text-lg hover:scale-105"
              asChild
            >
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools">
                © {currentYear} AI WEB TOOLS LLC All rights reserved.
              </a>
            </Button>
          </p>
          
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-500 hover:scale-110 text-base sm:text-lg"
              asChild
            >
              <a href="#faq">FAQ</a>
            </Button>
            <div className="h-6 w-px bg-gradient-to-b from-cyberpunk-vivid to-cyberpunk-blue hidden md:block" />
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-500 hover:scale-110 text-base sm:text-lg"
              asChild
            >
              <a href="#disclaimer">Disclaimer</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;