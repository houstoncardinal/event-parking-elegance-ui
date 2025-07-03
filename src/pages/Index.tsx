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
      <Marquee variant="luxury" className="mt-0" speed={30}>
        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent whitespace-nowrap">
          Houston's Premier Valet Service • Professional • Reliable • Luxury
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
