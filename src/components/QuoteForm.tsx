
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Phone, Mail } from 'lucide-react';

const QuoteForm = () => {
  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl shadow-black/20 relative overflow-hidden">
      {/* Luxury glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-champagne-500/20 via-transparent to-navy-500/20 pointer-events-none"></div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-champagne-400/30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-500/20 rounded-full blur-3xl"></div>
      
      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="text-2xl font-poppins font-bold text-navy-900 text-center">
          Get Your Quote
        </CardTitle>
        <p className="text-navy-600 text-center text-sm">
          Professional valet service tailored to your event
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-navy-800 font-medium flex items-center gap-2">
            <Users className="w-4 h-4 text-champagne-600" />
            Full Name
          </Label>
          <Input 
            id="name" 
            placeholder="Enter your name"
            className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-navy-800 font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-champagne-600" />
            Email
          </Label>
          <Input 
            id="email" 
            type="email"
            placeholder="your@email.com"
            className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-navy-800 font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-champagne-600" />
            Phone
          </Label>
          <Input 
            id="phone" 
            type="tel"
            placeholder="(555) 123-4567"
            className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-navy-800 font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-champagne-600" />
              Event Date
            </Label>
            <Input 
              id="date" 
              type="date"
              className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-navy-800 font-medium">
              Guests
            </Label>
            <Input 
              id="guests" 
              type="number"
              placeholder="50"
              className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location" className="text-navy-800 font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-champagne-600" />
            Event Location
          </Label>
          <Input 
            id="location" 
            placeholder="Event venue or address"
            className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="details" className="text-navy-800 font-medium">
            Additional Details
          </Label>
          <Textarea 
            id="details" 
            placeholder="Tell us about your event..."
            rows={3}
            className="border-navy-200 focus:border-champagne-500 focus:ring-champagne-500/20 bg-white/90 shadow-sm resize-none"
          />
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-champagne-500 to-champagne-600 hover:from-champagne-600 hover:to-champagne-700 text-navy-900 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          size="lg"
        >
          Get My Quote
        </Button>
        
        <p className="text-xs text-navy-500 text-center">
          We'll respond within 2 hours during business hours
        </p>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
