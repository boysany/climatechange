
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Cast motion to any to bypass strict type checking on motion props
const motion = m as any;

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    { 
      name: "Rajesh Sharma", 
      role: "Founder, GrowthStack", 
      text: "CCDL transformed our complex product requirements into a stunning, high-speed web application. Their frontend engineering and UI craftsmanship are truly world-class.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    { 
      name: "Ananya Roy", 
      role: "Product Lead, FinVenture", 
      text: "Working with the CCDL team was seamless from day one. They delivered clean code, pixel-perfect layouts, and exceeded our sprint targets ahead of schedule.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    { 
      name: "Vikram Malhotra", 
      role: "CTO, NextGen Logistics", 
      text: "The full-stack platform CCDL architected for us handles high concurrency effortlessly. Their senior engineering depth and responsiveness are unmatched.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    { 
      name: "Pooja Patel", 
      role: "Co-Founder, EduCraft Labs", 
      text: "Elite level design and robust engineering. CCDL doesn't just build interfaces; they build strategic digital assets that accelerate business growth.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <motion.section id="testimonials" className="py-40 px-6 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-700">
      <motion.div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 transition-colors" />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10 transition-colors" />

      <motion.div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-[0.4em] text-xs block mb-6"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[4rem] font-medium text-slate-900 dark:text-white tracking-tight leading-[1.1] transition-colors"
          >
            What our clients <motion.br /> are <span className="text-blue-600 italic font-serif font-normal">saying</span>.
          </motion.h2>
        </motion.div>

        <motion.div className="relative min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.1, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Updated: Main testimonial container radius set to strictly 22px */}
              <motion.div className="glass p-12 md:p-20 rounded-[22px] border border-white/80 dark:border-white/5 shadow-2xl bg-white/50 dark:bg-slate-900/80 transition-all">
                <Quote className="absolute -top-10 -right-10 w-64 h-64 text-blue-50/50 dark:text-white/5 -rotate-12 pointer-events-none transition-colors" />
                
                <motion.div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <motion.div className="shrink-0">
                    <motion.div className="w-32 h-32 md:w-48 md:h-48 rounded-[22px] overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl rotate-3">
                      <motion.img 
                        src={reviews[index].avatar} 
                        alt={reviews[index].name} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="flex-1 text-center md:text-left">
                    <motion.div className="flex justify-center md:justify-start gap-1 mb-8 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </motion.div>
                    
                    <motion.blockquote className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-10 italic transition-colors">
                      "{reviews[index].text}"
                    </motion.blockquote>
                    
                    <motion.div>
                      <motion.h4 className="text-2xl font-medium text-slate-900 dark:text-white tracking-tight mb-1 transition-colors">
                        {reviews[index].name}
                      </motion.h4>
                      <motion.p className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-widest text-xs transition-colors">
                        {reviews[index].role}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {reviews.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  index === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
