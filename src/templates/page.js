import React from 'react';
import { graphql } from 'gatsby';
import { Box, Heading } from 'rebass';
import marksy from 'marksy'; // avoid using marksy/jsx, it will make the bundled JS large and slow.
import { shape, string } from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Previewable from '../components/Previewable';

const compile = marksy({
  createElement: React.createElement,
  elements: {},
});

const PageTemplate = ({ data: { page } }) => {
  const compiled = compile(page.body && page.body.markdown ? page.body.markdown : '');
  return (
    <Layout>
      <SEO title={page.title} description={page.body.body} pageUrl={page.slug} />
      <Box is="article">
        <Heading>{page.title}</Heading>
        <Box css={'img {max-width: 100%;}'}>{compiled.tree}</Box>
      </Box>
    </Layout>
  );
};
PageTemplate.propTypes = {
  data: shape({
    page: shape({
      contentful_id: string,
      title: string,
      slug: string,
      body: shape({
        markdown: string,
      }),
    }),
  }).isRequired,
};

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
`;

export default Previewable(PageTemplate, async ({ client, props }) => {
  const entry = await client.getEntry(props.data.page.contentful_id);
  const data = {
    ...props.data,
  };
  data.page.title = entry.fields.title;
  data.page.slug = entry.fields.slug;
  data.page.body = {
    markdown: entry.fields.body,
  };
  return data;
});
