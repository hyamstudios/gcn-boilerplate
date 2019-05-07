import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Link } from 'rebass';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const NavLink = props => <StyledLink as={GatsbyLink} {...props} />;

const Menu = () => {
  return (
    <Box px={[1, 2]} py={2} bg="black" color="white">
      <NavLink to="/">Home</NavLink>
    </Box>
  );
};

export default Menu;
