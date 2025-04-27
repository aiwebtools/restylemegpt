
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-dark via-cyberpunk-vivid/20 to-cyberpunk-dark z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-blue/30 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cyberpunk-purple/30 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-8 md:p-16 backdrop-blur-xl border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have reimagined themselves with the power of AI. Try Restyle Me GPT today!
          </p>
          
          <Button 
            asChild
            className="bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue text-white px-8 py-6 text-lg rounded-full hover:brightness-110 transition-all button-glow"
          >
            <a href="https://chat.openai.com/g/g-680eb3e1e3508191a662b9b98906e18a-restyle-me-gpt">
              Try Restyle Me GPT
            </a>
          </Button>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              Powered by GPT-4o • High-quality transformations • Instant results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
