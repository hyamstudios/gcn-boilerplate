import React from 'react'
import { graphql } from 'gatsby'

import { Container, Lead, Text } from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const SectionsTemplate = ({ data }) => {
  const d = data.contentfulSections
  return (
    <Layout>
      <SEO
        title={d.title}
        description={d.description.childMarkdownRemark.excerpt}
        pageUrl={d.slug}
      />
      <Container>
        <Lead>{d.title}</Lead>
        <Text>{d.description.childMarkdownRemark.timeToRead} min read</Text>
        <div
          dangerouslySetInnerHTML={{
            __html: d.description.childMarkdownRemark.html,
          }}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulSections(slug: { eq: $slug }) {
      isMenu
      title
      slug
      description {
        childMarkdownRemark {
          html
          timeToRead
          headings {
            value
            depth
          }
          excerpt
        }
      }
    }
  }
`

export default SectionsTemplate
