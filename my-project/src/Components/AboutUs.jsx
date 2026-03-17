import React from "react";
import assests from "../assets/assests";
import { useScroll,useTransform,motion,useSpring ,useMotionValueEvent} from "framer-motion";
import { useRef } from "react";
const AboutUs = () => {
  const paragraph = "Dedicated Junior Full-Stack Developer proficient in the MERN stack.Proven ability to translate complex requirements into functional,user-centric web applications through various personal and academicprojects. Strong collaborator with a focus on agile methodologies and continuous learning. Ready to bring fresh perspectives and astrong work ethic to a dynamic development role.I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). "
  const words = paragraph.split(" ");
  const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 0.7", "end 0.3"],
    });
 
  return (
    <section id="About"
    >
    <h1 className="py-12 text-center text-4xl">About <span className="text-4xl font-bold">ME</span></h1>
      <div  className="px-10 py-6 sm:px-14 md:px-16 lg:px-28 flex max-md:flex-wrap gap-2  ">
        
        <div className="md:w-[50%]">
          <img src={assests.AboutPic} alt="" />
        </div>
        <motion.p ref={ref} className="md:w-[50%] flex flex-wrap gap-1 leading-tight  ">
          {
             words.map((ele,index)=>{
              const start = index / words.length + 0.03;
              const end = start + (index / words.length);
              
              const opac = useTransform(scrollYProgress,[start,end > 1 ? 1:end],[0,1])
               const opacity = useSpring(opac, { stiffness: 100, damping: 30 });
                  return (
                    <span className="relative inline-block">
                      <span className="absolute text-lg p-0 font-bold opacity-5">{ele}</span>
                     <motion.span className="text-lg font-bold" style={{opacity}} >{ele}</motion.span>
                    </span>
                    
             )})
          }
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
