// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  console.log("Footer component rendered");

  return (
    <footer className="bg-green-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2023 Leaf Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
