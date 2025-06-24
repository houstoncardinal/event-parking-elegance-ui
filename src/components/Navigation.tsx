
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-playfair font-bold">
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-navy-900' : 'text-white'
                }`}>
                  Event Parking
                </span>
                <span className="text-champagne-500"> Services</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-champagne-500 ${
                    isScrolled ? 'text-navy-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className={`flex items-center space-x-2 text-sm ${
                isScrolled ? 'text-navy-600' : 'text-white/90'
              }`}>
                <Phone className="w-4 h-4" />
                <span>(555) 123-PARK</span>
              </div>
              <Button 
                className="bg-champagne-500 hover:bg-champagne-600 text-navy-900 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-navy-700 hover:bg-navy-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-navy-700 font-medium py-2 hover:text-champagne-500 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center space-x-2 text-navy-600 py-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-PARK</span>
                </div>
                <Button className="bg-champagne-500 hover:bg-champagne-600 text-navy-900 font-semibold rounded-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Quote Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button className="bg-champagne-500 hover:bg-champagne-600 text-navy-900 font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float">
          Request Quote
        </Button>
      </div>
    </>
  );
};

export default Navigation;
