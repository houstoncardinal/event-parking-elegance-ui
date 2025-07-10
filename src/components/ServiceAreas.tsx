
import React, { useState } from 'react';
import { MapPin, CheckCircle, Star, Navigation, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

const ServiceAreas = () => {
  const [activeCity, setActiveCity] = useState(0);

  const cities = [
    { name: 'Houston', distance: 'Service Headquarters', coverage: 'Full Service', events: '1,500+' },
    { name: 'Sugar Land', distance: '20 miles SW', coverage: 'Full Service', events: '150+' },
    { name: 'The Woodlands', distance: '30 miles N', coverage: 'Full Service', events: '120+' },
    { name: 'Katy', distance: '30 miles W', coverage: 'Full Service', events: '100+' },
    { name: 'Pearland', distance: '20 miles S', coverage: 'Full Service', events: '90+' },
    { name: 'Conroe', distance: '40 miles N', coverage: 'Premium Service', events: '60+' },
    { name: 'League City', distance: '25 miles SE', coverage: 'Premium Service', events: '45+' },
    { name: 'Cypress', distance: '25 miles NW', coverage: 'Full Service', events: '75+' }
  ];

  const neighborhoods = [
    'River Oaks', 'Memorial', 'Galleria', 'Downtown', 'Midtown', 'Heights',
    'West University', 'Bellaire', 'Montrose', 'Museum District'
  ];

  return (
    <section id="service-areas" className="py-24 bg-gradient-to-br from-slate-50 via-white to-gold-50/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-200/20 via-gold-300/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/15 via-slate-300/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span className="text-slate-700 font-medium text-sm">Proudly Serving Greater Houston</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Premium Valet Services</span>
            <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Across Houston & Beyond
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From downtown Houston's corporate towers to Sugar Land's luxury venues, 
            we deliver exceptional valet services throughout the greater Houston metropolitan area.
          </p>
        </AnimatedGroup>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map Area */}
          <div className="relative">
            {/* Map Container */}
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-lg border border-white/40 h-96">
              {/* Simplified Houston Map */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden">
                {/* Houston Center */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full shadow-lg cursor-pointer hover:scale-125 transition-all duration-300 z-20"
                  onClick={() => setActiveCity(0)}
                >
                  <div className="absolute inset-0 bg-gold-400 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Surrounding Cities */}
                {cities.slice(1).map((city, index) => {
                  const positions = [
                    { top: '25%', left: '25%' }, // Sugar Land
                    { top: '15%', left: '45%' }, // The Woodlands
                    { top: '45%', left: '15%' }, // Katy
                    { top: '65%', left: '55%' }, // Pearland
                    { top: '10%', left: '60%' }, // Conroe
                    { top: '75%', left: '70%' }, // League City
                    { top: '30%', left: '20%' }  // Cypress
                  ];

                  return (
                    <div
                      key={city.name}
                      className={`absolute w-3 h-3 rounded-full cursor-pointer hover:scale-125 transition-all duration-300 ${
                        activeCity === index + 1 
                          ? 'bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg scale-125' 
                          : 'bg-gradient-to-br from-slate-400 to-slate-500'
                      }`}
                      style={positions[index]}
                      onClick={() => setActiveCity(index + 1)}
                    >
                      {activeCity === index + 1 && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {city.name}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Service Area Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-slate-400/10 rounded-xl"></div>
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/40">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full"></div>
                  <span className="text-xs text-slate-700 font-medium">Houston HQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full"></div>
                  <span className="text-xs text-slate-700 font-medium">Service Areas</span>
                </div>
              </div>
            </div>

            {/* Houston Neighborhoods */}
            <div className="mt-8">
              <h4 className="text-lg font-playfair font-bold text-slate-900 mb-4">
                Houston Premium Neighborhoods
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={neighborhood} className="flex items-center gap-2 p-2 bg-white/60 rounded-lg border border-white/40">
                    <CheckCircle className="w-3 h-3 text-gold-600" />
                    <span className="text-sm text-slate-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* City Information */}
          <div className="space-y-6">
            <Card className="border border-white/60 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-1">
                      {cities[activeCity].name}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      {cities[activeCity].name === 'Houston' ? 'Metropolitan Area Hub' : `${cities[activeCity].distance} from Houston`}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gold-600">{cities[activeCity].events}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Events Served</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gold-50/50 rounded-lg">
                    <span className="text-sm text-slate-700 font-medium">Service Level</span>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      cities[activeCity].coverage === 'Full Service' 
                        ? 'bg-gold-100 text-gold-700' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {cities[activeCity].coverage}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gold-50/50 rounded-lg">
                    <span className="text-sm text-slate-700 font-medium">Response Time</span>
                    <span className="text-sm font-bold text-slate-800">15-30 minutes</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gold-50/50 rounded-lg">
                    <span className="text-sm text-slate-700 font-medium">Availability</span>
                    <span className="text-sm font-bold text-slate-800">24/7 Service</span>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    const bookingSection = document.getElementById('booking');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Get Quote for {cities[activeCity].name}
                </Button>
              </CardContent>
            </Card>

            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="w-4 h-4 text-gold-600" />
                  <span className="text-xs text-slate-600 font-medium uppercase tracking-wide">Coverage</span>
                </div>
                <div className="text-xl font-playfair font-bold text-slate-900">50+ Miles</div>
                <div className="text-xs text-slate-600">Service Radius</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-gold-600" />
                  <span className="text-xs text-slate-600 font-medium uppercase tracking-wide">Rating</span>
                </div>
                <div className="text-xl font-playfair font-bold text-gold-600">4.9/5</div>
                <div className="text-xs text-slate-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-gold-50 to-white border border-gold-200/60 rounded-xl p-6 shadow-sm">
              <h4 className="font-playfair font-bold text-slate-900 mb-2">
                Ready to Experience Excellence?
              </h4>
              <p className="text-sm text-slate-600 mb-4">
                Contact us today for a personalized quote and discover why we're Houston's premier valet service.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  const bookingSection = document.getElementById('booking');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full border-gold-300 hover:border-gold-400 text-slate-800"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
