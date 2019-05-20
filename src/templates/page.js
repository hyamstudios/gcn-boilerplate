import React from 'react';
import { graphql } from 'gatsby';
import marksy from 'marksy'; // avoid using marksy/jsx, it will make the bundled JS large and slow.
import { shape, string } from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const compile = marksy({
  createElement: React.createElement,
  elements: {},
});

const PageTemplate = ({ data: { page } }) => {
  const compiled = compile(page.body && page.body.markdown ? page.body.markdown : '');
  return (
    <Layout>
      <SEO title={page.title} description={page.body.body} pageUrl={page.slug} />
      <article>
        <h2 className="text-2xl mb-6">{page.title}</h2>
        <div>{compiled.tree}</div>
      </article>
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

export default PageTemplate;
