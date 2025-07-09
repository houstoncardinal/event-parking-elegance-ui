import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import { bookingSchema } from '@/utils/seoSchemas';

const BookingPage = () => {
  return (
    <>
      <SEO 
        title="Book Houston Valet Service - Instant Quote & Reservation"
        description="Book Cardinal Valet Services for your wedding, corporate event, or private party in Houston. Professional uniformed attendants, luxury vehicle care, and fully insured service. Get instant quote now!"
        keywords={[
          "book valet service houston",
          "reserve valet parking",
          "houston valet booking",
          "wedding valet reservation",
          "corporate event valet booking",
          "private party valet houston",
          "valet service quote houston",
          "professional valet booking",
          "luxury valet reservation",
          "texas valet service booking"
        ]}
        url="https://cardinalvalet.com/booking"
        schema={bookingSchema}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32">
          <BookingForm />
          <CTASection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;