import React from 'react'
import Helmet from 'react-helmet'
import { Provider, Box } from 'rebass'

import favicon from '../images/favicon.ico'
import '../styles/global'

import theme from '../styles/theme'
import config from '../utils/siteConfig'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Template = props => {
  return (
    <Provider theme={theme}>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
      </Helmet>
      <Box className="siteRoot">
        <Menu />
        <Box my={4} mx={[1, 3]} className="siteContent">
          {props.children}
        </Box>
        <Footer />
      </Box>
    </Provider>
  )
}

export default Template
