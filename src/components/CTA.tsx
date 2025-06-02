
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-dark via-cyberpunk-vivid/30 to-cyberpunk-dark z-[-1]"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyberpunk-blue/40 filter blur-3xl animate-divine-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyberpunk-purple/40 filter blur-3xl animate-divine-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyberpunk-vivid/30 filter blur-2xl animate-divine-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center glass-card rounded-3xl p-16 md:p-24 backdrop-blur-2xl border border-white/20 divine-glow">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 text-gradient text-glow">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who have reimagined themselves with the power of AI. Try Restyle Me GPT today!
          </p>
          
          <Button 
            asChild
            className="bg-gradient-to-r from-cyberpunk-vivid via-cyberpunk-blue to-cyberpunk-purple text-white px-16 py-8 text-2xl rounded-full hover:brightness-125 transition-all duration-500 button-glow hover:scale-110 shadow-2xl divine-glow"
          >
            <a href="https://chat.openai.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
              Try Restyle Me GPT
            </a>
          </Button>
          
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-gray-300 text-xl">
              Powered by GPT-4o • High-quality transformations • Instant results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
