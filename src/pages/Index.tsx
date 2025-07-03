import React from 'react';
import Navigation from '@/components/Navigation';
import { Hero } from '@/components/animated-hero';
import { Marquee } from '@/components/ui/marquee';
import { Pricing } from '@/components/ui/pricing-section-with-comparison';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { Features } from '@/components/blocks/features-8';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Marquee className="mt-0 py-4 bg-gradient-to-r from-yellow-400 to-amber-400">
        <span className="font-semibold text-black">
          Welcome to Event Parking Services By Cardinal – Experience the VIP difference with Houston's premier valet service.
        </span>
      </Marquee>
      <Pricing />
      <Services />
      <Features />
      <ServiceAreas />
      <TestimonialsSection />
      <CTASection />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
