import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Events from './components/Events';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'auto';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-cafe-black transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cafe-red z-[60] origin-[0%]"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <Hero isLoading={isLoading} />
          <About />
          <Menu />
          <Gallery />
          <Reviews />
          <Events />
          <Reservation />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;

