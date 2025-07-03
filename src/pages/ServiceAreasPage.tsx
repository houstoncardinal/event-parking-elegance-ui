import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceAreas from '@/components/ServiceAreas';

const ServiceAreasPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32">
        <ServiceAreas />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceAreasPage;