import React from 'react';
import { motion as m } from 'framer-motion';
import { ArrowUpRight, LucideIcon, Loader2 } from 'lucide-react';

const motion = m as any;

interface PremiumButtonProps {
  text: string;
  onClick?: (e?: any) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: LucideIcon;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  disabled?: boolean;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  text, 
  onClick, 
  className = "", 
  variant = 'secondary',
  icon: Icon = ArrowUpRight,
  type = 'button',
  isLoading = false,
  disabled = false
}) => {
  const variants = {
    primary: 'premium-button-primary',
    secondary: 'premium-button-primary',
    outline: 'premium-button-secondary',
    white: 'premium-button-secondary'
  };

  const iconStyles = {
    primary: 'premium-button-icon-primary',
    secondary: 'premium-button-icon-primary',
    outline: 'premium-button-icon-secondary',
    white: 'premium-button-icon-secondary'
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || isLoading}
      whileHover={disabled || isLoading ? {} : { scale: 1.02 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.98 }}
      onClick={onClick}
      className={`premium-button group relative flex items-center rounded-full p-1.5 min-w-[240px] md:min-w-[260px] h-[58px] transition-all duration-500 ${variants[variant]} ${className} ${disabled || isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {/* The Kinetic Circle */}
      <motion.div 
        animate={isLoading ? { rotate: 360 } : {}}
        transition={isLoading ? { repeat: Infinity, duration: 1, ease: "linear" } : {}}
        className={`flex items-center justify-center w-[50px] h-[50px] rounded-full transition-all duration-500 ${!isLoading && 'group-hover:rotate-45'} shadow-sm shrink-0 ${iconStyles[variant]}`}
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" strokeWidth={3} /> : <Icon className="w-5 h-5" strokeWidth={3} />}
      </motion.div>

      {/* Centered Text */}
      <div className="flex-1 flex justify-center pr-6">
        <motion.span 
          className="font-extrabold text-[12px] md:text-[13px] tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 group-hover:translate-x-1"
        >
          {isLoading ? 'Processing...' : text}
        </motion.span>
      </div>
    </motion.button>
  );
};

export default PremiumButton;
