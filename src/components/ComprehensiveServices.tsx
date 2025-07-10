import React from 'react';
import { 
  Car, Shield, Clock, Star, Crown, Users, MapPin, CheckCircle, 
  Building, Heart, GraduationCap, PartyPopper, Ribbon, Church,
  HandHeart, Calendar, Briefcase, Wine, UserCheck, ShieldCheck,
  Truck, Bus, Navigation
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { useNavigate } from 'react-router-dom';

const ComprehensiveServices = () => {
  const navigate = useNavigate();
  
  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onDemandServices = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Make your special day perfect with elegant valet service for you and your guests.',
      highlights: ['Most Popular', 'Premium Service']
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional valet service that impresses clients and elevates business events.',
      highlights: ['Executive Grade', 'Trusted by Fortune 500']
    },
    {
      icon: PartyPopper,
      title: 'Holiday Parties',
      description: 'Festive valet service that adds convenience and luxury to your celebrations.',
      highlights: ['Seasonal Specialist', 'Full Service']
    },
    {
      icon: GraduationCap,
      title: 'Graduation & Birthday Parties',
      description: 'Celebrate life\'s milestones with premium valet service for memorable occasions.',
      highlights: ['Milestone Events', 'Family Friendly']
    },
    {
      icon: Ribbon,
      title: 'Grand Openings',
      description: 'Make a great first impression with professional valet service for your business launch.',
      highlights: ['Business Launch', 'Professional Image']
    },
    {
      icon: HandHeart,
      title: 'Non-Profit Organizations',
      description: 'Special pricing and dedicated service for charitable events and fundraisers.',
      highlights: ['Special Pricing', 'Community Support']
    },
    {
      icon: Church,
      title: 'Religious Holidays',
      description: 'Respectful and professional valet service for religious celebrations and gatherings.',
      highlights: ['Respectful Service', 'Community Focused']
    }
  ];

  const contractServices = [
    {
      icon: Building,
      title: 'Event Venues',
      description: 'Exclusive vendor partnerships with special pricing for regular venue clients.',
      features: ['Custom Pricing', 'Priority Scheduling', 'Dedicated Account Manager']
    },
    {
      icon: Crown,
      title: 'Wedding Halls',
      description: 'Specialized wedding venue partnerships with premium service packages.',
      features: ['Wedding Specialists', 'Package Deals', 'Preferred Vendor Status']
    },
    {
      icon: Users,
      title: 'Banquet Facilities',
      description: 'Comprehensive valet solutions for banquet halls and reception centers.',
      features: ['Volume Discounts', 'Flexible Scheduling', 'Professional Staff']
    }
  ];

  const additionalServices = [
    {
      icon: Navigation,
      title: 'Traffic Control Management',
      description: 'Professional traffic flow management and parking coordination.'
    },
    {
      icon: UserCheck,
      title: 'Host / Hostess Services',
      description: 'Professional greeting and guest assistance services.'
    },
    {
      icon: Users,
      title: 'Event Staff',
      description: 'Trained event staff for various hospitality needs.'
    },
    {
      icon: Wine,
      title: 'Bartenders',
      description: 'Licensed and experienced bartending services.'
    },
    {
      icon: CheckCircle,
      title: 'Servers (Wait Staff)',
      description: 'Professional wait staff for dining and catering events.'
    },
    {
      icon: ShieldCheck,
      title: 'Security Services',
      description: 'Licensed security personnel for event safety.'
    },
    {
      icon: Car,
      title: 'Transportation Services',
      description: 'Limousine, party bus, and chauffeur services.'
    },
    {
      icon: Bus,
      title: 'Golf Cart & Shuttle Services',
      description: 'Convenient guest transportation within event venues.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gold-50/30 relative overflow-hidden">
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
            <span className="text-slate-700 font-medium text-sm">Complete Service Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Comprehensive Event</span>
            <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              & Hospitality Services
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From premium valet services to complete event staffing solutions, we provide 
            everything you need to make your event exceptional and memorable.
          </p>
        </AnimatedGroup>

        {/* On Demand Valet Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-4">
              On Demand Valet Services
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional valet services for residential and business events of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {onDemandServices.map((service, index) => (
              <Card key={service.title} className="group bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gold-600" />
                  </div>
                  <h4 className="text-lg font-playfair font-bold text-slate-900 mb-2">
                    {service.title}
                  </h4>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {service.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs font-medium text-gold-600 bg-gold-50 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contract Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-4">
              Contract Services
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Exclusive vendor partnerships with special pricing for venues and recurring clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contractServices.map((service, index) => (
              <Card key={service.title} className="group bg-white/90 backdrop-blur-sm border-2 border-gold-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-200 to-gold-300 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-gold-700" />
                  </div>
                  <h4 className="text-xl font-playfair font-bold text-slate-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-gold-600" />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleRequestQuote}
                    className="w-full mt-6 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contract Services Note */}
          <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 text-center">
            <h4 className="font-playfair font-bold text-slate-900 mb-2">
              Contract Services Pricing
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Contract services for on-demand service prices vary based on location and number of events per calendar year. 
              Contact us to schedule your free survey or speak to one of our Parking Professionals for detailed custom deals.
            </p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-4">
              Additional Event Services
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Complete your event with our comprehensive hospitality and support services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {additionalServices.map((service, index) => (
              <Card key={service.title} className="group bg-white/70 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="font-playfair font-bold text-slate-900 mb-2 text-lg">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
            Ready to Elevate Your Event?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to large-scale events, we have the expertise and services 
            to make your occasion unforgettable. Get your custom quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleRequestQuote}
              className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-gold-300 text-gold-700 hover:bg-gold-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Schedule Free Survey
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-5 h-5 text-gold-600" />
              <span className="text-sm">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-gold-600" />
              <span className="text-sm">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Star className="w-5 h-5 text-gold-600" />
              <span className="text-sm">1,500+ Events Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;