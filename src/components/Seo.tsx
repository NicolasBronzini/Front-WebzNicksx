import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  noindex?: boolean;
}

const SITE_NAME = 'WebzNick';
const SITE_URL = 'https://www.webznick.app';

const Seo = ({ title, description, noindex = false }: SeoProps) => {
  const { pathname } = useLocation();
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Seo;
