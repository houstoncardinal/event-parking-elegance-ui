import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out bg-white border-b border-gray-200 ${isScrolled ? '' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Top Info Bar - Premium Contact Details */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-gray-200">
          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-black hover:text-black transition-colors duration-300">
              <Phone className="w-4 h-4 text-black" />
              <span className="font-inter font-medium tracking-wide text-black">(832) 555-CARDINAL</span>
            </div>
            <div className="flex items-center space-x-2 text-black hover:text-black transition-colors duration-300">
              <Mail className="w-4 h-4 text-black" />
              <span className="font-inter font-medium tracking-wide text-black">info@cardinalparking.com</span>
            </div>
            <div className="flex items-center space-x-2 text-black hover:text-black transition-colors duration-300">
              <Clock className="w-4 h-4 text-black" />
              <span className="font-inter font-medium tracking-wide text-black">24/7 Event Parking</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-black" />
            <span className="text-xs font-orbitron font-bold text-black tracking-widest uppercase">
              Insured & Licensed
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Logo size="md" className="text-black" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-black hover:text-black font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10 text-black">Services</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
              <button
                onClick={() => scrollToSection('service-areas')}
                className="text-black hover:text-black font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10 text-black">Service Areas</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-black hover:text-black font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10 text-black">Client Reviews</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
              <button
                onClick={() => scrollToSection('book')}
                className="text-black hover:text-black font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10 text-black">Book Now</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('book')}
                className="px-8 py-3 text-sm font-bold tracking-wider uppercase relative overflow-hidden group bg-white text-black border border-black hover:bg-gray-100"
              >
                <span className="relative z-10 flex items-center text-black">
                  Request Quote
                  <div className="ml-2 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-3 bg-white border border-gray-300 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40">
          <div className="bg-white h-full p-6 space-y-8 overflow-y-auto border-t border-gray-200">
            {/* Mobile Contact Info */}
            <div className="space-y-4 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3 text-black">
                <Phone className="w-5 h-5 text-black" />
                <span className="font-inter font-medium text-black">(832) 555-CARDINAL</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Mail className="w-5 h-5 text-black" />
                <span className="font-inter font-medium text-black">info@cardinalparking.com</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <MapPin className="w-5 h-5 text-black" />
                <span className="font-inter font-medium text-black">Houston & Surrounding Areas</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-6">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-xl font-orbitron font-bold text-black hover:text-gray-700 transition-colors duration-300 py-3 border-b border-gray-200"
              >
                <span className="text-black">Elite Services</span>
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="block w-full text-left text-xl font-orbitron font-bold text-black hover:text-gray-700 transition-colors duration-300 py-3 border-b border-gray-200"
              >
                <span className="text-black">Service Areas</span>
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-xl font-orbitron font-bold text-black hover:text-gray-700 transition-colors duration-300 py-3 border-b border-gray-200"
              >
                <span className="text-black">Client Reviews</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-xl font-orbitron font-bold text-black hover:text-gray-700 transition-colors duration-300 py-3 border-b border-gray-200"
              >
                <span className="text-black">Contact Elite Team</span>
              </button>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6">
              <Button
                onClick={() => scrollToSection('booking')}
                className="w-full py-4 text-lg font-bold tracking-wider uppercase bg-white text-black border border-black hover:bg-gray-100"
              >
                <span className="text-black">Request Elite Quote</span>
              </Button>
            </div>

            {/* Elite Badge */}
            <div className="pt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3">
                <Shield className="w-4 h-4 text-black" />
                <span className="text-xs font-orbitron font-bold text-black tracking-widest uppercase">
                  Premium Licensed Service
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
