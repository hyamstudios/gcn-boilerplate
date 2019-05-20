import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PageFooter from './PageFooter';

const PageFooterContainer = props => (
  <StaticQuery
    query={graphql`
      query {
        pages: allContentfulPage {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => <PageFooter {...props} links={data.pages.edges.map(({ node }) => node)} />}
  />
);

export default PageFooterContainer;
