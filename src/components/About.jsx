// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen w-screen bg-white relative">
      {/* Center Content positioned at the top */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-10 rounded-lg shadow-2xl max-w-4xl w-full mt-20">
        <h2 className="text-4xl font-semibold mb-4 text-green-600">About Us</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Leaf Care is dedicated to helping gardeners, farmers, and plant enthusiasts monitor
          the health of their plants through advanced leaf disease detection technology. With our
          easy-to-use platform, you can quickly upload photos of your plant’s leaves to identify
          various diseases, deficiencies, and conditions, allowing for proactive care.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to empower plant lovers everywhere to take better care of their green
          companions by making plant health insights accessible and understandable. Whether you’re
          a hobbyist or a professional, Leaf Care provides a reliable, accurate, and fast solution
          for all your plant care needs.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Images positioned around the main content */}
      <div className="container mx-auto relative flex flex-col items-center text-center">
        
        {/* Top Left - Image 1 */}
        <div
          className="absolute left-10 transform hover:scale-105 transition-transform duration-300"
          style={{ top: '200px' }} // Adjust this value to lower the position
        >
          <img
            src="/Leaf1.jpg" // Replace with actual image path in public folder
            alt="Leaf Detection"
            className="rounded-full w-56 h-56 object-cover shadow-lg"
          />
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform duration-300"
          style={{ bottom: '-800px' }} // Adjust this value to move it lower
        >
          <img
            src="/Leaf2.jpg" // Replace with actual image path in public folder
            alt="Leaf Detection"
            className="rounded-full w-56 h-56 object-cover shadow-lg"
          />
        </div>

        {/* Top Right - Image 3 */}
        <div
          className="absolute right-10 transform hover:scale-105 transition-transform duration-300"
          style={{ top: '200px' }} // Adjust this value to lower the position
        >
          <img
            src="/Leaf4.jpg" // Replace with actual image path in public folder
            alt="Leaf Detection"
            className="rounded-full w-56 h-56 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;