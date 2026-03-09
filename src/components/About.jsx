import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            About <span className="text-[#DC143C]">Mission</span> <span className="text-[#1E40AF]">JEET</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#DC143C] to-[#1E40AF] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
            <span className="font-bold text-[#DC143C]">MissionJEET</span> is a mission to bring honesty and quality back into the <span className="font-bold text-[#1E40AF]">JEE and NEET</span> ecosystem. 
            No rank purchasing, no fake promises, no star batch system — only high-quality academic content.
          </p>
          
          <div className="my-8 h-px bg-gray-200 w-full"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Content is delivered by highly qualified and domain-expert educators. Students receive curated study material, strategy and concept clarity. We bridge aspirants with genuine mentorship and real experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;