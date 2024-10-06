import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import img1 from '../galleryimages/haley.jpg'
import img2 from '../galleryimages/image1.jpg'
import img3 from '../galleryimages/image2.JPG'
import img4 from '../galleryimages/image3.JPG'
import img5 from '../galleryimages/image4.jpg'
import img6 from '../galleryimages/image5.jpg'
import img7 from '../galleryimages/image6.JPG'
import img8 from '../galleryimages/image7.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: img1, alt: "Seamless Extension Install" },
    { src: img2, alt: "Subtle Highlight" },
    { src: img3, alt: "Balayage" },
    { src: img4, alt: "Honey Blonde" },
    { src: img5, alt: "Power Blonde Highlight" },
    { src: img6, alt: "Rich Brunette" },
    { src: img7, alt: "Deep Brunette" },
    { src: img8, alt: "Low Maintenance Blonde" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 cursor-pointer group"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          />
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;