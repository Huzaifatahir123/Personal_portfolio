import React, { useRef } from "react";
import assests from "../assets/assests";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const AboutUs = () => {
  const paragraph = "Dedicated Junior Full-Stack Developer proficient in the MERN stack. Proven ability to translate complex requirements into functional, user-centric web applications through various personal and academic projects. Strong collaborator with a focus on agile methodologies and continuous learning. Ready to bring fresh perspectives and a strong work ethic to a dynamic development role. I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).";
  
  const words = paragraph.split(" ");
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Scroll Progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Parallax effect for the image
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const springImgY = useSpring(imgY, { stiffness: 100, damping: 30 });

  return (
    <motion.section 
      id="About" 
      ref={sectionRef} 
      className="bg-white text-black overflow-hidden py-24"
    >
      {/* Sleek Header Masking */}
      <div className="overflow-hidden mb-16">
        <motion.h1 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-center text-5xl md:text-7xl font-light uppercase tracking-tighter"
        >
          About <span className="font-black italic text-zinc-500">Me</span>
        </motion.h1>
      </div>

      <div className="px-6 sm:px-14 md:px-16 lg:px-28 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Parallax Image Section */}
        <div className="w-full md:w-1/2 relative group">
          <motion.div 
            style={{ y: springImgY }}
            className="relative z-10 overflow-hidden  transition-all duration-700"
          >
            <img 
              src={assests.AboutPic} 
              alt="About Profile" 
              className="w-full h-auto object-cover scale-100 group-hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>
          
          {/* Decorative background element */}
       
        </div>

        {/* High-End Text Reveal Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {words.map((word, index) => {
              // Precise timing for word reveal
              const start = index / words.length;
              const end = start + (1 / words.length) * 2; // Smoother overlap
              
              const wordOpacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              const wordSpring = useSpring(wordOpacity, { stiffness: 80, damping: 20 });

              return (
                <span key={index} className="relative overflow-hidden inline-block py-1">
                  <motion.span 
                    style={{ opacity: wordSpring }} 
                    className="text-xl md:text-2xl font-medium leading-tight tracking-tight"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>

          {/* Social / Detail Pill */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <div className="px-6 py-2 border border-zinc-700 rounded-full text-xs uppercase tracking-widest font-bold text-zinc-400 hover:bg-white hover:text-black transition-all cursor-pointer">
              MERN Stack
            </div>
            <div className="px-6 py-2 border border-zinc-700 rounded-full text-xs uppercase tracking-widest font-bold text-zinc-400 hover:bg-white hover:text-black transition-all cursor-pointer">
              Software Engineering
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;