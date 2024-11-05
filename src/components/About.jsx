// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4 text-green-600">About Us</h2>
      <p className="text-lg text-gray-700 mx-auto max-w-2xl">
        Leaf Care is dedicated to helping gardeners, farmers, and plant enthusiasts
        monitor the health of their plants through advanced leaf disease detection technology.
        With our easy-to-use platform, you can quickly upload photos of your plant’s leaves
        to identify various diseases, deficiencies, and conditions, allowing for proactive care.
      </p>
      <p className="text-lg text-gray-700 mx-auto max-w-2xl mt-4">
        Our mission is to empower plant lovers everywhere to take better care of their green companions
        by making plant health insights accessible and understandable. Whether you’re a hobbyist or a professional,
        Leaf Care provides a reliable, accurate, and fast solution for all your plant care needs.
      </p>
    </section>
  );
};

export default About;