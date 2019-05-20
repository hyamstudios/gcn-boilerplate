import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <article>
      <h2>Error 404</h2>
      <p>Sorry, that page cannot be found</p>
    </article>
  </Layout>
);

export default NotFoundPage;
