// src/components/Header.jsx
import React from 'react';

const Header = () => {
  console.log("Header component rendered");

  return (
    <header className="bg-green-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Leaf Care</div>
        <nav className="space-x-4">
          <a href="#how-to-use" className="hover:underline">How to Use</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
            Log in
          </button>
          <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
            Sign up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;