
import assests from "../assets/assests";
import {Download} from "lucide-react"
import {useScroll,useTransform,motion, useSpring} from "framer-motion"
import { useRef } from "react";

const Skills = () => {
  const Skills = [
    { icon: assests.git, skill: "Git" },
    { icon: assests.javaScript, skill: "JavaScript" },
    {icon: assests.mongodb ,skill:"MongoDb" },
    {icon:assests.react,skill:"React.JS"},
    {icon:assests.node,skill:"Node.Js"},
    {icon:assests.framer,skill:"Framer-Motion"},
    {icon:assests.tailwind,skill:"Tailwind Css"},
    {icon:assests.postgre,skill:"PostgreSql"},
    {icon:assests.express,skill:"Express"},
    {icon:assests.redux,skill:"Redux"},
    
  ];
    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
    
  
  

  return (
    <section id="Skills">
      <motion.div ref={ref} className="px-10 overflow-x-hidden py-6 sm:px-14 md:px-16 flex flex-col  lg:px-28">
       <center> <motion.h1 className="text-3xl" >My <span className="text-3xl font-bold"> Skills</span> </motion.h1> </center> 
        <motion.div className="flex max-sm:justify-center max-sm:items-start flex-wrap sm:gap-6 max-sm:gap-5 sm:items-center   py-10 ">
            {
                Skills.map(({icon,skill },index)=>{
                      const isLeft = index % 2 == 0;
                      const stagerStart = index * 0.05;
                      const stagetEnd = stagerStart + 0.1;
                      const start = index * 0.08; 
                      const end = start + 0.1;
                      const opacity = useTransform(scrollYProgress, [start, end > 1 ? 1 : end],[0, 1]
  );                  const scale = useTransform(scrollYProgress, [start, end > 1 ? 1 : end], [0.8, 1 ]);
 
                      const xValue  = useTransform(scrollYProgress,[stagerStart, stagetEnd > 1 ? 1 : stagetEnd],[50 , 0 ])
                      const y = useSpring(xValue,{
                        damping:70,
                        stiffness:300,
                        
                      })

                    return (
                    <motion.div key={index} style={{y}} className="flex -z-10 flex-col w-32 rounded-xs gap-2 sm:w-44 border  border-text-secondary p-2">
                         <motion.img style={{scale}} src={icon} alt="" />
                         <motion.h1 initial={{ y: "100%" }}
                                            whileInView={{ y: 0 }}
                                            viewport={{amount:0.5}}
                                            transition={{ duration: 0.5 }} className="text-sm font-bold">{skill}</motion.h1>
                    </motion.div>
                    )
})
            }
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
