import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Calendar, Star, Shield, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">READY TO BOOK?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote Today
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their most important events. 
            Professional valet service with zero hassle – guaranteed.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              window.location.href = 'tel:(832)555-CARDINAL';
            }}
          >
            <PhoneCall className="w-5 h-5 mr-3" />
            Call (832) 555-CARDINAL
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-bold px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              const bookingSection = document.getElementById('booking') || document.getElementById('book');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Calendar className="w-5 h-5 mr-3" />
            Schedule Consultation
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Fully Insured</h3>
            <p className="text-gray-600 text-sm text-center">$2M liability coverage on every event</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm text-center">Same-day booking and round-the-clock assistance</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">5-Star Service</h3>
            <p className="text-gray-600 text-sm text-center">Rated #1 valet service in Houston</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;