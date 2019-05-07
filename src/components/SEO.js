import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { shape, string, number, object } from 'prop-types';

const SEO = props => {
  const { defaults } = props;
  const {
    description = defaults.description,
    image = defaults.shareImage.fixed.src,
    imgWidth = defaults.shareImage.fixed.width,
    imgHeight = defaults.shareImage.fixed.height,
  } = props;
  let { title, url } = props;

  title = defaults.title + (title ? ` | ${title}` : '');
  url = defaults.baseUrl + url;

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
      <meta name="twitter:creator" content={defaults.twitter ? defaults.twitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
SEO.propTypes = {
  defaults: shape({
    description: string,
    shareImage: object, // eslint-disable-line
  }).isRequired,
  title: string,
  description: string,
  image: string,
  imgWidth: number,
  imgHeight: number,
  url: string,
};
SEO.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  imgWidth: undefined,
  imgHeight: undefined,
  url: undefined,
};

const SEOWithQuery = props => (
  <StaticQuery
    query={graphql`
      {
        seo: allContentfulSeoConfigurations {
          edges {
            node {
              baseUrl
              title: siteTitle
              description: siteDescription
              twitter: userTwitter
              author
              authorUrl
              copyright
              shareImage {
                fixed(quality: 80, width: 1200) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SEO defaults={data.seo.edges[0].node} {...props} />}
  />
);

export default SEOWithQuery;
