import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

const ClientReviewsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ClientReviewsPage;