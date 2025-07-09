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
      {/* Luxury Crown Icon */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-yellow-400/50">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 14v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4l-2 2-3-3-4 4-4-4-3 3zm8-10l2.5-1.5L17 3l1.5 1.5L21 3v4l-2.5 1.5L17 7l-1.5 1.5L12 6l-1.5 2.5L9 7l-1.5 1.5L5 7V3l2.5 1.5L9 3l1.5 1.5L12 6z"/>
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white hidden lg:block"></div>
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
