
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-playfair font-bold mb-4">
              Event Parking <span className="text-champagne-400">Services</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium valet and event parking services for weddings, corporate events, and private gatherings. 
              Professional, insured, and reliable since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-champagne-500 rounded-full flex items-center justify-center hover:bg-champagne-600 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-navy-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-champagne-500 rounded-full flex items-center justify-center hover:bg-champagne-600 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-navy-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-champagne-500 rounded-full flex items-center justify-center hover:bg-champagne-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-navy-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-champagne-400 transition-colors duration-300">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-champagne-400 transition-colors duration-300">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-champagne-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-champagne-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-champagne-400 transition-colors duration-300">Contact</a></li>
              <li><a href="/book" className="text-gray-300 hover:text-champagne-400 transition-colors duration-300">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-champagne-400" />
                <span className="text-gray-300">(555) 123-PARK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-champagne-400" />
                <span className="text-gray-300">info@eventparkingservices.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-champagne-400" />
                <span className="text-gray-300">Greater Metro Area</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-champagne-400" />
                <span className="text-gray-300">24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="text-xl font-playfair font-semibold mb-4 text-center">Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-300">
            <div>Downtown District</div>
            <div>Suburban Venues</div>
            <div>Country Clubs</div>
            <div>Hotels & Resorts</div>
            <div>Corporate Centers</div>
            <div>Event Halls</div>
            <div>Private Estates</div>
            <div>Outdoor Venues</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Event Parking Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-champagne-400 transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-champagne-400 transition-colors duration-300">Terms of Service</a>
            <a href="/insurance" className="text-gray-400 hover:text-champagne-400 transition-colors duration-300">Insurance Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
