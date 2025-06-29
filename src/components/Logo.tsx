
import React from 'react';
import { Shield, Zap } from 'lucide-react';

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
    <div className={`flex items-center space-x-4 ${className} no-tap-highlight`}>
      {/* VIP Logo Badge */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Outer glow */}
        <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm"></div>
        
        {/* Main container */}
        <div className="absolute inset-0 glass-vip rounded-lg"></div>
        
        {/* Inner content */}
        <div className="absolute inset-1 bg-black/50 rounded-lg flex items-center justify-center border border-white/20">
          <div className="text-white font-orbitron font-bold text-lg">EPS</div>
        </div>
        
        {/* Status indicator */}
        <Shield className="w-3 h-3 text-white absolute -top-1 -right-1 bg-black rounded-full p-0.5 border border-white/30" />
      </div>

      {/* Company Text */}
      <div className="flex flex-col leading-tight">
        <div className={`font-orbitron font-bold ${textSizes[size]} text-white tracking-wider`}>
          Event Parking Services
        </div>
        <div className={`font-inter font-medium ${subtextSizes[size]} text-white/60 tracking-widest uppercase -mt-1`}>
          Executive Operations
        </div>
      </div>
    </div>
  );
};

export default Logo;
