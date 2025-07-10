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
                <a href="tel:(832)555-CARDINAL" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(832) 555-CARDINAL</span>
                </a>
                <a href="mailto:info@eventsparkingservices.com" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">info@eventsparkingservices.com</span>
                </a>
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
            
            {/* Logo - Properly Aligned */}
            <div className="flex items-center">
              <Logo size="sm" className="lg:hidden" />
              <Logo size="md" className="hidden lg:block" />
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/services"
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActivePage('/services')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                Services
              </Link>
              
              <Link
                to="/service-areas"
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActivePage('/service-areas')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                Service Areas
              </Link>
              
              <Link
                to="/client-reviews"
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActivePage('/client-reviews')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                Reviews
              </Link>
              
              <Link
                to="/contact"
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActivePage('/contact')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                Contact
              </Link>
              
              <Link
                to="/faq"
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActivePage('/faq')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                FAQ
              </Link>
              
              <Link
                to="/file-claim"
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActivePage('/file-claim')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                File Claim
              </Link>
            </nav>

            {/* Desktop CTA Button - Luxury Design */}
            <div className="hidden lg:flex items-center">
              <Button 
                onClick={() => {
                  const bookingSection = document.getElementById('booking') || document.getElementById('book');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-gray-900 px-8 py-3 text-sm font-bold rounded-xl shadow-[0_8px_30px_rgb(234,179,8,0.4)] hover:shadow-[0_12px_40px_rgb(234,179,8,0.6)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 border border-yellow-300/50 hover:border-yellow-200 group"
              >
                <span className="relative z-10 tracking-wide">Get Premium Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
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
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-xl border-t border-border transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="p-6 space-y-6">
            
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Menu</h3>
              <Link
                to="/services"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/services')
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link
                to="/service-areas"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/service-areas')
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                Service Areas
              </Link>
              <Link
                to="/client-reviews"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/client-reviews')
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                Client Reviews
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/contact')
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/faq')
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/file-claim"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  isActivePage('/file-claim')
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                File Claim
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Button 
                onClick={() => {
                  const bookingSection = document.getElementById('booking') || document.getElementById('book');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  closeMenu();
                }}
                className="w-full bg-gradient-to-r from-primary via-primary to-primary hover:from-primary/90 hover:via-primary/90 hover:to-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-lg transition-all duration-200 shadow-md"
              >
                Get Your Quote
              </Button>
            </div>

            {/* Mobile Contact Info */}
            <div className="space-y-3 pt-6 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Contact Info</h3>
              <div className="space-y-3">
                <a href="tel:(832)555-CARDINAL" className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors p-2 -m-2 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium">(832) 555-CARDINAL</span>
                </a>
                <a href="mailto:info@eventsparkingservices.com" className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors p-2 -m-2 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">info@eventsparkingservices.com</span>
                </a>
                <div className="flex items-center space-x-3 text-foreground/80 p-2 -m-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">Houston & Surrounding Areas</span>
                </div>
              </div>
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
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;
