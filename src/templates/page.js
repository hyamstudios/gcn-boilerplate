import React from 'react'
import { graphql } from 'gatsby'

import { Box, Heading } from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const SectionsTemplate = ({ data }) => {
  const d = data.contentfulPage
  return (
    <Layout>
      <SEO
        title={d.title}
        description={d.body.childMarkdownRemark.excerpt}
        pageUrl={d.slug}
      />
      <Box is="article">
        <Heading>{d.title}</Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: d.body.childMarkdownRemark.html,
          }}
        />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`

export default SectionsTemplate
