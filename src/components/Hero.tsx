import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyberpunk-purple/20 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-cyberpunk-blue/20 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Transform</span> Your Look
              <span className="text-white"> With </span>
              <span className="text-gradient">AI</span>
            </h1>
            
            <div className="mt-8 space-y-6">
              <p className="text-xl text-gray-300">
                Upload your photo and let our AI transform you into any style you can imagine – from Ghibli animation to cyberpunk, action figures to movie scenes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue text-white hover:brightness-110 transition-all px-8 py-6 text-lg button-glow"
                >
                  <a href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
                    Try Restyle Me GPT
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-transparent border border-cyberpunk-purple/50 text-white hover:bg-cyberpunk-purple/10 transition-all px-6 py-6 text-lg"
                >
                  <a href="#how-it-works">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1501286353178-1ec881214838" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" alt="User 4" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-white font-medium">500+ users already transformed</p>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="https://chatgpt.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt"
              className="block relative z-10 w-full aspect-video rounded-lg overflow-hidden glass-card hover:scale-105 transition-all duration-300"
            >
              <img 
                src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2c00-622f-9229-f61c3f1cafef/raw?se=2025-04-28T00%3A07%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=a88d831a-2cc0-5bf5-9197-4709398f4ee0&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T21%3A02%3A33Z&ske=2025-04-28T21%3A02%3A33Z&sks=b&skv=2024-08-04&sig=I3rI44%2BvdLIxtFXtW4lLuWCf62scrwTSVK68sfB7pcU%3D" 
                alt="Restyle Me GPT example" 
                className="w-full h-full object-cover"
              />
            </a>
            
            <div className="absolute top-1/3 -right-6 w-12 h-12 rounded-full bg-cyberpunk-blue animate-pulse-light"></div>
            <div className="absolute -bottom-4 left-1/4 w-8 h-8 rounded-full bg-cyberpunk-purple animate-pulse-light"></div>
            <div className="absolute top-0 right-1/4 w-6 h-6 rounded-full bg-cyberpunk-pink animate-pulse-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
