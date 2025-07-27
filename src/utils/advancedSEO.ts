// Advanced SEO utilities for Event Parking Services by Cardinal

export interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords: string[];
  url?: string;
  image?: string;
  type?: string;
  localBusiness?: LocalBusinessSchema;
  service?: ServiceSchema;
  faq?: FAQSchema[];
  breadcrumbs?: BreadcrumbSchema[];
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  openingHours: string[];
  priceRange: string;
  serviceArea: string[];
  areaServed: string;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  services: string[];
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export interface FAQSchema {
  question: string;
  answer: string;
}

export interface BreadcrumbSchema {
  name: string;
  url: string;
}

// Generate comprehensive schema markup for valet parking services
export const generateLocalBusinessSchema = (business: LocalBusinessSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": business.url,
    "name": business.name,
    "description": business.description,
    "url": business.url,
    "telephone": business.telephone,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.streetAddress,
      "addressLocality": business.address.addressLocality,
      "addressRegion": business.address.addressRegion,
      "postalCode": business.address.postalCode,
      "addressCountry": business.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.7604",
      "longitude": "-95.3698"
    },
    "openingHours": business.openingHours,
    "priceRange": business.priceRange,
    "serviceArea": business.serviceArea.map(area => ({
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "29.7604",
        "longitude": "-95.3698"
      },
      "geoRadius": "50"
    })),
    "areaServed": business.areaServed,
    "aggregateRating": business.aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": business.aggregateRating.ratingValue,
      "ratingCount": business.aggregateRating.ratingCount
    } : undefined,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Valet Parking Services",
      "itemListElement": business.services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} in Houston and surrounding areas`
        }
      }))
    },
    "sameAs": [
      "https://www.facebook.com/eventparkingservices",
      "https://www.instagram.com/eventparkingservices",
      "https://www.linkedin.com/company/eventparkingservices"
    ]
  };
};

export const generateServiceSchema = (service: ServiceSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": service.provider
    },
    "areaServed": service.areaServed,
    "serviceType": service.serviceType,
    "offers": {
      "@type": "Offer",
      "price": service.offers.price,
      "priceCurrency": service.offers.priceCurrency,
      "availability": service.offers.availability
    }
  };
};

export const generateFAQSchema = (faqs: FAQSchema[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbSchema[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// SEO keywords by service category
export const SEOKeywords = {
  primary: [
    "event parking services by cardinal",
    "houston valet parking",
    "professional valet services houston",
    "wedding valet parking houston",
    "corporate event parking houston"
  ],
  location: [
    "houston valet parking",
    "sugar land valet service",
    "the woodlands valet parking",
    "katy valet services",
    "pearland event parking",
    "spring texas valet",
    "cypress valet parking",
    "tomball event services"
  ],
  service: [
    "wedding valet attendants",
    "corporate event parking",
    "private party valet",
    "luxury vehicle parking",
    "insured valet service",
    "professional parking attendants",
    "event parking management",
    "valet parking equipment"
  ],
  longTail: [
    "best valet parking service houston",
    "affordable wedding valet houston",
    "luxury event parking services",
    "professional valet attendants houston",
    "insured valet parking company",
    "houston event parking solutions",
    "corporate valet services texas"
  ]
};

// Houston area service locations
export const ServiceAreas = [
  "Houston", "Sugar Land", "The Woodlands", "Katy", "Pearland",
  "Spring", "Cypress", "Tomball", "Kingwood", "Missouri City",
  "Stafford", "Richmond", "Rosenberg", "Humble", "Atascocita",
  "League City", "Friendswood", "Bellaire", "West University Place",
  "Southside Place", "Galleria", "River Oaks", "Memorial",
  "Energy Corridor", "Clear Lake", "Pasadena", "Deer Park"
];

// Default business information
export const BusinessInfo: LocalBusinessSchema = {
  name: "Event Parking Services by Cardinal",
  description: "Houston's premier professional valet parking services for weddings, corporate events, and special occasions. Fully insured, 24/7 available, 5-star rated with 500+ satisfied clients.",
  address: {
    streetAddress: "Houston Metropolitan Area",
    addressLocality: "Houston",
    addressRegion: "TX", 
    postalCode: "77001",
    addressCountry: "US"
  },
  telephone: "(346) 764-9163",
  email: "info@eventparkingservices.com",
  url: "https://eventparkingservices.com",
  openingHours: ["Mo-Su 00:00-23:59"],
  priceRange: "$$",
  serviceArea: ServiceAreas,
  areaServed: "Houston Metropolitan Area, Texas",
  aggregateRating: {
    ratingValue: 5.0,
    ratingCount: 500
  },
  services: [
    "Wedding Valet Parking",
    "Corporate Event Parking", 
    "Private Party Valet",
    "Luxury Vehicle Care",
    "Event Parking Management",
    "Professional Parking Attendants",
    "VIP Parking Services",
    "Executive Event Parking"
  ]
};