import React from 'react';
import { Car, Shield, Clock, Star, Crown, Users, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Wedding Valet Services',
      description: 'Make your special day perfect with our elegant valet service that ensures your guests arrive and depart in style.',
      features: ['Professional uniformed attendants', 'Luxury vehicle handling', 'Coordination with wedding planners', 'Photo-friendly service'],
      pricing: 'Starting at $299'
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Elevate your business events with seamless parking solutions that impress clients and employees alike.',
      features: ['Branded service options', 'Executive vehicle care', 'Flexible scheduling', 'Professional presentation'],
      pricing: 'Starting at $249'
    },
    {
      icon: Star,
      title: 'Private Parties',
      description: 'Transform your private gathering with premium valet service that lets you focus on entertaining your guests.',
      features: ['Discreet professional service', 'Flexible duration options', 'Special event coordination', 'Guest satisfaction guarantee'],
      pricing: 'Starting at $199'
    },
    {
      icon: Shield,
      title: 'Premium Protection',
      description: 'Complete peace of mind with comprehensive insurance coverage and bonded, background-checked attendants.',
      features: ['$2M liability coverage', 'Bonded attendants', 'Vehicle damage protection', 'Theft protection'],
      pricing: 'Included'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service availability for events at any time'
    },
    {
      icon: Car,
      title: 'All Vehicle Types',
      description: 'Expert handling of luxury cars, SUVs, and specialty vehicles'
    },
    {
      icon: MapPin,
      title: 'Greater Houston',
      description: 'Comprehensive coverage across the Houston metropolitan area'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee or your money back'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-slate-50 to-gold-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-200/20 via-gold-300/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/15 via-slate-300/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Star className="w-4 h-4 text-gold-600" />
            <span className="text-slate-700 font-medium text-sm">Our Premium Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Exceptional Valet Services</span>
            <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Tailored to Every Occasion
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, our professional valet services 
            ensure your events run smoothly while your guests enjoy VIP treatment.
          </p>
        </AnimatedGroup>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="group bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-slate-900 mb-1">
                      {service.title}
                    </h3>
                    <div className="text-gold-600 font-semibold text-sm">
                      {service.pricing}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-gold-600" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-3">
              Why Choose Cardinal Valet Services?
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-slate-600" />
                </div>
                <h4 className="font-playfair font-bold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;