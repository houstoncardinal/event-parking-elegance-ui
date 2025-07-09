import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { Features } from '@/components/blocks/features-8';
import SEO from '@/components/SEO';
import { servicesSchema } from '@/utils/seoSchemas';

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Professional Valet Parking Services in Houston"
        description="Comprehensive valet parking services for weddings, corporate events, and private parties in Houston. Professional uniformed attendants, luxury vehicle handling, and full insurance coverage. Get your custom quote today!"
        keywords={[
          "valet parking services houston",
          "wedding valet parking houston",
          "corporate event valet houston", 
          "private party valet houston",
          "professional valet attendants",
          "luxury valet service",
          "insured valet parking",
          "houston event parking services",
          "texas valet parking",
          "premium valet service"
        ]}
        url="https://cardinalvalet.com/services"
        schema={servicesSchema}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <div className="pt-8">
            <Services />
            <Features />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;