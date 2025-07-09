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
import SEO from '@/components/SEO';
import { businessSchema, faqSchema } from '@/utils/seoSchemas';

const Index = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      businessSchema,
      faqSchema,
      {
        "@type": "WebSite",
        "@id": "https://cardinalvalet.com/#website",
        "url": "https://cardinalvalet.com",
        "name": "Cardinal Valet Services",
        "description": "Houston's premier valet parking service for weddings, corporate events, and private parties",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cardinalvalet.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Cardinal Valet Services - Premier Event Parking in Houston"
        description="Houston's #1 rated valet parking service for weddings, corporate events, and private parties. Professional, insured attendants with 24/7 availability. Licensed & bonded with $2M coverage. Get your free quote today!"
        keywords={[
          "houston valet parking",
          "wedding valet service houston", 
          "corporate event parking houston",
          "private party valet houston",
          "professional valet attendants",
          "insured valet service",
          "houston event parking",
          "luxury valet parking",
          "texas valet service",
          "houston wedding parking"
        ]}
        url="https://cardinalvalet.com"
        schema={homeSchema}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Marquee variant="luxury" className="mt-0" speed={30}>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent whitespace-nowrap">
              Houston's Premier Valet Service • Professional • Reliable • Luxury
            </span>
          </Marquee>
          <Services />
          <Features />
          <ServiceAreas />
          <TestimonialsSection />
          <CTASection />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
