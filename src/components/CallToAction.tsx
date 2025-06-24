
import React from 'react';
import { ArrowRight, Phone, Calendar, Crown, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGroup } from '@/components/ui/animated-group';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-400/20 via-gold-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-gold-300/15 via-gold-400/8 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedGroup preset="fade" className="text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Crown className="w-4 h-4 text-gold-400" />
              <span className="text-white/90 font-medium text-sm">Ready to Experience Excellence?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Transform Your Next Event</span>
              <span className="block bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Into Something Extraordinary
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join Houston's most distinguished clientele and discover why our premium valet services 
              are the gold standard for luxury events throughout the greater Houston area.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/70">Fully Insured</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/70">24/7 Available</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/70">Premium Service</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (713) 555-VALET
              </Button>
              
              <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
          </AnimatedGroup>

          {/* Right Content - Contact Cards */}
          <AnimatedGroup preset="scale" className="space-y-6">
            {/* Immediate Response Card */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-bold text-white mb-2">
                      Immediate Response
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      Need valet service today? Our emergency response team is standing by.
                    </p>
                    <Button className="bg-green-500 hover:bg-green-400 text-white text-sm px-4 py-2">
                      Call Emergency Line
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Quote Card */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-bold text-white mb-2">
                      Custom Event Planning
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      Large event or special requirements? Let's create a tailored solution.
                    </p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-sm px-4 py-2">
                      Request Custom Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Houston Local Card */}
            <Card className="bg-gradient-to-br from-gold-500/20 to-gold-400/10 backdrop-blur-xl border border-gold-400/30 shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-2">
                    Proudly Houston Born & Raised
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
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
      </div>
    </section>
  );
};

export default CallToAction;
