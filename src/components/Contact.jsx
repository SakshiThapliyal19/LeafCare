// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  console.log("Contact component rendered");

  return (
    <section id="contact" className="h-screen w-screen bg-gradient-to-r from-green-100 to-white flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-extrabold text-green-700 mb-4 shadow-lg tracking-wide">
        Contact Us
      </h2>
      <p className="text-lg mb-8 text-gray-800 max-w-lg leading-relaxed">
        Email us at <a href="mailto:support@leafcare.com" className="text-green-600 hover:underline">support@leafcare.com</a> for more information, or reach out using the form below.
      </p>
      
      <form className="flex flex-col items-center space-y-6 bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <div className="flex items-center w-full">
          <FaUser className="text-green-500 mr-3 text-xl" /> {/* Increased icon size */}
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" // Increased padding and font size
          />
        </div>
        
        <div className="flex items-center w-full">
          <FaEnvelope className="text-green-500 mr-3 text-xl" /> {/* Increased icon size */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" // Increased padding and font size
          />
        </div>
        
        <div className="flex items-center w-full">
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-4 rounded w-full h-40 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" // Increased padding and height
          ></textarea>
        </div>
        
        <button className="flex items-center bg-green-500 text-white px-8 py-4 rounded hover:bg-green-600 transition-colors duration-300 text-lg">
          <FaPaperPlane className="mr-2 text-lg" /> Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;