import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  title = "Cardinal Valet Services - Premium Event Parking in Houston",
  description = "Houston's premier valet parking service for weddings, corporate events, and private parties. Professional, insured, and reliable with 24/7 availability. Get your free quote today!",
  keywords = ["valet parking", "Houston valet service", "event parking", "wedding valet", "corporate event parking", "private party valet", "professional parking attendants"],
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
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
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Cardinal Valet Services" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cardinalvalet" />
      <meta name="twitter:creator" content="@cardinalvalet" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#d4af37" />
      
      {/* Local Business Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;