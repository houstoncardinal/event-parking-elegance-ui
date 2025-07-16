import React from 'react';
import { Helmet } from 'react-helmet-async';
import ogImage from '@/assets/cardinal-valet-og-image.jpg';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  schema?: object;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Cardinal Valet Services - Houston's Premier Event Valet Parking",
  description = "Houston's #1 valet parking service for weddings, corporate events & private parties. Professional uniformed attendants, fully insured, luxury vehicle care. Serving Greater Houston area including Sugar Land, The Woodlands, Katy. Get your free quote today!",
  keywords = ["valet parking Houston", "wedding valet service", "corporate event parking", "private party valet", "professional valet attendants", "luxury car parking", "insured valet service", "Houston event parking", "Sugar Land valet", "The Woodlands valet", "Katy valet service"],
  image = ogImage,
  url = "https://cardinalvalet.com",
  type = "website",
  schema,
  noindex = false
}) => {
  const fullTitle = title.includes('Cardinal Valet') ? title : `${title} | Cardinal Valet Services`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Cardinal Valet Services" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Cardinal Valet Services - Houston's Premier Valet Parking" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Cardinal Valet Services" />
      <meta property="og:locale" content="en_US" />
      <meta property="business:contact_data:street_address" content="Houston, TX" />
      <meta property="business:contact_data:locality" content="Houston" />
      <meta property="business:contact_data:region" content="TX" />
      <meta property="business:contact_data:postal_code" content="77001" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+1-346-764-9163" />
      <meta property="business:contact_data:email" content="info@eventsparkingservices.com" />
      
      {/* Enhanced Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cardinalvalet" />
      <meta name="twitter:creator" content="@cardinalvalet" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Cardinal Valet Services - Houston's Premier Valet Parking" />
      <meta name="twitter:domain" content="cardinalvalet.com" />
      
      {/* LinkedIn Specific */}
      <meta property="linkedin:owner" content="Cardinal Valet Services" />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Cardinal Valet" />
      <meta name="theme-color" content="#fbc220" />
      <meta name="msapplication-TileColor" content="#fbc220" />
      <meta name="application-name" content="Cardinal Valet Services" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      <meta name="geo.position" content="29.7604;-95.3698" />
      <meta name="ICBM" content="29.7604, -95.3698" />
      
      {/* Business Tags */}
      <meta name="classification" content="Valet Parking Service" />
      <meta name="category" content="Event Services, Transportation, Parking" />
      <meta name="coverage" content="Houston, TX and surrounding areas" />
      <meta name="target" content="weddings, corporate events, private parties" />
      
      {/* Local Business Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;