import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, Users, MapPin, AlertTriangle, CheckCircle, Award, FileText, Clock } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const PremiumProtection = () => {
  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/booking';
    }
  };

  const protectionFeatures = [
    '$2M comprehensive liability coverage',
    'Fully bonded and insured attendants',
    'Complete vehicle damage protection',
    'Theft protection and security measures',
    'Background-checked professional staff',
    'Real-time GPS tracking of vehicles',
    '24/7 emergency response team',
    'Incident reporting and documentation',
    'Claims assistance and support',
    'Professional training certifications',
    'Regular security audits and updates',
    'Multiple insurance carrier backing'
  ];

  const securityMeasures = [
    {
      title: "Background Verification",
      icon: Users,
      description: "Every attendant undergoes comprehensive background checks and professional screening",
      details: ['Criminal background checks', 'Employment history verification', 'Professional references', 'Driving record review']
    },
    {
      title: "Vehicle Security",
      icon: Lock,
      description: "Advanced security protocols protect your vehicles at every stage of service",
      details: ['Secure key management systems', 'Vehicle condition documentation', 'Real-time GPS tracking', 'Restricted access protocols']
    },
    {
      title: "Surveillance & Monitoring",
      icon: Eye,
      description: "Continuous monitoring ensures the highest level of security and accountability",
      details: ['Event area surveillance', 'Vehicle movement tracking', 'Real-time incident reporting', '24/7 monitoring center']
    },
    {
      title: "Emergency Response",
      icon: AlertTriangle,
      description: "Immediate response protocols for any security concerns or emergencies",
      details: ['24/7 emergency hotline', 'Rapid response team', 'Law enforcement coordination', 'Medical emergency protocols']
    }
  ];

  const insuranceCoverage = [
    {
      type: "General Liability",
      amount: "$2,000,000",
      description: "Comprehensive protection for property damage and bodily injury"
    },
    {
      type: "Professional Liability",
      amount: "$1,000,000", 
      description: "Coverage for errors and omissions in professional services"
    },
    {
      type: "Vehicle Coverage",
      amount: "$1,000,000",
      description: "Protection for vehicles under our care and control"
    },
    {
      type: "Theft Protection",
      amount: "$500,000",
      description: "Coverage for theft or vandalism incidents during service"
    }
  ];

  return (
    <>
      <SEO 
        title="Premium Protection & Insurance - Cardinal Valet Houston"
        description="$2M comprehensive insurance coverage, bonded attendants, and advanced security measures. Complete peace of mind for your valet parking service in Houston."
        keywords={[
          "insured valet houston",
          "bonded valet service",
          "valet insurance coverage",
          "secure valet parking",
          "background checked valet",
          "protected valet service",
          "liability coverage valet",
          "houston secure parking"
        ]}
        url="https://cardinalvalet.com/premium-protection"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-200/20 via-blue-200/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/15 via-green-200/8 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedGroup preset="fade" className="lg:pr-8">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Maximum Protection</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                  <span className="block text-slate-900 mb-2">Complete Peace</span>
                  <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    of Mind
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Industry-leading insurance coverage, bonded professionals, and advanced security 
                  measures protect your vehicles and give you complete confidence in our service.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={handleRequestQuote}
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Shield className="mr-2 w-5 h-5" />
                    Get Protected Service
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
                    <Award className="w-4 h-4 text-green-600" />
                    <span>$2M Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Fully Bonded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>24/7 Response</span>
                  </div>
                </div>
              </AnimatedGroup>

              <AnimatedGroup preset="scale" className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl transform rotate-3"></div>
                  <Card className="relative bg-white/90 backdrop-blur-sm border border-white/60 shadow-2xl rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
                          Maximum Protection Package
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {insuranceCoverage.map((coverage, index) => (
                          <div key={index} className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-slate-900">{coverage.amount}</div>
                            <div className="text-sm font-medium text-green-600">{coverage.type}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">Fully Protected Service</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Advanced Security Measures
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Multi-layered security protocols and professional standards ensure the highest 
                level of protection for your vehicles and peace of mind for your event.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <measure.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-bold text-slate-900 mb-2">
                          {measure.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {measure.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {measure.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Coverage Details */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
                Comprehensive Insurance Coverage
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Industry-leading insurance coverage protects you, your guests, and your vehicles 
                with multiple layers of financial protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {insuranceCoverage.map((coverage, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">{coverage.amount}</div>
                    <div className="text-lg font-semibold text-slate-900 mb-3">{coverage.type}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{coverage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
                    Additional Protection Features
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {protectionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 text-white relative overflow-hidden">
          {/* Security-themed background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/15 via-green-500/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Shield className="w-5 h-5 text-green-300" />
              <span className="text-white/90 font-semibold">Maximum Protection Guaranteed</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Experience Complete</span>
              <span className="block bg-gradient-to-r from-green-300 via-blue-300 to-green-300 bg-clip-text text-transparent">
                Protection & Peace of Mind
              </span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who trust our premium protection and professional service. 
              Your peace of mind is our top priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleRequestQuote}
                size="lg"
                className="group relative bg-white text-slate-900 hover:bg-green-50 px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-110 border-2 border-white/20 overflow-hidden"
              >
                <Shield className="mr-3 w-6 h-6 group-hover:text-green-600 transition-colors duration-300" />
                Get Protected Service
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:(346)764-9163'}
                className="group border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 px-10 py-5 text-xl font-bold rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-110 shadow-2xl"
              >
                <span className="mr-3 text-2xl">🛡️</span>
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

export default PremiumProtection;