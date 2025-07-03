import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Cardinal Bird Icon */}
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Cardinal Bird Body */}
          <path
            d="M30 15C25 15 20 18 18 23C16 28 18 33 22 36C26 39 30 40 35 38C40 36 42 31 40 26C38 21 35 15 30 15Z"
            fill="#DC2626"
            stroke="#991B1B"
            strokeWidth="1"
          />
          {/* Cardinal Head */}
          <circle cx="25" cy="20" r="8" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
          {/* Cardinal Beak */}
          <path d="M17 20L13 18L13 22L17 20Z" fill="#F59E0B" />
          {/* Cardinal Eye */}
          <circle cx="23" cy="18" r="2" fill="#1F2937" />
          <circle cx="23" cy="18" r="0.5" fill="#FFFFFF" />
          {/* Cardinal Wing */}
          <path
            d="M28 25C32 23 35 26 33 30C31 34 28 35 24 33C20 31 18 28 20 24C22 20 25 19 28 25Z"
            fill="#B91C1C"
            stroke="#991B1B"
            strokeWidth="0.5"
          />
          {/* Cardinal Tail */}
          <path
            d="M38 35L45 32L45 38L38 35Z"
            fill="#DC2626"
            stroke="#991B1B"
            strokeWidth="0.5"
          />
          {/* Parking Symbol */}
          <rect x="15" y="40" width="30" height="15" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="1" />
          <text x="30" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">P</text>
        </svg>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight text-gray-900">
          Event Parking Services
        </span>
        <span className="text-sm text-gray-600 leading-tight">
          By Cardinal
        </span>
      </div>
    </div>
  );
};

export default Logo;
