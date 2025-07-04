import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
              <Phone className="w-4 h-4 text-gold-600" />
              <span className="text-slate-700 font-medium text-sm">Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              <span className="block text-slate-900 mb-2">Contact Cardinal</span>
              <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                Valet Services
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to elevate your event with professional valet services? Contact us today for a free quote 
              and let us handle the parking while you focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <p className="text-slate-600">(832) 555-CARDINAL</p>
                      <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-slate-600">info@cardinalparking.com</p>
                      <p className="text-sm text-slate-500">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Service Area</h3>
                      <p className="text-slate-600">Houston & Surrounding Areas</p>
                      <p className="text-sm text-slate-500">50+ mile radius coverage</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Business Hours</h3>
                      <p className="text-slate-600">24/7 Event Services</p>
                      <p className="text-sm text-slate-500">Office: Mon-Fri 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <Card className="bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-playfair font-bold text-slate-900 mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-gold-600" />
                      <span className="text-slate-700">$2M Liability Insurance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-gold-600" />
                      <span className="text-slate-700">500+ Satisfied Clients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gold-600" />
                      <span className="text-slate-700">Same-Day Booking Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-6">Request a Quote</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Event Type</label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                      <option>Select event type</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Private Party</option>
                      <option>Gala</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Event Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Tell us about your event..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;