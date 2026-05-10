import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger earlier
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Events', to: 'events' },
    { name: 'Branches', to: 'reservation' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        isScrolled 
          ? 'bg-black py-2 shadow-2xl border-b border-white/10' 
          : 'bg-black/40 backdrop-blur-md py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
            <span className="font-imperial text-4xl md:text-5xl text-cafe-red leading-none">Rever</span>
            <span className="font-[PlayfairDisplay] text-sm md:text-base text-yellow-500 tracking-[0.2em] uppercase -mt-1">Glasshouse Cafe</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              className="text-3xl font-cookie text-white hover:text-cafe-red transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          

        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 z-[1001]"
        >
          {isMobileMenuOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[1000] lg:hidden flex flex-col items-center overflow-y-auto h-screen py-20"
          >
            <div className="flex flex-col space-y-6 md:space-y-10 text-center w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-70}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-6xl font-italianno text-white hover:text-cafe-red transition-colors leading-tight py-2 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-10 pb-20"
              >
              
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
