
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled ? 'nav-vip' : 'bg-black/80 backdrop-blur-xl'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Info Bar - Premium Contact Details */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-white/8">
          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="font-inter font-medium tracking-wide">(555) 123-VALET</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span className="font-inter font-medium tracking-wide">elite@eventparking.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
              <Clock className="w-4 h-4" />
              <span className="font-inter font-medium tracking-wide">24/7 Elite Service</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-white/60" />
            <span className="text-xs font-orbitron font-bold text-white/60 tracking-widest uppercase">
              Insured & Licensed
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Logo size="md" className="text-white" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/80 hover:text-white font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10">Elite Services</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="text-white/80 hover:text-white font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10">Service Areas</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white/80 hover:text-white font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10">Client Reviews</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white font-inter font-medium tracking-wide transition-all duration-300 relative group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('booking')}
                className="btn-vip px-8 py-3 text-sm font-bold tracking-wider uppercase relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Request Quote
                  <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden glass-vip p-3 hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40">
          <div className="glass-vip h-full p-6 space-y-8 overflow-y-auto">
            {/* Mobile Contact Info */}
            <div className="space-y-4 pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span className="font-inter font-medium">(555) 123-VALET</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5" />
                <span className="font-inter font-medium">elite@eventparking.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span className="font-inter font-medium">Nationwide Coverage</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-6">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-xl font-orbitron font-bold text-white hover:text-white/80 transition-colors duration-300 py-3 border-b border-white/5"
              >
                Elite Services
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="block w-full text-left text-xl font-orbitron font-bold text-white hover:text-white/80 transition-colors duration-300 py-3 border-b border-white/5"
              >
                Service Areas
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-xl font-orbitron font-bold text-white hover:text-white/80 transition-colors duration-300 py-3 border-b border-white/5"
              >
                Client Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-xl font-orbitron font-bold text-white hover:text-white/80 transition-colors duration-300 py-3 border-b border-white/5"
              >
                Contact Elite Team
              </button>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6">
              <Button
                onClick={() => scrollToSection('booking')}
                className="btn-vip w-full py-4 text-lg font-bold tracking-wider uppercase"
              >
                Request Elite Quote
              </Button>
            </div>

            {/* Elite Badge */}
            <div className="pt-6 text-center">
              <div className="inline-flex items-center space-x-2 glass-vip rounded-full px-6 py-3">
                <Shield className="w-4 h-4 text-white/60" />
                <span className="text-xs font-orbitron font-bold text-white/60 tracking-widest uppercase">
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
