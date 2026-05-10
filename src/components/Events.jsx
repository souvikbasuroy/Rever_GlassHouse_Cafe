import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X } from 'lucide-react';

const events = [
  {
    name: "Ladies Night",
    date: "5 March Thursday",
    time: "7:00 PM onwards",
    image: "/event1.jpeg",
    color: "rgba(255, 104, 57, 0.5)"
  },
  {
    name: "Echos of Hind",
    date: "15th May Saturday",
    time: "12:30 AM onwards",
    image: "/event2.jpeg",
    color: "rgba(240, 187, 64, 0.5)"
  },
  {
    name: "Musical Night",
    date: "14th Feb Special",
    time: "12:30 AM onwards",
    image: "/event3.jpeg",
    color: "rgba(236, 72, 153, 0.5)"
  },
  {
    name: "Musical Midnight",
    date: "Saturday",
    time: "12:30 AM onwards",
    image: "/event4.jpeg",
    color: "rgba(34, 197, 94, 0.5)"
  }
];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="events"
      className="relative bg-black min-h-screen py-24 flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-80 grayscale-[0.2]"
        >
          <source src="/reservation.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cafe-red uppercase tracking-[0.4em] text-sm font-bold block mb-4"
          >
            Occasions  
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Memories in <span className="text-cafe-yellow italic">Motion</span>
          </motion.h2>
          <div className="w-32 h-[1px] bg-white/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(event.image)}
              className="cursor-pointer group relative"
            >
              {/* Image Container with Glow and Zoom */}
              <div className="relative overflow-hidden rounded-[30px] aspect-[4/5] border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] shadow-2xl">
                
                {/* Glow Effect Layer */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    boxShadow: `inset 0 0 100px ${event.color}`,
                    zIndex: 1
                  }}
                />

                <motion.img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 flex flex-col justify-end p-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cafe-yellow transition-colors duration-300">
                      {event.name}
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Calendar size={14} className="text-cafe-red" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Clock size={14} className="text-cafe-red" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Interactive Dynamic Flow Indicator */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-2 h-2 rounded-full bg-cafe-red animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              whileHover={{ rotate: 90 }}
            >
              <X size={40} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              alt="Event detail"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;

