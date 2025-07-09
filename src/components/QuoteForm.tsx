
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Phone, Mail, Crown, ArrowRight, Clock, AlertCircle, DollarSign } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  }, [formData.guests, formData.startTime, formData.endTime]);

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

      toast({
        title: "Quote Request Submitted!",
        description: "We'll provide you with a premium quote within 30 minutes during business hours.",
        variant: "default",
      });

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
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-5xl card-vip relative overflow-hidden no-tap-highlight">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-white/5 pointer-events-none"></div>
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/8 to-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-white/6 to-white/2 rounded-full blur-2xl animate-pulse-glow"></div>
      
      <CardHeader className="relative z-10 pb-4 text-center">
        <div className="flex items-center justify-center mb-3">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full glass-vip">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            <Crown className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
          </div>
        </div>
        <CardTitle className="text-2xl font-orbitron font-bold text-vip mb-2 drop-shadow-sm">
          Request Premium Quote
        </CardTitle>
        <p className="text-white/60 text-sm font-medium leading-relaxed">
          Experience luxury valet service tailored to your distinguished event.
          <span className="block text-white/80 font-semibold mt-1">Premium response within 30 minutes</span>
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-3 px-6 pb-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-semibold flex items-center gap-2 text-xs">
                <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
                  <Users className="w-2.5 h-2.5 text-white" />
                </div>
                Full Name
              </Label>
              <Input 
                id="name" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium placeholder:text-white/40 transition-all duration-300 hover:shadow-xl focus:shadow-xl text-sm text-white no-tap-highlight"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-semibold flex items-center gap-2 text-xs">
                <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
                  <Mail className="w-2.5 h-2.5 text-white" />
                </div>
                Email Address
              </Label>
              <Input 
                id="email" 
                type="email"
                placeholder="your@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium placeholder:text-white/40 transition-all duration-300 hover:shadow-xl focus:shadow-xl text-sm text-white no-tap-highlight"
                required
              />
            </div>
          </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white font-semibold flex items-center gap-2 text-xs">
              <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
                <Phone className="w-2.5 h-2.5 text-white" />
              </div>
              Phone Number
            </Label>
            <Input 
              id="phone" 
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium placeholder:text-white/40 transition-all duration-300 hover:shadow-xl focus:shadow-xl text-sm text-white no-tap-highlight"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-white font-semibold text-xs">
              Guest Count
            </Label>
            <Input 
              id="guests" 
              type="number"
              placeholder="100"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium placeholder:text-white/40 transition-all duration-300 hover:shadow-xl focus:shadow-xl text-sm text-white no-tap-highlight"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-white font-semibold flex items-center gap-2 text-xs">
              <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
                <Calendar className="w-2.5 h-2.5 text-white" />
              </div>
              Event Date
            </Label>
            <Input 
              id="date" 
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium text-sm transition-all duration-300 hover:shadow-xl focus:shadow-xl text-white no-tap-highlight"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startTime" className="text-white font-semibold flex items-center gap-2 text-xs">
              <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
                <Clock className="w-2.5 h-2.5 text-white" />
              </div>
              Start Time
            </Label>
            <Input 
              id="startTime" 
              type="time"
              value={formData.startTime}
              onChange={(e) => setFormData({...formData, startTime: e.target.value})}
              className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium text-sm transition-all duration-300 hover:shadow-xl focus:shadow-xl text-white no-tap-highlight"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="endTime" className="text-white font-semibold flex items-center gap-2 text-xs">
              <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
                <Clock className="w-2.5 h-2.5 text-white" />
              </div>
              End Time
            </Label>
            <Input 
              id="endTime" 
              type="time"
              value={formData.endTime}
              onChange={(e) => setFormData({...formData, endTime: e.target.value})}
              className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium text-sm transition-all duration-300 hover:shadow-xl focus:shadow-xl text-white no-tap-highlight"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-white font-semibold flex items-center gap-2 text-xs">
            <div className="flex items-center justify-center w-5 h-5 rounded-full glass-vip">
              <MapPin className="w-2.5 h-2.5 text-white" />
            </div>
            Event Location
          </Label>
          <Input 
            id="location" 
            placeholder="Event venue or address"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg rounded-xl h-10 font-medium placeholder:text-white/40 transition-all duration-300 hover:shadow-xl focus:shadow-xl text-sm text-white no-tap-highlight"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="details" className="text-white font-semibold text-xs">
            Event Details & Special Requirements
          </Label>
          <Textarea 
            id="details" 
            placeholder="Tell us about your event requirements, special considerations, or any specific services needed..."
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
            rows={3}
            className="border-white/20 focus:border-white/40 focus:ring-white/30 glass-vip shadow-lg resize-none rounded-xl font-medium placeholder:text-white/40 transition-all duration-300 hover:shadow-xl focus:shadow-xl text-sm text-white no-tap-highlight"
            required
          />
        </div>

        {/* Pricing Display or 300+ Guest Warning */}
        {priceCalculation.needsCustomQuote && priceCalculation.message && (
          <div className="mt-4 p-4 bg-amber-500/20 border border-amber-400/30 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-amber-300 font-semibold text-sm mb-2">Custom Quote Required</h4>
                <p className="text-amber-200 text-sm leading-relaxed">{priceCalculation.message}</p>
              </div>
            </div>
          </div>
        )}

        {priceCalculation.totalCost && !priceCalculation.needsCustomQuote && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-green-300 font-semibold text-sm mb-3">Estimated Quote</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>{priceCalculation.tier?.drivers} Attendants × ${priceCalculation.tier?.rate}/hr × {priceCalculation.serviceHours} hrs</span>
                    <span>${priceCalculation.attendantCost?.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Equipment Setup Fee</span>
                    <span>${priceCalculation.setupFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between text-green-300 font-semibold">
                    <span>Total Estimate</span>
                    <span>${priceCalculation.totalCost.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-green-200/70 text-xs mt-2">
                  Final pricing may vary based on site survey and specific requirements.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="pt-2">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 text-base font-semibold tracking-wide btn-vip group no-tap-highlight disabled:opacity-50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 text-vip font-semibold">
              {isSubmitting ? 'Submitting...' : 'Get Premium Quote'}
            </span>
            {isSubmitting ? (
              <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 text-white" />
            )}
          </Button>
        </div>
        </form>
        
        <div className="text-center pt-3 border-t border-white/20">
          <div className="flex items-center justify-center gap-2 text-xs text-white/60 font-medium">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            <span>Premium response within 30 minutes during business hours</span>
          </div>
          <p className="text-xs text-white/50 mt-1 font-medium">
            Fully insured • Licensed professionals • 5-star rated service
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
