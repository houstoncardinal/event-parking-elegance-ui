import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Car, Users, Calendar, Shield, MapPin, Clock, ArrowRight, Crown, Building, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuServices = [
    {
      title: "Event Types",
      items: [
        {
          icon: Heart,
          label: "Wedding Valet",
          description: "Elegant parking for your special day",
          href: "#wedding-valet"
        },
        {
          icon: Building,
          label: "Corporate Events",
          description: "Professional service for business functions",
          href: "#corporate-events"
        },
        {
          icon: Users,
          label: "Private Parties",
          description: "Exclusive valet for intimate gatherings",
          href: "#private-parties"
        },
        {
          icon: Crown,
          label: "Luxury Events",
          description: "Premium service for high-end occasions",
          href: "#luxury-events"
        }
      ]
    },
    {
      title: "Service Features",
      items: [
        {
          icon: Shield,
          label: "Insured Staff",
          description: "Fully licensed and insured attendants",
          href: "#insurance"
        },
        {
          icon: MapPin,
          label: "Real-Time Tracking",
          description: "Live updates on vehicle status",
          href: "#tracking"
        },
        {
          icon: Clock,
          label: "24/7 Service",
          description: "Round-the-clock availability",
          href: "#availability"
        },
        {
          icon: Sparkles,
          label: "White Glove",
          description: "Premium concierge-level service",
          href: "#premium"
        }
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-luxury border-b border-white/10 py-2' 
          : 'bg-white/90 backdrop-blur-xl py-4'
      }`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-gold-600 font-medium px-4 py-2 rounded-lg hover:bg-gold-50 transition-all duration-300">
                Home
              </a>
              
              {/* Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-slate-700 hover:text-gold-600 font-medium px-4 py-2 rounded-lg hover:bg-gold-50 transition-all duration-300 flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mega Menu Dropdown */}
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-luxury p-8 z-50">
                    <div className="grid grid-cols-2 gap-12">
                      {megaMenuServices.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-lg font-semibold text-slate-900 mb-6 font-playfair">
                            {section.title}
                          </h3>
                          <div className="space-y-4">
                            {section.items.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={item.href}
                                className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gold-50 transition-all duration-300 group"
                              >
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 text-gold-600 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                                  <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-gold-700 transition-colors duration-300">
                                    {item.label}
                                  </h4>
                                  <p className="text-xs text-slate-600 mt-1 group-hover:text-slate-700 transition-colors duration-300">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-600">
                          Need a custom solution? Let's discuss your requirements.
                        </p>
                        <Button className="btn-gold text-sm px-6 py-2">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#about" className="text-slate-700 hover:text-gold-600 font-medium px-4 py-2 rounded-lg hover:bg-gold-50 transition-all duration-300">
                About
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-gold-600 font-medium px-4 py-2 rounded-lg hover:bg-gold-50 transition-all duration-300">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-700 hover:text-gold-600 font-medium px-4 py-2 rounded-lg hover:bg-gold-50 transition-all duration-300">
                Contact
              </a>
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
            <div className="container mx-auto px-6 py-6 max-w-7xl">
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
