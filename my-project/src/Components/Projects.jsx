import React from 'react'
import assests from '../assets/assests'
import {LinkIcon} from "lucide-react"
import { useRef } from 'react'
import { useScroll,useSpring ,useTransform,motion } from 'framer-motion'
const Projects = () => {
      const ref = useRef(null);
    
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "end 0.9"],
      });
    
      // 1. Create unique parallax speeds for each card
      // card 1 moves slow, card 3 moves faster (creates depth)
      const transformY1 = useTransform(scrollYProgress, [0, 1], [50, -150]);
      const transformY2 = useTransform(scrollYProgress, [0, 1], [80, -180]);
      const transformY3 = useTransform(scrollYProgress, [0, 1], [120, -220]);
    
      // 2. Add Spring for "Premium" smoothness (Damping 30 is the secret)
      const y1 = useSpring(transformY1, { stiffness: 100, damping: 30 });
      const y2 = useSpring(transformY2, { stiffness: 100, damping: 30 });
      const y3 = useSpring(transformY3, { stiffness: 100, damping: 30 });
    
      // 3. Create a sequential opacity fade-in
      
    const projects = [{
        y:y1,
        img:assests.ProjectImg,
        title:"Crypto Screener Application",
        description:"I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
        Link:"http:123456789"

    },{
         y:y2,
        img:assests.ProjectImg,
        title:"Crypto Screener Application",
        description:"I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
        Link:"http:123456789"

    },{
         y:y3,
        img:assests.ProjectImg,
        title:"Crypto Screener Application",
        description:"I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
        Link:"http:123456789"

    }]
  return (
    <>
    <motion.div className='bg-primary text-text px-12 py-24 sm:px-14 md:px-16  flex flex-col '>
        <h1 className='text-center text-5xl '> Projects</h1>
        <center><motion.div className='w-24 bg-white h-1 mt-4'></motion.div></center>
        <motion.div ref={ref} className='flex flex-wrap py-12 max-sm:gap-10  max-md:justify-center items-center'>
            {projects.map((Ele,i)=>{
                 const start = (i+1) * 0.2; 
                      const end = start + 0.2;
                      const scale = useTransform(scrollYProgress,[start, end > 1 ? 1 : end],[0,1])
                 const opacity = useTransform(scrollYProgress, [start, end > 1 ? 1 : end], [0, 1]);

return(
               <motion.div style={{y:Ele.y,opacity,scale}} className={`flex   flex-wrap max-md:flex-col ${i % 2 ? `flex-row-reverse`:"flex-row"}`}>
                <motion.div className='md:w-[50%]'>
                     <img src={Ele.img} alt="" />
                </motion.div>
                <motion.div className='flex flex-col justify-center items-start gap-7 md:w-[50%]'>
                         <h1 className='text-5xl'>0{i+1}</h1>
                         <h1 className='max-sm:text-lg text-3xl text-wrap'>Crypto Screener Application</h1>
                         <p className='text-sm'>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                         <a href={Ele.Link}><LinkIcon/></a>
                </motion.div>
               </motion.div>
           ) })}
        </motion.div>
    </motion.div>
    </>
  )
}

export default Projects