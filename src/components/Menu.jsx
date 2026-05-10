import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';

const categories = [
  "North Indian", "Chinese", "Pizza", "Italian", "Continental", "Beverages"
];

const menuData = {
  "North Indian": [
    { id: 1, name: "Paneer Butter Masala", price: "₹345", rating: 4.8, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Dal Makhani", price: "₹295", rating: 4.9, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Butter Chicken", price: "₹425", rating: 4.9, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Briyani", price: "₹595", rating: 4.7, img: "https://images.unsplash.com/photo-1716550781939-beb7d7247aae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ],
  "Chinese": [
    { id: 5, name: "Hakka Noodles", price: "₹245", rating: 4.6, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Chili Chicken", price: "₹325", rating: 4.7, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Dim Sums (6pcs)", price: "₹275", rating: 4.8, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Manchurian", price: "₹285", rating: 4.5, img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&q=80&w=400" },
  ],
  "Pizza": [
    { id: 9, name: "Margherita Pizza", price: "₹395", rating: 4.9, img: "https://images.unsplash.com/photo-1712652080841-9e480a2c43ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "Pepperoni Feast", price: "₹495", rating: 4.8, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400" },
    { id: 11, name: "Farmhouse Special", price: "₹445", rating: 4.7, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" },
    { id: 12, name: "BBQ Chicken Pizza", price: "₹475", rating: 4.8, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" },
  ],
  "Italian": [
    { id: 13, name: "Alfredo Pasta", price: "₹385", rating: 4.8, img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 14, name: "Arrabbiata Pasta", price: "₹365", rating: 4.7, img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=400" },
    { id: 15, name: "Classic Lasagna", price: "₹425", rating: 4.9, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400" },
    { id: 16, name: "Risotto Funghi", price: "₹415", rating: 4.6, img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=400" },
  ],
  "Continental": [
    { id: 17, name: "Grilled Fish", price: "₹545", rating: 4.8, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400" },
    { id: 18, name: "Chicken Steak", price: "₹495", rating: 4.7, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=400" },
    { id: 19, name: "Fish & Chips", price: "₹445", rating: 4.6, img: "https://images.unsplash.com/photo-1611599538235-128e54f1250f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 20, name: "Garden Salad", price: "₹295", rating: 4.5, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" },
  ],
  "Beverages": [
    { id: 21, name: "Hazelnut Frappe", price: "₹225", rating: 4.9, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=400" },
    { id: 22, name: "Virgin Mojito", price: "₹185", rating: 4.8, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400" },
    { id: 23, name: "Hot Chocolate", price: "₹195", rating: 4.9, img: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 24, name: "Iced Tea", price: "₹165", rating: 4.7, img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&q=80&w=400" },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("North Indian");

  return (
    <section id="menu" className="py-32 bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Orbs for White BG */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cafe-red/20 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="text-cafe-red uppercase tracking-[0.3em] text-sm font-bold mb-2 block"
          >
            Culinary Art
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-5xl md:text-7xl font-bold font-serif text-black mb-12 text-center flex flex-col items-center"
          >
            Our 
            <span className="font-cookie text-cafe-red text-7xl md:text-[8rem] leading-[0.6] mt-4 font-normal">Menu</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl">
            {categories.map((cat, i) => (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 border ${activeCategory === cat
                    ? 'bg-cafe-red text-white border-cafe-red shadow-xl scale-110'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-cafe-red hover:text-cafe-red hover:shadow-md'
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="wait">
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  delay: index * 0.1
                }}
                className="group relative bg-white rounded-[20px] md:rounded-[30px] overflow-hidden border border-gray-100 hover:border-cafe-red/30 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-4 cursor-pointer"
              >
                <div className="h-40 md:h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-md px-2 md:px-3 py-0.5 md:py-1 rounded-full flex items-center gap-1 z-20 shadow-md">
                    <Star size={10} md:size={12} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-[10px] md:text-xs font-bold text-black">{item.rating}</span>
                  </div>
                </div>
                <div className="p-3 md:p-6 relative z-20 bg-white">
                  <h3 className="text-sm md:text-xl font-bold font-serif text-black mb-1 md:mb-2 group-hover:text-cafe-red transition-colors line-clamp-1">{item.name}</h3>
                  <div className="flex justify-between items-center mt-2 md:mt-4">
                    <span className="text-cafe-red font-bold text-base md:text-xl">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-24">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(230,57,70,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            href="/menu.pdf"
            target="_blank"
            className="inline-block px-12 py-5 border-2 border-cafe-red bg-cafe-red text-white rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-cafe-red transition-all duration-500"
          >
            Download Full Menu
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
