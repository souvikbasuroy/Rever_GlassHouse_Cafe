import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col pt-10 pb-24">

      {/* Motion Animation Between Hero and About (Marquee) */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-white/10 py-5 mb-20 bg-black rotate-1 scale-105">
        <motion.div
          className="inline-block text-white/50 text-xl font-bold uppercase tracking-[0.6em] font-serif"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          ✦ CINEMATIC DINING ✦ ARTISAN COFFEE ✦ CURATED EVENTS ✦ EXCLUSIVE PASTRIES ✦
          LIVE MUSIC NIGHTS ✦ SIGNATURE DESSERTS ✦ GLASSHOUSE AMBIENCE ✦ LUXURY EXPERIENCE ✦
          FINEST BREW SELECTION ✦ HANDCRAFTED CUISINE ✦ MODERN ELEGANCE ✦ WEEKEND CELEBRATIONS ✦
          ROOFTOP VIBES ✦ GOLDEN HOUR DINNERS ✦ CHEF'S SPECIAL MENU ✦ CANDLELIGHT EVENINGS ✦
          CINEMATIC DINING ✦ ARTISAN COFFEE ✦ CURATED EVENTS ✦ EXCLUSIVE PASTRIES ✦
        </motion.div>
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow">

        {/* Left Side: Video Content */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", type: "spring" }}
          className="relative w-full aspect-[4/5] lg:aspect-[3/4]"
        >
          {/* Main Container */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(230,57,70,0.1)]">

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/about.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/20" />
          </div>

          {/* Corner Decoration */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cafe-red z-10"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 1, type: "spring" }}
          />

          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-yellow-500 z-10"
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <span className="text-cafe-red uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
              Our Story
            </span>
            <h2 className="flex flex-col">
              <span className="text-5xl md:text-7xl font-bold text-white font-Updock tracking-tighter">A Symphony of</span>
              <span className="font-cookie text-yellow-500 text-6xl md:text-8xl mt-2 leading-[0.7]">Flavors & Lights</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nestled in the heart of Kolkata, Rever Glasshouse Cafe was born from a simple idea — to create a dining space where food, ambience, and emotion come together like a perfectly orchestrated symphony.

            Every detail of Rever is designed to feel cinematic: the glow of warm lights, the aroma of artisan coffee, the rhythm of live music, and the flavors of carefully curated dishes. It’s not just about dining — it’s about experiencing moments that linger long after the last sip or bite.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From cozy coffee conversations to family dinners, from romantic evenings to vibrant weekend hangouts, Rever Glasshouse Cafe is more than a destination. It’s a stage where stories unfold, laughter echoes, and every gathering becomes unforgettable.

            At Rever, we believe every sip should feel like home, and every meal should feel like a memory in the making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: "100px" } : {}}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="h-[3px] bg-gradient-to-r from-cafe-red to-yellow-500 mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
