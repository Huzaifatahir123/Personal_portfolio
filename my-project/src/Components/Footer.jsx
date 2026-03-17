import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      
      /* 
         - Removed fixed/sticky/w-full/height
         - Using your specific responsive px values
         - Added overflow-hidden as a safety net for the motion animation
      */
      className="bg-black text-white border-t border-zinc-800 px-6 sm:px-14 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand / Logo Section */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
          <span className="font-bold tracking-widest text-lg uppercase">HUZAIFA</span>
        </div>

        {/* Links Section */}
        <nav className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#Projects" className="hover:text-white transition-colors duration-300 flex items-center gap-1">
            Projects <ExternalLink size={14} />
          </a>
          <a href="#About" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#Contact" className="hover:text-white transition-colors duration-300">Experience</a>
        </nav>

        {/* Contact / Social Section */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="mailto:h905923@gmail.com" className="hover:scale-110 transition-transform text-zinc-400 hover:text-white">
              <Mail size={20} />
            </a>
            <a href="https://github.com/Huzaifatahir123/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform text-zinc-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/huzaifa-tahir-0385292b9" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer  transition-transform text-zinc-400 hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="h-4 w-px bg-zinc-700 hidden sm:block" />
          <p className="text-[10px] uppercase tracking-tighter text-zinc-500">
            © 2024-2026
          </p>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;