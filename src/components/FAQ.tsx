
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Restyle Me GPT?",
    answer: "Restyle Me GPT is an advanced AI tool that allows you to upload an image of yourself and transform it into various artistic styles while maintaining your likeness. You can become a Ghibli character, an action figure, anime character, or appear in movie scenes."
  },
  {
    question: "How accurate are the transformations?",
    answer: "Restyle Me GPT is designed to maintain your core likeness while applying the artistic style you request. The AI is specifically optimized to ensure you remain recognizable in the transformed images."
  },
  {
    question: "What styles can I transform my photos into?",
    answer: "The possibilities are virtually endless! You can request Ghibli animation style, action figure, anime character, caricature, movie scene, cyberpunk, fantasy character, and many more artistic styles. If you can describe it, Restyle Me GPT can usually create it."
  },
  {
    question: "What image resolution will I receive?",
    answer: "By default, Restyle Me GPT creates images in a 16:9 aspect ratio at high resolution. However, you can specify a different ratio if needed for your particular use case."
  },
  {
    question: "Can I use the generated images commercially?",
    answer: "The images generated are for personal use. For commercial applications, please refer to OpenAI's content policy and terms of service regarding AI-generated images."
  },
  {
    question: "Is my photo data kept private?",
    answer: "Yes, your privacy is important. Your uploaded photos are processed securely and not stored permanently. For full details on how your data is handled, please refer to OpenAI's privacy policy."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  
  const toggleItem = (value: string) => {
    setOpenItems((items) => 
      items.includes(value)
        ? items.filter((item) => item !== value)
        : [...items, value]
    );
  };
  
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-cyberpunk-dark to-transparent z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Find answers to common questions about Restyle Me GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl overflow-hidden border-0"
              >
                <AccordionTrigger 
                  onClick={() => toggleItem(`item-${index}`)}
                  className="px-6 py-4 text-lg font-medium text-white hover:text-cyberpunk-purple"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <a 
              href="mailto:Contact@ai-webtools.com" 
              className="text-cyberpunk-blue hover:text-cyberpunk-purple transition-colors font-medium"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
