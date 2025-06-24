
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Car, Users, Calendar, Shield, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from '@/components/mega-menu';
import Logo from '@/components/Logo';
import type { MegaMenuItem } from '@/components/mega-menu';

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-luxury border-b border-white/10 py-2' 
          : 'bg-white/90 backdrop-blur-xl py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Logo size="md" />
            </div>

            {/* Desktop MegaMenu Navigation */}
            <div className="hidden lg:flex items-center">
              <MegaMenu 
                items={MEGA_MENU_ITEMS} 
                className="text-slate-700 font-medium"
              />
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-100 text-gold-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="tracking-wide">(555) 123-PARK</span>
              </div>
              <Button className="btn-luxury group">
                Book Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-luxury border-t border-white/10 mt-2">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-6">
                {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-700 font-medium py-3 px-4 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex items-center space-x-3 text-slate-600 py-3 px-4 rounded-xl bg-slate-50">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-100 text-gold-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">(555) 123-PARK</span>
                </div>
                <Button className="btn-luxury">
                  Book Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Quote Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button className="btn-gold shadow-gold-glow animate-luxury-float group">
          Request Quote
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </>
  );
};

export default Navigation;
