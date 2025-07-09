// SEO Schema Markup for Cardinal Valet Services

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomobileBusinessService", "EventPlanner"],
  "@id": "https://cardinalvalet.com/#business",
  "name": "Cardinal Valet Services",
  "alternateName": "Cardinal Valet Houston",
  "description": "Houston's premier professional valet parking service for weddings, corporate events, and private parties. Fully insured with uniformed attendants and 24/7 availability serving Greater Houston area.",
  "url": "https://cardinalvalet.com",
  "telephone": "+1-713-555-0199",
  "email": "info@cardinalvalet.com",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7604,
    "longitude": -95.3698
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City", 
      "name": "Sugar Land",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "The Woodlands", 
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "Katy",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "Pearland",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "Spring",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "Cypress",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    {
      "@type": "City",
      "name": "Tomball",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  ],
  "serviceType": ["Valet Parking Service", "Event Parking Management", "Corporate Parking Solutions"],
  "priceRange": "$$-$$$",
  "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
  "openingHours": "Mo-Su 00:00-23:59",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Valet Parking Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Valet Parking",
          "description": "Professional valet parking service for weddings"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Valet",
          "description": "Corporate event parking management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Private Party Valet",
          "description": "Private party valet parking service"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewBody": "Cardinal Valet provided exceptional service for our wedding. Professional, courteous, and seamless operation. Highly recommend!",
      "datePublished": "2024-01-15"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michael Chen"
      },
      "reviewBody": "Outstanding corporate event service. Their team was incredibly professional and handled our high-profile event flawlessly.",
      "datePublished": "2024-02-10"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Emily Rodriguez"
      },
      "reviewBody": "Best valet service in Houston! Punctual, professional, and great value. Made our private party stress-free.",
      "datePublished": "2024-03-05"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/cardinalvalet",
    "https://www.instagram.com/cardinalvalet", 
    "https://www.linkedin.com/company/cardinalvalet",
    "https://www.yelp.com/biz/cardinal-valet-houston"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://cardinalvalet.com/logo.png"
  },
  "image": [
    "https://cardinalvalet.com/images/valet-service-1.jpg",
    "https://cardinalvalet.com/images/professional-attendants.jpg",
    "https://cardinalvalet.com/images/luxury-vehicles.jpg"
  ]
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  "@id": "https://cardinalvalet.com/services#service",
  "name": "Professional Valet Parking Services Houston",
  "alternateName": "Houston Valet Parking",
  "description": "Premier valet parking services for weddings, corporate events, and private parties in Houston, Sugar Land, The Woodlands, Katy, and surrounding Texas areas. Professional uniformed attendants, fully insured, luxury vehicle handling.",
  "keywords": "valet parking Houston, wedding valet service, corporate event parking, private party valet, professional valet attendants, luxury car parking, insured valet service, Houston event parking",
  "serviceType": "Valet Parking and Event Management",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Cardinal Valet Services",
    "url": "https://cardinalvalet.com",
    "telephone": "+1-713-555-0199",
    "email": "info@cardinalvalet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77001",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47"
    }
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Texas"
    },
    {
      "@type": "City", 
      "name": "Houston",
      "addressRegion": "TX"
    },
    {
      "@type": "City",
      "name": "Sugar Land", 
      "addressRegion": "TX"
    },
    {
      "@type": "City",
      "name": "The Woodlands",
      "addressRegion": "TX"
    },
    {
      "@type": "City",
      "name": "Katy",
      "addressRegion": "TX"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Houston Valet Parking Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Valet Parking Houston",
          "description": "Elegant valet parking service for wedding ceremonies and receptions with professional uniformed attendants",
          "serviceType": "Wedding Valet Service"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Corporate Event Valet Houston",
          "description": "Professional corporate event parking management for conferences, galas, and business events",
          "serviceType": "Corporate Valet Service"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Party Valet Houston", 
          "description": "Premium valet parking for private parties, birthdays, and special celebrations",
          "serviceType": "Private Event Valet"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Vehicle Valet Houston",
          "description": "Specialized valet service for luxury and exotic vehicles with extra care protocols",
          "serviceType": "Luxury Vehicle Valet"
        },
        "priceRange": "$$$"
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01",
    "priceRange": "$$-$$$"
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
  "@type": "WebPage",
  "name": "Client Reviews - Cardinal Valet Services Houston", 
  "description": "Read 5-star testimonials and reviews from satisfied clients who have used Cardinal Valet Services for weddings, corporate events, and private parties in Houston.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Cardinal Valet Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jennifer Williams"
        },
        "reviewBody": "Absolutely phenomenal service! Cardinal Valet made our corporate gala seamless. Their team was professional, courteous, and efficient. Best valet service in Houston!",
        "datePublished": "2024-01-20"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "David Martinez"
        },
        "reviewBody": "Cardinal Valet exceeded our expectations for our wedding day. Professional uniformed attendants, luxury vehicle care, and flawless execution. Highly recommend!",
        "datePublished": "2024-02-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Lisa Thompson"
        },
        "reviewBody": "Outstanding valet service for our private event in Sugar Land. The team was punctual, professional, and treated our guests' vehicles with exceptional care.",
        "datePublished": "2024-03-10"
      }
    ]
  }
};

// Service areas schema for local SEO
export const serviceAreasSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Service Areas - Cardinal Valet Services Houston",
  "description": "Cardinal Valet Services provides professional valet parking throughout Greater Houston including Sugar Land, The Woodlands, Katy, Pearland, Spring, Cypress, and Tomball.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Cardinal Valet Services",
    "serviceArea": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 29.7604,
          "longitude": -95.3698
        },
        "geoRadius": "50 miles"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Houston",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Sugar Land",
        "addressRegion": "TX", 
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "The Woodlands",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Katy",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Pearland",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Spring",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Cypress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      {
        "@type": "City",
        "name": "Tomball",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    ]
  }
};

// Booking page schema
export const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Book Valet Service - Cardinal Valet Services Houston",
  "description": "Book professional valet parking service for your wedding, corporate event, or private party in Houston. Get instant quote and secure your date with Cardinal Valet Services.",
  "mainEntity": {
    "@type": "Service",
    "name": "Valet Parking Booking",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cardinal Valet Services",
      "telephone": "+1-713-555-0199",
      "email": "info@cardinalvalet.com"
    }
  }
};