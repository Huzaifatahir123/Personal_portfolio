import { GlobeOffIcon, MessageSquare ,Box , GraduationCap } from "lucide-react";
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
  { 
    y: y1, 
    icon: MessageSquare, 
    title: "Real-Time Chat Ecosystem", 
    duration: "Nov 25 | jan 26 ", 
    description: "Architected a full-stack communication platform utilizing Socket.io for bi-directional, low-latency messaging. Engineered a secure authentication layer using JWT and Bcrypt, and optimized MongoDB schemas to handle concurrent message streams and user presence states efficiently." 
  },
  { 
    y: y2, 
    icon: Box, 
    title: "Supply Chain Logistics Engine", 
    duration: "Sep 25 | Dec 25", 
    description: "Developed a high-performance logistics simulator in C++ without external libraries. Implemented Dijkstra’s Algorithm for route optimization, a Max-Heap for order prioritization, and Doubly Linked Lists for inventory management, focusing on O(log n) time complexity for core operations." 
  },
  { 
    y: y3, 
    icon:GraduationCap, 
    title: "Educational Assessment Platform", 
    duration: "July 25 | Sep 25", 
    description: "Built a comprehensive Quiz API featuring Role-Based Access Control (RBAC) for Admins and Students. Developed a robust Result Analytics model to track performance metrics and integrated Framer Motion to create a fluid, engaging frontend experience with Tailwind CSS." 
  },
];

  return (
    <motion.section id="Experience" 
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
            className="group relative border border-dashed border-white rounded-sm flex flex-col gap-6 p-8   "
          >
            {/* Subtle Glow Effect */}
            <div className="absolute rounded-xl " />
            
            <div className="flex justify-between items-center z-10">
              <div className="p-3  rounded-lg">
                <ele.icon size={24} className="" />
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
    </motion.section>
  );
};

export default Experience;