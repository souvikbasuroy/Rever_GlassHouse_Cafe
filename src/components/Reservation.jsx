import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const branches = [
  {
    name: "Rever SkyDeck cafe",
    address: "5th Floor, 29A, Dr Ambedkar Sarani, Rooftop, Topsia, Kolkata, West Bengal 700046",
    image: "/reverskydeck.jpg"
  },
  {
    name: "Rever Cafe (Howrah)",
    address: "Ground Floor, 96/2, Dr Abani Dutta Rd, near Golabari Police Station, Howrah AC Market, Salkia, Howrah, West Bengal 711101, India",
    image: "/howrah.jpeg"
  },
  {
    name: "Rever Cafe",
    address: "8A, Allenby Rd, Sreepally, Bhowanipore, Kolkata, West Bengal 700020",
    image: "/rever.jpeg"
  }
];

const Reservation = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to allow re-triggering for dynamic feel
    threshold: 0.1,
  });

  return (
    <section id="reservation" ref={ref} className="min-h-screen flex flex-col bg-white overflow-hidden py-10">



      <div className="flex flex-col lg:flex-row w-full h-full items-center">
        {/* Left Content - Branches List */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-12"
          >
            <span className="text-cafe-red uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Our Presence</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Visit Our <br />
              <span className="italic text-cafe-red">Branches</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Find us in the heart of the city, bringing you the finest cafe experience across multiple locations.
            </p>

            {/* Signature Gradient Line - From About Section */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-gradient-to-r from-cafe-red to-yellow-500 mt-8"
            />
          </motion.div>

          <div className="space-y-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                className="group relative flex items-start gap-6 p-6 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-cafe-red/30 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cafe-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Branch Image with Rounded Corner Border */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white shadow-md group-hover:border-cafe-red/20 transition-all duration-500">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Branch Details */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl  font-bold text-gray-900 group-hover:text-cafe-red transition-colors duration-300 mb-2 font-serif tracking-tight">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {branch.address}
                  </p>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <div className="w-2 h-2 rounded-full bg-cafe-red shadow-[0_0_10px_#d62828]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side Image - Dynamic Floating Motion */}
        <div className="w-full lg:w-1/2 h-[600px] lg:h-screen relative overflow-hidden bg-white p-4 lg:p-20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 50 }}
            animate={inView ? {
              scale: 1,
              opacity: 1,
              x: 0,
              y: [0, -20, 0] // Continuous floating motion
            } : { opacity: 0, x: 50 }}
            transition={{
              scale: { duration: 1.2, type: "spring" },
              opacity: { duration: 1 },
              x: { duration: 1.2, type: "spring" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" } // Infinite float
            }}
            whileHover={{
              rotate: 1,
              scale: 1.02,
              transition: { duration: 0.5 }
            }}
            className="relative w-full h-full max-w-[500px] aspect-[3/4]"
          >
            {/* Main Image with Border */}
            <div className="relative w-full h-full border-[10px] border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src="/reservtion.jpeg"
                alt="Cafe Experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Corner Decorations - Matching About Section with floating effect */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 border-t-[6px] border-l-[6px] border-cafe-red z-10"
              animate={inView ? {
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: [0, 5, 0],
                y: [0, 5, 0]
              } : { opacity: 0, scale: 0.5, rotate: -45 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                scale: { duration: 0.8, delay: 0.5, type: "spring" },
                rotate: { duration: 0.8, delay: 0.5, type: "spring" },
                x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            />

            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 border-b-[6px] border-r-[6px] border-yellow-500 z-10"
              animate={inView ? {
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: [0, -5, 0],
                y: [0, -5, 0]
              } : { opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.7 },
                scale: { duration: 0.8, delay: 0.7, type: "spring" },
                rotate: { duration: 0.8, delay: 0.7, type: "spring" },
                x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Reservation;

