// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  console.log("Contact component rendered");

  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg mb-4">Email us at <a href="mailto:support@leafcare.com" className="text-green-500 hover:underline">support@leafcare.com</a> for more information.</p>
      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 p-2 rounded w-80"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 p-2 rounded w-80"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 p-2 rounded w-80 h-32"
        ></textarea>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;