import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Star, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(245,158,11,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(203,213,225,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Brand - Takes up more space */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="text-4xl font-playfair font-bold mb-4 text-white">
                Event Parking Services <span className="text-gold-400">By Cardinal</span>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-6"></div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-8">
                Houston's premier valet and event parking services. Delivering exceptional experiences 
                for weddings, corporate events, and private gatherings with the Cardinal touch.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                  <div className="text-2xl font-playfair font-bold text-gold-400 mb-1">1,500+</div>
                  <div className="text-sm text-slate-400">Events Served</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-2xl font-playfair font-bold text-gold-400">4.9</span>
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                  </div>
                  <div className="text-sm text-slate-400">Client Rating</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center hover:from-gold-500 hover:to-gold-600 transition-all duration-300 group-hover:scale-110 border border-slate-600/30">
                    <Facebook className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                </button>
                <button 
                  onClick={() => document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center hover:from-gold-500 hover:to-gold-600 transition-all duration-300 group-hover:scale-110 border border-slate-600/30">
                    <Instagram className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                </button>
                <button 
                  onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center hover:from-gold-500 hover:to-gold-600 transition-all duration-300 group-hover:scale-110 border border-slate-600/30">
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Services', action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: 'Service Areas', action: () => document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: 'Testimonials', action: () => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: 'Book Now', action: () => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }) }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action}
                    className="text-slate-300 hover:text-gold-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {[
                'Wedding Valet',
                'Corporate Events',
                'Private Parties',
                'Hotel Services',
                'Estate Events'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-300 text-sm font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-white">Contact Information</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/20 flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Phone</div>
                  <div className="text-slate-300 text-sm">(832) 555-CARDINAL</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/20 flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <div className="text-slate-300 text-sm">info@cardinalparking.com</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/20 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Service Area</div>
                  <div className="text-slate-300 text-sm">Greater Houston Metro</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center border border-gold-400/20 flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Availability</div>
                  <div className="text-slate-300 text-sm">24/7 Event Support</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Grid */}
        <div className="border-t border-slate-700/50 mt-16 pt-12">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-playfair font-semibold text-white mb-3">
              Serving Greater Houston
            </h4>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              'Downtown', 'The Woodlands', 'Sugar Land', 'Katy',
              'Pearland', 'Conroe', 'Cypress', 'Spring',
              'Tomball', 'Kingwood', 'Clear Lake', 'Friendswood',
              'Missouri City', 'Stafford', 'River Oaks', 'Memorial'
            ].map((area) => (
              <div key={area} className="group">
                <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-gold-400/30 hover:bg-slate-800/50 transition-all duration-300">
                  <span className="text-slate-300 group-hover:text-gold-400 text-sm font-medium transition-colors duration-300">
                    {area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-slate-400 text-sm">
                © 2024 Event Parking Services By Cardinal. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-slate-400 text-sm">Licensed & Insured</span>
              </div>
            </div>
            <div className="flex space-x-8 text-sm">
              <button 
                onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-400 hover:text-gold-400 transition-colors duration-300 font-medium"
              >
                Contact Us
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-400 hover:text-gold-400 transition-colors duration-300 font-medium"
              >
                Our Services
              </button>
              <button 
                onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-400 hover:text-gold-400 transition-colors duration-300 font-medium"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
