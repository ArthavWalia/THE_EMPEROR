import React from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

const JoinCTA = () => {
  return (
    <section id="join" className="py-32 relative bg-[#050505] overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 medieval-pattern opacity-10" />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B0000]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-2 border border-[#FFD700]/50 bg-[#8B0000]/20 mb-10 gold-glow rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_10px_#FFD700]" />
            <span className="text-[#FFD700] font-['Cinzel_Decorative'] font-bold tracking-widest uppercase text-sm">
              The Gates Are Open
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_10px_#FFD700]" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#FFD700] font-['Cinzel_Decorative'] uppercase mb-8 leading-tight text-gold-glow">
            Ready to Join <br />
            <span className="text-white">The Empire?</span>
          </h2>
          
          <p className="text-2xl text-gray-300 font-['Cormorant_Garamond'] mb-14 max-w-2xl mx-auto italic">
            Swear your allegiance. Enter the sanctuary, connect with your brethren, and claim your free digital spoils today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="https://discord.gg/QbxR3FtT"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-12 py-5 bg-[#8B0000] border-2 border-[#FFD700] text-[#FFD700] font-['Cinzel_Decorative'] text-xl font-black uppercase tracking-widest overflow-hidden transition-all flex items-center justify-center w-full sm:w-auto gold-glow-strong"
            >
              <div className="absolute inset-0 bg-[#FFD700]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Swords className="relative z-10 w-8 h-8 mr-4" />
              <span className="relative z-10">Pledge on Discord</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;