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
  className = '',
  variant = 'primary',
  icon: Icon = ArrowUpRight,
  type = 'button',
  isLoading = false,
  disabled = false,
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      whileHover={isDisabled ? {} : { y: -2 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      className={`premium-button premium-button-${variant} ${className} ${isDisabled ? 'is-disabled' : ''}`}
    >
      <span>{isLoading ? 'Processing...' : text}</span>
      {isLoading ? <Loader2 className="premium-button-arrow premium-button-spinner" aria-hidden="true" /> : <Icon className="premium-button-arrow" aria-hidden="true" />}
    </motion.button>
  );
};

export default PremiumButton;
