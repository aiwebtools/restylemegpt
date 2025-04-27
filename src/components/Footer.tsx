
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-cyberpunk-dark border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a 
              href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt" 
              className="flex items-center gap-2 hover-scale mb-4"
            >
              <div className="rounded-full p-2 bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue">
                <div className="text-white font-bold text-xl">RM</div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">Restyle Me GPT</div>
                <div className="text-xs text-gray-400">Presented by AiWebTools.Ai</div>
              </div>
            </a>
            
            <p className="text-gray-400 mb-6">
              Transform your photos into any artistic style while maintaining your likeness.
            </p>
            
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Restyle Me GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <span>Phone:</span>
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors flex items-center gap-2"
                >
                  <span>Email:</span>
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <a 
              href="https://www.aiwebtools.ai" 
              className="inline-block mt-6 bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue text-white px-6 py-2 rounded-full hover:brightness-110 transition-all"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            <Button 
              variant="link" 
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 p-0 h-auto"
              asChild
            >
              <a href="https://www.aiwebtools.ai">
                © {currentYear} AI WEB TOOLS LLC All rights reserved.
              </a>
            </Button>
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                Restyle Me GPT
              </a>
            </Button>
            <div className="h-4 w-px bg-gray-600 hidden md:block" />
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#faq">FAQ</a>
            </Button>
            <div className="h-4 w-px bg-gray-600 hidden md:block" />
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
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
