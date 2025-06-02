
import { Button } from '@/components/ui/button';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-dark via-cyberpunk-purple/20 to-cyberpunk-blue/20"></div>
      
      {/* Enhanced floating background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyberpunk-vivid/30 filter blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyberpunk-blue/30 filter blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-2/3 w-64 h-64 rounded-full bg-cyberpunk-pink/20 filter blur-2xl animate-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Legal Disclaimer
          </h2>
          <p className="text-gray-200 text-xl leading-relaxed">
            Important information about using Restyle Me GPT
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-12 backdrop-blur-2xl border border-white/20 shadow-2xl">
          {/* Informational Disclaimer Box */}
          <div className="bg-gradient-to-r from-cyberpunk-vivid/20 to-cyberpunk-blue/20 border border-cyberpunk-vivid/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Important Notice</h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              This tool is provided for <strong>informational, educational, and research purposes only</strong>. Generated content should be used responsibly and in accordance with applicable laws and regulations.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Terms of Use</h3>
              <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                By using Restyle Me GPT, you agree to the following terms and conditions:
              </p>
              
              <ul className="list-disc pl-8 space-y-4 text-gray-200 mb-8 text-lg">
                <li>Restyle Me GPT is provided "as is" without warranties of any kind, either express or implied.</li>
                <li>AI Web Tools LLC is not responsible for any content generated through the use of Restyle Me GPT.</li>
                <li>Generated images are for personal, non-commercial use only unless otherwise specified in OpenAI's terms.</li>
                <li>Users are responsible for ensuring they have appropriate rights to any images they upload.</li>
                <li>AI Web Tools LLC reserves the right to modify or discontinue the service at any time without notice.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Privacy Notice</h3>
              <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                Your privacy is important to us. Please understand the following:
              </p>
              
              <ul className="list-disc pl-8 space-y-4 text-gray-200 mb-8 text-lg">
                <li>Images uploaded to Restyle Me GPT are processed using OpenAI's image generation technology.</li>
                <li>Uploaded images are not permanently stored but are processed according to OpenAI's privacy policy.</li>
                <li>Generated content may be temporarily stored to provide the service.</li>
                <li>For complete details on data handling practices, refer to OpenAI's privacy policy.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Limitations</h3>
              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                Restyle Me GPT has the following limitations:
              </p>
              
              <ul className="list-disc pl-8 space-y-4 text-gray-200 mb-8 text-lg">
                <li>Results may vary based on image quality, lighting, and other factors.</li>
                <li>The service may not be able to process certain types of images due to content restrictions.</li>
                <li>Generated images may not always perfectly match the requested style or maintain exact likeness.</li>
                <li>The service is subject to OpenAI's usage policies and limitations.</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-8 border-t border-white/20">
              <Button asChild variant="outline" className="border-2 border-cyberpunk-blue text-cyberpunk-blue hover:bg-cyberpunk-blue/20 hover:scale-105 transition-all duration-300 py-6 text-lg">
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </Button>
              
              <Button asChild variant="outline" className="border-2 border-cyberpunk-purple text-cyberpunk-purple hover:bg-cyberpunk-purple/20 hover:scale-105 transition-all duration-300 py-6 text-lg">
                <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
