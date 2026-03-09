import React from 'react';
import { motion } from 'framer-motion';
import { Swords, Users, Trophy, Gem, ShieldAlert, Star } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-[#0a0a0a] rounded-xl p-8 border-2 border-[#FFD700] hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-500 hover:-translate-y-2 overflow-hidden z-10"
    >
      <div className="absolute inset-0 bg-[#8B0000]/0 group-hover:bg-[#8B0000]/20 transition-colors duration-500 z-0" />
      <div className="absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full bg-[#FFD700]/10 z-0" />
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-[#FFD700]/50 flex items-center justify-center mb-6 transition-all duration-500 bg-[#8B0000]/40 group-hover:bg-[#8B0000] group-hover:scale-110 gold-glow">
          <Icon className="w-8 h-8 text-[#FFD700]" />
        </div>
        
        <h3 className="text-xl font-bold font-['Cinzel_Decorative'] text-[#FFD700] mb-4 uppercase tracking-widest">{title}</h3>
        <p className="text-gray-300 font-['Cormorant_Garamond'] text-lg leading-relaxed italic">{description}</p>
      </div>
    </motion.div>
  );
};

const BenefitsCards = () => {
  const benefits = [
    {
      icon: Gem,
      title: "Free Games Access",
      description: "Claim legendary titles and indie treasures for your collection at no cost.",
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Forge alliances with honorable gamers in our heavily guarded sanctuary.",
    },
    {
      icon: Swords,
      title: "Gaming Events",
      description: "Participate in grand tournaments and campaigns to earn glory and spoils.",
    },
    {
      icon: Trophy,
      title: "Member Perks",
      description: "Reap the rewards of loyalty with exclusive giveaways and royal bounties.",
    },
    {
      icon: ShieldAlert,
      title: "Discord Exclusive",
      description: "Secure communications and instant missives on fleeting game offerings.",
    },
    {
      icon: Star,
      title: "VIP Status",
      description: "Rise in rank to unlock the deepest vaults and inner circles of The Empire.",
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#050505] relative border-b border-[#FFD700]/20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-[#FFD700] text-gold-glow"
          >
            The Spoils of War
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-24 bg-[#FFD700]/50" />
            <p className="text-xl text-white font-['Cormorant_Garamond'] italic">
              What awaits those who swear fealty
            </p>
            <div className="h-px w-24 bg-[#FFD700]/50" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <BenefitCard 
              key={idx} 
              {...benefit} 
              delay={idx * 0.15} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;