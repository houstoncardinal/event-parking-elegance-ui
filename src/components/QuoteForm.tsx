
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Phone, Mail, Crown, ArrowRight, Clock, AlertCircle, DollarSign } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SubmissionSuccess from '@/components/SubmissionSuccess';

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submissionData, setSubmissionData] = useState<{
    name: string;
    email: string;
    eventDate: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    details: ''
  });

  const pricingTiers = [
    { min: 0, max: 50, drivers: 2, rate: 44.99 },
    { min: 51, max: 100, drivers: 3, rate: 39.99 },
    { min: 101, max: 150, drivers: 4, rate: 34.99 },
    { min: 151, max: 175, drivers: 5, rate: 34.99 },
    { min: 176, max: 200, drivers: 6, rate: 34.99 },
    { min: 201, max: 250, drivers: 8, rate: 32.99 },
    { min: 251, max: 300, drivers: 10, rate: 29.99 },
  ];

  const setupFee = 99.99;

  const priceCalculation = useMemo(() => {
    const guestCount = parseInt(formData.guests) || 0;
    const startTime = formData.startTime;
    const endTime = formData.endTime;
    
    if (guestCount >= 300) {
      return {
        needsCustomQuote: true,
        message: "300+ Guest Count needs a customized quote and requires company to gather information with specific details to provide accurate pricing. Please provide good contact information and setup your appointment to speak with one of our parking professionals."
      };
    }

    if (guestCount === 0 || !startTime || !endTime) {
      return { needsCustomQuote: false };
    }

    const tier = pricingTiers.find(t => guestCount >= t.min && guestCount <= t.max);
    if (!tier) return { needsCustomQuote: false };

    // Calculate hours
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    let hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    
    // Handle next day end time
    if (hours < 0) {
      hours += 24;
    }
    
    // Minimum 4 hours
    const serviceHours = Math.max(hours, 4);
    
    const attendantCost = tier.drivers * tier.rate * serviceHours;
    const totalCost = attendantCost + setupFee;

    return {
      needsCustomQuote: false,
      tier,
      serviceHours,
      attendantCost,
      setupFee,
      totalCost,
      guestCount
    };
  }, [formData.guests, formData.startTime, formData.endTime, pricingTiers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Extract guest count number
      const guestCountNum = parseInt(formData.guests) || null;
      
      const submission = {
        form_type: 'quote',
        status: 'new',
        priority: 'high',
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone,
        event_date: formData.date,
        start_time: formData.startTime,
        end_time: formData.endTime,
        event_location: formData.location,
        guest_count: guestCountNum,
        message: formData.details,
        source_page: window.location.pathname
      };

      const { error } = await supabase
        .from('form_submissions')
        .insert(submission);

      if (error) {
        throw error;
      }

      // Send the quote email
      try {
        const emailData = {
          firstName,
          lastName,
          email: formData.email,
          eventDate: formData.date,
          startTime: formData.startTime,
          endTime: formData.endTime,
          guestCount: guestCountNum || 0,
          driversFee: priceCalculation.attendantCost,
          equipmentSetupFee: priceCalculation.setupFee,
          total: priceCalculation.totalCost,
          attendantsNeeded: priceCalculation.tier?.drivers || 2,
          phone: formData.phone
        };

        const response = await fetch('https://lwpgqrmcubxgmbzsrdbl.supabase.co/functions/v1/send-quote-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (!response.ok) {
          console.error('Failed to send quote email');
        }
      } catch (emailError) {
        console.error('Error sending quote email:', emailError);
        // Don't throw here - we don't want to block the form submission if email fails
      }

      setSubmissionData({
        name: formData.name,
        email: formData.email,
        eventDate: formData.date
      });
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        details: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.guests && formData.date && formData.startTime && formData.endTime && formData.location;
      case 3:
        return formData.details;
      default:
        return false;
    }
  };

  return (
    <>
      <SubmissionSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        formType="quote"
        customerInfo={submissionData}
      />
      <Card className="w-full max-w-4xl mx-auto card-vip relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-white/5 pointer-events-none"></div>
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/8 to-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <CardHeader className="relative z-10 pb-6 text-center px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full glass-vip">
            <Crown className="w-7 h-7 text-white relative z-10 drop-shadow-sm" />
          </div>
        </div>
        <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-orbitron font-bold text-vip mb-3 drop-shadow-sm">
          Request Premium Quote
        </CardTitle>
        
        {/* Step Indicator */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= step ? 'bg-white text-blue-600' : 'bg-white/20 text-white/60'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-8 h-0.5 ${currentStep > step ? 'bg-white' : 'bg-white/20'}`}></div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-white/70 text-sm sm:text-base font-medium">
          {currentStep === 1 && "Step 1: Customer Information"}
          {currentStep === 2 && "Step 2: Event Details"}
          {currentStep === 3 && "Step 3: Additional Information"}
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 px-4 sm:px-6 pb-6">
        <form onSubmit={handleSubmit} className="space-y-5" name="quote-form" data-netlify="true">
          <input type="hidden" name="form-name" value="quote-form" />
          
          {/* Step 1: Customer Information */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-white" />
                  Full Name
                </Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium placeholder:text-white/40 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-white" />
                  Email Address
                </Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium placeholder:text-white/40 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-white" />
                  Phone Number
                </Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium placeholder:text-white/40 text-white"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Event Information */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-white" />
                  Guest Count
                </Label>
                <Input 
                  id="guests" 
                  type="number"
                  placeholder="100"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium placeholder:text-white/40 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-white" />
                  Event Date
                </Label>
                <Input 
                  id="date" 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime" className="text-white font-semibold flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-white" />
                    Start Time
                  </Label>
                  <Input 
                    id="startTime" 
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                    className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium text-white"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="endTime" className="text-white font-semibold flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-white" />
                    End Time
                  </Label>
                  <Input 
                    id="endTime" 
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                    className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-white font-semibold flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-white" />
                  Event Location
                </Label>
                <Input 
                  id="location" 
                  placeholder="Event venue or address"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-12 font-medium placeholder:text-white/40 text-white"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="details" className="text-white font-semibold text-sm">
                  Event Details & Special Requirements
                </Label>
                <Textarea 
                  id="details" 
                  placeholder="Tell us about your event requirements, special considerations, or any specific services needed..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  rows={6}
                  className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg resize-none rounded-xl font-medium placeholder:text-white/40 text-white"
                  required
                />
              </div>

              {/* Pricing Display */}
              {priceCalculation.needsCustomQuote && priceCalculation.message && (
                <div className="p-4 sm:p-6 bg-amber-500/20 border border-amber-400/30 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-amber-300 font-semibold text-base mb-3">Custom Quote Required</h4>
                      <p className="text-amber-200 text-sm leading-relaxed">{priceCalculation.message}</p>
                    </div>
                  </div>
                </div>
              )}

              {priceCalculation.totalCost && !priceCalculation.needsCustomQuote && (
                <div className="p-4 sm:p-6 bg-green-500/20 border border-green-400/30 rounded-xl">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-green-300 font-semibold text-base mb-4">Estimated Quote</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center text-white/80">
                          <span>{priceCalculation.tier?.drivers} Attendants × ${priceCalculation.tier?.rate}/hr × {priceCalculation.serviceHours} hrs</span>
                          <span className="font-semibold">${priceCalculation.attendantCost?.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-white/80">
                          <span>Equipment Setup Fee</span>
                          <span className="font-semibold">${priceCalculation.setupFee.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-white/20 pt-3 flex justify-between items-center text-green-300 font-bold text-base">
                          <span>Total Estimate</span>
                          <span>${priceCalculation.totalCost.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            {currentStep > 1 && (
              <Button 
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex-1 h-12 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Previous
              </Button>
            )}
            
            {currentStep < 3 ? (
              <Button 
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex-1 h-12 btn-vip disabled:opacity-50"
              >
                Next Step
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={isSubmitting || !isStepValid()}
                className="flex-1 h-12 btn-vip disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Get Premium Quote'}
                {isSubmitting ? (
                  <div className="ml-3 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <ArrowRight className="ml-3 w-4 h-4" />
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
    </>
  );
};

export default QuoteForm;
