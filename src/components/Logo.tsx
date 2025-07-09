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
      {/* Professional Valet Emblem */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-700/50 group-hover:border-yellow-500/30">
            <svg className="w-6 h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none">
              {/* Luxury Shield Background */}
              <path d="M12 2L3 7V12C3 16.97 6.84 21.74 12 22C17.16 21.74 21 16.97 21 12V7L12 2Z" 
                    fill="url(#shieldGradient)" stroke="url(#borderGradient)" strokeWidth="0.5"/>
              
              {/* Cardinal Silhouette */}
              <path d="M12 6C10.5 6 9.2 6.8 8.5 8C8.2 8.5 8.5 9.2 9 9.5C9.2 9.6 9.4 9.7 9.6 9.8C10.3 10.1 11 10.5 11.5 11C11.8 11.3 12.2 11.3 12.5 11C13 10.5 13.7 10.1 14.4 9.8C14.6 9.7 14.8 9.6 15 9.5C15.5 9.2 15.8 8.5 15.5 8C14.8 6.8 13.5 6 12 6Z" 
                    fill="#EF4444"/>
              
              {/* Parking Keys Crossed */}
              <g transform="translate(12,14)">
                <path d="M-3,-1 L3,-1 M3,-1 L3,1 M3,1 L2,1 M-3,-1 L-3,1 M-3,1 L-2,1" 
                      stroke="#FCD34D" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M-1,-3 L1,3 M1,-3 L-1,3" 
                      stroke="#FCD34D" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="0" cy="0" r="1.5" fill="none" stroke="#FCD34D" strokeWidth="1"/>
              </g>
              
              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1F2937" />
                  <stop offset="50%" stopColor="#111827" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#EF4444" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Premium Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
            <span className="text-[8px] lg:text-[10px] font-bold text-white">P</span>
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
