import React from 'react';
import { Shield } from 'lucide-react';

const TheEmpireFooter = () => {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t-4 border-[#8B0000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6 inline-flex group">
              <Shield className="w-10 h-10 text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] group-hover:text-white transition-colors" />
              <span className="text-3xl font-bold font-['Cinzel_Decorative'] tracking-widest text-[#FFD700] text-gold-glow">
                THE EMPIRE
              </span>
            </a>
            <p className="text-gray-300 font-['Cormorant_Garamond'] text-xl max-w-sm leading-relaxed mb-8 italic">
              A sanctuary for honorable gamers seeking legendary free titles and the fellowship of true brethren.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFD700] font-['Cinzel_Decorative'] font-bold uppercase tracking-widest mb-6 text-lg border-b border-[#FFD700]/30 pb-2 inline-block">The Realm</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 font-['Cormorant_Garamond'] text-xl hover:text-[#FFD700] transition-colors">Sanctuary</a></li>
              <li><a href="#about" className="text-gray-300 font-['Cormorant_Garamond'] text-xl hover:text-[#FFD700] transition-colors">Lore</a></li>
              <li><a href="#benefits" className="text-gray-300 font-['Cormorant_Garamond'] text-xl hover:text-[#FFD700] transition-colors">Spoils</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-[#FFD700] font-['Cinzel_Decorative'] font-bold uppercase tracking-widest mb-6 text-lg border-b border-[#FFD700]/30 pb-2 inline-block">Decrees</h4>
            <ul className="space-y-4">
              <li><a href="#join" className="text-gray-300 font-['Cormorant_Garamond'] text-xl hover:text-[#FFD700] transition-colors">Swear Fealty</a></li>
              <li><a href="#" className="text-gray-300 font-['Cormorant_Garamond'] text-xl hover:text-[#FFD700] transition-colors">Royal Code</a></li>
              <li><a href="#" className="text-gray-300 font-['Cormorant_Garamond'] text-xl hover:text-[#FFD700] transition-colors">Summon Council</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FFD700]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#FFD700]/70 font-['Cormorant_Garamond'] text-lg">
            &copy; {new Date().getFullYear()} The Empire. By Royal Decree.
          </p>
          <div className="flex items-center gap-6 text-lg text-[#FFD700]/70 font-['Cormorant_Garamond']">
            <a href="#" className="hover:text-[#FFD700] transition-colors">Tome of Privacy</a>
            <a href="#" className="hover:text-[#FFD700] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheEmpireFooter;
