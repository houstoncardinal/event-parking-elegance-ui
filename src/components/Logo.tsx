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
      {/* Luxury Cardinal Emblem */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-gray-200 group-hover:border-yellow-400/50 p-1">
            <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 32 32" fill="none">
              {/* Cardinal Body */}
              <ellipse cx="16" cy="18" rx="8" ry="6" fill="url(#cardinalBody)" />
              
              {/* Cardinal Head */}
              <circle cx="13" cy="12" r="5" fill="url(#cardinalHead)" />
              
              {/* Cardinal Crest */}
              <path d="M11 8L12 5L14 8L13 9L11 8Z" fill="#B91C1C" />
              <path d="M13 7L14 4L16 7L15 8L13 7Z" fill="#DC2626" />
              
              {/* Cardinal Beak */}
              <path d="M8 12L5 11L5 13L8 12Z" fill="#F59E0B" />
              
              {/* Cardinal Eye */}
              <circle cx="11" cy="10" r="1.5" fill="#000000" />
              <circle cx="11" cy="10" r="0.5" fill="#FFFFFF" />
              
              {/* Cardinal Wing */}              
              <path d="M16 15C19 14 21 16 20 19C19 22 16 22 13 21C12 20 12 18 13 16C14 14 15 14 16 15Z" fill="#991B1B" />
              
              {/* Cardinal Tail */}
              <path d="M22 20L28 18L28 22L22 20Z" fill="url(#cardinalTail)" />
              <path d="M21 21L26 19L26 23L21 21Z" fill="#B91C1C" />
              
              {/* Luxury Ring */}
              <circle cx="16" cy="16" r="15" fill="none" stroke="url(#luxuryRing)" strokeWidth="1" opacity="0.6" />
              
              <defs>
                <radialGradient id="cardinalBody" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FCA5A5" />
                  <stop offset="30%" stopColor="#EF4444" />
                  <stop offset="70%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#B91C1C" />
                </radialGradient>
                
                <radialGradient id="cardinalHead" cx="40%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#F87171" />
                  <stop offset="50%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#DC2626" />
                </radialGradient>
                
                <linearGradient id="cardinalTail" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#B91C1C" />
                </linearGradient>
                
                <linearGradient id="luxuryRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="25%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#DC2626" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FCD34D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Luxury Badge */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <span className="text-[8px] lg:text-[10px] font-bold text-white">V</span>
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
