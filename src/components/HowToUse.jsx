import React from 'react';
import { Upload, Search, AlertCircle } from 'lucide-react';

const HowToUse = () => {
  const steps = [
    { icon: <Upload size={40} />, title: 'Upload', description: 'Take a clear photo of the affected leaf and upload it to our platform.' },
    { icon: <Search size={40} />, title: 'Analyze', description: 'Our AI-powered technology will scan and analyze the leaf for signs of disease.' },
    { icon: <AlertCircle size={40} />, title: 'Get Results', description: "Receive a detailed report on the leaf's health and potential issues." },
  ];

  return (
    <section id="how-to-use" className="py-16 bg-[#80AF81] text-center min-h-screen flex flex-col justify-center"> {/* Added min-h-screen and flex styling */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-[#1A5319]">How to Use</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#D6EFD8] p-6 rounded-lg shadow-md">
              <div className="text-[#1A5319] mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A5319]">{step.title}</h3>
              <p className="text-[#508D4E]">{step.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-[#1A5319] text-white px-8 py-3 rounded-full hover:bg-[#508D4E] transition duration-300 text-lg font-semibold">
          Analyze a Leaf
        </button>
      </div>
    </section>
  );
};

export default HowToUse;