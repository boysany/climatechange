
import React from 'react';
import { motion as m } from 'framer-motion';

// Cast motion to any to bypass strict type checking on motion props
const motion = m as any;

const TechStack: React.FC = () => {
  const stackTop = [
    { name: 'HTML5', color: 'hover:text-[#E34F26]' },
    { name: 'CSS3', color: 'hover:text-[#1572B6]' },
    { name: 'JavaScript', color: 'hover:text-[#F7DF1E]' },
    { name: 'PHP', color: 'hover:text-[#777BB4]' },
    { name: 'React', color: 'hover:text-[#61DAFB]' },
    { name: 'Next.js', color: 'hover:text-black dark:hover:text-white' },
  ];

  const stackBottom = [
    { name: 'TypeScript', color: 'hover:text-[#3178C6]' },
    { name: 'Node.js', color: 'hover:text-[#339933]' },
    { name: 'Tailwind CSS', color: 'hover:text-[#06B6D4]' },
    { name: 'Framer Motion', color: 'hover:text-[#FF0055]' },
    { name: 'Three.js', color: 'hover:text-black dark:hover:text-white' },
    { name: 'Figma', color: 'hover:text-[#F24E1E]' },
  ];

  return (
    <motion.section className="py-24 md:py-40 px-6 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-700">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="text-[20vw] font-medium uppercase tracking-tighter dark:text-white">STACK</span>
      </div>

      <motion.div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
          <span className="text-blue-600 font-medium uppercase tracking-[0.4em] text-[10px] md:text-xs">Our Toolkit</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[2.5rem] md:text-[4rem] font-medium text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors"
        >
          The Engine of <span className="text-blue-600">Innovation.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 dark:text-slate-500 font-medium text-base md:text-lg max-w-2xl mx-auto tracking-tight transition-colors"
        >
          From the core fundamentals of the web to the most advanced frameworks, we engineer products that perform.
        </motion.p>
      </motion.div>

      <div className="relative space-y-8">
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1035] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 shrink-0"
          >
            {[...stackTop, ...stackTop, ...stackTop].map((tech, i) => (
              <TechBadge key={i} name={tech.name} colorClass={tech.color} />
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1035, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 shrink-0"
          >
            {[...stackBottom, ...stackBottom, ...stackBottom].map((tech, i) => (
              <TechBadge key={i} name={tech.name} colorClass={tech.color} />
            ))}
          </motion.div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors duration-700" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors duration-700" />
      </div>
    </motion.section>
  );
};

// Updated: Strictly enforced 22px border radius for tech badges
const TechBadge: React.FC<{ name: string; colorClass: string }> = ({ name, colorClass }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className={`px-8 md:px-12 py-5 md:py-6 glass border rounded-[22px] text-slate-500 dark:text-slate-400 font-medium text-xs md:text-sm uppercase tracking-[0.3em] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-500 cursor-default border-slate-100 dark:border-slate-800 ${colorClass}`}
  >
    {name}
  </motion.div>
);

export default TechStack;
