// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type Props = {
  defaults: {
    shareImage: {
      fixed: {
        src: string,
        width: number,
        height: number,
      },
    },
    baseUrl: string,
    title: string,
    titleAlt: string,
    titleShort: string,
    description: string,
    twitter: string,
    author: string,
    authorUrl: string,
    publisher: string,
    copyright: string,
  },
  title?: string,
  description?: string,
  image?: string,
  imgWidth?: number,
  imgHeight?: number,
  url?: string,
}

const SEO = (props: Props) => {
  let {
    defaults,
    title = '',
    description = defaults.description,
    image = defaults.shareImage.fixed.src,
    imgWidth = defaults.shareImage.fixed.width,
    imgHeight = defaults.shareImage.fixed.height,
    url = '',
  } = props

  title = defaults.titleShort + (title ? ` | ${title}` : '')
  url = defaults.baseUrl + url

  // Default Website Schema
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: url,
      name: title,
      alternateName: defaults.titleAlt ? defaults.titleAlt : '',
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <meta name="image" content={image} />
      <meta name="description" content={description} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <title>{title}</title>

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imgWidth} />
      <meta property="og:image:height" content={imgHeight} />
      <meta property="og:description" content={description} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={defaults.twitter ? defaults.twitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

const SEOWithQuery = (props: any) => (
  <StaticQuery
    query={graphql`
      {
        seo: allContentfulSeoConfigurations {
          edges {
            node {
              baseUrl
              title: siteTitle
              titleAlt: siteTitleAlt
              titleShort: shortTitle
              description: siteDescription
              twitter: userTwitter
              author
              authorUrl
              publisher
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
)

export default SEOWithQuery
