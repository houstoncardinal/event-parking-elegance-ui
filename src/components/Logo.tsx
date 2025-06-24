
import React from 'react';
import { Car, Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-lg"></div>
        
        {/* Car icon */}
        <div className="relative z-10 flex items-center justify-center">
          <Car className={`${iconSizes[size]} text-white`} />
          {/* Small shield overlay for premium/security aspect */}
          <Shield className="w-3 h-3 text-champagne-400 absolute -top-1 -right-1" />
        </div>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl"></div>
      </div>

      {/* Company Text */}
      <div className="flex flex-col leading-tight">
        <div className={`font-poppins font-bold ${textSizes[size]}`}>
          <span className="text-black">Event Parking</span>
        </div>
        <div className={`font-poppins font-semibold ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'}`}>
          <span className="text-blue-600">Services</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
