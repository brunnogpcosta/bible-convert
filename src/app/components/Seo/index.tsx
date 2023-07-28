import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOProps extends NextSeoProps {
  title: string;
  description: string;
  image?: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, ...rest }) => {
  const siteName = 'Nome do Seu Site'; // Replace with your site name
  const defaultImage = '/default-image.jpg'; // Path to the default image

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
