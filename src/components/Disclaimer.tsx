
import { Button } from '@/components/ui/button';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-24 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Legal Disclaimer
          </h2>
          <p className="text-gray-300 text-lg">
            Important information about using Restyle Me GPT
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold mb-4 text-white">Terms of Use</h3>
            <p className="text-gray-300 mb-4">
              By using Restyle Me GPT, you agree to the following terms and conditions:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Restyle Me GPT is provided "as is" without warranties of any kind, either express or implied.</li>
              <li>AI Web Tools LLC is not responsible for any content generated through the use of Restyle Me GPT.</li>
              <li>Generated images are for personal, non-commercial use only unless otherwise specified in OpenAI's terms.</li>
              <li>Users are responsible for ensuring they have appropriate rights to any images they upload.</li>
              <li>AI Web Tools LLC reserves the right to modify or discontinue the service at any time without notice.</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-white">Privacy Notice</h3>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Please understand the following:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Images uploaded to Restyle Me GPT are processed using OpenAI's image generation technology.</li>
              <li>Uploaded images are not permanently stored but are processed according to OpenAI's privacy policy.</li>
              <li>Generated content may be temporarily stored to provide the service.</li>
              <li>For complete details on data handling practices, refer to OpenAI's privacy policy.</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-white">Limitations</h3>
            <p className="text-gray-300 mb-6">
              Restyle Me GPT has the following limitations:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Results may vary based on image quality, lighting, and other factors.</li>
              <li>The service may not be able to process certain types of images due to content restrictions.</li>
              <li>Generated images may not always perfectly match the requested style or maintain exact likeness.</li>
              <li>The service is subject to OpenAI's usage policies and limitations.</li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild variant="outline" className="border-cyberpunk-blue text-cyberpunk-blue hover:bg-cyberpunk-blue/10">
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </Button>
              
              <Button asChild variant="outline" className="border-cyberpunk-blue text-cyberpunk-blue hover:bg-cyberpunk-blue/10">
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer">
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
