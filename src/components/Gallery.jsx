import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryData = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/5.jpg",
];

const Gallery = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevSlide = () => {
    setCenterIndex(
      (prev) => (prev - 1 + galleryData.length) % galleryData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [centerIndex]);

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden min-h-screen">
      {/* Heading */}
      <div className="container mx-auto px-6 text-center mb-20 relative z-50">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
        >
          Gallery
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-black mb-6"
        >
          Glimpses of <span className="text-red-500 italic font-serif">Rever</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg font-light italic"
        >
          Beyond the cup and canvas, we weave stories of warmth, taste, and timeless beauty — each glimpse a chapter of our journey.
        </motion.p>
      </div>

      {/* Stacked Slider */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden px-4">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {galleryData.map((img, idx) => {
              // Calculate relative position to centerIndex
              const diff = (idx - centerIndex + galleryData.length) % galleryData.length;
              
              let position = 0; // 0: center, 1: next, -1: prev
              if (diff === 0) position = 0;
              else if (diff === 1) position = 1;
              else if (diff === galleryData.length - 1) position = -1;
              else return null; // Hide others

              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: position * 400 }}
                  animate={{
                    opacity: position === 0 ? 1 : 0.6,
                    scale: position === 0 ? 1 : 0.8,
                    x: position * (window.innerWidth < 768 ? 220 : 380),
                    zIndex: position === 0 ? 30 : 10,
                    filter: position === 0 ? "grayscale(0)" : "grayscale(0.5) blur(4px)",
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: position * 400 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                  }}
                  className={`absolute overflow-hidden rounded-[40px] shadow-2xl cursor-pointer ${
                    position === 0 
                      ? "w-[300px] md:w-[450px] h-[450px] md:h-[550px]" 
                      : "w-[200px] md:w-[350px] h-[300px] md:h-[400px]"
                  }`}
                  onClick={() => setCenterIndex(idx)}
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${position === 0 ? "bg-transparent" : "bg-black/40"}`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-8 mt-12">
        <button
          onClick={prevSlide}
          className="w-16 h-16 rounded-full border border-red-300 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 rounded-full border border-red-300 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
        >
          <ArrowRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;