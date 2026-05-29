import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Lock, X } from 'lucide-react';

const DownloadSection = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [keyError, setKeyError] = useState('');

  const ACCESS_KEY = 'Emptoolsbydevisbest:)';

  const handleUnlock = () => {
    if (keyInput === ACCESS_KEY) {
      setIsUnlocked(true);
      setShowKeyModal(false);
      setKeyInput('');
      setKeyError('');
    } else {
      setKeyError('Invalid key. Try again.');
      setKeyInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <section className="py-8 relative bg-[#050505] border-y border-[#FFD700]/20">
      <div className="absolute inset-0 medieval-pattern opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${!isUnlocked ? 'blur-md pointer-events-none select-none' : ''}`}
        >
          {/* Logo/Image */}
          <motion.img
            src="https://i.postimg.cc/255KSq2W/image-removebg-preview.png"
            alt="Emp Tools Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-28 md:h-32 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
          />
          
          <h2 className="text-5xl md:text-6xl font-black text-[#FFD700] font-['Cinzel_Decorative'] uppercase mb-2 text-gold-glow tracking-widest">
            Emp Tools
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 font-['Cormorant_Garamond'] italic mb-6">
            Download the ultimate tool for your arsenal
          </p>

          <motion.a
            href="#"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#8B0000] border-2 border-[#FFD700] text-[#FFD700] font-['Cinzel_Decorative'] text-lg font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
          >
            <Download className="w-6 h-6" />
            <span>Windows</span>
          </motion.a>
        </motion.div>

        {/* Lock Icon - Shows when locked */}
        <AnimatePresence>
          {!isUnlocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-20"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowKeyModal(true)}
                className="flex flex-col items-center gap-3 p-6 bg-[#8B0000]/80 border-2 border-[#FFD700] rounded-lg hover:border-[#FFD700] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]"
              >
                <Lock className="w-12 h-12 text-[#FFD700]" />
                <span className="text-[#FFD700] font-['Cinzel_Decorative'] font-black text-lg uppercase tracking-widest">
                  Locked
                </span>
                <span className="text-gray-300 text-sm">Click to unlock</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Key Input Modal */}
      <AnimatePresence>
        {showKeyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setShowKeyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border-2 border-[#FFD700] p-8 rounded-lg max-w-md w-full mx-4"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowKeyModal(false);
                  setKeyError('');
                  setKeyInput('');
                }}
                className="absolute top-4 right-4 text-[#FFD700] hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-black text-[#FFD700] font-['Cinzel_Decorative'] uppercase mb-6 text-center tracking-widest">
                Enter Access Key
              </h3>

              <input
                type="password"
                value={keyInput}
                onChange={(e) => {
                  setKeyInput(e.target.value);
                  setKeyError('');
                }}
                onKeyPress={handleKeyPress}
                placeholder="Enter the key..."
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#FFD700] text-[#FFD700] placeholder-gray-500 font-['Cinzel_Decorative'] tracking-widest rounded focus:outline-none focus:shadow-[0_0_15px_rgba(255,215,0,0.3)] mb-4"
                autoFocus
              />

              {keyError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mb-4 text-center font-['Cinzel_Decorative']"
                >
                  {keyError}
                </motion.p>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowKeyModal(false);
                    setKeyError('');
                    setKeyInput('');
                  }}
                  className="flex-1 px-4 py-3 border-2 border-[#FFD700] text-[#FFD700] font-['Cinzel_Decorative'] font-black uppercase tracking-widest rounded hover:bg-[#FFD700]/10 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUnlock}
                  className="flex-1 px-4 py-3 bg-[#8B0000] border-2 border-[#FFD700] text-[#FFD700] font-['Cinzel_Decorative'] font-black uppercase tracking-widest rounded hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
                >
                  Unlock
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DownloadSection;
