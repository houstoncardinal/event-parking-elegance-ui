import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Briefcase, Shield, Clock, Star, CheckCircle, TrendingUp, Award } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const CorporateEvents = () => {
  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/booking';
    }
  };

  const features = [
    'Custom branded service options with company colors',
    'Executive vehicle care and VIP treatment',
    'Flexible scheduling for multi-day events',
    'Professional presentation and corporate attire',
    'Client greeting and first impression management',
    'Secure key management systems',
    'Post-event analytics and reporting',
    'Corporate billing and invoicing',
    'Event coordination with facility management',
    'Emergency response protocols',
    'Executive protection protocols',
    'Corporate hospitality services'
  ];

  const corporateClients = [
    {
      company: "Fortune 500 Energy Company",
      event: "Annual Shareholder Meeting",
      attendees: "500+ Executives",
      quote: "Cardinal Valet's professional service enhanced our corporate image and impressed our international stakeholders."
    },
    {
      company: "Tech Startup",
      event: "Product Launch Event",
      attendees: "200+ Industry Leaders",
      quote: "Their attention to detail and executive-level service helped make our launch event a tremendous success."
    }
  ];

  const servicePackages = [
    {
      title: "Executive Package",
      icon: Award,
      features: [
        'White-glove executive vehicle handling',
        'Personal greeting service',
        'Priority parking coordination',
        'VIP client treatment'
      ],
      badge: 'Most Popular'
    },
    {
      title: "Corporate Event Package",
      icon: Building2,
      features: [
        'Multi-day event coordination',
        'Branded attendant uniforms',
        'Real-time event reporting',
        'Flexible scheduling options'
      ],
      badge: 'Comprehensive'
    },
    {
      title: "Enterprise Package",
      icon: TrendingUp,
      features: [
        'Custom corporate solutions',
        'Dedicated account management',
        'Advanced analytics reporting',
        'Corporate billing integration'
      ],
      badge: 'Premium'
    }
  ];

  return (
    <>
      <SEO 
        title="Corporate Event Valet Services Houston - Cardinal Valet"
        description="Professional corporate event valet parking in Houston. Executive vehicle care, custom branding options, and Fortune 500 trusted service. Impress your clients and employees."
        keywords={[
          "corporate valet houston",
          "business event parking houston",
          "executive valet service",
          "corporate event parking",
          "houston corporate valet",
          "business valet parking",
          "executive parking service",
          "corporate event vendors houston"
        ]}
        url="https://cardinalvalet.com/corporate-events"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 via-slate-200/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/15 via-blue-200/8 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedGroup preset="fade" className="lg:pr-8">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">Fortune 500 Trusted</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                  <span className="block text-slate-900 mb-2">Executive Grade</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                    Corporate Valet
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Elevate your corporate events with executive-level valet services that impress 
                  clients and create lasting professional impressions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={handleRequestQuote}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Briefcase className="mr-2 w-5 h-5" />
                    Get Corporate Quote
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      window.location.href = 'tel:(832)555-CARDINAL';
                    }}
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Call (832) 555-CARDINAL
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>$2M Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>Fortune 500 Trusted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </AnimatedGroup>

              <AnimatedGroup preset="scale" className="space-y-6">
                {servicePackages.map((pkg, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center">
                            <pkg.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-playfair font-bold text-slate-900">
                            {pkg.title}
                          </h3>
                        </div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {pkg.badge}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </AnimatedGroup>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Complete Corporate Event Solutions
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From intimate executive meetings to large-scale corporate events, our professional 
                valet services ensure your event runs smoothly and impresses every attendee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how we've helped major corporations create exceptional event experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {corporateClients.map((client, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Building2 className="w-6 h-6 text-blue-600 mr-2" />
                      <div>
                        <div className="font-semibold text-slate-900">{client.company}</div>
                        <div className="text-sm text-slate-600">{client.event}</div>
                      </div>
                    </div>
                    <div className="text-sm text-blue-600 font-medium mb-4">{client.attendees}</div>
                    <p className="text-slate-700 italic leading-relaxed">
                      "{client.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
          {/* Premium background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-slate-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-slate-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Building2 className="w-5 h-5 text-blue-300" />
              <span className="text-white/90 font-semibold">Executive Excellence Awaits</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Elevate Your Corporate</span>
              <span className="block bg-gradient-to-r from-blue-300 via-slate-300 to-blue-300 bg-clip-text text-transparent">
                Events to Excellence
              </span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join the Fortune 500 companies that trust Cardinal Valet for executive-level service. 
              Impress your clients and create lasting professional impressions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleRequestQuote}
                size="lg"
                className="group relative bg-white text-slate-900 hover:bg-blue-50 px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 border-2 border-white/20 overflow-hidden"
              >
                <Briefcase className="mr-3 w-6 h-6 group-hover:text-blue-600 transition-colors duration-300" />
                Get Corporate Quote
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:(832)555-CARDINAL'}
                className="group border-3 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-5 text-xl font-bold rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-110 shadow-2xl"
              >
                <span className="mr-3 text-2xl">📞</span>
                Call (832) 555-CARDINAL
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CorporateEvents;