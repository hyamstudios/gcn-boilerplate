import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import FooterLink from './FooterLink';

const PageFooter = props => {
  const { links } = props;
  const hasLinks = links.length > 0;
  return (
    <footer className="py-4 bg-gray-700 text-white">
      <div className="container mx-auto flex flex-wrap">
        <div className="mb-4 w-full md:mb-0 md:w-4/12">
          <h1 className="text-2xl">hy.am studios</h1>
        </div>
        <div className="mb-4 w-full md:mb-0 md:w-4/12" />
        <div className="mb-4 w-full md:mb-0 md:w-4/12">
          {hasLinks && <h3 className="pb-4 text-sm">Links</h3>}
          {hasLinks &&
            links.map(link => (
              <FooterLink key={link.slug} to={link.slug}>
                {link.title}
              </FooterLink>
            ))}
        </div>
      </div>
    </footer>
  );
};
PageFooter.propTypes = {
  links: arrayOf(shape({ slug: string, title: string })),
};
PageFooter.defaultProps = {
  links: [],
};

export default PageFooter;
