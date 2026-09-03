
import React from 'react';
import { motion as m } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, Globe } from 'lucide-react';
import PremiumButton from '../components/PremiumButton.tsx';

const motion = m as any;

const Pricing: React.FC = () => {
  const plans = [
    { 
      name: 'Starter', 
      price: '$4,999', 
      icon: <Zap size={20} />,
      features: ['UI Design (5 Pages)', 'Basic Prototyping', '1 Revision Round', 'Email Support'],
      bgImage: "https://images.unsplash.com/photo-1634017831557-5829654c1d71?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Elite', 
      price: '$9,999', 
      icon: <Crown size={20} />,
      features: ['Full UI/UX Strategy', 'Up to 15 Pages', 'Unlimited Revisions', 'Priority Support', 'Next.js Integration'], 
      popular: true,
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Custom', 
      price: 'Contact', 
      icon: <Globe size={20} />,
      features: ['Enterprise Solutions', 'Full Product Design', 'Strategic Consulting', 'Dev Handoff', 'Branding Kit'],
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <motion.section id="pricing" className="py-40 px-6 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-50/30 dark:bg-blue-900/5 blur-[180px] -z-10 transition-colors duration-700" />

      <motion.div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Sparkles size={16} className="text-blue-600 animate-pulse" />
            <motion.span className="text-blue-600 font-medium uppercase tracking-[0.4em] text-[10px]">Investment Models</motion.span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[4rem] font-medium text-slate-900 dark:text-white tracking-tight leading-[1.1] transition-colors"
          >
            Value-Based <motion.br /> Investment<motion.span className="text-blue-600">.</motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-slate-400 dark:text-slate-500 font-medium text-lg max-w-2xl mx-auto tracking-tight leading-relaxed transition-colors"
          >
            Select a tier that aligns with your project's ambitions. We deliver elite digital craftsmanship with no compromise.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className={`group relative p-10 md:p-14 rounded-[22px] flex flex-col overflow-hidden transition-all duration-700 ${
                p.popular 
                ? 'shadow-[0_40px_100px_rgba(37,99,235,0.12)] border-blue-100 dark:border-blue-500/30 ring-1 ring-blue-500/20' 
                : 'border border-slate-100 dark:border-white/5 shadow-xl'
              } bg-slate-50/50 dark:bg-slate-900/50`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img 
                  src={p.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover scale-110 grayscale transition-all duration-1000 group-hover:scale-125 group-hover:grayscale-0 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08]" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-slate-900 via-white/95 dark:via-slate-900/95 to-white dark:to-slate-900 transition-colors duration-700" />
              </div>

              {p.popular && (
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-2.5 rounded-full font-medium text-[10px] uppercase tracking-widest shadow-2xl z-20"
                >
                  Most Popular choice
                </motion.div>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${p.popular ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white dark:bg-slate-800 text-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-950 border border-slate-100 dark:border-white/5'}`}>
                    {p.icon}
                  </div>
                  <motion.h3 className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">{p.name}</motion.h3>
                </div>

                <div className="mb-10">
                  <motion.div className="text-5xl md:text-6xl font-medium text-slate-900 dark:text-white tracking-tighter mb-2 transition-colors">{p.price}</motion.div>
                  {p.price !== 'Contact' && (
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Fixed Quote Delivery</span>
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-10 transition-colors" />

                <motion.ul className="space-y-6 mb-12 flex-grow">
                  {p.features.map(f => (
                    <motion.li key={f} className="flex items-start gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.popular ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-slate-800 text-slate-300 dark:text-slate-600 border border-slate-100 dark:border-white/5'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-auto">
                  <PremiumButton 
                    text={p.price === 'Contact' ? 'Start Negotiation' : 'Secure Plan'} 
                    className={`w-full justify-center !px-0 ${!p.popular ? '!bg-slate-950 dark:!bg-white dark:!text-slate-950 shadow-none' : '!bg-blue-600'}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center text-slate-400 dark:text-slate-500 font-medium text-sm transition-colors"
        >
          Need a localized quote? <motion.a href="#contact" className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Speak with a strategist</motion.a>
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Pricing;
