import React from 'react';
import Navigation from '@/components/Navigation';
import { Hero } from '@/components/animated-hero';
import { Marquee } from '@/components/ui/marquee';
import { Pricing } from '@/components/ui/pricing-section-with-comparison';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ServiceAreas from '@/components/ServiceAreas';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { Features } from '@/components/blocks/features-8';
import { Typewriter } from '@/components/typewriter';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Marquee className="mt-0"><span className="font-semibold text-black">Welcome to Event Parking Services By Cardinal – Experience the VIP difference.</span></Marquee>
      <Pricing />
      <div className="flex justify-center py-8">
        <Typewriter
          text={["Wedding Valet", "Corporate Events", "Private Parties"]}
          speed={60}
          waitTime={1500}
          className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white"
        />
      </div>
      <Features />
      <ServiceAreas />
      <TestimonialsSection />
      <CallToAction />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
