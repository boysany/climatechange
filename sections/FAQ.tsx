
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import PremiumButton from '../components/PremiumButton.tsx';
import { FOUNDER_AVATARS } from '../lib/teamData.ts';

const sandeepPortrait = FOUNDER_AVATARS.sandeep;

// Cast motion to any to bypass strict type checking on motion props
const motion = m as any;

const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    { 
      q: "How long does a typical project take?", 
      a: "Most website projects take 4-8 weeks from discovery to launch, depending on complexity and revision cycles." 
    },
    { 
      q: "Do you offer post-launch support?", 
      a: "Yes, we provide monthly maintenance retainers to ensure your site remains secure, performant, and up-to-date." 
    },
    { 
      q: "Will I own the IP of the designs?", 
      a: "Absolutely. Once the project is completed and paid for, you own 100% of the intellectual property and source files." 
    },
    { 
      q: "Can you help with Web3/Crypto projects?", 
      a: "Yes, we have deep expertise in blockchain UX, DeFi dashboards, and NFT marketplace interface design." 
    },
  ];

  return (
    <motion.section id="faq" className="py-32 px-6 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-700">
      <motion.div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <motion.h2 className="text-[2.5rem] md:text-[4rem] font-medium text-slate-900 dark:text-white tracking-tight leading-[1.1] transition-colors">
              Got 
              <motion.span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-2xl mx-3 align-middle shadow-lg shadow-blue-500/20">
                <HelpCircle size={24} className="text-white fill-white/10" />
              </motion.span>
              Questions?
            </motion.h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-tight transition-colors"
          >
            Finding the answers to your design journey in three simple steps
          </motion.p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Support Display */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative sticky top-32"
          >
            <motion.div className="rounded-[22px] overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl relative bg-slate-50 dark:bg-slate-900 border dark:border-slate-800 transition-colors">
              <motion.img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000" 
                alt="Support Team" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 dark:opacity-70"
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] glass p-6 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-white/60 dark:border-white/10 transition-all"
              >
                <motion.div className="flex items-center justify-between gap-4">
                  <motion.div className="flex items-center gap-3">
                    <motion.img 
                      src={sandeepPortrait} 
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 shadow-sm object-cover" 
                      alt="Sandeep Barupal"
                    />
                    <motion.div>
                      <motion.div className="flex items-center gap-1">
                        <motion.span className="font-medium text-slate-900 dark:text-white text-sm transition-colors">Sandeep Barupal</motion.span>
                        <motion.div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                          <motion.div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </motion.div>
                      </motion.div>
                      <motion.p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium transition-colors">climatechangedigitallabs@gmail.com</motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div className="mt-4 flex justify-center">
                  <PremiumButton 
                    text="Live Chat Now"
                    variant="secondary"
                    icon={MessageCircle}
                    className="!py-2 !px-8 dark:!bg-white dark:!text-slate-950"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Accordion Questions */}
          <motion.div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isActive = active === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActive(isActive ? null : idx)}
                  className={`cursor-pointer transition-all duration-500 rounded-[22px] overflow-hidden ${
                    isActive 
                    ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-900 p-8 shadow-2xl shadow-slate-900/20' 
                    : 'bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white p-8 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <motion.div className="flex items-center justify-between gap-6">
                    <motion.h3 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors ${
                      isActive ? 'text-white dark:text-slate-900' : 'text-slate-900 dark:text-white'
                    }`}>
                      {faq.q}
                    </motion.h3>
                    <motion.div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                      isActive 
                      ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-white dark:border-slate-800' 
                      : 'bg-transparent text-slate-400 border-slate-200 dark:border-slate-800'
                    }`}>
                      {isActive ? <Minus size={20} /> : <Plus size={20} />}
                    </motion.div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <motion.p className={`mt-6 font-medium leading-relaxed text-lg max-w-md transition-colors ${isActive ? 'text-slate-400 dark:text-slate-500' : 'text-slate-500'}`}>
                          {faq.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Context Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-10 rounded-[22px] border border-blue-50 dark:border-blue-900/20 bg-blue-50/20 dark:bg-blue-900/5 transition-all"
            >
              <motion.div className="flex items-center gap-4 mb-4">
                <motion.div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </motion.div>
                <motion.h4 className="font-medium text-slate-900 dark:text-white tracking-tight transition-colors">Still confused?</motion.h4>
              </motion.div>
              <motion.p className="text-slate-500 dark:text-slate-400 font-medium mb-6 transition-colors">Our experts are ready to clarify any technical or creative concerns you might have.</motion.p>
              <motion.button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm group transition-colors">
                Download Brochure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FAQ;
