import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Wand } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyberpunk-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt" 
             className="flex items-center gap-2 hover-scale shrink-0">
            <div className="rounded-full p-1.5 sm:p-2 bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue">
              <Wand className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-base sm:text-xl leading-tight">Restyle Me GPT</div>
              <div className="text-[10px] sm:text-xs text-gray-400">Presented by AiWebTools.Ai</div>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <nav>
              <ul className="flex gap-2 lg:gap-6">
                <li>
                  <Button variant="ghost" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105 text-sm lg:text-base px-3 lg:px-4" asChild>
                    <a href="#faq">FAQ</a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105 text-sm lg:text-base px-3 lg:px-4" asChild>
                    <a href="#disclaimer">Disclaimer</a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 hover:scale-105 text-sm lg:text-base px-3 lg:px-4" asChild>
                    <a href="https://aiwebtools.lovable.app/?via=aiwebtools">More AI Tools</a>
                  </Button>
                </li>
              </ul>
            </nav>
            <Button asChild className="bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue hover:brightness-110 transition-all button-glow text-sm lg:text-base">
              <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                Try Restyle Me GPT
              </a>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            className="md:hidden text-white p-2 touch-manipulation" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      <div className={`md:hidden fixed inset-0 top-[56px] bg-cyberpunk-dark/98 backdrop-blur-lg transition-all duration-300 z-50 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <nav className="h-full overflow-y-auto">
          <ul className="flex flex-col p-6 gap-2">
            <li>
              <Button variant="ghost" className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start text-lg py-4 touch-manipulation" onClick={closeMobileMenu} asChild>
                <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">Restyle Me GPT</a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start text-lg py-4 touch-manipulation" onClick={closeMobileMenu} asChild>
                <a href="#faq">FAQ</a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start text-lg py-4 touch-manipulation" onClick={closeMobileMenu} asChild>
                <a href="#disclaimer">Disclaimer</a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyberpunk-vivid hover:via-cyberpunk-blue hover:to-cyberpunk-purple hover:bg-clip-text transition-all duration-300 justify-start text-lg py-4 touch-manipulation" onClick={closeMobileMenu} asChild>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools">More AI Tools</a>
              </Button>
            </li>
            <li className="mt-4">
              <Button className="w-full bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue text-lg py-6 touch-manipulation" onClick={closeMobileMenu} asChild>
                <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">Try Now</a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
