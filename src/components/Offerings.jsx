import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, HelpCircle, Zap, HeartHandshake } from 'lucide-react';

const OfferingCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E40AF] to-[#DC143C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Offerings = () => {
  const offerings = [
    {
      icon: BookOpen,
      title: "JEE/NEET Full Year Batches",
      description: "Guidance from experienced mentors and toppers.",
      delay: 0
    },
    {
      icon: Target,
      title: "Preparation Strategy",
      description: "Smart study plans for JEE & NEET aspirants.",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Mentorship Sessions",
      description: "Real stories from successful students and experts.",
      delay: 0.2
    },
    {
      icon: HelpCircle,
      title: "Doubt Solving",
      description: "Interactive sessions to clear student doubts.",
      delay: 0.3
    },
    {
      icon: Zap,
      title: "Motivation Boost",
      description: "Keep students focused and confident.",
      delay: 0.4
    },
    {
      icon: HeartHandshake,
      title: "Community Support",
      description: "Learn together with like-minded aspirants.",
      delay: 0.5
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            What We <span className="text-[#1E40AF]">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to excel in your competitive exams, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <OfferingCard key={idx} {...offering} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;