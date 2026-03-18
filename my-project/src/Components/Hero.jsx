import React from 'react';
import assests from "../assets/assests";
import { Linkedin, Github, DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const socialIcons = [
    { Icon: DownloadIcon, link: assests.Cv, text: "Resume" },
    { Icon: Linkedin, link: "https://linkedin.com/in/huzaifa-tahir-0385292b9" },
    { Icon: Github, link: "https://github.com/Huzaifatahir123/" },
  ];

  // Animation variants for staggered reveal
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section className="bg-white text-black min-h-screen flex  items-center overflow-hidden">
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="px-6 sm:px-14 md:px-16 lg:px-28 w-full flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Text Content */}
        <div className="flex flex-col  justify-center py-20 lg:w-[50%]">
          
          <div className="overflow-hidden">
            <motion.div variants={itemVars} className="flex flex-wrap gap-2 items-baseline">
              <h1 className="text-xl sm:text-5xl font-light">Hello I'm</h1>
              <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter">Huzaifa Tahir</h1>
            </motion.div>
          </div>

          <div className="overflow-hidden mt-2">
            <motion.div variants={itemVars} className="flex gap-3  items-center">
              <h1 className="text-4xl md:text-5xl font-black uppercase">FullStack</h1>
              <span className="text-xl md:text-4xl font-serif italic font-light text-zinc-400">Developer</span>
            </motion.div>
          </div>

          <div className="overflow-hidden mt-2">
            <motion.div variants={itemVars} className="flex gap-2">
              <h1 className="text-3xl md:text-4xl font-light">Based In</h1>
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest border-b-2 border-black">Pakistan</h1>
            </motion.div>
          </div>

          <motion.div variants={itemVars} className="mt-8 max-w-lg text-lg text-zinc-600 leading-relaxed">
            <p>
              Developer with experience building web applications, working across both frontend and backend.
              Focused on problem-solving, writing clean code, and developing scalable solutions.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-4 mt-10">
            {socialIcons.map(({ Icon, link, text }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                download={text === "Resume" ? "Huzaifa_Tahir_Resume" : undefined}
                whileHover={{ y: -5 }}
                className="group relative flex items-center gap-2 px-6 py-3 border border-black overflow-hidden transition-colors"
              >
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 flex items-center gap-2 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                  {text} <Icon size={18} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Hero Image with Float Parallax */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:w-[50%] flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img 
              src={assests.HeroImg} 
              className="w-full max-w-[500px] grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl" 
              alt="Huzaifa Tahir" 
            />
          </motion.div>
          {/* Background Decorative Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-zinc-100 rounded-full -z-0" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;