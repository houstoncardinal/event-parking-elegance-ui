
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle, Crown } from 'lucide-react';
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
    console.log('Form submitted:', formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Clean background effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-200/30 via-gold-300/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/20 via-slate-300/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full glass-vip">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                <Crown className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
              Book Your Valet Service
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience premium valet service with our streamlined booking process.
              <span className="block text-slate-800 font-semibold mt-2">Professional response within 24 hours</span>
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 glass-vip ${
                      currentStep >= step.number 
                        ? 'bg-white/10 border-white/30 text-white shadow-vip-glow' 
                        : 'border-white/20 text-white/60'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <div className={`font-medium font-orbitron text-sm ${
                        currentStep >= step.number ? 'text-white' : 'text-white/60'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-white/30' : 'bg-white/20'
                    } transition-colors duration-500`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-white/60">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-white rounded-t-2xl border-b border-slate-200 pb-6">
              <CardTitle className="text-2xl font-playfair font-bold text-center text-slate-900">
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
                        <Label htmlFor="eventType" className="text-white font-semibold font-orbitron">Event Type</Label>
                        <Select onValueChange={(value) => updateFormData('eventType', value)}>
                          <SelectTrigger className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white">
                            <SelectValue placeholder="Select event type" className="text-white/60" />
                          </SelectTrigger>
                          <SelectContent className="glass-vip border-white/20">
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase()} className="text-white hover:bg-white/10">{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date" className="text-white font-semibold font-orbitron">Event Date</Label>
                        <Input
                          type="date"
                          id="date"
                          className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white"
                          onChange={(e) => updateFormData('date', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="startTime" className="text-white font-semibold font-orbitron">Start Time</Label>
                        <Input
                          type="time"
                          id="startTime"
                          className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white"
                          onChange={(e) => updateFormData('startTime', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime" className="text-white font-semibold font-orbitron">End Time</Label>
                        <Input
                          type="time"
                          id="endTime"
                          className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white"
                          onChange={(e) => updateFormData('endTime', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="location" className="text-white font-semibold font-orbitron">Event Location</Label>
                      <Input
                        id="location"
                        placeholder="Full address or venue name"
                        className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white placeholder:text-white/40"
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
                        <Label htmlFor="guestCount" className="text-white font-semibold font-orbitron">Expected Guests</Label>
                        <Select onValueChange={(value) => updateFormData('guestCount', value)}>
                          <SelectTrigger className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white">
                            <SelectValue placeholder="Number of guests" className="text-white/60" />
                          </SelectTrigger>
                          <SelectContent className="glass-vip border-white/20">
                            <SelectItem value="1-50" className="text-white hover:bg-white/10">1-50 guests</SelectItem>
                            <SelectItem value="51-100" className="text-white hover:bg-white/10">51-100 guests</SelectItem>
                            <SelectItem value="101-200" className="text-white hover:bg-white/10">101-200 guests</SelectItem>
                            <SelectItem value="201-300" className="text-white hover:bg-white/10">201-300 guests</SelectItem>
                            <SelectItem value="300+" className="text-white hover:bg-white/10">300+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="attendants" className="text-white font-semibold font-orbitron">Preferred Attendants</Label>
                        <Select onValueChange={(value) => updateFormData('attendants', value)}>
                          <SelectTrigger className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white">
                            <SelectValue placeholder="Number of attendants" className="text-white/60" />
                          </SelectTrigger>
                          <SelectContent className="glass-vip border-white/20">
                            <SelectItem value="1" className="text-white hover:bg-white/10">1 attendant</SelectItem>
                            <SelectItem value="2" className="text-white hover:bg-white/10">2 attendants</SelectItem>
                            <SelectItem value="3" className="text-white hover:bg-white/10">3 attendants</SelectItem>
                            <SelectItem value="4" className="text-white hover:bg-white/10">4 attendants</SelectItem>
                            <SelectItem value="5+" className="text-white hover:bg-white/10">5+ attendants</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="specialRequests" className="text-white font-semibold font-orbitron">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements, VIP guests, vehicle types, or other details..."
                        className="mt-2 min-h-[120px] glass-vip border-white/20 focus:border-white/40 text-white placeholder:text-white/40"
                        onChange={(e) => updateFormData('specialRequests', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="name" className="text-white font-semibold font-orbitron">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white placeholder:text-white/40"
                        onChange={(e) => updateFormData('name', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-white font-semibold font-orbitron">Email Address</Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white placeholder:text-white/40"
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white font-semibold font-orbitron">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="(555) 123-4567"
                          className="mt-2 glass-vip border-white/20 focus:border-white/40 text-white placeholder:text-white/40"
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="glass-vip p-6 rounded-xl border border-white/20">
                      <h4 className="font-semibold text-white mb-3 font-orbitron">What happens next?</h4>
                      <ul className="text-sm text-white/70 space-y-2 font-medium">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          We'll review your request within 24 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          Our team will call to discuss details and finalize arrangements
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          You'll receive a detailed proposal and contract
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          We'll coordinate all logistics leading up to your event
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-white/20 mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="px-6 btn-vip"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="btn-vip px-6 group"
                    >
                      <span className="text-vip font-semibold">Next Step</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="btn-vip px-8 group"
                    >
                      <span className="text-vip font-semibold">Submit Request</span>
                      <CheckCircle className="ml-2 w-4 h-4 text-white" />
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
