import React from 'react';
import { Upload, Search, AlertCircle } from 'lucide-react';

const HowToUse = () => {
  const steps = [
    { icon: <Upload size={40} />, title: 'Upload', description: 'Take a clear photo of the affected leaf and upload it to our platform.' },
    { icon: <Search size={40} />, title: 'Analyze', description: 'Our AI-powered technology will scan and analyze the leaf for signs of disease.' },
    { icon: <AlertCircle size={40} />, title: 'Get Results', description: "Receive a detailed report on the leaf's health and potential issues." },
  ];

  return (
    <section id="how-to-use" className="py-16 bg-[#80AF81] text-center min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#1A5319]">How to Use</h2> {/* Increased heading size */}
        
        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#D6EFD8] p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-out relative h-80 flex flex-col justify-between" // Increased padding and height
            >
              <div className="text-[#1A5319] mb-6 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1A5319]">{step.title}</h3> {/* Increased heading size */}
              <p className="text-lg text-[#508D4E] mb-4">{step.description}</p> {/* Increased description font size */}

              {/* Decorative border at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A5319] to-[#508D4E]"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="mt-12 bg-[#1A5319] text-white px-8 py-3 rounded-full hover:bg-[#508D4E] hover:shadow-xl transition duration-300 text-lg font-semibold transform hover:scale-105">
          Analyze a Leaf
        </button>
      </div>
    </section>
  );
};

export default HowToUse;