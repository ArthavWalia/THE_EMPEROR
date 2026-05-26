import React from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

const TheEmpireHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#8B0000]">
      {/* Background Textures */}
      <div className="absolute inset-0 z-0 medieval-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-0 opacity-80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full gold-glow-strong blur-xl opacity-50"></div>
          <img 
            src="https://i.postimg.cc/52BhB3fp/image-removebg-preview.png" 
            alt="The Empire Gold Shield Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
            <span className="text-[#FFD700] font-['Cinzel_Decorative'] tracking-[0.3em] uppercase text-sm md:text-base">An Exclusive Sanctuary</span>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#FFD700] mb-6 uppercase text-gold-glow leading-tight">
            THE EMPIRE
          </h1>

          <p className="text-xl md:text-3xl text-white font-['Cormorant_Garamond'] mb-12 max-w-3xl mx-auto tracking-wide italic opacity-90">
            Join the Ultimate Free Games Community. Rise through the ranks and claim your digital spoils.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-10 py-4 bg-[#8B0000] border-2 border-[#FFD700] text-[#FFD700] font-['Cinzel_Decorative'] font-bold uppercase tracking-widest overflow-hidden transition-all flex items-center justify-center w-full sm:w-auto gold-glow"
            >
              <div className="absolute inset-0 bg-[#FFD700]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Swords className="relative z-10 w-6 h-6 mr-3" />
              <span className="relative z-10 text-lg">Join The Discord</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-70" />
    </section>
  );
};

export default TheEmpireHero;
