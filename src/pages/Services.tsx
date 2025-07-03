import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { Features } from '@/components/blocks/features-8';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32">
        <Services />
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;