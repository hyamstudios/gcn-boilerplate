import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import Menu from 'components/Menu';
import PageFooterContainer from 'components/PageFooter';
import SEO from 'components/SEO';
import favicon from 'images/favicon.ico';
import './Layout.css';

const Root = styled.div`
  ${tw`min-h-screen`} display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default props => {
  return (
    <Fragment>
      <SEO />
      <Helmet>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </Helmet>
      <Root>
        <Menu />
        <main className="container mx-auto py-4" {...props} />
        <PageFooterContainer />
      </Root>
    </Fragment>
  );
};
