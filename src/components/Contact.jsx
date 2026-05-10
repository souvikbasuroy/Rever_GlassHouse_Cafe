import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socials = [
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/revercafekolkata", color: "hover:bg-cafe-red hover:shadow-[0_0_20px_rgba(230,57,70,0.6)]", label: "Instagram" },
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/people/Rever-Cafe/61575729854062/", color: "hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]", label: "Facebook" },
    { icon: <Mail size={24} />, href: "mailto:hello@revercafe.com", color: "hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]", label: "Email" },
    { icon: <MessageCircle size={24} />, href: "https://wa.me", color: "hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">

      {/* Background Stunner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-cafe-red/5 via-yellow-500/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cafe-red uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Connect</span>
            <h2 className="text-5xl md:text-7xl font-bold font-serif leading-none mb-12">
              Visit <span className="italic text-yellow-500">Us</span>
            </h2>

            <div className="space-y-8">
              {/* Location */}
              <motion.div whileHover={{ x: 10 }} className="flex gap-6 items-start group cursor-pointer transition-transform duration-300">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cafe-red group-hover:border-cafe-red transition-all duration-500 shadow-[0_0_0_rgba(230,57,70,0)] group-hover:shadow-[0_0_30px_rgba(230,57,70,0.5)]">
                  <MapPin size={22} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-xl mb-2 text-white">Our Location</h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    8B, Maharaj Nanda Kumar Road,<br />
                    Lake Market, Southern Avenue, Kolkata
                  </p>
                </div>
              </motion.div>

              {/* Opening Hours with Box Frame */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group"
              >
                {/* Animated Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cafe-red/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex gap-6 items-start relative z-10">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500">
                    <Clock size={22} className="text-gray-300 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-xl mb-2 text-white">Opening Hours</h4>
                    <p className="text-cafe-yellow font-bold text-lg tracking-tight">
                      Mon - Sun: 11:00 AM - 1:00 AM
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Reservation Frame Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="mt-12 p-8 rounded-[40px] border-2 border-dashed border-cafe-red/30 bg-cafe-red/5 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cafe-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Reserve a Table</h3>
                    <p className="text-gray-400 text-sm">Experience luxury dining at Rever</p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-cafe-red uppercase tracking-[0.3em] font-bold mb-1">Call Now</span>
                    <a href="#" className="text-2xl md:text-3xl font-serif text-white hover:text-cafe-red transition-colors flex items-center gap-3">
                      <Phone size={24} className="animate-bounce" />
                      +91 98*** ***10
                    </a>
                    <a href="#" className="text-2xl md:text-3xl font-serif text-white hover:text-cafe-red transition-colors flex items-center gap-3">
                      <Phone size={24} className="animate-bounce" />
                      +91 98*** ***99
                    </a>
                  </div>
                </div>

                {/* Animated Corner Accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cafe-red" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cafe-red" />
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-12">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-gray-300 transition-all duration-500 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Map with Stunning Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] lg:h-[650px] w-full rounded-[40px] p-1 group"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cafe-red via-yellow-500 to-cafe-red rounded-[40px] animate-pulse opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-1 rounded-[38px] overflow-hidden bg-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3372026267193!2d88.34897017507595!3d22.515334979532533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710038514bd3%3A0x5ef17d500580df62!2sRever%20Glasshouse%20Cafe!5e1!3m2!1sen!2sin!4v1778414945398!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.9] contrast-125 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

