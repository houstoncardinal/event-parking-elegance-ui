import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import SEO from '@/components/SEO';
import { reviewsSchema } from '@/utils/seoSchemas';

const ClientReviewsPage = () => {
  return (
    <>
      <SEO 
        title="5-Star Client Reviews - Event Parking Services by Cardinal Houston"
        description="Read 5-star testimonials from satisfied clients who chose Event Parking Services by Cardinal for weddings, corporate events, and private parties in Houston. Professional valet parking with excellent reviews."
        keywords={[
          "event parking services by cardinal reviews",
          "houston valet service reviews",
          "5 star valet parking",
          "wedding valet testimonials",
          "corporate valet reviews",
          "best valet service houston",
          "professional valet reviews",
          "luxury valet testimonials",
          "houston event parking reviews",
          "texas valet service ratings"
        ]}
        url="https://cardinalvalet.com/client-reviews"
        schema={reviewsSchema}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <div>
          <TestimonialsSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ClientReviewsPage;