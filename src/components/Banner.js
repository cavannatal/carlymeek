// Banner.js
import React from 'react';
import Salon from '../images/salon-banner.webp'

const Banner = () => (
  <div className="relative h-screen">
    <img 
      src={Salon}
      alt="Elegant hairstyling" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-4xl md:text-6xl font-light mb-4">Elevate Your Style</h2>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Where artistry meets precision in every cut and style
        </p>
      </div>
    </div>
  </div>
);

export default Banner;