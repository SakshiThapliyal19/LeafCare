// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  console.log("Header component rendered");

  return (
    <header className="bg-green-500 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo with Creative Font wrapped in a Link */}
        <Link to="/" className="flex items-center space-x-4"> {/* Use Link for navigation */}
          <img src="/logo.png" alt="Leaf Care Logo" className="h-10" />
          <h1 className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            LeafCare
          </h1>
        </Link>

        {/* Navigation Links with Link Components */}
        <nav className="space-x-4 flex items-center">
          <a href="#about" className="hover:font-bold">About</a>
          <a href="#how-to-use" className="hover:font-bold">How to Use</a>
          <a href="#contact" className="hover:font-bold">Contact</a>
          <Link to="/login" className="bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
            Log in
          </Link>
          <Link to="/signup" className="bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;