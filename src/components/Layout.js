import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Box } from 'rebass'
import theme from 'styles/theme'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import SEO from 'components/SEO'
import favicon from 'images/favicon.ico'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`
export default class Template extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <SEO />
          <GlobalStyle />
          <Helmet>
            <link rel="icon" href={favicon} />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans"
              rel="stylesheet"
            />
          </Helmet>
          <Box
            mx="auto"
            css="min-height: 100vh;display: grid;grid-template-rows: auto 1fr auto;"
          >
            <Menu />
            <Box as="main">{this.props.children}</Box>
            <Footer />
          </Box>
        </Fragment>
      </ThemeProvider>
    )
  }
}
