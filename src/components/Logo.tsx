import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base lg:text-lg',
    lg: 'text-lg lg:text-xl'
  };

  const subtitleSizes = {
    sm: 'text-xs',
    md: 'text-xs lg:text-sm',
    lg: 'text-sm lg:text-base'
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* EPS Badge */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-primary/20 group-hover:scale-105">
            <span className="text-sm lg:text-base font-bold text-primary-foreground tracking-wide">EPS</span>
          </div>
        </div>
      </div>
      
      {/* Luxury Company Text */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-blue-700 group-hover:to-blue-800 transition-all duration-300 leading-tight ${sizeClasses[size]}`}>
            Event Parking Services
          </span>
          <div className="hidden sm:block w-px h-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <span className={`font-semibold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:via-yellow-400 group-hover:to-yellow-500 transition-all duration-300 leading-tight ${sizeClasses[size]} hidden sm:inline`}>
            By Cardinal
          </span>
        </div>
        
        {/* Mobile version - stacked */}
        <div className="sm:hidden">
          <span className={`font-semibold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:via-yellow-400 group-hover:to-yellow-500 transition-all duration-300 leading-tight ${subtitleSizes[size]}`}>
            By Cardinal
          </span>
        </div>
        
        {size !== 'sm' && (
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className={`text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium uppercase tracking-wider ${subtitleSizes[size]}`}>
              Houston's Premier Service
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
