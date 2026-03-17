import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const edgeX = useSpring(cursorX, springConfig);
  const edgeY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
    if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.cursor-pointer')) {
    setIsHovering(true);
  } else {
    setIsHovering(false);
  }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {
      }
      <motion.div
        className="fixed max-sm:hidden top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      
      <motion.div
        className="fixed max-sm:hidden top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "white" : "transparent",
        }}
        style={{ x: edgeX, y: edgeY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
};

export default CustomCursor;