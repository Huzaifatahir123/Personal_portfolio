import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  // Sleek Input Tailwind Class
  const inputStyles = `
    w-full bg-transparent border-b border-zinc-300 py-4 outline-none 
    focus:border-black transition-colors duration-500 placeholder:text-zinc-400
    text-lg font-light
  `;

  return (
    <motion.section  id='Contact'
      ref={ref} 
      style={{ opacity, y: springY }}
      className="min-h-screen flex items-center px-6 py-20 sm:px-14 md:px-28 bg-white text-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full items-start">
        
        {/* Left Side: Minimalist Form */}
        <div className="order-2 lg:order-1">
          <form className="space-y-8">
            <div className="group relative">
              <input placeholder="What's your name?" type="text" className={inputStyles} />
            </div>
            <div className="group relative">
              <input placeholder="Your email address" type="email" className={inputStyles} />
            </div>
            <div className="group relative">
              <textarea rows="4" placeholder="Tell me about your project..." className={inputStyles}></textarea>
            </div>

            <button className="group relative flex items-center gap-3 overflow-hidden border border-black px-8 py-4 text-black transition-all hover:text-white">
              <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
              <span className="relative font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                Send Message <Send size={16} />
              </span>
            </button>
          </form>
        </div>

        {/* Right Side: Bold Typography */}
        <div className="order-1 lg:order-2 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black leading-tight tracking-tighter uppercase"
          >
            Let's <br /> <span className="text-zinc-400 italic font-light">Connect.</span>
          </motion.h2 >
          
          <div className="space-y-6 pt-10">
            <p className="max-w-md text-zinc-500 leading-relaxed text-lg">
              Currently available for freelance projects and full-time opportunities. 
              Let’s build something that leaves a mark.
            </p>
            
            <div className="space-y-2">
              <a href="mailto:h905923@gmail.com" className="group flex items-center gap-4 text-2xl font-medium hover:text-zinc-500 transition-colors">
                <div className="p-3 bg-zinc-100 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                h905923@gmail.com
              </a>
              <a href="tel:+923256797391" className="group flex items-center gap-4 text-2xl font-medium hover:text-zinc-500 transition-colors">
                <div className="p-3 bg-zinc-100 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                +923256797391
              </a>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;