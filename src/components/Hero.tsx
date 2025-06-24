
import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 luxury-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-800/60"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-champagne-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-champagne-400" />
            <span className="text-white text-sm font-medium">Premium Valet Services Since 2010</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 animate-fade-in text-shadow">
            Luxury Valet Services
            <span className="block text-champagne-400">For Every Occasion</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            Professional, insured valet attendants providing seamless parking solutions for weddings, corporate events, and private gatherings. Experience the difference of true hospitality.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-scale-in">
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5 text-champagne-400" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Clock className="w-5 h-5 text-champagne-400" />
              <span className="text-sm font-medium">On-Time Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Star className="w-5 h-5 text-champagne-400" />
              <span className="text-sm font-medium">500+ Events Served</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-champagne-500 hover:bg-champagne-600 text-navy-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book Valet Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-champagne-400 mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Events Served</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-champagne-400 mb-2">50K+</div>
              <div className="text-white/80 text-sm md:text-base">Vehicles Parked</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-champagne-400 mb-2">99%</div>
              <div className="text-white/80 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
