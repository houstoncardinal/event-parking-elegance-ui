import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl lg:text-2xl',
    lg: 'text-2xl lg:text-3xl'
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Simple Professional Icon */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <span className="text-white font-bold text-sm lg:text-base">C</span>
        </div>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col min-w-0">
        <span className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight ${sizeClasses[size]}`}>
          Cardinal Valet
        </span>
        {size !== 'sm' && (
          <span className="text-xs lg:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium leading-tight">
            Professional Event Parking
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
