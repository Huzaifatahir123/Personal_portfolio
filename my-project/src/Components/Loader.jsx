import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        return 100;
      });
    }, 25); // Adjust speed here

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => setLoading(false), 1000); // Wait 1s after hitting 100
    }
  }, [count, setLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Centered Counter */}
      <div className="relative overflow-hidden">
        <motion.h1 
          className="text-8xl md:text-[12rem] font-black tracking-tighter"
        >
          {count}%
        </motion.h1>
      </div>

      {/* Brand Masking Text */}
      <div className="absolute bottom-10 left-10 overflow-hidden">
        <motion.p 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.5em] font-bold text-zinc-500"
        >
          Huzaifa Tahir <span className="text-white italic">— Portfolio 2026</span>
        </motion.p>
      </div>

      {/* Progress Bar (Sleek Bottom Line) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: count / 100 }}
        className="absolute bottom-0 left-0 h-1 w-full bg-white origin-left"
      />
    </motion.div>
  );
};

export default Loader;