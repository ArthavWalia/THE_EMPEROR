import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section className="py-24 relative bg-[#050505] border-y border-[#FFD700]/20">
      <div className="absolute inset-0 medieval-pattern opacity-10" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8B0000]/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Image */}
          <motion.img
            src="https://i.postimg.cc/255KSq2W/image-removebg-preview.png"
            alt="Emp Tools Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-32 md:h-40 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
          />
          
          <h2 className="text-5xl md:text-6xl font-black text-[#FFD700] font-['Cinzel_Decorative'] uppercase mb-4 text-gold-glow tracking-widest">
            Emp Tools
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 font-['Cormorant_Garamond'] italic mb-12">
            Download the ultimate tool for your arsenal
          </p>

          <motion.a
            href="#"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#8B0000] border-2 border-[#FFD700] text-[#FFD700] font-['Cinzel_Decorative'] text-lg font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] group"
          >
            <div className="absolute inset-0 bg-[#FFD700]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Download className="relative z-10 w-6 h-6" />
            <span className="relative z-10">Windows</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
