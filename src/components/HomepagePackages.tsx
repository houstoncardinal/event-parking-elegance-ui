import React from 'react';
import { Star, Crown, CheckCircle, Calendar, Phone, ArrowRight, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { useNavigate } from 'react-router-dom';

const HomepagePackages = () => {
  const navigate = useNavigate();
  
  const handleBookPackage = (packageType: 'standard' | 'premium') => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      // Add a slight delay to ensure smooth scrolling
      setTimeout(() => {
        bookingSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Optional: Focus on the form to make it more obvious
        const firstInput = bookingSection.querySelector('input, select');
        if (firstInput instanceof HTMLElement) {
          setTimeout(() => firstInput.focus(), 500);
        }
      }, 100);
    }
  };

  const handleRequestQuote = () => {
    handleBookPackage('standard');
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gold-50/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-gold-200/15 via-gold-300/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/10 via-slate-300/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Crown className="w-4 h-4 text-gold-600" />
            <span className="text-slate-700 font-medium text-sm">Choose Your Package</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Perfect Event Packages</span>
            <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              For Every Occasion
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From essential valet service to premium luxury experience, choose the perfect package 
            that matches your event's style and budget.
          </p>
        </AnimatedGroup>

        {/* Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Standard Package */}
          <Card className="group bg-white/90 backdrop-blur-sm border-2 border-white/60 hover:border-gold-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-slate-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-2">
                Standard Package
              </h3>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                Most Popular
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                Complete valet service with all essential equipment and professional uniformed staff.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-playfair font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">
                  Package Includes
                </h4>
                <div className="space-y-2">
                  {[
                    'Uniformed Valet Drivers',
                    'Complete Valet Station Setup',
                    'Professional Signage & Safety Cones',
                    'All Operational Supplies'
                  ].map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <Button 
                  onClick={() => handleBookPackage('standard')}
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Standard Package
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleViewAllServices}
                  className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Premium Package */}
          <Card className="group bg-white/90 backdrop-blur-sm border-2 border-gold-300 ring-2 ring-gold-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                PREMIUM CHOICE
              </span>
            </div>

            <CardHeader className="text-center pb-6 pt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-200 to-gold-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Crown className="w-8 h-8 text-gold-700" />
                </div>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-2">
                Premium Package
              </h3>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold-100 text-gold-800 mb-4">
                Luxury Experience
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                Elevated valet experience with premium amenities, red carpet service, and custom options.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-playfair font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">
                  Premium Features
                </h4>
                <div className="space-y-2">
                  {[
                    'Black & White Dress Code Staff',
                    'Red Carpet Service',
                    'Ticketless Phone System',
                    'Custom Signage & Premium Setup'
                  ].map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-gold-600" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <Button 
                  onClick={() => handleBookPackage('premium')}
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Book Premium Package
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleViewAllServices}
                  className="w-full border-2 border-gold-300 text-gold-700 hover:bg-gold-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Get an instant quote, schedule a free consultation, or speak directly with our valet professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              onClick={() => handleBookPackage('standard')}
              className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Instant Quote
            </Button>
            <Button 
              variant="outline"
              onClick={handleViewAllServices}
              className="border-2 border-gold-300 text-gold-700 hover:bg-gold-50 font-semibold py-4 px-6 rounded-lg transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              View All Services
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'tel:(346)764-9163'}
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-4 px-6 rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (346) 764-9163
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-gold-600" />
              <span className="text-sm">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Star className="w-5 h-5 text-gold-600" />
              <span className="text-sm">1,500+ Events Served</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Crown className="w-5 h-5 text-gold-600" />
              <span className="text-sm">Professional Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepagePackages;