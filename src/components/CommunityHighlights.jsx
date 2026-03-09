import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Castle, ScrollText, Flame } from 'lucide-react';

const StatBox = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-[#0a0a0a] p-8 rounded-t-full border-2 border-[#FFD700]/30 hover:border-[#FFD700] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    <Icon className="w-12 h-12 text-[#FFD700] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
    <div className="text-4xl md:text-5xl font-bold font-['Cinzel_Decorative'] text-[#FFD700] mb-3 relative z-10 text-gold-glow">
      {value}
    </div>
    <div className="text-white font-['Cormorant_Garamond'] text-xl uppercase tracking-widest relative z-10">
      {label}
    </div>
  </motion.div>
);

const CommunityHighlights = () => {
  return (
    <section id="community" className="py-24 bg-[#8B0000] relative border-b border-[#FFD700]/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] opacity-90" />
      <div className="absolute inset-0 medieval-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-[#FFD700] text-gold-glow"
          >
            Strength of <span className="text-white">The Empire</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-200 font-['Cormorant_Garamond'] max-w-3xl mx-auto italic"
          >
            A mighty legion united under one banner. Our numbers swell, and our treasury overflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-20">
          <StatBox icon={Shield} value="1,222+" label="Loyal Citizens" delay={0} />
          <StatBox icon={Castle} value="100+" label="Treasures Shared" delay={0.2} />
          <StatBox icon={Flame} value="24/7" label="Eternal Watch" delay={0.4} />
          <StatBox icon={ScrollText} value="10+" label="Weekly Edicts" delay={0.6} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto bg-[#0a0a0a] p-10 md:p-14 rounded-sm border-y-4 border-l border-r border-[#FFD700] relative shadow-[0_0_40px_rgba(0,0,0,0.9)]"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FFD700] -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FFD700] translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FFD700] -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FFD700] translate-x-2 translate-y-2"></div>

          <div className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl text-[#FFD700] font-['Cormorant_Garamond'] italic mb-8 leading-relaxed">
              "To join The Empire is to forsake the barren lands of solitude. Here, we feast upon the finest digital creations without spending a single coin. Long live the Brotherhood!"
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-[#FFD700] bg-gradient-to-br from-[#8B0000] to-black flex items-center justify-center gold-glow">
                <span className="text-[#FFD700] font-bold font-['Cinzel_Decorative'] text-xl">KV</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold font-['Cinzel_Decorative'] uppercase text-xl">Knight Vanguard</div>
                <div className="text-[#FFD700] text-lg font-['Cormorant_Garamond'] italic">Veteran of the First Era</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHighlights;