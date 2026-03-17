import React, { useRef } from "react";
import { MessageSquare, Box, GraduationCap, ArrowUpRight } from "lucide-react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax offsets - adjusted for a smoother "stacking" effect
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), { stiffness: 100, damping: 30 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [150, -150]), { stiffness: 100, damping: 30 });
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [200, -200]), { stiffness: 100, damping: 30 });

  const experiences = [
    { 
      y: y1, 
      icon: MessageSquare, 
      title: "Real-Time Chat Ecosystem", 
      duration: "Nov 25 | Jan 26", 
      tag: "Full-Stack",
      description: "Architected a communication platform utilizing Socket.io for bi-directional messaging. Engineered secure JWT authentication and optimized MongoDB schemas for high concurrency." 
    },
    { 
      y: y2, 
      icon: Box, 
      title: "Supply Chain Logistics Engine", 
      duration: "Sep 25 | Dec 25", 
      tag: "C++ / Algorithms",
      description: "Developed a high-performance logistics simulator. Implemented Dijkstra’s Algorithm and Max-Heaps for O(log n) route optimization and inventory prioritization." 
    },
    { 
      y: y3, 
      icon: GraduationCap, 
      title: "Educational Assessment Platform", 
      duration: "July 25 | Sep 25", 
      tag: "API Design",
      description: "Built a comprehensive Quiz API with RBAC. Developed Result Analytics models and integrated Framer Motion for a fluid, engaging frontend experience." 
    },
  ];

  return (
    <section id="Experience" ref={ref} className="bg-black text-white py-32 overflow-hidden">
      {/* Sleek Header */}
      <div className="px-6 sm:px-14 md:px-28 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">Background</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            My <span className="text-zinc-500 italic font-light">Experience</span>
          </h1>
        </motion.div>
      </div>

      {/* Experience List */}
      <div className="px-6 sm:px-14 md:px-28 space-y-12 max-w-7xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            style={{ y: exp.y }}
            className="group relative flex flex-col md:flex-row gap-8 p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm hover:border-zinc-400 transition-colors duration-500 rounded-2xl"
          >
            {/* Numbering Background */}
            <span className="absolute -top-10 -left-5 text-9xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.07] transition-colors">
              0{i + 1}
            </span>

            {/* Left Side: Icon & Duration */}
            <div className="flex flex-col justify-between items-start md:w-1/4">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-4 bg-zinc-900 rounded-xl border border-zinc-700 text-white"
              >
                <exp.icon size={28} strokeWidth={1.5} />
              </motion.div>
              <div className="mt-6 md:mt-0">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{exp.duration}</p>
                <span className="text-[10px] text-zinc-400 border border-zinc-700 px-2 py-1 rounded-full mt-2 inline-block uppercase">
                  {exp.tag}
                </span>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="md:w-3/4 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-zinc-300 transition-colors">
                  {exp.title}
                </h2>
                <ArrowUpRight className="text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;