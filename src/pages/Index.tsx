
import React from 'react';
import Navigation from '@/components/Navigation';
import { Hero } from '@/components/animated-hero';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <ServiceAreas />
      <TestimonialsSection />
      <CallToAction />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
