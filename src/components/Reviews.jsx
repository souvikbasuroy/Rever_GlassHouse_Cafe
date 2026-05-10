import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    review: "The ambience is unmatched. Truly a cinematic experience in Kolkata. The coffee is exceptional!",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=aarav"
  },
  {
    id: 2,
    name: "Sneha Gupta",
    review: "Loved the pizza and the vibe. Perfect place for a date night. The staff is very courteous.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=sneha"
  },
  {
    id: 3,
    name: "Rohan Das",
    review: "A hidden gem! The North Indian platter was mind-blowing. Will definitely come back again.",
    rating: 4,
    img: "https://i.pravatar.cc/150?u=rohan"
  },
  {
    id: 4,
    name: "Priya Malik",
    review: "Beautiful interior and great music. The desserts are to die for. Highly recommended!",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 5,
    name: "Vikram Singh",
    review: "Perfect spot for family dinners. The Continental menu is very well curated. 5 stars!",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=vikram"
  }
];

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="reviews"
      className="relative bg-black min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 p-4">

        {/* Rounded Video Container */}
        <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10">

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-110 contrast-110"
          >
            <source src="/reviews.mp4" type="video/mp4" />
          </video>

          {/* Overlay INSIDE rounded container */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Voices of <span className="text-cafe-red italic">Guests</span>
          </motion.h2>
          <div className="w-24 h-1 bg-cafe-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.95, y: 50, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                delay: idx * 0.2
              }}
              whileHover={{ scale: 1.02 }}
              className={`glass p-8 rounded-[30px] border-white/10 relative group hover:bg-white/10 transition-all duration-500 ${idx === 3 || idx === 4 ? 'lg:translate-x-1/2' : ''
                }`}
            >
              <Quote className="absolute top-6 right-8 text-white/10 group-hover:text-cafe-red/20 transition-colors" size={40} />

              <div className="flex items-center gap-4 mb-6">
                <img src={rev.img} alt={rev.name} className="w-16 h-16 rounded-full border-2 border-cafe-red p-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">{rev.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-cafe-yellow text-cafe-yellow" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed font-light italic">
                "{rev.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
