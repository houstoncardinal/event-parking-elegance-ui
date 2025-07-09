import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import SubmissionSuccess from '@/components/SubmissionSuccess';
import SEO from '@/components/SEO';
import { contactSchema } from '@/utils/seoSchemas';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submission = {
        form_type: 'contact',
        status: 'new',
        priority: 'normal',
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        message: formData.message,
        source_page: window.location.pathname
      };

      const { error } = await supabase
        .from('form_submissions')
        .insert(submission);

      if (error) {
        throw error;
      }

      setSubmissionData({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        eventType: formData.eventType,
        eventDate: formData.eventDate
      });
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Cardinal Valet Services - Houston Event Parking"
        description="Contact Houston's premier valet parking service for your event. Get a free quote for wedding, corporate, or private party valet services. Professional, insured, and available 24/7."
        keywords={[
          "contact valet service houston",
          "houston valet parking quote", 
          "cardinal valet contact",
          "valet service phone number houston",
          "event parking contact houston",
          "professional valet booking",
          "houston wedding valet contact",
          "corporate parking houston contact"
        ]}
        url="https://cardinalvalet.com/contact"
        schema={contactSchema}
      />
      <div className="min-h-screen bg-white">
      <Navigation />
      <SubmissionSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        formType="contact"
        customerInfo={submissionData}
      />
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Event Type</label>
                    <select 
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Party</option>
                      <option value="gala">Gala</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Event Date</label>
                    <input 
                      type="date" 
                      value={formData.eventDate}
                      onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Tell us about your event..."
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;