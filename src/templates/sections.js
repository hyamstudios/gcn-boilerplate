import React from 'react'
import { graphql, Link as GatsbyLink } from 'gatsby'

import { Container, Lead, Text, NavLink } from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const SectionsTemplate = ({ data }) => {
  const d = data.contentfulSections
  const menu = data.allContentfulSections.edges
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
        <ul>
          {menu.map(({ node }) => {
            return (
              <li key={node.slug}>
                <NavLink is={GatsbyLink} to={node.slug}>
                  {node.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
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
    allContentfulSections(limit: 1000) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//   }
// `

export default SectionsTemplate
