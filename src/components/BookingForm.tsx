
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle, Crown, Building, Home, Phone, Mail, AlertTriangle } from 'lucide-react';
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
    // Step 1: Customer Information
    firstName: '',
    lastName: '',
    businessName: '',
    phone: '',
    email: '',
    area: '',
    zipCode: '',
    
    // Step 2: Event Information
    eventDate: '',
    startTime: '',
    endTime: '',
    guestCount: '',
    
    // Step 3: Event Location
    locationType: '', // residential, business, event_venue
    eventType: '',
    eventTypeOther: '',
    additionalParking: '',
    otherServices: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const steps = [
    { number: 1, title: 'Step 1 Customer Info', icon: Users, completed: false },
    { number: 2, title: 'Step 2 Event Information', icon: Calendar, completed: false },
    { number: 3, title: 'Step 3 Event Location', icon: MapPin, completed: false }
  ];

  const areaOptions = [
    'Galleria',
    'Downtown',
    'Katy',
    'Sugarland',
    'Spring',
    'Cypress',
    'Woodlands',
    'Memorial',
    'River Oaks',
    'Heights',
    'Midtown',
    'Other'
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Private Party',
    'Gala/Fundraiser',
    'Conference',
    'Birthday Party',
    'Anniversary',
    'Graduation',
    'Holiday Party',
    'Other'
  ];

  const otherServicesOptions = [
    'Valet Trash',
    'Traffic Control',
    'Security',
    'Event Staff'
  ];

  // Calculate attendants based on guest count automatically
  const calculateAttendants = (guestCount: string) => {
    const guests = parseInt(guestCount) || 0;
    if (guests <= 50) return 2;
    if (guests <= 100) return 3;
    if (guests <= 150) return 4;
    if (guests <= 200) return 6;
    if (guests <= 250) return 8;
    return 10; // For 250+ guests
  };

  // Validate minimum 4 hour duration
  const validateDuration = useMemo(() => {
    if (formData.startTime && formData.endTime) {
      const start = new Date(`2000-01-01T${formData.startTime}`);
      const end = new Date(`2000-01-01T${formData.endTime}`);
      
      if (end <= start) {
        end.setDate(end.getDate() + 1); // Handle overnight events
      }
      
      const diffHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
      return {
        isValid: diffHours >= 4,
        hours: diffHours,
        message: diffHours < 4 ? "Minimum 4 hours required" : ""
      };
    }
    return { isValid: true, hours: 0, message: "" };
  }, [formData.startTime, formData.endTime]);

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
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
      // Use firstName/lastName or businessName
      const firstName = formData.firstName || formData.businessName;
      const lastName = formData.lastName;
      
      // Extract guest count number
      const guestCountNum = parseInt(formData.guestCount.replace(/\D/g, '')) || null;
      const attendantsNum = calculateAttendants(formData.guestCount);
      
      // Build event location from area and zip
      const eventLocation = `${formData.area}${formData.zipCode ? `, ${formData.zipCode}` : ''}`;
      
      // Build special requests with other services
      const specialRequestsText = [
        formData.specialRequests,
        formData.otherServices ? `Other Services: ${formData.otherServices}` : '',
        formData.additionalParking === 'yes' ? 'Additional Parking Needed: Yes' : '',
        formData.locationType ? `Location Type: ${formData.locationType}` : '',
        formData.eventTypeOther ? `Event Type Other: ${formData.eventTypeOther}` : ''
      ].filter(Boolean).join('\n');
      
      const submission = {
        form_type: 'instant_quote',
        status: 'new',
        priority: 'normal',
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone,
        event_type: formData.eventType === 'other' ? formData.eventTypeOther : formData.eventType,
        event_date: formData.eventDate,
        event_location: eventLocation,
        guest_count: guestCountNum,
        start_time: formData.startTime,
        end_time: formData.endTime,
        attendants_needed: attendantsNum,
        special_requests: specialRequestsText,
        message: `Instant Quote request for ${formData.eventType} event on ${formData.eventDate}`,
        source_page: window.location.pathname
      };

      const { error } = await supabase
        .from('form_submissions')
        .insert(submission);

      if (error) {
        throw error;
      }

      setSubmissionData({
        name: `${firstName} ${lastName}`.trim(),
        email: formData.email,
        eventType: formData.eventType,
        eventDate: formData.eventDate
      });
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        businessName: '',
        phone: '',
        email: '',
        area: '',
        zipCode: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        guestCount: '',
        locationType: '',
        eventType: '',
        eventTypeOther: '',
        additionalParking: '',
        otherServices: '',
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

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};
    
    if (step === 1) {
      // Validate Step 1: Customer Information
      if (!formData.firstName && !formData.businessName) {
        newErrors.firstName = 'First name or business name is required';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.area) {
        newErrors.area = 'Please select an area';
      }
    }
    
    if (step === 2) {
      // Validate Step 2: Event Information
      if (!formData.eventDate) {
        newErrors.eventDate = 'Event date is required';
      } else {
        const selectedDate = new Date(formData.eventDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          newErrors.eventDate = 'Event date cannot be in the past';
        }
      }
      if (!formData.startTime) {
        newErrors.startTime = 'Start time is required';
      }
      if (!formData.endTime) {
        newErrors.endTime = 'End time is required';
      }
      if (!formData.guestCount) {
        newErrors.guestCount = 'Guest count is required';
      }
    }
    
    if (step === 3) {
      // Validate Step 3: Event Location
      if (!formData.locationType) {
        newErrors.locationType = 'Please select a location type';
      }
      if (!formData.eventType) {
        newErrors.eventType = 'Please select an event type';
      }
      if (formData.eventType === 'other' && !formData.eventTypeOther) {
        newErrors.eventTypeOther = 'Please specify the event type';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <section id="booking" className="py-20 bg-white relative">
      <SubmissionSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        formType="booking"
        customerInfo={submissionData}
      />      
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-white mb-6 shadow-lg">
              <Crown className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Instant Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Professional valet parking services for your event
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step.number 
                        ? 'bg-gold-500 border-gold-500 text-white shadow-lg' 
                        : 'border-gray-300 text-gray-400 bg-white'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                      ) : (
                        <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <div className={`font-semibold text-xs md:text-sm ${
                        currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title} {currentStep > step.number && '✅'}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-20 h-0.5 mx-2 md:mx-6 ${
                      currentStep > step.number ? 'bg-gold-500' : 'bg-gray-300'
                    } transition-colors duration-300`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 py-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-center text-gray-900">
                {steps[currentStep - 1].title}
                {currentStep > 1 && <span className="ml-2 text-gold-500">✅</span>}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Customer Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">First Name</Label>
                        <Input
                          placeholder="First name"
                          value={formData.firstName}
                          className={`h-12 ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-gold-500 focus:ring-gold-500'}`}
                          onChange={(e) => updateFormData('firstName', e.target.value)}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">Last Name</Label>
                        <Input
                          placeholder="Last name"
                          value={formData.lastName}
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Or Business Name</Label>
                      <Input
                        placeholder="Business name (optional)"
                        value={formData.businessName}
                        className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                        onChange={(e) => updateFormData('businessName', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">Phone Number</Label>
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          className={`h-12 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-gold-500 focus:ring-gold-500'}`}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">Email Address</Label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          className={`h-12 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-gold-500 focus:ring-gold-500'}`}
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">Area</Label>
                        <Select onValueChange={(value) => updateFormData('area', value)}>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500">
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                          <SelectContent>
                            {areaOptions.map((area) => (
                              <SelectItem key={area} value={area.toLowerCase()}>{area}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">Zip Code</Label>
                        <Input
                          placeholder="77001"
                          value={formData.zipCode}
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('zipCode', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Event Information */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Event Date</Label>
                      <Input
                        type="date"
                        value={formData.eventDate}
                        className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                        onChange={(e) => updateFormData('eventDate', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">Start Time</Label>
                        <Input
                          type="time"
                          value={formData.startTime}
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('startTime', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-gray-900 font-semibold text-sm mb-2 block">End Time</Label>
                        <Input
                          type="time"
                          value={formData.endTime}
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                          onChange={(e) => updateFormData('endTime', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    {!validateDuration.isValid && formData.startTime && formData.endTime && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span className="text-red-700 font-medium">{validateDuration.message}</span>
                      </div>
                    )}
                    
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Guest Count</Label>
                      <Select onValueChange={(value) => updateFormData('guestCount', value)}>
                        <SelectTrigger className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 guests</SelectItem>
                          <SelectItem value="51-100">51-100 guests</SelectItem>
                          <SelectItem value="101-150">101-150 guests</SelectItem>
                          <SelectItem value="151-200">151-200 guests</SelectItem>
                          <SelectItem value="201-250">201-250 guests</SelectItem>
                          <SelectItem value="250+">250+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                      {formData.guestCount && (
                        <p className="text-sm text-gray-600 mt-2">
                          Recommended attendants: {calculateAttendants(formData.guestCount)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Event Location */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Location Type</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['residential', 'business', 'event_venue'].map((type) => (
                          <Button
                            key={type}
                            type="button"
                            variant={formData.locationType === type ? 'default' : 'outline'}
                            onClick={() => updateFormData('locationType', type)}
                            className="h-12 capitalize"
                          >
                            {type === 'event_venue' ? 'Event Venue' : type}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Event Type</Label>
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
                      {formData.eventType === 'other' && (
                        <Input
                          placeholder="Please specify event type"
                          value={formData.eventTypeOther}
                          className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500 mt-4"
                          onChange={(e) => updateFormData('eventTypeOther', e.target.value)}
                        />
                      )}
                    </div>
                    
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Additional Parking Needed</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          type="button"
                          variant={formData.additionalParking === 'yes' ? 'default' : 'outline'}
                          onClick={() => updateFormData('additionalParking', 'yes')}
                          className="h-12"
                        >
                          Yes
                        </Button>
                        <Button
                          type="button"
                          variant={formData.additionalParking === 'no' ? 'default' : 'outline'}
                          onClick={() => updateFormData('additionalParking', 'no')}
                          className="h-12"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">Other Services Needed</Label>
                      <Select onValueChange={(value) => updateFormData('otherServices', value)}>
                        <SelectTrigger className="h-12 border-gray-300 focus:border-gold-500 focus:ring-gold-500">
                          <SelectValue placeholder="Select additional services" />
                        </SelectTrigger>
                        <SelectContent>
                          {otherServicesOptions.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase()}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-gray-900 font-semibold text-sm mb-2 block">
                        <span className="text-red-600">Special Request or Additional Information</span>
                        <span className="text-gray-500 text-xs ml-2">(Optional)</span>
                      </Label>
                      <Textarea
                        placeholder="Any special requirements, VIP guests, vehicle types, or other details..."
                        value={formData.specialRequests}
                        className="min-h-[120px] border-red-200 focus:border-red-500 focus:ring-red-500 placeholder:text-gray-400"
                        onChange={(e) => updateFormData('specialRequests', e.target.value)}
                      />
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
                      disabled={isSubmitting || !validateDuration.isValid}
                      className="px-8 py-3 h-12 bg-gold-500 hover:bg-gold-600 text-white group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Get Instant Quote'}</span>
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
