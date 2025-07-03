import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto lg:h-12 lg:w-auto',
    lg: 'h-14 w-auto lg:h-16 lg:w-auto'
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-1 md:gap-3 group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Enhanced Cardinal Bird Icon */}
      <div className={`relative ${sizeClasses[size]} group-hover:drop-shadow-lg transition-all duration-300`}>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle with Gradient */}
          <defs>
            <radialGradient id="cardinalGradient" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Premium Background Circle */}
          <circle cx="40" cy="40" r="35" fill="url(#cardinalGradient)" filter="url(#shadow)" opacity="0.9" />
          <circle cx="40" cy="40" r="35" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
          
          {/* Cardinal Bird Body - Enhanced */}
          <path
            d="M40 20C34 20 28 24 26 30C24 36 26 42 31 46C36 50 40 51 46 49C52 47 54 41 52 35C50 29 46 20 40 20Z"
            fill="url(#redGradient)"
            stroke="#7F1D1D"
            strokeWidth="1.5"
            filter="url(#shadow)"
          />
          
          {/* Cardinal Head - Enhanced */}
          <circle cx="34" cy="26" r="10" fill="url(#redGradient)" stroke="#7F1D1D" strokeWidth="1.5" filter="url(#shadow)" />
          
          {/* Cardinal Crest */}
          <path d="M30 18L32 14L34 18L32 20Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1" />
          <path d="M34 16L36 12L38 16L36 18Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1" />
          
          {/* Cardinal Beak - Enhanced */}
          <path d="M24 26L18 23L18 29L24 26Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
          
          {/* Cardinal Eye - Enhanced */}
          <circle cx="31" cy="23" r="2.5" fill="#1F2937" />
          <circle cx="31" cy="23" r="1" fill="#FFFFFF" />
          <circle cx="31.5" cy="22.5" r="0.3" fill="#FFFFFF" />
          
          {/* Cardinal Wing - Enhanced */}
          <path
            d="M36 32C41 30 45 34 43 39C41 44 36 45 31 43C26 41 24 37 26 32C28 27 32 26 36 32Z"
            fill="#B91C1C"
            stroke="#7F1D1D"
            strokeWidth="1"
          />
          
          {/* Cardinal Tail Feathers - Enhanced */}
          <path
            d="M48 44L58 40L58 48L48 44Z"
            fill="url(#redGradient)"
            stroke="#7F1D1D"
            strokeWidth="1"
          />
          <path
            d="M45 46L55 43L55 49L45 46Z"
            fill="#B91C1C"
            stroke="#7F1D1D"
            strokeWidth="0.5"
          />
          
          {/* Premium Parking Symbol */}
          <rect x="25" y="55" width="30" height="16" rx="3" fill="#1F2937" stroke="#374151" strokeWidth="1.5" filter="url(#shadow)" />
          <rect x="26" y="56" width="28" height="14" rx="2" fill="#111827" />
          <text x="40" y="66" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold" fontFamily="Arial">P</text>
          
          {/* Decorative Stars */}
          <circle cx="15" cy="15" r="1" fill="#F59E0B" opacity="0.7" />
          <circle cx="65" cy="20" r="1.5" fill="#F59E0B" opacity="0.5" />
          <circle cx="20" cy="65" r="1" fill="#F59E0B" opacity="0.6" />
        </svg>
      </div>
      
      {/* Enhanced Company Name */}
      <div className="flex flex-col">
        <span className="font-bold text-sm md:text-lg lg:text-xl leading-tight text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
          Cardinal Valet
        </span>
        <span className="text-xs md:text-sm text-gray-600 leading-tight group-hover:text-gray-500 transition-colors duration-300 font-medium hidden sm:block">
          Premium Event Parking
        </span>
        <div className="flex items-center gap-1 mt-0.5 hidden md:flex">
          <div className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wider">
            Houston's Elite
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
