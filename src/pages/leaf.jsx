import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';

const Analyse = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the uploaded image
      console.log("Image uploaded:", file);
    }
  };

  const handleBack = () => {
    setImage(null); // Reset the image state when going back
    navigate('/'); // Navigate to home
  };

  return (
    <section 
      className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4" 
      style={{
        backgroundImage: "url('/forest.jpg')", // Background image from public folder
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        position: "relative" // To position the overlay
      }}
    >
      {/* Overlay to add transparency */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Back Button */}
      <button
        onClick={handleBack} // Use handleBack function
        className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center z-10"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </button>

      {/* Upload Image Component */}
      <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-lg w-full max-w-md border-2 border-dashed border-gray-300 cursor-pointer hover:border-green-500 z-10">
        <FaPlus className="text-gray-400 text-4xl mb-4" />
        <p className="text-gray-500 mb-4">Drag and drop an image, or click to select</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="opacity-0 absolute inset-0 cursor-pointer"
          aria-label="Upload an image"
        />
        {image && <img src={image} alt="Uploaded leaf preview" className="mt-4 rounded-md w-full h-auto max-h-60 object-cover" />}
      </div>

      {/* Analyze Button */}
      <button 
        onClick={() => {
          // Implement your analyze functionality here
          alert("Analyzing the leaf..."); // Placeholder action
        }}
        disabled={!image} // Disable if no image is uploaded
        className={`mt-8 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors duration-300 ${!image && 'opacity-50 cursor-not-allowed'} z-10`}
      >
        Analyze it
      </button>
    </section>
  );
};

export default Analyse;