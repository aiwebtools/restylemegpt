import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Wand } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyberpunk-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt" 
             className="flex items-center gap-2 hover-scale">
            <div className="rounded-full p-2 bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue">
              <Wand className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-xl">Restyle Me GPT</div>
              <div className="text-xs text-gray-400">Presented by AiWebTools.Ai</div>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                      Restyle Me GPT
                    </a>
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="#faq">FAQ</a>
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="#disclaimer">Disclaimer</a>
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://www.aiwebtools.ai">More AI Tools</a>
                  </Button>
                </li>
              </ul>
            </nav>
            <Button 
              asChild 
              className="bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue hover:brightness-110 transition-all button-glow"
            >
              <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                Try Now
              </a>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-cyberpunk-dark/95 backdrop-blur-lg">
          <ul className="flex flex-col p-4 gap-4">
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                  Restyle Me GPT
                </a>
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <a href="#faq">FAQ</a>
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <a href="#disclaimer">Disclaimer</a>
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <a href="https://www.aiwebtools.ai">More AI Tools</a>
              </Button>
            </li>
            <li>
              <Button
                className="w-full bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                  Try Now
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
