
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-tap-highlight ${
        isScrolled 
          ? 'glass-vip border-b border-white/10 py-2' 
          : 'glass-vip py-4'
      }`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-white/80 font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 no-tap-highlight">
                Home
              </a>
              
              {/* Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-white hover:text-white/80 font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-1 no-tap-highlight">
                  Services
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mega Menu Dropdown */}
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] glass-vip rounded-2xl shadow-2xl p-8 z-50 no-tap-highlight">
                    <div className="grid grid-cols-2 gap-12">
                      {megaMenuServices.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-lg font-semibold text-white mb-6 font-orbitron">
                            {section.title}
                          </h3>
                          <div className="space-y-4">
                            {section.items.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={item.href}
                                className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group no-tap-highlight"
                              >
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition-all duration-300">
                                  <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors duration-300">
                                    {item.label}
                                  </h4>
                                  <p className="text-xs text-white/60 mt-1 group-hover:text-white/70 transition-colors duration-300">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white/60">
                          Need a custom solution? Let's discuss your requirements.
                        </p>
                        <Button className="btn-vip text-sm px-6 py-2 no-tap-highlight">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#about" className="text-white hover:text-white/80 font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 no-tap-highlight">
                About
              </a>
              <a href="#testimonials" className="text-white hover:text-white/80 font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 no-tap-highlight">
                Testimonials
              </a>
              <a href="#contact" className="text-white hover:text-white/80 font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 no-tap-highlight">
                Contact
              </a>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-white/70 font-medium">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="tracking-wide">(555) 123-PARK</span>
              </div>
              <Button className="btn-vip group no-tap-highlight">
                Book Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 no-tap-highlight"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-vip border-t border-white/10 mt-2">
            <div className="container mx-auto px-6 py-6 max-w-7xl">
              <div className="flex flex-col space-y-6">
                {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-white font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105 no-tap-highlight"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex items-center space-x-3 text-white/70 py-3 px-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">(555) 123-PARK</span>
                </div>
                <Button className="btn-vip no-tap-highlight">
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
        <Button className="btn-vip animate-float group no-tap-highlight">
          Request Quote
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </>
  );
};

export default Navigation;
