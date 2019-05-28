import React from 'react';
import Helmet from 'react-helmet';
import { string, number } from 'prop-types';
import siteConfig from 'utils/siteConfig';

const SEO = props => {
  const { title, image, description, url, imgWidth, imgHeight, twitter } = props;
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="image" content={image} />
      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imgWidth} />
      <meta property="og:image:height" content={imgHeight} />
      <meta property="og:description" content={description} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
SEO.propTypes = {
  title: string,
  description: string,
  image: string,
  imgWidth: number,
  imgHeight: number,
  url: string,
  twitter: string,
};
SEO.defaultProps = {
  url: siteConfig.siteUrl,
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  image: siteConfig.shareImage,
  imgWidth: siteConfig.shareImageWidth,
  imgHeight: siteConfig.shareImageHeight,
  twitter: siteConfig.twitter,
};

export default SEO;
