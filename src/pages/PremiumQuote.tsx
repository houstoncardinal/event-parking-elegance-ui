import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BookingForm from '@/components/BookingForm';
import { Crown, Star, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PremiumQuote = () => {
  return (
    <>
      <SEO 
        title="Get Premium Quote - Cardinal Valet Luxury Parking Services"
        description="Get your premium valet parking quote for luxury events in Houston. Professional service with white-glove treatment, VIP parking, and comprehensive coverage."
        keywords={["premium valet quote", "luxury parking services", "VIP valet parking", "Houston premium parking", "white-glove valet service"]}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-white mb-6 shadow-lg">
                <Crown className="w-8 h-8" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                Get Your <span className="text-yellow-400">Premium Quote</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Luxury valet parking services with white-glove treatment for your special events
              </p>
              <div className="flex items-center justify-center space-x-2 bg-green-500/20 border border-green-400/30 rounded-lg px-6 py-3 inline-flex">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">Premium Service • $2M Coverage • 24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Quote Form - Now First */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Get Your Premium Quote
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and receive a personalized premium valet service quote within 24 hours.
                </p>
              </div>
              
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Premium Features - Now Below Form */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Premium Valet Service?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the difference with our premium valet parking service designed for luxury events and discerning clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Attendants</h3>
                    <p className="text-gray-600">Enhanced training, professional uniforms, and exceptional service standards for your VIP guests.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Red Carpet Service</h3>
                    <p className="text-gray-600">VIP arrivals with red carpet treatment, umbrella service, and priority parking for special guests.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Vehicle Protection</h3>
                    <p className="text-gray-600">Interior protection, vehicle detailing, and careful handling of luxury and vintage vehicles.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Coordinator</h3>
                    <p className="text-gray-600">Personal event coordinator to handle all logistics and ensure seamless service throughout your event.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Post-Event Follow-up</h3>
                    <p className="text-gray-600">Comprehensive follow-up service including feedback collection and future event planning.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Experience</h3>
                    <p className="text-gray-600">Complete luxury experience with attention to every detail, from arrival to departure.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of satisfied clients who trust us with their most important events. 
                Premium valet service with zero hassle – guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const bookingSection = document.getElementById('booking');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-900 px-8 py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span>Get Your Quote Now</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'tel:(346)764-9163'}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
                >
                  Call (346) 764-9163
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PremiumQuote; 