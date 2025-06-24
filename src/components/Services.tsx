
import React, { useState } from 'react';
import { Car, Users, Building, Sparkles, Shield, Clock, MapPin, Crown, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Sparkles,
      title: 'Wedding Valet',
      subtitle: 'Unforgettable Moments',
      description: 'Transform your special day into a flawless celebration with our white-glove wedding valet service. Our formally attired attendants ensure every guest arrival is met with elegance and sophistication.',
      features: [
        'Formal tuxedo-uniformed staff',
        'Bridal party coordination',
        'Luxury vehicle protection',
        'Red carpet service',
        'Guest reception protocol',
        'Photography coordination'
      ],
      price: 'Starting at $15/hour per attendant',
      gradient: 'from-gold-400 via-gold-500 to-gold-600',
      glowColor: 'shadow-gold-glow',
      bgGradient: 'from-gold-50/20 via-white/95 to-gold-100/30',
      borderColor: 'border-gold-200/60 hover:border-gold-400/80',
      iconBg: 'from-gold-400 via-gold-500 to-gold-600',
      stats: { events: '500+', satisfaction: '99.9%' }
    },
    {
      icon: Building,
      title: 'Corporate Events',
      subtitle: 'Executive Excellence',
      description: 'Elevate your corporate gatherings with our executive-level valet service. From Fortune 500 conferences to exclusive galas, we deliver unmatched professionalism that reflects your company\'s prestige.',
      features: [
        'C-suite level service standards',
        'Custom branded uniforms',
        'Real-time digital reporting',
        'VIP executive handling',
        'Multi-language capabilities',
        'Corporate security protocols'
      ],
      price: 'Starting at $18/hour per attendant',
      gradient: 'from-slate-700 via-slate-800 to-slate-900',
      glowColor: 'shadow-luxury',
      bgGradient: 'from-slate-50/20 via-white/95 to-slate-100/30',
      borderColor: 'border-slate-200/60 hover:border-slate-400/80',
      iconBg: 'from-slate-700 via-slate-800 to-slate-900',
      stats: { events: '300+', satisfaction: '100%' }
    },
    {
      icon: Users,
      title: 'Private Parties',
      subtitle: 'Intimate Luxury',
      description: 'From exclusive dinner parties to milestone celebrations, our discrete and professional service ensures your guests feel welcomed while you focus on creating unforgettable memories.',
      features: [
        'Flexible staffing solutions',
        'White-glove discrete service',
        'Property protection guarantee',
        'Event coordination support',
        'Guest preference tracking',
        'Seamless integration'
      ],
      price: 'Starting at $12/hour per attendant',
      gradient: 'from-platinum-600 via-platinum-700 to-platinum-800',
      glowColor: 'shadow-platinum-glow',
      bgGradient: 'from-platinum-50/20 via-white/95 to-platinum-100/30',
      borderColor: 'border-platinum-200/60 hover:border-platinum-400/80',
      iconBg: 'from-platinum-600 via-platinum-700 to-platinum-800',
      stats: { events: '800+', satisfaction: '99.5%' }
    },
    {
      icon: Car,
      title: 'Luxury Events',
      subtitle: 'Ultra-Premium Service',
      description: 'Our most exclusive service tier for high-end vehicles and VIP clientele. Specialized handling of luxury automobiles with enhanced security and concierge-level attention to detail.',
      features: [
        'Certified luxury vehicle specialists',
        'Museum-quality care standards',
        'Enhanced comprehensive insurance',
        'Personal concierge coordination',
        'Climate-controlled positioning',
        'Executive protection protocols'
      ],
      price: 'Starting at $25/hour per attendant',
      gradient: 'from-gold-500 via-gold-600 to-gold-700',
      glowColor: 'shadow-gold-glow',
      bgGradient: 'from-gold-50/30 via-white/90 to-gold-200/20',
      borderColor: 'border-gold-300/70 hover:border-gold-500/90',
      iconBg: 'from-gold-500 via-gold-600 to-gold-700',
      stats: { events: '200+', satisfaction: '100%' }
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-million dollar insurance coverage with bonded staff and advanced security protocols for complete peace of mind.',
      feature: 'Zero incidents in 5+ years'
    },
    {
      icon: Clock,
      title: 'Punctuality Guarantee',
      description: 'Our teams arrive 30 minutes early and maintain 24/7 availability with real-time coordination and backup protocols.',
      feature: '100% on-time record'
    },
    {
      icon: MapPin,
      title: 'Advanced Technology',
      description: 'Real-time GPS tracking, digital key management, and instant guest notifications through our proprietary platform.',
      feature: 'Live tracking dashboard'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gold-50/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-200/20 via-gold-300/10 to-transparent rounded-full blur-3xl animate-luxury-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/15 via-slate-300/8 to-transparent rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '3s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-gold-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-gold-300/30 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-slate-400/30 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <AnimatedGroup preset="fade" className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-50/95 via-white/95 to-gold-100/90 backdrop-blur-xl border border-gold-200/60 rounded-full px-8 py-4 mb-8 shadow-luxury hover:shadow-gold-glow transition-all duration-500">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold-glow">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-800 font-semibold text-sm tracking-wide">Luxury Valet Services</span>
            <div className="flex items-center gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500 drop-shadow-sm" />
              ))}
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-[1.05]">
            <span className="block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Premium Valet
            </span>
            <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent drop-shadow-gold relative">
              Excellence
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent blur-sm opacity-30 -z-10">
                Excellence
              </div>
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            From intimate gatherings to grand celebrations, we deliver white-glove valet services 
            that transform every arrival into a moment of distinction and elegance.
          </p>
        </AnimatedGroup>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <AnimatedGroup 
              key={index}
              preset="blur-slide"
              className={`transform transition-all duration-700 ${activeService === index ? 'scale-105' : 'hover:scale-102'} animate-fade-in`}
            >
              <Card 
                className={`group cursor-pointer border-2 backdrop-blur-xl transition-all duration-700 hover:shadow-2xl ${service.borderColor} ${service.glowColor} overflow-hidden relative`}
                style={{
                  background: `linear-gradient(135deg, ${service.bgGradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-700`} />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <CardContent className="p-8 lg:p-10 relative z-10">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-start space-x-6">
                      <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-luxury group-hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${service.iconBg}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        <service.icon className="w-9 h-9 text-white relative z-10 drop-shadow-lg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                          {service.title}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-1`}>
                          {service.subtitle}
                        </p>
                        <div className={`text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.price}
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="text-right">
                      <div className="text-2xl font-playfair font-bold text-slate-800 mb-1">{service.stats.events}</div>
                      <div className="text-xs text-slate-600 font-semibold tracking-wider uppercase mb-2">Events</div>
                      <div className="text-lg font-bold text-gold-600">{service.stats.satisfaction}</div>
                      <div className="text-xs text-slate-600 font-semibold tracking-wider uppercase">Satisfaction</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Enhanced Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group/feature">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-sm group-hover/feature:shadow-md transition-all duration-300`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium group-hover/feature:text-slate-800 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button className={`w-full relative overflow-hidden text-white px-8 py-4 text-lg font-semibold tracking-wide rounded-xl shadow-luxury hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-white/20 bg-gradient-to-r ${service.gradient}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative z-10">Reserve Service</span>
                        <ArrowRight className="ml-2 w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-6 bg-white/95 backdrop-blur-xl border border-white/30 shadow-2xl">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Ready to book {service.title}?</h4>
                        <p className="text-sm text-slate-600">Get an instant quote and secure your preferred date with our premium {service.title.toLowerCase()} service.</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">Get Quote</Button>
                          <Button size="sm" variant="outline" className="flex-1">Learn More</Button>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
            </AnimatedGroup>
          ))}
        </div>

        {/* Enhanced Why Choose Us */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-gold-50/30 to-white/95 rounded-3xl backdrop-blur-xl border border-white/40 shadow-2xl" />
          <div className="relative z-10 p-8 md:p-16">
            <AnimatedGroup preset="fade" className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                <span className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  The Pinnacle of
                </span>
                <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent drop-shadow-gold">
                  Valet Excellence
                </span>
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We don't just park vehicles—we curate experiences that reflect the sophistication and prestige your event deserves.
              </p>
            </AnimatedGroup>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <AnimatedGroup 
                  key={index} 
                  preset="scale"
                  className={`group text-center animate-fade-in`}
                >
                  <div 
                    className="relative mb-8"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-gold-100 via-gold-200 to-gold-300 rounded-full flex items-center justify-center mx-auto shadow-luxury group-hover:shadow-gold-glow transition-all duration-500 group-hover:scale-110">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-gold-100 rounded-full blur-sm opacity-50" />
                      <item.icon className="w-12 h-12 text-gold-700 relative z-10 drop-shadow-sm" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-playfair font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full border border-gold-200/60 shadow-sm">
                    <span className="text-gold-700 font-semibold text-sm">{item.feature}</span>
                  </div>
                </AnimatedGroup>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
