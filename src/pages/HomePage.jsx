// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import HowToUse from '../components/HowToUse';
import Contact from '../components/Contact';

const Home = () => {
  console.log("Home component rendered");

  return (
    <div className="flex flex-col min-h-screen">
      {console.log("Rendering Header component")}
      <Header />
      <main className="flex-grow">
        {console.log("Rendering main content")}
        <section className="hero-section bg-green-100 py-16 text-center">
          {console.log("Hero section rendered")}
          <h1 className="text-4xl font-bold text-green-600">Discover leaf health at a glance</h1>
          <p className="text-lg mt-4">
            Our advanced leaf disease detection technology helps you identify various leaf conditions.
          </p>
          <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
            Analyze a Leaf
          </button>
        </section>
        {console.log("Rendering About component")}
        <About />
        {console.log("Rendering HowToUse component")}
        <HowToUse />
        {console.log("Rendering Contact component")}
        <Contact />
      </main>
      {console.log("Rendering Footer component")}
      <Footer />
    </div>
  );
};

export default Home;