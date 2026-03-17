import React, { useState, useEffect } from 'react';
import assests from '../assets/assests.js';
import { useAnimate, stagger } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  
  const links = [{ Name:"Experience", link:"#Experience"},{ Name:"Projects", link:"#Projects"},{ Name:"Contact Us", link:"#Contact "},{ Name:"About Us", link:"#About"},{ Name:"Skills", link:"#Skills"},{ Name:"Testimonial", link:"#Testimonial"}];

  useEffect(() => {
    if (isOpen) {
      // 1. Animate Text Color


      // 3. Burger Icon (Combined objects so delay works)
      animate(".line-1", { rotate: 45, y: 4, backgroundColor: "#fff" }, { type: "spring", stiffness: 300, damping: 15 });
      animate(".line-2", { rotate: -45, y: -4, backgroundColor: "#fff" }, { type: "spring", stiffness: 300, damping: 10 });
      
      // 4. Background & Links
      animate(".menu-overlay", { clipPath: "circle(150% at 100% 0%)" }, { duration: 0.7, ease: [0.37, 0, 0.63, 1] });
      animate(".nav-link", { opacity: 1, x: 0, scale: 1 }, { duration: 0.4, ease: "easeInOut", delay: stagger(0.1, { startDelay: 0.1 }) });
            animate(".huzaifa", { color: "#fff" ,scale:1.2 }, { duration: 0.3  ,ease:"easeIn" });

      // 2. Animate Border (Dashed effect)
      animate(".border-container", 
        { borderColor: "#fff", borderStyle: "dashed" }, 
        { duration: 0.3 }
      );

    } else {
      // 1. Reset Text & Border
      animate(".huzaifa", { color: "#000" ,scale:1 }, { duration: 0.3, ease:"easeIn", delay: 0.5 });
      animate(".border-container", { borderColor: "#000" }, { duration: 0.3, delay: 0.5 });

      // 2. Close Links (Last to First)
      animate(".nav-link", { opacity: 0, x: 120, scale: 0 }, { duration: 0.4, ease: "easeInOut", delay: stagger(0.1, { from: "last" }) });
      
      // 3. Close Overlay
      animate(".menu-overlay", { clipPath: "circle(0% at 100% 0%)" }, { duration: 0.5, ease: "easeOut", delay: 0.5 });
      
      // 4. Reset Burger Lines (Added combined options with delay)
      animate(".line-1", { rotate: 0, y: 0, backgroundColor: "#000" }, { type: "spring", stiffness: 300, damping: 10, delay: 0.6 });
      animate(".line-2", { rotate: 0, y: 0, backgroundColor: "#000" }, { type: "spring", stiffness: 300, damping: 10, delay: 0.6 });
    }
  }, [isOpen, animate]);

  return (
    <section ref={scope} className="relative">
      <div className='px-6 py-6 sm:px-14 md:px-16 lg:px-28 z-50 relative'>
        {/* Added .border-container class for animation */}
        <div className={`border-container border border-dashed border-black flex justify-between items-center px-4 py-2 transition-colors duration-300`}>
          <div className='flex gap-2 items-center'>
            <h1 className="huzaifa sm:text-2xl max-sm:text-2xl font-bold text-black">
              Huzaifa
            </h1>
          </div>

          <div 
            onClick={() => setIsOpen(!isOpen)} 
            className='flex flex-col justify-center items-center cursor-pointer gap-1.5 w-10 h-10'
          >
            <a className="line-1 w-8 h-1 cursor-pointer bg-black" />
            <a className="line-2 w-8 h-1 cursor-pointer bg-black" />
          </div>
        </div>
      </div>

      <div 
        className="menu-overlay fixed overflow-hidden inset-0 max-sm:px-10 sm:px-26 bg-black z-40 flex flex-col justify-center max-sm:items-center items-left gap-6"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        {links.map((ele, i) => (
          <a  onClick={() => setIsOpen(!isOpen)} 
            key={i} 
            className="nav-link relative max-sm:text-[40px] text-[40px] text-white opacity-0 translate-y-8 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-white" 
            href={ele.link}
          >
            {ele.Name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Navbar;