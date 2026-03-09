import React from 'react';
import { Youtube, Instagram, Send, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0f172a] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-poppins text-white">
              <span className="text-[#DC143C]">Mission</span> <span className="text-[#1E40AF]">JEET</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bringing honesty and quality back to JEE & NEET preparation. No fake promises, just pure academic excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#DC143C] transition-colors text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#E1306C] transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#0088cc] transition-colors text-white">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#DC143C] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#DC143C] transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-[#DC143C] transition-colors">Our Programs</a></li>
              <li><a href="#offerings" className="hover:text-[#DC143C] transition-colors">Offerings</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-[#1E40AF] transition-colors">Drona JEE Batch</a></li>
              <li><a href="#programs" className="hover:text-[#DC143C] transition-colors">Drona NEET Batch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Test Series</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#DC143C] mt-0.5" />
                <span>contact@missionjeet.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1E40AF] mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DC143C] mt-0.5" />
                <span>Kota, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mission JEET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;