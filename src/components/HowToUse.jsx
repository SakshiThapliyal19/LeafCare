// src/components/HowToUse.jsx
import React from 'react';

const HowToUse = () => {
  console.log("HowToUse component rendered");

  return (
    <section id="how-to-use" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-4">How to Use</h2>
      <p className="text-lg mb-8">
        Simply upload a photo of your leaf, and our technology will analyze its health.
      </p>
      <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
        Analyze a Leaf
      </button>
    </section>
  );
};

export default HowToUse;