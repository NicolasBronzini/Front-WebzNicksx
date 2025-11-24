import { Helmet } from 'react-helmet-async';
import { useI18n } from '../../i18n';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData
}: SEOProps) => {
  const { language } = useI18n();
  
  // Default values based on language
  const defaultTitle = language === 'es' 
    ? 'Desarrollo Web Profesional | WebzNick - Desde $75'
    : 'Professional Web Development | WebzNick - From $75';
    
  const defaultDescription = language === 'es'
    ? 'Creamos páginas web, e-commerce y aplicaciones a medida. Precios transparentes desde $75. Consultoría gratis. ⭐ +50 proyectos completados.'
    : 'We create custom websites, e-commerce and applications. Transparent pricing from $75. Free consultation. ⭐ +50 completed projects.';
    
  const defaultKeywords = language === 'es'
    ? 'desarrollo web, crear página web, diseño web profesional, e-commerce, tienda online, landing page, aplicación web, desarrollo web a medida, programador web'
    : 'web development, create website, professional web design, e-commerce, online store, landing page, web application, custom web development, web programmer';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const siteUrl = 'https://webznick.com';
  const finalCanonical = canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:site_name" content="WebzNick" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonical} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="es" href={`${siteUrl}/es${canonicalUrl?.replace(siteUrl, '') || ''}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${canonicalUrl?.replace(siteUrl, '') || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={finalCanonical} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
