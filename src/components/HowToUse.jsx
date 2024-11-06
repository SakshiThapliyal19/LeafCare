// src/components/HowToUse.jsx
import React from 'react';

const HowToUse = () => {
  console.log("HowToUse component rendered");

  return (
    <section id="how-to-use" className="h-screen w-screen bg-gradient-to-r from-green-100 to-green-300 flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-5xl font-extrabold text-green-700 mb-6 tracking-wide shadow-lg">
        How to Use
      </h2>
      <p className="text-xl text-gray-800 max-w-lg leading-relaxed shadow-md p-4 bg-white bg-opacity-70 rounded-md">
        Simply upload a photo of your leaf, and our advanced technology will analyze its health and provide insights. Get fast, reliable results to keep your plants thriving!
      </p>
    </section>
  );
};

export default HowToUse;