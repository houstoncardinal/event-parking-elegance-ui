
import React from 'react';
import Navigation from '@/components/Navigation';
import VipHero from '@/components/VipHero';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import DisplayCards from '@/components/display-cards';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <VipHero />
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
