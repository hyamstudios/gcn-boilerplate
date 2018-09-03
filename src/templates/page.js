import React from 'react'
import { graphql } from 'gatsby'

import { Box, Heading } from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const SectionsTemplate = ({ data }) => {
  const d = data.page
  return (
    <Layout>
      <SEO
        title={d.title}
        description={d.body.markdown.excerpt}
        pageUrl={d.slug}
      />
      <Box is="article">
        <Heading>{d.title}</Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: d.body.markdown.html,
          }}
        />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        markdown: childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`

export default SectionsTemplate
