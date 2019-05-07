import React from 'react';
import Helmet from 'react-helmet';
import { Box, Text, Heading as Title } from 'rebass';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Box>
      <Title>Error 404</Title>
      <Text>Sorry, that page cannot be found</Text>
    </Box>
  </Layout>
);

export default NotFoundPage;
