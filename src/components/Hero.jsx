import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUpRight, Phone } from 'lucide-react';

const Hero = ({ isLoading }) => {

  // CONTAINER ANIMATION
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1, // Reduced delay since loader already finished
      },
    },
  };

  // ITEM ANIMATION
  const item = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-6 md:px-12 pt-32 pb-16"
    >

      {/* Background Blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cafe-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isLoading ? "hidden" : "show"}
          className="flex flex-col space-y-8 order-2 lg:order-1"
        >

          {/* Welcome Text */}
          <motion.div variants={item}>
            <span className="text-white uppercase tracking-[0.3em] text-sm font-cookie block mb-6">
              Welcome To
            </span>

            <h1 className=" leading-[1.1] tracking-tight flex flex-col">

              <span className="font-[Imperial] text-cafe-red text-6xl md:text-7xl ">
                  Rever
                </span>

                <span className="font-[PlayfairDisplay] text-yellow-500 text-3xl md:text-4xl lg:text-[3.5rem] mt-2 font-bold tracking-wider -ml-2">
                  Glasshouse Cafe
                </span>


            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-lg"
          >
            Step inside a sanctuary of taste and design —
            every sip, every bite, every moment crafted
            as a masterpiece.
          </motion.p>

          {/* Buttons & Reservation Frame */}
          <motion.div
            variants={item}
            className="flex flex-col xl:flex-row items-stretch xl:items-center gap-6 pt-6"
          >

            <Link to="menu" smooth={true} offset={-70} className="flex-shrink-0">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full group px-8 py-5 bg-cafe-red text-white uppercase tracking-widest text-sm font-bold rounded-2xl transition-all duration-300 hover:bg-yellow-500 hover:text-black flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]"
              >
                Explore The Menu

                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>

            </Link>

            <Link to="contact" smooth={true} offset={-70} className="flex-grow">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-5 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between gap-4 group cursor-pointer overflow-hidden"
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cafe-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col">
                  <span className="text-[10px] text-cafe-red uppercase tracking-[0.2em] font-bold">Reservations</span>
                  <span className="text-white font-bold text-lg">Reserve a Table</span>
                </div>
                
                <div className="relative z-10 flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl border border-white/10 group-hover:border-yellow-500 transition-colors">
                  <Phone size={16} className="text-cafe-red animate-pulse" />
                  <span className="text-white font-mono font-bold text-sm">+91 89******31</span>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cafe-red opacity-50" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cafe-red opacity-50" />
              </motion.div>
            </Link>

          </motion.div>

          {/* Opening Times - Framed Box */}
          <motion.div
            variants={item}
            className="mt-8 relative p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl flex flex-wrap items-center gap-x-12 gap-y-4 overflow-hidden group"
          >
            {/* Animated Highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex flex-col relative z-10">
              <span className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Opening Time</span>
              <span className="text-white font-bold text-xl tracking-tight flex items-center gap-2">
                11:00 AM
              </span>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-white/10" />
            
            <div className="flex flex-col relative z-10">
              <span className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Closing Time</span>
              <span className="text-white font-bold text-xl tracking-tight">1:00 AM</span>
            </div>

            <div className="ml-auto relative z-10 hidden sm:block">
               <span className="px-3 py-1 rounded-full border border-cafe-red/30 text-[10px] text-cafe-red font-bold uppercase tracking-widest">
                 Open Daily
               </span>
            </div>
          </motion.div>


        </motion.div>


        {/* RIGHT SIDE VIDEO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 50,
          }}
          animate={isLoading ? { opacity: 0, scale: 0.9, x: 50 } : {
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            delay: 0.2, // Small delay after loader finishes
          }}
          className="relative order-1 lg:order-2 w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square"
        >

          {/* Video Card */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100 rounded-[40px]"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />

          </div>



        </motion.div>

      </div>
    </section>
  );
};

export default Hero;