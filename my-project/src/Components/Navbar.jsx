import React, { useState, useEffect } from 'react';
import assests from '../assets/assests.js';
import { useAnimate, stagger, delay } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  
  const links = ["About Me", "Skills", "Projects", "Contact Us"];

  useEffect(() => {
    if (isOpen) {
      // OPEN: Lines turn white and rotate
      animate(".line-1", { rotate: 45, y: 4, backgroundColor: "#fff" },{ type: "spring", stiffness: 300, damping: 15 },{duration:0.3 ,ease:[0.37, 0, 0.63, 1]});
      animate(".line-2", { rotate: -45, y: -4, backgroundColor: "#fff" },{ type: "spring", stiffness: 300, damping: 10 },{duration:0.3 ,ease:[0.37, 0, 0.63, 1]});
      
      animate(".menu-overlay", { clipPath: "circle(150% at 100% 0%)" },{ duration: 0.7 ,ease:[0.37, 0, 0.63, 1] });
      animate(".nav-link", { opacity: 1, x:0 ,scale:1}, { duration:0.4, ease:"easeInOut", delay: stagger(0.15,{ startDelay: 0.2 }) })
    } else {
      // CLOSE: Lines turn back to black and reset
      animate(".nav-link", { opacity: 0, x:120 ,scale:0 }, { duration:0.4, ease:"easeInOut", delay: stagger(0.15,{from:"last"}) });
      animate(".menu-overlay", { clipPath: "circle(0% at 100% 0%)" },{ duration: 0.5 ,ease:"easeOut", delay:0.3 });
      
      animate(".line-1", { rotate: 0, y: 0, backgroundColor: "#000" },{ 
    type: "spring", 
    stiffness: 300, 
    damping: 10,
    duration: 0.3,  
    delay: 0.6,      
    ease: [0.37, 0, 0.63, 1] 
  });
      animate(".line-2", { rotate: 0, y: 0, backgroundColor: "#000" },{ 
    type: "spring", 
    stiffness: 300, 
    damping: 10,
    duration: 0.3, 
    delay: 0.6,     
    ease: [0.37, 0, 0.63, 1] 
  });
    }
  }, [isOpen, animate]);

  return (
    <section ref={scope} className="relative">
      <div className='px-6 py-6 sm:px-14 md:px-16 lg:px-28 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
          <img className='max-sm:size-4 object-contain' src={assests.Logo} alt="Logo" />
          <h1 className='sm:text-2xl max-sm:text-2xl font-bold text-black'>Huzaifa</h1>
        </div>

        {/* --- HAMBURGER BUTTON --- */}
        {/* Increased Z-INDEX to 50 to stay ABOVE the menu */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className='flex flex-col justify-center items-center cursor-pointer gap-1.5 w-10 h-10 z-50 relative'
        >
          <div className="line-1 w-8 h-1 bg-black" />
          <div className="line-2 w-8 h-1 bg-black" />
        </div>
      </div>

      {/* --- MENU OVERLAY --- */}
      {/* Lower Z-INDEX (40) than the button */}
      <div 
        className="menu-overlay fixed inset-0 max-sm:px-10 sm:px-40 bg-black z-40 flex flex-col justify-center max-sm:items-center items-left gap-6"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        {links.map((ele, i) => (
          
          <a 
  key={i} 
  className="nav-link relative  max-sm:text-[40px] text-[60px] text-white opacity-0 translate-y-8 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-white" 
  href="#"
>
  {ele}
</a>
          

          
        ))}
      </div>
    </section>
  );
};

export default Navbar;