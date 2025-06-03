
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center relative overflow-hidden" aria-label="AI Web Tools Hero Section">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      {/* Enhanced divine background elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyberpunk-purple/30 filter blur-3xl animate-divine-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyberpunk-blue/30 filter blur-3xl animate-divine-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-cyberpunk-vivid/25 filter blur-2xl animate-divine-glow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full bg-cyberpunk-pink/20 filter blur-3xl animate-pulse-light"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} space-y-8`}>
            <header>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gradient text-glow">Transform</span> Your Look
                <span className="text-white"> With </span>
                <span className="text-gradient text-glow">AI</span>
              </h1>
            </header>
            
            <div className="space-y-8">
              <p className="text-2xl text-gray-200 leading-relaxed">
                Upload your photo and let our AI transform you into any style you can imagine – from Ghibli animation to cyberpunk, action figures to movie scenes.
              </p>
              
              <nav aria-label="Main actions">
                <div className="flex flex-wrap gap-6">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-cyberpunk-vivid via-cyberpunk-blue to-cyberpunk-purple text-white hover:brightness-125 transition-all duration-500 px-12 py-8 text-xl button-glow hover:scale-110 shadow-2xl divine-glow"
                  >
                    <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt" aria-label="Try Restyle Me GPT - AI Photo Transformation Tool">
                      Try Restyle Me GPT
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-transparent border-2 border-cyberpunk-purple/60 text-white hover:bg-cyberpunk-purple/20 transition-all duration-500 px-10 py-8 text-xl hover:scale-105 backdrop-blur-xl"
                  >
                    <a href="#how-it-works" aria-label="Learn more about AI Web Tools">
                      Learn More
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
            
            <aside className="mt-12 flex items-center gap-4" aria-label="User testimonials">
              <div className="flex -space-x-4">
                <Avatar className="w-14 h-14 border-2 border-cyberpunk-vivid/50">
                  <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="Happy AI Web Tools user" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-cyberpunk-blue/50">
                  <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" alt="Satisfied AI transformation user" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-cyberpunk-purple/50">
                  <AvatarImage src="https://images.unsplash.com/photo-1501286353178-1ec881214838" alt="AI Web Tools customer" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-cyberpunk-pink/50">
                  <AvatarImage src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" alt="Restyle Me GPT user" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-white font-medium text-xl">500+ users already transformed</p>
              </div>
            </aside>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <figure className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden glass-card divine-glow">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="AI Photo Transformation Demo - AI Web Tools Restyle Me GPT"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </figure>
            
            <div className="absolute top-1/3 -right-8 w-16 h-16 rounded-full bg-cyberpunk-blue animate-divine-pulse shadow-2xl"></div>
            <div className="absolute -bottom-6 left-1/4 w-12 h-12 rounded-full bg-cyberpunk-purple animate-divine-glow shadow-xl"></div>
            <div className="absolute top-0 right-1/4 w-10 h-10 rounded-full bg-cyberpunk-pink animate-divine-float shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
