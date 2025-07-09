import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile-First Header with Better Structure */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      } border-b border-gray-200`}>
        
        {/* Top Contact Bar - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(832) 555-CARDINAL</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">info@cardinalvalet.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">24/7 Event Parking</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo - Fixed on Left */}
            <div className="flex-shrink-0 min-w-0 flex-1 lg:flex-initial">
              <Logo size="sm" className="lg:hidden max-w-full" />
              <Logo size="md" className="hidden lg:block" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/services"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActivePage('/services')
                    ? 'text-blue-600 bg-blue-50 rounded-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg'
                }`}
              >
                Services
                {isActivePage('/services') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>
              
              <Link
                to="/service-areas"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActivePage('/service-areas')
                    ? 'text-blue-600 bg-blue-50 rounded-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg'
                }`}
              >
                Service Areas
                {isActivePage('/service-areas') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>
              
              <Link
                to="/client-reviews"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActivePage('/client-reviews')
                    ? 'text-blue-600 bg-blue-50 rounded-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg'
                }`}
              >
                Reviews
                {isActivePage('/client-reviews') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>
              
              <Link
                to="/contact"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActivePage('/contact')
                    ? 'text-blue-600 bg-blue-50 rounded-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg'
                }`}
              >
                Contact
                {isActivePage('/contact') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/booking">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button - Right Side */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute inset-x-0 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isOpen ? 'top-3 rotate-45' : 'top-1'
                }`}></span>
                <span className={`absolute inset-x-0 top-3 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute inset-x-0 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isOpen ? 'top-3 -rotate-45' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="p-6 space-y-6">
            
            {/* Mobile Contact Info */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Contact Info</h3>
              <div className="space-y-3">
                <a href="tel:(832)555-CARDINAL" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors p-2 -m-2 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">(832) 555-CARDINAL</span>
                </a>
                <a href="mailto:info@cardinalvalet.com" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors p-2 -m-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">info@cardinalvalet.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-700 p-2 -m-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Houston & Surrounding Areas</span>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Menu</h3>
              <Link
                to="/services"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/services')
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                Services
              </Link>
              <Link
                to="/service-areas"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/service-areas')
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                Service Areas
              </Link>
              <Link
                to="/client-reviews"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/client-reviews')
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                Client Reviews
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/contact')
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link to="/booking" onClick={closeMenu}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200 shadow-md">
                  Get Your Quote
                </Button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 text-center">
              <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for Fixed Header */}
      <div className="h-16 lg:h-32"></div>
    </>
  );
};

export default Navigation;
