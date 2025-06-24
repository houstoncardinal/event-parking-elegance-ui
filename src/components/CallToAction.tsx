
import React from 'react';
import { ArrowRight, Phone, Calendar, Crown, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-gold-400/10 via-gold-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tr from-gold-300/8 via-gold-400/4 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedGroup preset="fade" className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Crown className="w-4 h-4 text-gold-400" />
              <span className="text-white/90 font-medium text-sm">Ready for Excellence?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Transform Your Next Event</span>
              <span className="block bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Into Something Extraordinary
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Join Houston's most distinguished clientele and discover why our premium valet services 
              are the gold standard for luxury events.
            </p>

            {/* Service Highlights */}
            <div className="space-y-3 mb-8">
              {[
                'Fully Licensed & Insured',
                '24/7 Emergency Response',
                'Premium White-Glove Service',
                'Trusted by 1,500+ Clients'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-slate-900 px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Call Now: (713) 555-VALET
              </Button>
              
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 text-base font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 group">
                <Calendar className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Schedule Consultation
              </Button>
            </div>
          </AnimatedGroup>

          {/* Right Content - Service Cards */}
          <AnimatedGroup preset="scale" className="space-y-4">
            {/* Immediate Response Card */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-bold text-white mb-2">
                      Immediate Response
                    </h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      Need valet service today? Our emergency response team is standing by 24/7.
                    </p>
                    <Button size="sm" className="bg-green-500 hover:bg-green-400 text-white text-sm px-4 py-2 group">
                      Call Emergency Line
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Quote Card */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-bold text-white mb-2">
                      Custom Event Planning
                    </h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      Large event or special requirements? Let's create a tailored solution.
                    </p>
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 text-sm px-4 py-2 group">
                      Request Custom Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Houston Local Card */}
            <Card className="bg-gradient-to-br from-gold-500/20 to-gold-400/10 backdrop-blur-xl border border-gold-400/30 shadow-xl hover:from-gold-500/25 hover:to-gold-400/15 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-2">
                    Proudly Houston Born & Raised
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    Over 15 years serving our community with distinction and pride.
                  </p>
                  <div className="text-gold-300 font-medium text-sm">
                    "Houston's Premier Valet Service"
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>

        {/* Trust Indicators Bottom */}
        <AnimatedGroup preset="fade" className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Shield className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-sm text-white/70">Fully Insured & Bonded</div>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Clock className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-sm text-white/70">24/7 Availability</div>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Crown className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-sm text-white/70">Premium Service</div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default CallToAction;
