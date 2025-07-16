import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, PartyPopper, Home, Clock, Shield, Heart, CheckCircle, Users, Gift, Sparkles } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const PrivateParties = () => {
  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/booking';
    }
  };

  const features = [
    'Discreet professional service for intimate events',
    'Flexible duration options (2-12 hours)',
    'Special event coordination and planning',
    'Guest satisfaction guarantee with follow-up',
    'Customizable service levels per event needs',
    'Weather contingency planning included',
    'Complimentary consultation and site survey',
    'Birthday party coordination',
    'Anniversary celebration services',
    'Holiday party management',
    'Graduation party support',
    'Custom event theming coordination'
  ];

  const eventTypes = [
    {
      title: "Birthday Celebrations",
      icon: Gift,
      description: "Make milestone birthdays unforgettable with premium valet service",
      features: ['Age-appropriate service levels', 'Gift delivery coordination', 'Photo-friendly arrivals']
    },
    {
      title: "Anniversary Parties",
      icon: Heart,
      description: "Celebrate love stories with elegant and romantic valet service",
      features: ['Romantic arrival coordination', 'Couples priority service', 'Memory photo opportunities']
    },
    {
      title: "Holiday Gatherings",
      icon: Sparkles,
      description: "Keep family gatherings stress-free during the busy holiday season",
      features: ['Holiday schedule flexibility', 'Family-friendly service', 'Weather protection plans']
    },
    {
      title: "Graduation Parties",
      icon: Star,
      description: "Honor achievements with professional service for proud families",
      features: ['Multi-generational service', 'Photo session coordination', 'Achievement celebration focus']
    }
  ];

  const testimonials = [
    {
      name: "Maria & Carlos Hernandez",
      event: "25th Anniversary Party",
      guests: "75 guests",
      quote: "Cardinal Valet made our anniversary celebration so special. Our guests were amazed by the professional service, and we could focus on enjoying our milestone moment."
    },
    {
      name: "The Johnson Family",
      event: "Graduation Celebration",
      guests: "50 guests",
      quote: "From grandparents to college friends, everyone was impressed. The valet team was courteous, professional, and made our daughter's graduation party perfect."
    }
  ];

  return (
    <>
      <SEO 
        title="Private Party Valet Services Houston - Cardinal Valet"
        description="Premium private party valet parking in Houston. Birthday parties, anniversaries, graduations, and intimate gatherings. Flexible service options and satisfaction guaranteed."
        keywords={[
          "private party valet houston",
          "birthday party valet",
          "anniversary party valet",
          "graduation party valet",
          "houston private event parking",
          "intimate event valet",
          "family gathering valet",
          "celebration valet service"
        ]}
        url="https://cardinalvalet.com/private-parties"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 via-pink-200/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-pink-200/15 via-purple-200/8 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedGroup preset="fade" className="lg:pr-8">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
                  <PartyPopper className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700 font-medium">Celebration Specialists</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                  <span className="block text-slate-900 mb-2">Unforgettable</span>
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Private Parties
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Transform your private gatherings into extraordinary celebrations with our 
                  personalized valet services. Perfect for birthdays, anniversaries, and special moments.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={handleRequestQuote}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <PartyPopper className="mr-2 w-5 h-5" />
                    Plan Your Event
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      window.location.href = 'tel:(346)764-9163';
                    }}
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Call (346) 764-9163
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Satisfaction Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Most Flexible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>2-12 Hour Options</span>
                  </div>
                </div>
              </AnimatedGroup>

              <AnimatedGroup preset="scale" className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {eventTypes.map((type, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <type.icon className="w-6 h-6 text-purple-600" />
                          </div>
                          <h3 className="text-sm font-playfair font-bold text-slate-900 mb-2">
                            {type.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Perfect for Every Celebration
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From intimate family gatherings to milestone celebrations, we provide personalized 
                valet services that make every event special.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((type, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-slate-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-left">
                          <CheckCircle className="w-3 h-3 text-purple-600 flex-shrink-0" />
                          <span className="text-xs text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Comprehensive Private Event Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every private celebration is unique. Our flexible services adapt to your specific 
                needs and ensure your guests feel welcomed and valued.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Celebration Success Stories
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how we've helped families create unforgettable celebration experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <PartyPopper className="w-6 h-6 text-purple-600 mr-2" />
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">{testimonial.event} • {testimonial.guests}</div>
                      </div>
                    </div>
                    <p className="text-slate-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
          {/* Celebratory background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-pink-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg">
              <PartyPopper className="w-5 h-5 text-purple-300" />
              <span className="text-white/90 font-semibold">Ready to Celebrate?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Make Your Celebration</span>
              <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Absolutely Extraordinary
              </span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Let us handle the parking so you can focus on what matters most - celebrating with loved ones. 
              Create memories that will last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleRequestQuote}
                size="lg"
                className="group relative bg-white text-slate-900 hover:bg-purple-50 px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-110 border-2 border-white/20 overflow-hidden"
              >
                <PartyPopper className="mr-3 w-6 h-6 group-hover:text-purple-600 transition-colors duration-300" />
                Plan Your Celebration
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:(346)764-9163'}
                className="group border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 px-10 py-5 text-xl font-bold rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-110 shadow-2xl"
              >
                <span className="mr-3 text-2xl">🎉</span>
                Call (346) 764-9163
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivateParties;