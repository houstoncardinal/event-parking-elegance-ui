import React from 'react';
import Navigation from '@/components/Navigation';
import { HeroSection } from '@/components/hero-section-6';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import DisplayCards from '@/components/display-cards';
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Services />
      
      {/* Display Cards Section */}
      
      
      <ServiceAreas />
      <TestimonialsSection />
      <CallToAction />
      <BookingForm />
      <Footer />
    </div>;
};
export default Index;