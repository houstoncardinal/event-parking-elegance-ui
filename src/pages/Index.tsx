
import React from 'react';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import DisplayCards from '@/components/display-cards';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Services />
      
      {/* Display Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <DisplayCards />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
