import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 relative overflow-hidden text-white">
      {/* Stunning Animated Top Border */}
      <motion.div 
        className="absolute top-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-cafe-red to-yellow-500"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cafe-red/20 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold font-serif mb-6 tracking-tighter">
              Rever<span className="text-cafe-red">Glasshouse Cafe</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-light mb-8 italic text-lg">
              "Where Every Sip Feels Like Home"
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cafe-red to-yellow-500" />
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    className="text-gray-500 hover:text-white hover:pl-2 transition-all cursor-pointer text-sm font-medium tracking-wider relative group"
                  >
                    {item}
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cafe-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    className="text-gray-500 hover:text-white hover:pl-2 transition-all cursor-pointer text-sm font-medium tracking-wider relative group"
                  >
                    {item}
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Massive Background Text & Copyright */}
        <div className="relative pt-12 border-t border-white/10 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.03, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[12vw] font-bold font-serif leading-none tracking-tighter absolute top-10 pointer-events-none select-none text-white whitespace-nowrap text-center"
          >
            Rever Glasshosue Cafe
          </motion.h1>
          
         <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 relative z-10">
            <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-bold">
              © 2026 Rever. All Rights Reserved.
              Built by <span className="text-yellow-500 font-extrabold">Souvik Basu Roy</span>
            </p>
            <div className="flex gap-8 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
