import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1678084646850-3b528dc093c4"
          alt="Students Studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#DC143C]/50 bg-[#DC143C]/10 text-[#DC143C] font-semibold text-sm backdrop-blur-sm"
          >
            Bringing Honesty Back to Education
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-poppins mb-6">
            Mission <span className="text-[#DC143C]">JEET</span>
            <br />
            <span className="text-2xl md:text-4xl font-normal text-gray-300 block mt-2">
              Bringing Honesty & Quality Back to JEE & NEET
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            No rank purchasing, no fake promises, no star batch system — only high-quality academic content designed for your success.
          </p>
          
          <div className="mb-10 p-4 border-l-4 border-[#1E40AF] bg-white/5 backdrop-blur-sm rounded-r-lg max-w-xl">
            <p className="text-xl md:text-2xl font-bold italic text-white">
              "Kisi Bacche Ka Nuksaan Nahi Hone Dena"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#1E40AF] text-white rounded-lg font-bold text-lg hover:bg-[#163085] transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 group">
              Register for JEE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-[#DC143C] text-white rounded-lg font-bold text-lg hover:bg-[#b91030] transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group">
              Register for NEET
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;