
import React from 'react';
import { Star, Crown } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subtextSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Luxury Logo Badge */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full shadow-gold-glow blur-sm opacity-75"></div>
        
        {/* Main circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full shadow-luxury border border-gold-400/20"></div>
        
        {/* Inner circle with logo */}
        <div className="absolute inset-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-gold-500/30">
          <div className="text-gold-400 font-bold text-lg font-playfair">EPS</div>
        </div>
        
        {/* Premium crown indicator */}
        <Crown className="w-3 h-3 text-gold-400 fill-gold-400 absolute -top-1 -right-1 bg-slate-900 rounded-full p-0.5 border border-gold-400/30" />
      </div>

      {/* Company Text */}
      <div className="flex flex-col leading-tight">
        <div className={`font-playfair font-bold ${textSizes[size]} text-luxury tracking-wide`}>
          Event Parking Services
        </div>
        <div className={`font-inter font-medium ${subtextSizes[size]} text-gold tracking-widest uppercase -mt-1`}>
          Premium Services
        </div>
      </div>
    </div>
  );
};

export default Logo;
