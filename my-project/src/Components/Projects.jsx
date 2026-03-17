import React, { useRef } from 'react'
import assests from '../assets/assests'
import { ExternalLinkIcon } from "lucide-react"
import { useScroll, useSpring, useTransform, motion } from 'framer-motion'

const Projects = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const projects = [
        {
            img: assests.chatImage,
            title: "Real-Time Chat Ecosystem",
            description: "Architected a full-stack communication platform utilizing Socket.io for bi-directional, low-latency messaging. Engineered a secure authentication layer using JWT and Bcrypt, and optimized MongoDB schemas to handle concurrent message streams.",
            link: "https://directapp.netlify.app/"
        },
        {
            img: assests.positivus,
            title: "Positivus Landing Page",
            description: "Engineered a high-conversion landing page using React and Framer Motion, focusing on fluid micro-interactions and scroll-linked animations. Implemented a mobile-first, responsive architecture with Tailwind CSS.",
            link: "https://positivusweb321.netlify.app/"
        },
        {
            img: assests.Amjad_portfolio,
            title: "Client Portfolio",
            description: "Developed a sleek, conversion-focused portfolio for a creative professional. Leveraged React’s component-based architecture to build a modular UI, achieving near-instant load times and seamless navigation.",
            link: "https://amjad-bashir.netlify.app/"
        }
    ];

    return (
        <section id='Projects' className='bg-black overflow-hidden'>
            <motion.div className='text-white px-6 py-24 sm:px-14 md:px-28 flex flex-col'>
                {/* Header Section */}
                <div className='overflow-hidden mb-20'>
                    <motion.h1 
                        initial={{ y: "100%" }} // Use percentage for better responsiveness
        whileInView={{ y: 0 }} 
        viewport={{ once: true, amount: 0.1 }} // 'amount' triggers the animation as soon as 10% of the H1 is visible
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className='text-center  text-6xl md:text-8xl  uppercase tracking-tighter'
                    >
                        Projects
                    </motion.h1>
                    <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: "100px" }} 
                        transition={{ delay: 0.5, duration: 1 }}
                        className='bg-white h-1 mt-4 mx-auto'
                    ></motion.div>
                </div>

                <div ref={ref} className='space-y-40'>
                    {projects.map((item, i) => {
                        // Create parallax for each project item
                        const itemY = useTransform(scrollYProgress, [0 + i * 0.2, 0.5 + i * 0.2], [100, 0]);
                        const springY = useSpring(itemY, { damping: 25, stiffness: 100 });

                        return (
                            <motion.div 
                                key={i}
                                style={{ y: springY }}
                                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Image Container with Hover Effect */}
                                <motion.div 
                                    whileHover={{ scale: 0.98 }}
                                    transition={{ duration: 0.4 }}
                                    className='relative w-full md:w-1/2 group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-zinc-900'
                                >
                                    <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        src={item.img} 
                                        className='w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity' 
                                        alt={item.title} 
                                    />
                                    {/* Overlay Gradient */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none' />
                                </motion.div>

                                {/* Text Content Section */}
                                <div className='w-full md:w-1/2 flex flex-col gap-6'>
                                    <div className='overflow-hidden'>
                                        <motion.span 
                                            initial={{ y: 50 }}
                                            whileInView={{ y: 0 }}
                                            className='block text-7xl font-light text-zinc-700 font-serif italic'
                                        >
                                            0{i + 1}
                                        </motion.span>
                                    </div>

                                    <div className='overflow-hidden'>
                                        <motion.h2 
                                            initial={{ y: "100%" }}
                                            whileInView={{ y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className='text-3xl md:text-5xl font-bold tracking-tight'
                                        >
                                            {item.title}
                                        </motion.h2>
                                    </div>

                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className='text-zinc-400 text-lg max-w-md leading-relaxed'
                                    >
                                        {item.description}
                                    </motion.p>

                                    <motion.div 
                                        whileHover={{ x: 10 }}
                                        className='flex items-center gap-4 group'
                                    >
                                        <a 
                                            target='_blank' 
                                            rel="noreferrer" 
                                            href={item.link} 
                                            className='flex items-center gap-2 text-sm uppercase font-bold tracking-widest'
                                        >
                                            View Case Study 
                                            <ExternalLinkIcon size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;