import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const StyledLink = styled.a`
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
    <nav className="bg-black text-white">
      <div className="container mx-auto py-2">
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  );
};

export default Menu;
