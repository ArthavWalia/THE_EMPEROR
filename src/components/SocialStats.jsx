import React from 'react';
import { Youtube, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
  >
    <div className={`p-4 rounded-full ${color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className={`text-3xl font-bold mb-1 ${color.replace('bg-', 'text-')}`}>{value}</h3>
    <p className="text-gray-600 font-medium">{label}</p>
  </motion.div>
);

const SocialStats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins text-gray-900">Our Growing Community</h2>
          <p className="text-gray-600 mt-2">Trusted by students across India</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            icon={Youtube} 
            value="840K+" 
            label="YouTube Subscribers" 
            color="bg-red-600" 
            delay={0}
          />
          <StatCard 
            icon={Instagram} 
            value="82K+" 
            label="Instagram Followers" 
            color="bg-pink-600" 
            delay={0.1}
          />
          <StatCard 
            icon={Send} 
            value="210K+" 
            label="Telegram Members" 
            color="bg-blue-500" 
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialStats;