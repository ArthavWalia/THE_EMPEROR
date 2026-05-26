import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Scroll, Key } from 'lucide-react';

const AboutTheEmpire = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0a] border-b border-[#FFD700]/20">
      <div className="absolute inset-0 medieval-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B0000]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#FFD700]/50" />
            <Crown className="text-[#FFD700] w-8 h-8" />
            <div className="w-16 h-px bg-[#FFD700]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#FFD700] text-gold-glow mb-6">
            The Lore of Our Realm
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl text-white font-['Cormorant_Garamond'] leading-relaxed italic">
              "An exclusive sanctuary for gamers, forged in the fires of brotherhood and dedicated to the pursuit of free digital conquests."
            </p>
            <p className="text-lg text-gray-300 font-['Cormorant_Garamond'] leading-relaxed">
              Join the ranks of <strong className="text-[#FFD700] font-['Cinzel_Decorative']">THE EMPIRE</strong>. We scour the vast realms of the internet to bring our citizens the finest free games, untouched by the taint of hidden fees. It is a brotherhood where true gamers thrive.
            </p>
            
            <div className="space-y-8 pt-6 border-t border-[#FFD700]/20">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full border-2 border-[#FFD700] bg-[#8B0000]/20 flex items-center justify-center shrink-0 gold-glow">
                  <Scroll className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel_Decorative'] mb-2 uppercase">Curated Archives</h3>
                  <p className="text-gray-300 font-['Cormorant_Garamond'] text-lg">Our scholars verify every game, ensuring safe passage to your royal library.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full border-2 border-[#FFD700] bg-[#8B0000]/20 flex items-center justify-center shrink-0 gold-glow">
                  <Key className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel_Decorative'] mb-2 uppercase">The Royal Vaults</h3>
                  <p className="text-gray-300 font-['Cormorant_Garamond'] text-lg">Gain the keys to limited-time treasures before they vanish back into the ether.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto relative rounded-t-full overflow-hidden border-4 border-[#FFD700] medieval-shadow p-2 bg-[#8B0000]/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="w-full h-full rounded-t-full border-2 border-[#FFD700]/50 relative flex flex-col items-center justify-center text-center p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                 <img 
                  src="https://i.postimg.cc/52BhB3fp/image-removebg-preview.png" 
                  alt="Empire Crest" 
                  className="w-32 h-32 opacity-80 mb-6 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                 />
                 <h3 className="text-3xl font-bold text-[#FFD700] uppercase font-['Cinzel_Decorative']">The Empire</h3>
                 <p className="text-white font-['Cormorant_Garamond'] text-xl italic mt-4">Founded in Glory</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheEmpire;
