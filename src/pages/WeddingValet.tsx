import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Heart, Camera, Users, Clock, Shield, CheckCircle, Star, Quote } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const WeddingValet = () => {
  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to booking page if not on same page
      window.location.href = '/booking';
    }
  };

  const features = [
    'Professional uniformed attendants in wedding attire',
    'Premium luxury vehicle handling with white gloves',
    'Direct coordination with wedding planners',
    'Photo-friendly service during ceremony arrivals',
    'Bridal party vehicle priority service',
    'Guest arrival coordination and announcements',
    'Complimentary vehicle cleaning during service',
    'Wedding day timeline coordination',
    'VIP bridal party vehicle handling',
    'Guest greeting and assistance services'
  ];

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      venue: "The Corinthian Houston",
      quote: "Cardinal Valet made our wedding day absolutely perfect. Their team was professional, courteous, and made sure every guest felt VIP treatment from arrival to departure.",
      rating: 5
    },
    {
      name: "Jennifer & David Rodriguez",
      venue: "Bell Tower on 34th",
      quote: "We couldn't have asked for better service. They coordinated perfectly with our wedding planner and handled our guests' luxury vehicles with exceptional care.",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Wedding Valet Services Houston - Cardinal Valet"
        description="Premium wedding valet parking services in Houston. Professional uniformed attendants, luxury vehicle handling, and coordination with wedding planners. Make your special day perfect."
        keywords={[
          "wedding valet houston",
          "wedding parking service houston",
          "bridal valet parking",
          "wedding day valet",
          "luxury wedding valet",
          "houston wedding vendors",
          "wedding parking attendants",
          "professional wedding valet"
        ]}
        url="https://cardinalvalet.com/wedding-valet"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-rose-50 via-white to-gold-50/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-200/20 via-gold-200/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-gold-200/15 via-rose-200/8 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedGroup preset="fade" className="lg:pr-8">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
                  <Crown className="w-5 h-5 text-rose-600" />
                  <span className="text-slate-700 font-medium">Wedding Specialists</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                  <span className="block text-slate-900 mb-2">Perfect Wedding</span>
                  <span className="block bg-gradient-to-r from-rose-600 to-gold-600 bg-clip-text text-transparent">
                    Valet Services
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Make your special day extraordinary with our premium wedding valet services. 
                  Professional, elegant, and perfectly coordinated with your wedding timeline.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={handleRequestQuote}
                    size="lg"
                    className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Heart className="mr-2 w-5 h-5" />
                    Get Wedding Quote
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
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>5-Star Rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>On-Time Guarantee</span>
                  </div>
                </div>
              </AnimatedGroup>

              <AnimatedGroup preset="scale" className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-gold-400/20 rounded-2xl transform rotate-3"></div>
                  <Card className="relative bg-white/90 backdrop-blur-sm border border-white/60 shadow-2xl rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Crown className="w-10 h-10 text-rose-600" />
                        </div>
                        <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
                          Premium Wedding Package
                        </h3>
                        <div className="space-y-3">
                          {[
                            'White-glove luxury vehicle handling',
                            'Professional wedding attire',
                            'Coordination with wedding planner',
                            'Bridal party priority service',
                            'Guest greeting & assistance'
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 text-left">
                              <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                              <span className="text-slate-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-gold-50/20 relative overflow-hidden">
          {/* Elegant background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(244,63,94,0.05)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(217,119,6,0.05)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
                <Crown className="w-5 h-5 text-rose-600" />
                <span className="text-slate-700 font-semibold">Premium Wedding Features</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900 mb-6 leading-tight">
                <span className="block mb-2">Complete Wedding Valet</span>
                <span className="block bg-gradient-to-r from-rose-600 via-rose-500 to-gold-500 bg-clip-text text-transparent">
                  Excellence Package
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Every detail matters on your wedding day. Our comprehensive valet services ensure 
                your guests experience luxury from the moment they arrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border border-rose-100/50 hover:border-rose-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <CheckCircle className="w-6 h-6 text-rose-600" />
                      </div>
                      <div className="flex-1">
                        <span className="text-slate-700 font-semibold text-lg leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
                        <div className="w-full h-0.5 bg-gradient-to-r from-rose-200 to-gold-200 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-rose-50/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Happy Couples
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See what our couples have to say about their wedding day experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-rose-300 mb-4" />
                    <p className="text-slate-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.venue}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-rose-900 to-gold-900 text-white relative overflow-hidden">
          {/* Luxury background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-500/20 via-gold-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-gold-500/15 via-rose-500/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Heart className="w-5 h-5 text-rose-300" />
              <span className="text-white/90 font-semibold">Ready for Your Perfect Day?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Make Your Wedding</span>
              <span className="block bg-gradient-to-r from-rose-300 via-gold-300 to-rose-300 bg-clip-text text-transparent">
                Absolutely Perfect
              </span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of happy couples who chose Cardinal Valet for their special day. 
              Let us handle every detail so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleRequestQuote}
                size="lg"
                className="group relative bg-white text-slate-900 hover:bg-rose-50 px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 hover:scale-110 border-2 border-white/20 overflow-hidden"
              >
                <Heart className="mr-3 w-6 h-6 group-hover:text-rose-600 transition-colors duration-300" />
                Get Your Wedding Quote
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:(346)764-9163'}
                className="group border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 px-10 py-5 text-xl font-bold rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-110 shadow-2xl"
              >
                <span className="mr-3 text-2xl">📞</span>
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

export default WeddingValet;