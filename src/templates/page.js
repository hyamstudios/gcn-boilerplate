import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading } from 'rebass'
import marksy from 'marksy' // avoid using marksy/jsx, it will make the bundled JS large and slow.
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Previewable from '../components/Previewable'

const compile = marksy({
  createElement: React.createElement,
  elements: {},
})

const PageTemplate = ({ data }) => {
  const d = data.page
  const compiled = compile(d.body && d.body.markdown ? d.body.markdown : '')
  return (
    <Layout>
      <SEO title={d.title} description={d.body.body} pageUrl={d.slug} />
      <Box is="article">
        <Heading>{d.title}</Heading>
        <Box css={'img {max-width: 100%;}'}>{compiled.tree}</Box>
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
        markdown: body
      }
    }
  }
`

export default Previewable(PageTemplate, async ({ client, props, helpers }) => {
  const entry = await client.getEntry(props.data.page.contentful_id)
  const data = {
    ...props.data,
  }
  data.page.title = entry.fields.title
  data.page.slug = entry.fields.slug
  data.page.body = {
    markdown: entry.fields.body,
  }
  return data
})
