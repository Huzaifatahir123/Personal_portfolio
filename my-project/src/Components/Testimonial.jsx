import React, { useState, useRef } from 'react';
import assets from '../assets/assests';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

const Testimonial = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Sophisticated scale entry
  const scaleXy = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const scale = useSpring(scaleXy, { damping: 30, stiffness: 100 });

  const testimonials = [
    {
      id: 1,
      img: assets.Women,
      Name: "Rabia Ahmed",
      Designation: "UI/UX Designer",
      desc: "The implementation of Framer Motion here is some of the best I've seen. It’s not just about the 'wow' factor; the animations actually improve the usability and flow of the entire application."
    },
    {
      id: 2,
      img: assets.Men,
      Name: "Ahmed Bilal",
      Designation: "MERN Stack Lead",
      desc: "We needed a developer who understood both the aesthetic and the performance side of a MERN application. The result was a lightning-fast, sleek interface that our users absolutely love."
    },
    {
      id: 3,
      img: assets.Women,
      Name: "Areeba Batool",
      Designation: "Product Manager",
      desc: "Rarely do you find a portfolio that balances complex backend logic with such a refined frontend. The Chat App’s real-time capabilities are robust, reliable, and polished."
    }
  ];

  const [[counter, direction], setCounter] = useState([0, 0]);
  const current = testimonials[counter];

  const paginate = (newDirection) => {
    let nextIndex = (counter + newDirection + testimonials.length) % testimonials.length;
    setCounter([nextIndex, newDirection]);
  };

  /** --- ENHANCED ANIMATION VARIANTS --- **/
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotate: direction > 0 ? 5 : -5,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotate: direction < 0 ? -5 : 5,
      filter: "blur(10px)",
      transition: { duration: 0.4 }
    })
  };

  const childVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section 
      id='Testimonial' 
      ref={ref} 
      className='bg-white text-black px-6 py-32 flex flex-col items-center overflow-hidden'
    >
      {/* Sleek Header Section */}
      <div className="text-center mb-20 overflow-hidden">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold block mb-4"
        >
          Voices
        </motion.span>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='text-6xl md:text-8xl font-black uppercase tracking-tighter'
        >
          Client <span className="text-zinc-500 italic font-light">Talk</span>
        </motion.h1>
      </div>

      <motion.div style={{ scale }} className='relative w-full max-w-4xl h-[550px] flex items-center justify-center'>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={counter}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) paginate(1);
              else if (offset.x > 50) paginate(-1);
            }}
            className={`absolute w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-[2rem] p-10 md:p-16 flex flex-col items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing`}
          >
            <Quote size={40} className="text-zinc-800 absolute top-10 left-10 opacity-50" />

            {/* Profile Image with subtle glow */}
            <div className="relative">
              <motion.img 
                variants={childVariants}
                className='w-32 h-32 rounded-full object-cover border-2 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500' 
                src={current.img} 
              />
              <div className="absolute inset-0 rounded-full bg-white/5 blur-xl -z-10" />
            </div>
            
            <motion.p 
              variants={childVariants}
              className="text-center text-xl md:text-2xl font-medium leading-relaxed italic text-zinc-300"
            >
              "{current.desc}"
            </motion.p>
            
            <motion.div variants={childVariants} className="flex flex-col items-center">
              <h3 className='text-3xl font-black uppercase tracking-tight text-white'>{current.Name}</h3>
              <p className='text-zinc-500 font-mono text-sm tracking-widest mt-1 uppercase'>{current.Designation}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modern Navigation */}
      <div className='flex items-center gap-12 mt-20'>
        <motion.button 
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)} 
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> <span className="text-xs font-bold tracking-widest uppercase">Prev</span>
        </motion.button>

        <div className="flex gap-2">
           {testimonials.map((_, i) => (
             <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === counter ? "bg-white w-6" : "bg-zinc-800"}`} />
           ))}
        </div>

        <motion.button 
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)} 
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
           <span className="text-xs font-bold tracking-widest uppercase">Next</span> <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Testimonial;