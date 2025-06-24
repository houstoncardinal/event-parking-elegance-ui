
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6">
              Book Your Valet Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with a quick quote. Our team will respond within 24 hours with a detailed proposal.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step.number 
                        ? 'bg-champagne-500 border-champagne-500 text-navy-900' 
                        : 'border-gray-300 text-gray-400'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <div className={`font-medium ${
                        currentStep >= step.number ? 'text-navy-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ${
                      currentStep > step.number ? 'bg-champagne-500' : 'bg-gray-300'
                    } transition-colors duration-300`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-navy-900 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-playfair text-center">
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
                        <Label htmlFor="eventType" className="text-navy-900 font-medium">Event Type</Label>
                        <Select onValueChange={(value) => updateFormData('eventType', value)}>
                          <SelectTrigger className="mt-2">
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
                        <Label htmlFor="date" className="text-navy-900 font-medium">Event Date</Label>
                        <Input
                          type="date"
                          id="date"
                          className="mt-2"
                          onChange={(e) => updateFormData('date', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="startTime" className="text-navy-900 font-medium">Start Time</Label>
                        <Input
                          type="time"
                          id="startTime"
                          className="mt-2"
                          onChange={(e) => updateFormData('startTime', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime" className="text-navy-900 font-medium">End Time</Label>
                        <Input
                          type="time"
                          id="endTime"
                          className="mt-2"
                          onChange={(e) => updateFormData('endTime', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="location" className="text-navy-900 font-medium">Event Location</Label>
                      <Input
                        id="location"
                        placeholder="Full address or venue name"
                        className="mt-2"
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
                        <Label htmlFor="guestCount" className="text-navy-900 font-medium">Expected Guests</Label>
                        <Select onValueChange={(value) => updateFormData('guestCount', value)}>
                          <SelectTrigger className="mt-2">
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
                        <Label htmlFor="attendants" className="text-navy-900 font-medium">Preferred Attendants</Label>
                        <Select onValueChange={(value) => updateFormData('attendants', value)}>
                          <SelectTrigger className="mt-2">
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
                      <Label htmlFor="specialRequests" className="text-navy-900 font-medium">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements, VIP guests, vehicle types, or other details..."
                        className="mt-2 min-h-[120px]"
                        onChange={(e) => updateFormData('specialRequests', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="name" className="text-navy-900 font-medium">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="mt-2"
                        onChange={(e) => updateFormData('name', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-navy-900 font-medium">Email Address</Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          className="mt-2"
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-navy-900 font-medium">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="(555) 123-4567"
                          className="mt-2"
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-champagne-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-navy-900 mb-2">What happens next?</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• We'll review your request within 24 hours</li>
                        <li>• Our team will call to discuss details and finalize arrangements</li>
                        <li>• You'll receive a detailed proposal and contract</li>
                        <li>• We'll coordinate all logistics leading up to your event</li>
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
                    className="px-6"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-champagne-500 hover:bg-champagne-600 text-navy-900 px-6"
                    >
                      Next Step
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-navy-900 hover:bg-navy-800 text-white px-8"
                    >
                      Submit Request
                      <CheckCircle className="ml-2 w-4 h-4" />
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
