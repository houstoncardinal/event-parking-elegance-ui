import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Shield, Award, Users, Clock, MapPin, Star } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <SEO 
        title="About Cardinal Valet - Premier Event Parking Services"
        description="Learn about Cardinal Valet's commitment to excellence in event parking services. Licensed, insured, and trusted by Houston's finest venues."
        keywords={["about cardinal valet", "event parking company", "Houston valet services", "professional parking attendants"]}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About <span className="text-yellow-400">Cardinal Valet</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Houston's premier event parking service, dedicated to excellence and exceptional guest experiences.
              </p>
              <div className="flex items-center justify-center space-x-2 bg-green-500/20 border border-green-400/30 rounded-lg px-6 py-3 inline-flex">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Cardinal Valet was founded with a simple mission: to provide exceptional parking services that elevate every event experience. What started as a vision to transform event parking has grown into Houston's most trusted valet service company.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We understand that first impressions matter. When guests arrive at your event, their experience begins with our professional valet attendants. Our team is committed to providing seamless, efficient, and courteous service that reflects the quality and sophistication of your event.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we serve hundreds of events annually across Houston and surrounding areas, from intimate private parties to large corporate gatherings, weddings, and premium venue partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-600">We strive for perfection in every interaction, ensuring your guests receive the highest level of service.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
                  <p className="text-gray-600">Licensed, insured, and bonded for your peace of mind. Your vehicles are in safe, professional hands.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Team</h3>
                  <p className="text-gray-600">Our professional attendants are trained, uniformed, and committed to representing your event with distinction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Cardinal Valet by the Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">1,500+</div>
                  <div className="text-gray-300">Events Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-300">Venue Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-300">Licensed & Insured</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Cardinal Valet?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Reliability</h3>
                    <p className="text-gray-600">On-time service with backup plans. We understand that timing is everything for your event's success.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of Houston venues and traffic patterns ensures efficient service at every location.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Service</h3>
                    <p className="text-gray-600">White-glove treatment for every vehicle, from luxury cars to family sedans.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Coverage</h3>
                    <p className="text-gray-600">Comprehensive insurance and bonding protects you and your guests' vehicles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;