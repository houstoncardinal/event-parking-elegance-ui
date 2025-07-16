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
    company: '',
    website: '',
    contactType: 'general',
    subject: '',
    message: '',
    preferredContactMethod: 'email',
    bestTimeToContact: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submission = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        contact_type: formData.contactType,
        subject: formData.subject,
        message: formData.message,
        preferred_contact_method: formData.preferredContactMethod,
        best_time_to_contact: formData.bestTimeToContact,
        source_page: window.location.pathname,
        ip_address: null, // Will be populated by middleware if needed
        user_agent: navigator.userAgent
      };

      const { error } = await supabase
        .from('contact_submissions')
        .insert(submission);

      if (error) {
        throw error;
      }

      setSubmissionData({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contactType: formData.contactType,
        subject: formData.subject
      });
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        contactType: 'general',
        subject: '',
        message: '',
        preferredContactMethod: 'email',
        bestTimeToContact: ''
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
        <div className="pt-16 pb-16">
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
                We're here to help with any questions, support needs, or feedback you may have. 
                Get in touch with our team and we'll respond promptly to assist you.
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
                        <p className="text-slate-600">(346) 764-9163</p>
                        <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Email</h3>
                        <p className="text-slate-600">info@eventsparkingservices.com</p>
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
                  <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
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
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
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
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Your Company (Optional)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Website</label>
                        <input 
                          type="url" 
                          value={formData.website}
                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="https://yourwebsite.com (Optional)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contact Type *</label>
                        <select 
                          value={formData.contactType}
                          onChange={(e) => setFormData({...formData, contactType: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          required
                        >
                          <option value="general">General Inquiry</option>
                          <option value="support">Customer Support</option>
                          <option value="quote">Request Quote</option>
                          <option value="complaint">Complaint</option>
                          <option value="partnership">Partnership</option>
                          <option value="media">Media Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Contact Method</label>
                        <select 
                          value={formData.preferredContactMethod}
                          onChange={(e) => setFormData({...formData, preferredContactMethod: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="both">Either Email or Phone</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
                        <input 
                          type="text" 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Brief description of your inquiry"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Best Time to Contact</label>
                        <select 
                          value={formData.bestTimeToContact}
                          onChange={(e) => setFormData({...formData, bestTimeToContact: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        >
                          <option value="">No Preference</option>
                          <option value="morning">Morning (8 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                          <option value="evening">Evening (5 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                      <textarea 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Please provide details about your inquiry..."
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
      </div>
    </>
  );
};

export default ContactPage;