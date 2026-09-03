import React from 'react';
import { motion as m } from 'framer-motion';

// Cast motion to any to bypass strict type checking on motion props
const motion = m as any;

const Clients: React.FC = () => {
  const logos = [
    'TechFlow', 'NexaCloud', 'QuantumUI', 'ApexSaaS', 'StellarPay', 'VortexApp'
  ];

  return (
    <motion.section className="py-20 overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-6">
        <motion.p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-12">
          Trusted by Innovative Giants
        </motion.p>
        
        <motion.div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 md:gap-32 shrink-0 pr-16 md:pr-32"
          >
            {[...logos, ...logos].map((logo, i) => (
              <motion.div key={i} className="text-3xl md:text-4xl font-medium text-slate-200 hover:text-blue-500/30 transition-colors cursor-default select-none whitespace-nowrap">
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Clients;