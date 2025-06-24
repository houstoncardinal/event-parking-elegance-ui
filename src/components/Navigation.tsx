
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Car, Users, Calendar, Shield, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from '@/components/mega-menu';
import type { MegaMenuItem } from '@/components/mega-menu';

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

  const MEGA_MENU_ITEMS: MegaMenuItem[] = [
    {
      id: 1,
      label: "Services",
      subMenus: [
        {
          title: "Event Types",
          items: [
            {
              label: "Wedding Valet",
              description: "Elegant parking for your special day",
              icon: Car,
            },
            {
              label: "Corporate Events",
              description: "Professional service for business functions",
              icon: Users,
            },
            {
              label: "Private Parties",
              description: "Exclusive valet for intimate gatherings",
              icon: Calendar,
            },
          ],
        },
        {
          title: "Service Features",
          items: [
            {
              label: "Insured Staff",
              description: "Fully licensed and insured attendants",
              icon: Shield,
            },
            {
              label: "Real-Time Tracking",
              description: "Live updates on vehicle status",
              icon: MapPin,
            },
            {
              label: "On-Time Guarantee",
              description: "Punctual service you can count on",
              icon: Clock,
            },
          ],
        },
      ],
    },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Testimonials", link: "/testimonials" },
    { id: 4, label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-navy-900/80 backdrop-blur-lg'
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

            {/* Desktop MegaMenu Navigation */}
            <div className="hidden md:flex items-center">
              <MegaMenu 
                items={MEGA_MENU_ITEMS} 
                className={`${isScrolled ? 'text-navy-700' : 'text-white'}`}
              />
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
                <a
                  href="/"
                  className="text-navy-700 font-medium py-2 hover:text-champagne-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="text-navy-700 font-medium py-2 hover:text-champagne-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                <a
                  href="/about"
                  className="text-navy-700 font-medium py-2 hover:text-champagne-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="/testimonials"
                  className="text-navy-700 font-medium py-2 hover:text-champagne-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="/contact"
                  className="text-navy-700 font-medium py-2 hover:text-champagne-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
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
