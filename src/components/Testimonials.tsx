
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Digital Artist",
    quote: "Restyle Me GPT transformed my selfies into Ghibli-style art that I'm using for my portfolio. The accuracy of keeping my likeness while changing the style is incredible!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    quote: "I've tried many AI image tools, but none preserve your actual likeness like Restyle Me does. I made myself into an action figure for my YouTube thumbnail and it went viral!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    name: "Sophia Rodriguez",
    role: "Social Media Manager",
    quote: "This tool is a game-changer for our marketing campaigns. We can create custom, on-brand avatars of our team members that perfectly match our company's aesthetic.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-0 w-72 h-72 rounded-full bg-cyberpunk-vivid/10 filter blur-3xl"></div>
      <div className="absolute right-1/4 bottom-0 w-96 h-96 rounded-full bg-cyberpunk-blue/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            What People Are Saying
          </h2>
          <p className="text-gray-300 text-lg">
            Join thousands of satisfied users who have transformed their photos with Restyle Me GPT
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative glass-card rounded-xl p-8 md:p-12">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyberpunk-purple flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <svg className="w-12 h-12 text-cyberpunk-purple/30 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.35-1.48 2.46-2.03l-1.9-1.83c-1.13.86-2.078 1.85-2.866 3.07-.789 1.22-1.183 2.38-1.183 3.47 0 1.35.42 2.44 1.26 3.27.84.82 1.908 1.23 3.207 1.23.808 0 1.535-.25 2.18-.75.645-.5.967-1.18.967-2.04zM22 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.55-.137-1.07-.137-1.54-.028-.16-.95.09-1.95.78-3 .53-.81 1.348-1.48 2.46-2.03l-1.9-1.83c-1.13.86-2.08 1.85-2.87 3.07-.79 1.22-1.18 2.38-1.18 3.47 0 1.35.42 2.44 1.26 3.27.84.82 1.908 1.23 3.207 1.23.807 0 1.535-.25 2.18-.75.645-.5.967-1.18.967-2.04z" />
                  </svg>
                  
                  <p className="text-xl md:text-2xl text-white mb-6">
                    {testimonials[currentIndex].quote}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-cyberpunk-purple">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={goToPrev}
                className="w-10 h-10 rounded-full border border-cyberpunk-purple text-white flex items-center justify-center hover:bg-cyberpunk-purple/20 transition-colors"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-cyberpunk-purple' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-cyberpunk-purple text-white flex items-center justify-center hover:bg-cyberpunk-purple/20 transition-colors"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
