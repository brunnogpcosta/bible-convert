import { NextSeo, NextSeoProps } from 'next-seo';
import { i18n } from '@/app/translate/i18n';
interface SEOProps extends NextSeoProps {
  title: string;
  description: string;
  image?: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, ...rest }) => {
  const siteName = i18n.t('metadata.title'); 
  const defaultImage = '/default-image.jpg'; 

  const seoConfig = {
    title: title ? `${title} | ${siteName}` : siteName,
    description,
    openGraph: {
      title: title ? `${title} | ${siteName}` : siteName,
      description,
      url,
      type: 'website',
      site_name: siteName,
      images: [
        {
          url: image || defaultImage,
          alt: title || siteName,
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
    },
    ...rest,
  };

  return (<NextSeo { ...seoConfig }/>);
};

export default SEO;
