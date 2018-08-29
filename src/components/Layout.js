import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Flex, Provider, Box, NavLink } from 'rebass'

import favicon from '../images/favicon.ico'
import '../styles/global'

import theme from '../styles/theme'
import config from '../utils/siteConfig'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import Grid from '../components/Grid'

const Template = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulSections(limit: 1000) {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
      `}
      render={staticData => (
        <Box className="siteRoot">
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href={favicon} />
            <meta name="description" content={config.siteDescription} />
            <meta property="og:title" content={config.siteTitle} />
            <meta property="og:url" content={config.siteUrl} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={config.siteTitle} />
          </Helmet>
          <Provider theme={theme}>
            <>
              <Box className="siteContent">
                <Menu />
                <Flex>
                  <Box>
                    {staticData.allContentfulSections.edges.map(({ node }) => (
                      <NavLink is={Link} key={node.slug} to={node.slug}>
                        {node.title}
                      </NavLink>
                    ))}
                  </Box>
                  {children}
                </Flex>
              </Box>
              <Footer />
            </>
          </Provider>
        </Box>
      )}
    />
  )
}

export default Template
