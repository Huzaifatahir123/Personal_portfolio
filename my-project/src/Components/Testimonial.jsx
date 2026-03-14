import React, { useState } from 'react';
import assets from '../assets/assests';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence ,useScroll,useSpring,useTransform } from 'framer-motion';
import { useRef } from 'react';
const Testimonial = () => {
    const ref = useRef(null);
    
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end 0.9"],
      });
      const scaleXy = useTransform(scrollYProgress,[0,0.7,1],[0.3,1,0.8]);
      const scale = useSpring(scaleXy,{damping:70,
                        stiffness:300,
                        })
  const testimonials = [
    { bgcolor:"bg-black",color:"text-white", id: 1, img: assets.Logo, desc: "The MERN stack projects here are incredible. The attention to detail in the UI/UX and the smooth Framer Motion transitions make the experience truly premium." , Name:"Flora Sheen" , Designation:"UI Designer"},
    { id: 2, img: assets.HeroImg, desc: "Working on this chat application was a game-changer. The backend architecture is solid, and the frontend animations are buttery smooth." , Name:"Huzaifa" , Designation:"Full-Stack Developer",color:"text-black",bgcolor:"bg-white"},
  ];

  const [[counter, direction], setCounter] = useState([0, 0]);
  const currentTestimonial = testimonials[counter];

  const paginate = (newDirection) => {
    let nextIndex = (counter + newDirection + testimonials.length) % testimonials.length;
    setCounter([nextIndex, newDirection]);
  };

  /** --- ANIMATION VARIANTS --- **/
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45, // Adds a sleek 3D entrance
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1, // This animates the internal img/text one by one
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45,
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  const childVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div ref={ref} className='px-6 py-24 flex flex-col gap-12 justify-center items-center   perspective-1000'>
      <h1 className='text-5xl text-black font-bold tracking-tight'>Testimonials</h1>

      <motion.div style={{scale}} className='relative w-full max-w-md h-[480px] flex items-center justify-center'>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={counter}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            
            /* --- SWIPE / DRAG LOGIC --- */
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -100) {
                paginate(1); // Swipe left to go next
              } else if (swipe > 100) {
                paginate(-1); // Swipe right to go prev
              }
            }}
            
            className={`absolute flex flex-col gap-6 w-full rounded-3xl ${currentTestimonial.bgcolor} ${currentTestimonial.color}  justify-center items-center p-10  shadow-2xl cursor-grab active:cursor-grabbing`}
          >
            {/* Animated Image */}
            <motion.img 
              variants={childVariants}
              className='w-28 h-28 rounded-full object-cover border border-gray-500 pointer-events-none' 
              src={currentTestimonial.img} 
            />
            
            {/* Animated Text */}
            <motion.p 
              variants={childVariants}
              className={`text-center  italic leading-relaxed pointer-events-none ${currentTestimonial.color}`}
            >
              "{currentTestimonial.desc}"
            </motion.p>
            
            {/* Animated Name & Designation */}
            <motion.div variants={childVariants} className='text-center pointer-events-none'>
              <h3 className='text-2xl font-bold'>{currentTestimonial.Name}</h3>
              <p className=' font-medium'>{currentTestimonial.Designation}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Buttons */}
      <div className='flex gap-4'>
        <button onClick={() => paginate(-1)} className="p-4 rounded-full bg-black border border-white/10 text-white  transition-all active:scale-90">
          <ArrowLeft size={24} />
        </button>
        <button onClick={() => paginate(1)} className="p-4 rounded-full bg-black border border-white/10 text-white  transition-all active:scale-90">
          <ArrowRight size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default Testimonial;