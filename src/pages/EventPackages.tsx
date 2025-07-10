import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Sparkles, Car, Users, Clock, Shield } from 'lucide-react';

const EventPackages = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking') || document.getElementById('book');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Event Packages - Cardinal Valet Premium Parking Services"
        description="Choose from our Standard and Premium event parking packages. Professional valet services tailored to your event's needs in Houston."
        keywords={["event parking packages", "valet service packages", "Houston event parking", "premium valet services"]}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Event <span className="text-yellow-400">Packages</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Professional valet services tailored to elevate your event experience
              </p>
            </div>
          </div>
        </section>

        {/* Package Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Standard Package */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-8 text-center">
                    <Star className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Standard</h3>
                    <p className="text-blue-100">Perfect for most events</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-8">
                      <div className="text-4xl font-bold text-gray-900 mb-2">From $8<span className="text-xl font-normal text-gray-600">/vehicle</span></div>
                      <p className="text-gray-600">Professional valet parking service</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Professional uniformed attendants</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Standard parking area management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Vehicle safety and security</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Professional arrival/departure service</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Licensed & insured service</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>24/7 support availability</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Event coordination support</span>
                      </li>
                    </ul>
                    
                    <Button 
                      onClick={scrollToBooking}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg"
                    >
                      Select Standard Package
                    </Button>
                  </div>
                </div>

                {/* Premium Package */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 p-8 text-center">
                    <Crown className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Premium</h3>
                    <p className="text-yellow-900">Luxury experience for special events</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-8">
                      <div className="text-4xl font-bold text-gray-900 mb-2">From $12<span className="text-xl font-normal text-gray-600">/vehicle</span></div>
                      <p className="text-gray-600">Enhanced luxury valet experience</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="font-medium">Everything in Standard Package</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Premium uniformed attendants with enhanced training</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Red carpet service for VIP arrivals</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Vehicle detailing & interior protection</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Dedicated event coordinator</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Priority parking for special guests</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Complimentary umbrella service</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>Post-event follow-up service</span>
                      </li>
                    </ul>
                    
                    <Button 
                      onClick={scrollToBooking}
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-900 py-3 text-lg font-bold rounded-lg shadow-lg"
                    >
                      Select Premium Package
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Features Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Package Features in Detail</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Staff</h3>
                  <p className="text-gray-600">Trained, uniformed, and courteous attendants who represent your event with distinction.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vehicle Care</h3>
                  <p className="text-gray-600">Careful handling of all vehicle types, from luxury cars to family vehicles.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Service</h3>
                  <p className="text-gray-600">Efficient arrival and departure management to keep your event flowing smoothly.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Protection</h3>
                  <p className="text-gray-600">Licensed, insured, and bonded for complete peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Elevate Your Event?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our professional valet team handle the parking so you can focus on what matters most - your guests and your event.
              </p>
              <Button 
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-900 px-8 py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Your Custom Quote Today
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EventPackages;