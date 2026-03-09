import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ProgramCard = ({ title, subtitle, description, features, themeColor, buttonText, delay }) => {
  const isBlue = themeColor === 'blue';
  const bgColor = isBlue ? 'bg-[#1E40AF]' : 'bg-[#DC143C]';
  const textColor = isBlue ? 'text-[#1E40AF]' : 'text-[#DC143C]';
  const borderColor = isBlue ? 'border-blue-100' : 'border-red-100';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden bg-white rounded-2xl shadow-xl border ${borderColor} flex flex-col hover:shadow-2xl transition-all duration-300 group`}
    >
      <div className={`${bgColor} p-6 text-white`}>
        <h3 className="text-2xl font-bold font-poppins mb-1">{title}</h3>
        <p className="text-blue-100 opacity-90">{subtitle}</p>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className={`w-5 h-5 ${textColor} shrink-0 mt-0.5`} />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-4 rounded-lg font-bold text-white ${bgColor} brightness-100 hover:brightness-90 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]`}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const DronaPrograms = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Premium <span className="text-[#DC143C]">Drona</span> Batches
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured learning programs designed by experts to help you achieve your dream rank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <ProgramCard
            title="DRONA JEE"
            subtitle="For Class 11, 12 & Droppers"
            description="Yearlong Batch designed to maximize performance of serious JEE aspirants. Comprehensive coverage of Physics, Chemistry, and Math."
            features={[
              "Daily Live Classes",
              "Doubt Clearing Sessions",
              "Weekly Mock Tests",
              "Personalized Mentorship"
            ]}
            themeColor="blue"
            buttonText="Register for JEE"
            delay={0}
          />
          
          <ProgramCard
            title="DRONA NEET"
            subtitle="For Class 11, 12 & Droppers"
            description="Yearlong Batch with structured mentorship for focused NEET preparation. Complete Biology, Physics, and Chemistry mastery."
            features={[
              "NCERT-Focused Approach",
              "Regular Practice Sheets",
              "All India Test Series",
              "One-on-One Guidance"
            ]}
            themeColor="red"
            buttonText="Register for NEET"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default DronaPrograms;