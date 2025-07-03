import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import CTASection from '@/components/CTASection';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32">
        <CTASection />
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;