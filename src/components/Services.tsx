
import React from 'react';
import { Car, Users, Building, Sparkles, Shield, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Wedding Valet',
      description: 'Make your special day perfect with our elegant valet service. Professional attendants in formal attire ensure your guests arrive in style.',
      features: ['Formal uniformed staff', 'Guest arrival coordination', 'Vehicle protection', 'Special event expertise'],
      price: 'Starting at $15/hour per attendant'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with seamless parking solutions for conferences, galas, and corporate functions.',
      features: ['Executive-level service', 'Branded uniforms available', 'Real-time reporting', 'VIP guest handling'],
      price: 'Starting at $18/hour per attendant'
    },
    {
      icon: Users,
      title: 'Private Parties',
      description: 'From intimate gatherings to large celebrations, we handle your parking needs so you can focus on your guests.',
      features: ['Flexible staffing', 'Discrete service', 'Property protection', 'Event coordination'],
      price: 'Starting at $12/hour per attendant'
    },
    {
      icon: Car,
      title: 'Luxury Events',
      description: 'Specialized handling of high-end vehicles with our premium service tier. Perfect for exclusive events and VIP gatherings.',
      features: ['Luxury vehicle expertise', 'White-glove service', 'Enhanced insurance', 'Concierge coordination'],
      price: 'Starting at $25/hour per attendant'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Fully Insured & Bonded',
      description: 'Complete protection for your event and guests\' vehicles with comprehensive insurance coverage.'
    },
    {
      icon: Clock,
      title: 'On-Time Guarantee',
      description: 'Our team arrives early and stays late. We guarantee punctual service for every event.'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Know exactly where your guests\' vehicles are with our advanced tracking system.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6">
            Premium Valet Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we provide professional valet services 
            that elevate every occasion with seamless parking solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-champagne-100 rounded-2xl flex items-center justify-center group-hover:bg-champagne-200 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-champagne-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-semibold text-navy-900 mb-2">
                      {service.title}
                    </h3>
                    <div className="text-champagne-600 font-semibold text-sm">
                      {service.price}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-champagne-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-full group-hover:bg-champagne-500 group-hover:text-navy-900 transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-4">
              Why Choose Event Parking Services?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond parking. We deliver peace of mind with every event.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-champagne-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-champagne-200 transition-colors duration-300">
                  <item.icon className="w-10 h-10 text-champagne-600" />
                </div>
                <h4 className="text-xl font-playfair font-semibold text-navy-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
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
