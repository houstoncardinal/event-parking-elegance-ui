import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceAreas from '@/components/ServiceAreas';
import SEO from '@/components/SEO';
import { serviceAreasSchema } from '@/utils/seoSchemas';

const ServiceAreasPage = () => {
  return (
    <>
      <SEO 
        title="Service Areas - Houston Valet Parking Coverage"
        description="Cardinal Valet Services covers Greater Houston including Sugar Land, The Woodlands, Katy, Pearland, Spring, Cypress, and Tomball. Professional valet parking service throughout Texas."
        keywords={[
          "valet parking houston areas",
          "sugar land valet service",
          "woodlands valet parking",
          "katy valet service",
          "pearland valet parking",
          "spring texas valet",
          "cypress valet service", 
          "tomball valet parking",
          "greater houston valet coverage",
          "texas valet service areas"
        ]}
        url="https://cardinalvalet.com/service-areas"
        schema={serviceAreasSchema}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32">
          <ServiceAreas />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServiceAreasPage;