import React from 'react';

function Hero() {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">We provide the best products and services for all your needs.</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-8 rounded-md">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
