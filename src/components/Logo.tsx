
import React from 'react';
import { ParkingCircle, Star } from 'lucide-react';

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
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Badge */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Outer ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg border-2 border-white"></div>
        
        {/* Inner circle */}
        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
          <div className="text-blue-600 font-bold text-lg">P</div>
        </div>
        
        {/* Premium star indicator */}
        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 absolute -top-1 -right-1 bg-white rounded-full p-0.5" />
      </div>

      {/* Company Text */}
      <div className="flex flex-col leading-tight">
        <div className={`font-poppins font-bold ${textSizes[size]} text-gray-800`}>
          EPS
        </div>
        <div className={`font-poppins font-medium ${subtextSizes[size]} text-blue-600 -mt-1`}>
          Premium Valet
        </div>
      </div>
    </div>
  );
};

export default Logo;
