import React from 'react'
import { graphql } from 'gatsby'

import { Box, Heading } from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Previewable from '../components/Previewable'

const PageTemplate = ({ data }) => {
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
      contentful_id
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

export default Previewable(PageTemplate, async (client, props) => {
  const entry = await client.getEntry(props.data.page.contentful_id)
  const data = {
    ...props.data,
  }
  data.page.title = entry.fields.title
  data.page.slug = entry.fields.slug
  data.page.body = {
    markdown: {
      html: entry.fields.body,
      excerpt: entry.fields.body,
    },
  }
  return data
})
