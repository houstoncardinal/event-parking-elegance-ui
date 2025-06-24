
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Phone, Mail, Crown, ArrowRight } from 'lucide-react';

const QuoteForm = () => {
  return (
    <Card className="w-full max-w-3xl card-luxury relative overflow-hidden">
      {/* Enhanced premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50/60 via-white/40 to-slate-50/50 pointer-events-none"></div>
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-gold-200/40 to-gold-300/30 rounded-full blur-3xl animate-luxury-float"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-slate-200/30 to-slate-300/20 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-gold-100/20 to-gold-200/10 rounded-full blur-2xl animate-luxury-glow"></div>
      
      <CardHeader className="relative z-10 pb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 shadow-gold-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-300/50 to-transparent rounded-full"></div>
            <Crown className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
          </div>
        </div>
        <CardTitle className="text-3xl font-playfair font-bold text-luxury mb-3 drop-shadow-sm">
          Request Premium Quote
        </CardTitle>
        <p className="text-slate-600 text-base font-medium leading-relaxed">
          Experience luxury valet service tailored to your distinguished event.<br />
          <span className="text-gold-600 font-semibold">Premium response within 30 minutes</span>
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6 px-8 pb-8">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-slate-800 font-semibold flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-sm">
              <Users className="w-3.5 h-3.5 text-white" />
            </div>
            Full Name
          </Label>
          <Input 
            id="name" 
            placeholder="Enter your full name"
            className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl h-12 font-medium placeholder:text-slate-400 transition-all duration-300 hover:shadow-xl focus:shadow-xl"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="email" className="text-slate-800 font-semibold flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-sm">
              <Mail className="w-3.5 h-3.5 text-white" />
            </div>
            Email Address
          </Label>
          <Input 
            id="email" 
            type="email"
            placeholder="your@company.com"
            className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl h-12 font-medium placeholder:text-slate-400 transition-all duration-300 hover:shadow-xl focus:shadow-xl"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="phone" className="text-slate-800 font-semibold flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-sm">
              <Phone className="w-3.5 h-3.5 text-white" />
            </div>
            Phone Number
          </Label>
          <Input 
            id="phone" 
            type="tel"
            placeholder="(555) 123-4567"
            className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl h-12 font-medium placeholder:text-slate-400 transition-all duration-300 hover:shadow-xl focus:shadow-xl"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="date" className="text-slate-800 font-semibold flex items-center gap-3 text-sm">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-white" />
              </div>
              Event Date
            </Label>
            <Input 
              id="date" 
              type="date"
              className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl h-12 font-medium text-sm transition-all duration-300 hover:shadow-xl focus:shadow-xl"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="guests" className="text-slate-800 font-semibold text-sm">
              Guest Count
            </Label>
            <Input 
              id="guests" 
              type="number"
              placeholder="100"
              className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl h-12 font-medium placeholder:text-slate-400 transition-all duration-300 hover:shadow-xl focus:shadow-xl"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="location" className="text-slate-800 font-semibold flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>
            Event Location
          </Label>
          <Input 
            id="location" 
            placeholder="Event venue or address"
            className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl h-12 font-medium placeholder:text-slate-400 transition-all duration-300 hover:shadow-xl focus:shadow-xl"
          />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="details" className="text-slate-800 font-semibold text-sm">
            Event Details & Special Requirements
          </Label>
          <Textarea 
            id="details" 
            placeholder="Tell us about your event requirements, special considerations, or any specific services needed..."
            rows={4}
            className="border-slate-200/60 focus:border-gold-400 focus:ring-gold-400/30 bg-white/95 backdrop-blur-sm shadow-lg resize-none rounded-xl font-medium placeholder:text-slate-400 transition-all duration-300 hover:shadow-xl focus:shadow-xl"
          />
        </div>
        
        <div className="pt-4">
          <Button className="w-full btn-gold-gradient group h-14 text-lg font-semibold tracking-wide relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10">Get Premium Quote</span>
            <ArrowRight className="ml-3 w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="text-center pt-4 border-t border-gradient-to-r from-transparent via-gold-200/30 to-transparent">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium">
            <div className="w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-pulse"></div>
            <span>Premium response within 30 minutes during business hours</span>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Fully insured • Licensed professionals • 5-star rated service
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
