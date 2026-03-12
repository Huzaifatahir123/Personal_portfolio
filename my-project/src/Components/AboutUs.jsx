import React from "react";
import assests from "../assets/assests";
import { useScroll,useTransform,motion,useSpring } from "framer-motion";
import { useRef } from "react";
const AboutUs = () => {
  const paragraph = "Dedicated Junior Full-Stack Developer proficient in the MERN stack.Proven ability to translate complex requirements into functional,user-centric web applications through various personal and academicprojects. Strong collaborator with a focus on agile methodologies and continuous learning. Ready to bring fresh perspectives and astrong work ethic to a dynamic development role.I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.I'm a passionate, self-proclaimed designer who specializes in full stack development "
  const words = paragraph.split(" ");
  const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 0.9", "end 0.9"],
    });
  return (
    <>
    <h1 className="py-12 text-center text-3xl">ABout <span className="text-3xl font-bold">ME</span></h1>
      <div ref={ref} className="px-10 py-6 sm:px-14 md:px-16 lg:px-28 flex max-md:flex-wrap gap-2  ">
        
        <div className="md:w-[50%]">
          <img src={assests.AboutPic} alt="" />
        </div>
        <motion.p  className="md:w-[50%] flex flex-wrap gap-1 leading-1   ">
          {
             words.map((ele,index)=>{
              const start = index / words.length;
              const end = start + (index / words.length);
              
              const opac = useTransform(scrollYProgress,[start,end > 1 ? 1:end],[0,1])
               const opacity = useSpring(opac, { stiffness: 100, damping: 30 });
                  return (
                    <motion.span className="text-lg font-bold" style={{opacity}} >{ele}</motion.span>
             )})
          }
        </motion.p>
      </div>
    </>
  );
};

export default AboutUs;
