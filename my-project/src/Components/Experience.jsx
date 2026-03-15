import { GlobeOffIcon } from "lucide-react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 1. Create unique parallax speeds for each card
  // card 1 moves slow, card 3 moves faster (creates depth)
  const transformY1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const transformY2 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const transformY3 = useTransform(scrollYProgress, [0, 1], [220, -220]);

  // 2. Add Spring for "Premium" smoothness (Damping 30 is the secret)
  const y1 = useSpring(transformY1, { stiffness: 100, damping: 30 });
  const y2 = useSpring(transformY2, { stiffness: 100, damping: 30 });
  const y3 = useSpring(transformY3, { stiffness: 100, damping: 30 });

  // 3. Create a sequential opacity fade-in
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const experiences = [
    { y: y1, title: "Google", duration: "Sep 24 - Present", description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for core search algorithms.As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for core search algorithms.As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for core search algorithms." },
    { y: y2, title: "Google", duration: "Jan 23 - Aug 24", description: "Collaborating with a dynamic team, I contributed to the enhancement of search accuracy and user experience optimization." },
    { y: y3, title: "Google", duration: "Jun 21 - Dec 22", description: "Optimized large-scale system performance and implemented high-efficiency data structures for millions of users." },
  ];

  return (
    <motion.div 
      ref={ref} 
      className="bg-primary text-text px-6 py-24 sm:px-14 md:px-16 lg:px-28 flex flex-col justify-center items-center gap-16 overflow-hidden"
    >
      <motion.div style={{ opacity }} className="text-center">
        <h1 className="text-4xl">My <span className="font-bold">Experience</span></h1>
        <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-8 flex-wrap w-full max-w-7xl">
        {experiences.map((ele, i) => (
          <motion.div
            key={i}
            style={{ y: ele.y, opacity }}
            className="group relative border border-white rounded-sm flex flex-col gap-6 p-8   "
          >
            {/* Subtle Glow Effect */}
            <div className="absolute rounded-xl " />
            
            <div className="flex justify-between items-start z-10">
              <div className="p-3  rounded-lg">
                <GlobeOffIcon size={24} className="" />
              </div>
              <span className="text-xs uppercase tracking-widest opacity-50 font-mono">
                {ele.duration}
              </span>
            </div>

            <div className="z-10">
              <h2 className="text-2xl font-bold mb-2">{ele.title}</h2>
              <p className="text-sm leading-relaxed  ">
                {ele.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;