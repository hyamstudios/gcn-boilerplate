import React from 'react';
import { Link } from 'gatsby';

const NavLink = props => <Link className="text-gray-100 no-underline hover:text-yellow-100 hover:underline" {...props} />;

const Menu = () => {
  return (
    <nav className="bg-gray-700 text-white">
      <div className="container mx-auto py-2">
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  );
};

export default Menu;
