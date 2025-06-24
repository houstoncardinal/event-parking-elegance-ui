import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Phone, Mail, Crown, ArrowRight } from 'lucide-react';

const QuoteForm = () => {
  return (
    <Card className="w-full max-w-2xl card-luxury relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 via-transparent to-slate-50/30 pointer-events-none"></div>
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-200/30 to-gold-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-slate-200/20 to-slate-300/10 rounded-full blur-2xl"></div>
      
      <CardHeader className="relative z-10 pb-6 text-center">
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold-glow">
            <Crown className="w-6 h-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-playfair font-bold text-luxury mb-2">
          Request Premium Quote
        </CardTitle>
        <p className="text-slate-600 text-sm font-medium">
          Experience luxury valet service tailored to your distinguished event
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-800 font-semibold flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-gold-600" />
            Full Name
          </Label>
          <Input 
            id="name" 
            placeholder="Enter your full name"
            className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm rounded-xl h-11 font-medium placeholder:text-slate-400"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-800 font-semibold flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-gold-600" />
            Email Address
          </Label>
          <Input 
            id="email" 
            type="email"
            placeholder="your@company.com"
            className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm rounded-xl h-11 font-medium placeholder:text-slate-400"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-800 font-semibold flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-gold-600" />
            Phone Number
          </Label>
          <Input 
            id="phone" 
            type="tel"
            placeholder="(555) 123-4567"
            className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm rounded-xl h-11 font-medium placeholder:text-slate-400"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-slate-800 font-semibold flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gold-600" />
              Event Date
            </Label>
            <Input 
              id="date" 
              type="date"
              className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm rounded-xl h-11 font-medium text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-slate-800 font-semibold text-sm">
              Guests
            </Label>
            <Input 
              id="guests" 
              type="number"
              placeholder="100"
              className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm rounded-xl h-11 font-medium placeholder:text-slate-400"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location" className="text-slate-800 font-semibold flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-gold-600" />
            Event Location
          </Label>
          <Input 
            id="location" 
            placeholder="Event venue or address"
            className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm rounded-xl h-11 font-medium placeholder:text-slate-400"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="details" className="text-slate-800 font-semibold text-sm">
            Event Details
          </Label>
          <Textarea 
            id="details" 
            placeholder="Tell us about your event requirements..."
            rows={3}
            className="border-slate-200 focus:border-gold-400 focus:ring-gold-400/20 bg-white/90 shadow-sm resize-none rounded-xl font-medium placeholder:text-slate-400"
          />
        </div>
        
        <Button className="w-full btn-gold group shadow-gold-glow h-12 text-base font-semibold tracking-wide">
          Get Premium Quote
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
        
        <div className="text-center pt-2">
          <p className="text-xs text-slate-500 font-medium">
            ✨ Premium response within 30 minutes during business hours
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
