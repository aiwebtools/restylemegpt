
import { useState, useEffect } from 'react';

const steps = [
  {
    number: "01",
    title: "Upload Your Photo",
    description: "Start by uploading a clear photo of yourself that you'd like to transform."
  },
  {
    number: "02",
    title: "Describe Your Vision",
    description: "Tell us exactly how you want to be restylized—whether that's as a Ghibli character, action figure, or in a movie scene."
  },
  {
    number: "03",
    title: "AI Transformation",
    description: "Our advanced AI processes your request, ensuring your likeness remains while applying the requested style."
  },
  {
    number: "04",
    title: "Get Your Result",
    description: "Within moments, receive your beautifully transformed image ready to download and share."
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-1/3 h-1/3 bg-cyberpunk-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 w-1/4 h-1/4 bg-cyberpunk-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            How Restyle Me GPT Works
          </h2>
          <p className="text-gray-300 text-lg">
            Transform your photos in just a few simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`mb-8 glass-card rounded-xl p-6 transition-all duration-500 ${
                  index === activeStep 
                    ? 'neon-border scale-105' 
                    : 'opacity-70'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold ${index === activeStep ? 'text-gradient' : 'text-gray-400'}`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass-card animate-float">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyberpunk-dark/80 via-cyberpunk-vivid/20 to-cyberpunk-purple/40 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Visualization of the step */}
                    <div className="text-center p-8">
                      <div className="text-5xl mb-6">
                        {activeStep === 0 && "📷"}
                        {activeStep === 1 && "💭"}
                        {activeStep === 2 && "🧠"}
                        {activeStep === 3 && "✨"}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{steps[activeStep].title}</h3>
                      <p className="text-gray-300">{steps[activeStep].description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeStep 
                        ? 'bg-cyberpunk-purple w-8' 
                        : 'bg-gray-600'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
