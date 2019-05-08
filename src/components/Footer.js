import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link as GLink } from 'gatsby';
import { Flex, Box, Link, Heading } from 'rebass';
import { arrayOf, shape, string } from 'prop-types';

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const FooterLink = p => <StyledLink as={GLink} {...p} pt={0} pl={0} />;

export const Footer = props => {
  const { links } = props;
  return (
    <Flex css={Footer.css} px={3} py={4} flexWrap="wrap" bg="black" color="white">
      <Box mb={[3, 3, 0]} width={[1, 1, 4 / 10]}>
        <Heading>hy.am studios</Heading>
      </Box>
      <Box mb={[4, 4, 0]} width={[1, 2 / 3, 4 / 10]} />
      <Box mb={[3, 3, 0]} width={[1, 1 / 3, 2 / 10]}>
        <Heading pb={4} fontSize={2}>
          Links
        </Heading>
        {links.map(link => (
          <FooterLink key={link.slug} to={link.slug}>
            {link.title}
          </FooterLink>
        ))}
      </Box>
    </Flex>
  );
};
Footer.propTypes = {
  links: arrayOf(shape({ slug: string, title: string })),
};
Footer.defaultProps = {
  links: [],
};
Footer.css = ``;

export const FooterWithQuery = props => (
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
    render={data => <Footer {...props} links={data.pages.edges.map(({ node }) => node)} />}
  />
);

export default FooterWithQuery;
