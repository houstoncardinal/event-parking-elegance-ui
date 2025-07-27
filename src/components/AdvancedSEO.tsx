import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  AdvancedSEOProps, 
  generateLocalBusinessSchema, 
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  BusinessInfo
} from '@/utils/advancedSEO';

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  keywords,
  url = "https://eventparkingservices.com",
  image = "/src/assets/cardinal-valet-og-image.jpg",
  type = "website",
  localBusiness,
  service,
  faq,
  breadcrumbs
}) => {
  const fullTitle = title.includes('Event Parking Services by Cardinal') 
    ? title 
    : `${title} | Event Parking Services by Cardinal`;

  const enhancedKeywords = [
    ...keywords,
    "event parking services by cardinal",
    "houston valet parking",
    "professional valet services",
    "licensed insured valet parking"
  ].join(', ');

  // Generate schema markup
  const schemaMarkup = [];

  // Always include business schema
  schemaMarkup.push(generateLocalBusinessSchema(localBusiness || BusinessInfo));

  // Add service schema if provided
  if (service) {
    schemaMarkup.push(generateServiceSchema(service));
  }

  // Add FAQ schema if provided
  if (faq && faq.length > 0) {
    schemaMarkup.push(generateFAQSchema(faq));
  }

  // Add breadcrumb schema if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaMarkup.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return (
    <Helmet>
      {/* Enhanced Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content="Event Parking Services by Cardinal" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />

      {/* Enhanced Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Event Parking Services by Cardinal - Houston's Premier Valet Parking" />
      <meta property="og:site_name" content="Event Parking Services by Cardinal" />
      <meta property="og:locale" content="en_US" />

      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Event Parking Services by Cardinal - Houston's Premier Valet Parking" />

      {/* LinkedIn Optimization */}
      <meta property="linkedin:owner" content="Event Parking Services by Cardinal" />

      {/* Local Business SEO */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      <meta name="geo.position" content="29.7604;-95.3698" />
      <meta name="ICBM" content="29.7604, -95.3698" />

      {/* Mobile App Integration */}
      <meta name="apple-mobile-web-app-title" content="Event Parking Services" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="application-name" content="Event Parking Services by Cardinal" />

      {/* Advanced Schema Markup */}
      {schemaMarkup.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      ))}

      {/* Additional SEO Enhancements */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Service-specific meta tags */}
      <meta name="business.category" content="Event Services" />
      <meta name="business.type" content="Valet Parking Service" />
      <meta name="service.area" content="Houston, TX" />
      <meta name="price.range" content="$$" />
      
      {/* Enhanced performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default AdvancedSEO;