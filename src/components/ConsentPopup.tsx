
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem("consent-accepted");
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem("consent-accepted", "true");
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in">
      <div className="w-full max-w-md glass-card rounded-2xl p-6 shadow-2xl animate-scale-in">
        <h3 className="text-xl font-bold mb-4 text-white">Disclaimer</h3>
        <p className="text-gray-300 mb-6">
          By using Restyle Me GPT, you agree to our Terms of Service and Privacy Policy. 
          All generated content is for personal use only unless specified otherwise in OpenAI's terms.
          Your uploaded images are processed according to OpenAI's privacy policy.
        </p>
        
        <div className="flex justify-end">
          <Button
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyberpunk-vivid to-cyberpunk-blue text-white hover:brightness-110"
          >
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
