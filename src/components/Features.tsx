
import { useState, useEffect } from 'react';

const features = [
  {
    title: "Style Transformation",
    description: "Transform your photos into Ghibli animation, action figures, anime characters, or movie scenes with just a few clicks.",
    icon: "✨"
  },
  {
    title: "Accurate Likeness",
    description: "Our AI ensures that your core appearance and likeness are accurately preserved in every transformation.",
    icon: "🎯"
  },
  {
    title: "Creative Freedom",
    description: "Describe any imaginative style or scene you want to be depicted in - the possibilities are endless.",
    icon: "🎨"
  },
  {
    title: "High Resolution",
    description: "Get beautiful 16:9 high-resolution images perfect for social media, wallpapers, or creative projects.",
    icon: "📱"
  },
  {
    title: "Cutting-Edge AI",
    description: "Powered by the latest GPT-4o image generation technology for stunning visual results.",
    icon: "🧠"
  },
  {
    title: "Fast Processing",
    description: "Receive your reimagined images within seconds of uploading and providing style instructions.",
    icon: "⚡"
  }
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.feature-item').forEach((item) => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      {/* Background gradients */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-cyberpunk-vivid/10 filter blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-64 h-64 rounded-full bg-cyberpunk-blue/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Unleash Your Imagination
          </h2>
          <p className="text-gray-300 text-lg">
            Restyle Me GPT offers powerful features to transform your photos into anything you can imagine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`feature-item glass-card rounded-xl p-6 transition-all duration-500 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
