
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import SubmissionSuccess from '@/components/SubmissionSuccess';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    guestCount: '',
    attendants: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const steps = [
    { number: 1, title: 'Event Details', icon: Calendar },
    { number: 2, title: 'Service Needs', icon: Users },
    { number: 3, title: 'Contact Info', icon: CheckCircle }
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Private Party',
    'Gala/Fundraiser',
    'Conference',
    'Other'
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Extract guest count number
      const guestCountNum = parseInt(formData.guestCount.replace(/\D/g, '')) || null;
      const attendantsNum = parseInt(formData.attendants.replace(/\D/g, '')) || null;
      
      const submission = {
        form_type: 'booking',
        status: 'new',
        priority: 'normal',
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone,
        event_type: formData.eventType,
        event_date: formData.date,
        event_location: formData.location,
        guest_count: guestCountNum,
        start_time: formData.startTime,
        end_time: formData.endTime,
        attendants_needed: attendantsNum,
        special_requests: formData.specialRequests,
        message: `Booking request for ${formData.eventType} event on ${formData.date}`,
        source_page: window.location.pathname
      };

      const { error } = await supabase
        .from('form_submissions')
        .insert(submission);

      if (error) {
        throw error;
      }

      setSubmissionData({
        name: formData.name,
        email: formData.email,
        eventType: formData.eventType,
        eventDate: formData.date
      });
      setShowSuccess(true);

      // Reset form
      setFormData({
        eventType: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        guestCount: '',
        attendants: '',
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="book" className="py-20 bg-white relative">
      <SubmissionSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        formType="booking"
        customerInfo={submissionData}
      />      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-white mb-6 shadow-lg">
              <Crown className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Valet Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Experience premium valet service with our streamlined booking process.
            </p>
            <p className="text-lg font-semibold text-gold-600">
              Professional response within 24 hours
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step.number 
                        ? 'bg-gold-500 border-gold-500 text-white shadow-lg' 
                        : 'border-gray-300 text-gray-400 bg-white'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <div className={`font-semibold text-sm ${
                        currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-20 h-0.5 mx-6 ${
                      currentStep > step.number ? 'bg-gold-500' : 'bg-gray-300'
                    } transition-colors duration-300`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 py-8">
              <CardTitle className="text-2xl font-bold text-center text-gray-900">
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Event Details */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="eventType" className="text-gray-900 font-semibold text-sm mb-2 block">Event Type</Label>
                        <Select onValueChange={(value) => updateFormData('eventType', value)}>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date" className="text-gray-900 font-semibold text-sm mb-2 block">Event Date</Label>
                        <Input
                          type="date"
                          id="date"
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('date', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="startTime" className="text-gray-900 font-semibold text-sm mb-2 block">Start Time</Label>
                        <Input
                          type="time"
                          id="startTime"
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('startTime', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime" className="text-gray-900 font-semibold text-sm mb-2 block">End Time</Label>
                        <Input
                          type="time"
                          id="endTime"
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('endTime', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="location" className="text-gray-900 font-semibold text-sm mb-2 block">Event Location</Label>
                      <Input
                        id="location"
                        placeholder="Full address or venue name"
                        className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500 placeholder:text-gray-400"
                        onChange={(e) => updateFormData('location', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Service Needs */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="guestCount" className="text-gray-900 font-semibold text-sm mb-2 block">Expected Guests</Label>
                        <Select onValueChange={(value) => updateFormData('guestCount', value)}>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500">
                            <SelectValue placeholder="Number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-50">1-50 guests</SelectItem>
                            <SelectItem value="51-100">51-100 guests</SelectItem>
                            <SelectItem value="101-200">101-200 guests</SelectItem>
                            <SelectItem value="201-300">201-300 guests</SelectItem>
                            <SelectItem value="300+">300+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="attendants" className="text-gray-900 font-semibold text-sm mb-2 block">Preferred Attendants</Label>
                        <Select onValueChange={(value) => updateFormData('attendants', value)}>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500">
                            <SelectValue placeholder="Number of attendants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 attendant</SelectItem>
                            <SelectItem value="2">2 attendants</SelectItem>
                            <SelectItem value="3">3 attendants</SelectItem>
                            <SelectItem value="4">4 attendants</SelectItem>
                            <SelectItem value="5+">5+ attendants</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="specialRequests" className="text-gray-900 font-semibold text-sm mb-2 block">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements, VIP guests, vehicle types, or other details..."
                        className="min-h-[120px] border-gray-300 focus:border-gold-500 focus:ring-gold-500 placeholder:text-gray-400"
                        onChange={(e) => updateFormData('specialRequests', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 font-semibold text-sm mb-2 block">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500 placeholder:text-gray-400"
                        onChange={(e) => updateFormData('name', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-900 font-semibold text-sm mb-2 block">Email Address</Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500 placeholder:text-gray-400"
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 font-semibold text-sm mb-2 block">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="(555) 123-4567"
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500 placeholder:text-gray-400"
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gold-50 to-gold-100/50 p-6 rounded-xl border border-gold-200">
                      <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          We'll review your request within 24 hours
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          Our team will call to discuss details and finalize arrangements
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          You'll receive a detailed proposal and contract
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          We'll coordinate all logistics leading up to your event
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="px-8 py-3 h-12 border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 h-12 bg-gold-500 hover:bg-gold-600 text-white group"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 h-12 bg-gold-500 hover:bg-gold-600 text-white group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                      {isSubmitting ? (
                        <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <CheckCircle className="ml-2 w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
