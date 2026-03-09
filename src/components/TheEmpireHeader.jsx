import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const TheEmpireHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'benefits', 'community', 'join'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sanctuary', href: '#home', id: 'home' },
    { name: 'Lore', href: '#about', id: 'about' },
    { name: 'Spoils', href: '#benefits', id: 'benefits' },
    { name: 'Brotherhood', href: '#community', id: 'community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-[#FFD700]/30 py-4 shadow-[0_4px_30px_rgba(255,215,0,0.1)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <Shield className="w-8 h-8 text-[#FFD700] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
          <span className="text-2xl font-bold font-['Cinzel_Decorative'] tracking-widest text-[#FFD700] text-gold-glow">
            THE EMPIRE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-['Cormorant_Garamond'] font-semibold tracking-wider transition-all duration-300 relative group
                ${activeSection === link.id ? 'text-[#FFD700]' : 'text-gray-300 hover:text-[#FFD700]'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-px bg-[#FFD700] transition-transform duration-300 origin-center
                ${activeSection === link.id ? 'scale-x-100 shadow-[0_0_8px_#FFD700]' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </a>
          ))}
          <a 
            href="#join"
            className="px-6 py-2 rounded bg-[#8B0000] border border-[#FFD700]/50 text-[#FFD700] font-['Cinzel_Decorative'] text-sm font-bold tracking-wider hover:bg-[#600000] hover:border-[#FFD700] hover:text-white gold-glow transition-all duration-300 uppercase"
          >
            Pledge Fealty
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#FFD700] hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#FFD700]/30 p-6 shadow-2xl medieval-pattern"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-['Cinzel_Decorative'] tracking-widest uppercase ${
                    activeSection === link.id ? 'text-[#FFD700] text-gold-glow' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 mt-4 border border-[#FFD700] bg-[#8B0000] text-[#FFD700] font-['Cinzel_Decorative'] font-bold tracking-widest text-center uppercase gold-glow"
              >
                Pledge Fealty
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TheEmpireHeader;