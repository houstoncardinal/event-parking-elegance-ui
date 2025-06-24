import React, { useState } from 'react';
import { Car, Users, Building, Sparkles, Shield, Clock, MapPin, Crown, Star, ArrowRight, CheckCircle, Award, Zap, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

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
      subtitle: 'Full Coverage',
      description: 'Multi-million dollar insurance with bonded staff and advanced security protocols.',
      feature: 'Zero incidents in 5+ years',
      stats: { value: '$10M+', label: 'Coverage' },
      gradient: 'from-emerald-500 via-emerald-600 to-emerald-700',
      glowColor: 'shadow-emerald-500/20',
      bgGradient: 'from-emerald-50/20 via-white/95 to-emerald-100/10'
    },
    {
      icon: Clock,
      title: 'Punctuality Guarantee',
      subtitle: 'Swiss-Precision',
      description: 'Teams arrive early with 24/7 availability and real-time coordination.',
      feature: '100% on-time record',
      stats: { value: '99.9%', label: 'Reliability' },
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      glowColor: 'shadow-blue-500/20',
      bgGradient: 'from-blue-50/20 via-white/95 to-blue-100/10'
    },
    {
      icon: MapPin,
      title: 'Advanced Technology',
      subtitle: 'Innovation First',
      description: 'Real-time GPS tracking, digital management, and instant notifications.',
      feature: 'Live tracking dashboard',
      stats: { value: '< 30s', label: 'Response Time' },
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      glowColor: 'shadow-purple-500/20',
      bgGradient: 'from-purple-50/20 via-white/95 to-purple-100/10'
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

        {/* Redesigned Why Choose Us Section - Clean & Professional */}
        <div className="relative mt-20">
          {/* Subtle background */}
          <div className="absolute inset-0 -m-4">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/90 to-gold-50/60 rounded-2xl backdrop-blur-sm border border-white/40 shadow-lg" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Clean Header Section */}
            <AnimatedGroup preset="fade" className="text-center mb-16">
              {/* Simple badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-2 mb-8 shadow-sm">
                <Award className="w-4 h-4 text-gold-600" />
                <span className="text-slate-700 font-medium text-sm">Excellence Certified</span>
                <div className="flex items-center gap-0.5 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
                  ))}
                </div>
              </div>

              {/* Clean main heading */}
              <h3 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-6">
                <span className="block text-slate-900 mb-2">
                  The Pinnacle of
                </span>
                <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                  Valet Excellence
                </span>
              </h3>
              
              {/* Professional description */}
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We deliver white-glove valet services that reflect the 
                <span className="text-gold-600 font-medium"> sophistication and prestige </span>
                your event deserves.
              </p>

              {/* Compact stats */}
              <div className="flex items-center justify-center gap-8 mt-10 pt-6 border-t border-slate-200/60">
                <div className="text-center">
                  <div className="text-2xl font-playfair font-bold text-slate-800">1000+</div>
                  <div className="text-xs text-slate-600 font-medium">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-playfair font-bold text-gold-600">99.9%</div>
                  <div className="text-xs text-slate-600 font-medium">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-playfair font-bold text-slate-800">24/7</div>
                  <div className="text-xs text-slate-600 font-medium">Available</div>
                </div>
              </div>
            </AnimatedGroup>
            
            {/* Clean Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <AnimatedGroup 
                  key={index} 
                  preset="scale"
                  className="group"
                >
                  <Card 
                    className={`relative overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer ${
                      activeFeature === index 
                        ? 'border-white/60 shadow-lg scale-105' 
                        : 'border-white/30 hover:border-white/50'
                    } ${item.glowColor}`}
                    style={{
                      background: `linear-gradient(135deg, ${item.bgGradient.replace('from-', '').replace(' via-', ', ')})`
                    }}
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(-1)}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Clean icon */}
                      <div className="relative mb-6 flex justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h4 className="text-xl font-playfair font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.subtitle}
                        </p>
                        
                        {/* Stats */}
                        <div className="py-3">
                          <div className={`text-2xl font-playfair font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                            {item.stats.value}
                          </div>
                          <div className="text-xs text-slate-600 font-medium uppercase tracking-wide">
                            {item.stats.label}
                          </div>
                        </div>
                        
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Feature highlight */}
                        <div className={`inline-flex items-center px-4 py-2 bg-white/60 rounded-full border border-white/40 shadow-sm text-xs font-medium text-slate-700`}>
                          <Zap className="w-3 h-3 mr-1" />
                          {item.feature}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedGroup>
              ))}
            </div>

            {/* Clean Call-to-Action */}
            <AnimatedGroup preset="fade" className="text-center mt-12">
              <div className="flex items-center justify-center gap-4">
                <Button className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Experience Excellence
                  <Crown className="ml-2 w-4 h-4" />
                </Button>
                
                <Button variant="outline" className="border-gold-300 hover:border-gold-400 bg-white/80 hover:bg-gold-50/80 text-slate-800 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  View Portfolio
                  <Eye className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
