// SEO Schema Markup for Cardinal Valet Services

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cardinalvalet.com/#business",
  "name": "Cardinal Valet Services",
  "alternateName": "Cardinal Valet",
  "description": "Houston's premier valet parking service for weddings, corporate events, and private parties. Professional, insured, and reliable with 24/7 availability.",
  "url": "https://cardinalvalet.com",
  "telephone": "(832) 555-CARDINAL", 
  "email": "info@cardinalvalet.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Houston",
      "sameAs": "https://en.wikipedia.org/wiki/Houston"
    },
    {
      "@type": "State", 
      "name": "Texas",
      "sameAs": "https://en.wikipedia.org/wiki/Texas"
    }
  ],
  "serviceType": "Valet Parking Service",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
  "hasCredential": "Fully Licensed and Insured",
  "openingHours": "Mo-Su 00:00-23:59",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/cardinalvalet",
    "https://www.instagram.com/cardinalvalet",
    "https://www.linkedin.com/company/cardinalvalet"
  ]
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://cardinalvalet.com/services#services",
  "name": "Professional Valet Parking Services",
  "serviceType": "Valet Parking",
  "description": "Comprehensive valet parking services for weddings, corporate events, private parties, and special occasions in Houston, Texas.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Cardinal Valet Services",
    "url": "https://cardinalvalet.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Houston",
    "addressRegion": "TX"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Valet Parking Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Valet Services",
          "description": "Premium valet service for weddings with professional uniformed attendants"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Parking",
          "description": "Executive-grade valet parking for corporate events and business functions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Private Party Valet",
          "description": "Flexible valet service for private parties and special occasions"
        }
      }
    ]
  }
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://cardinalvalet.com/contact#contact",
  "name": "Contact Cardinal Valet Services",
  "description": "Get in touch with Houston's premier valet parking service. Request a quote or ask questions about our professional event parking services.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Cardinal Valet Services"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://cardinalvalet.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Houston and the greater Houston metropolitan area including The Woodlands, Sugar Land, Katy, Pearland, and surrounding communities."
      }
    },
    {
      "@type": "Question", 
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Cardinal Valet Services is fully licensed and insured with $2M liability coverage. All our attendants are bonded and background-checked."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking as early as possible, especially for weddings and large events. However, we also offer same-day service based on availability."
      }
    },
    {
      "@type": "Question",
      "name": "What types of events do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide valet parking for weddings, corporate events, private parties, galas, fundraisers, conferences, and any special occasion requiring professional parking services."
      }
    }
  ]
};

export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ReviewPage",
  "@id": "https://cardinalvalet.com/client-reviews#reviews", 
  "name": "Cardinal Valet Services Client Reviews",
  "description": "See what our clients say about Houston's premier valet parking service. Real reviews from satisfied customers.",
  "reviewedBy": {
    "@type": "LocalBusiness",
    "name": "Cardinal Valet Services"
  }
};