import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import cn from 'classnames';
import Menu from 'components/Menu';
import PageFooter from 'components/PageFooter';
import SEO from 'components/SEO';
import favicon from 'images/favicon.ico';
import './Layout.css';
import styles from './Layout.module.css';

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
      <div className={cn(styles.root, 'min-h-screen')}>
        <Menu />
        <main className="container mx-auto py-4" {...props} />
        <PageFooter />
      </div>
    </Fragment>
  );
};
