# Component: SEO

## Purpose
Updates the meta tags related to SEO and Social Networks.

## Usage
Just put it anywhere in the page template.
By default it is imported in `<Layout />` component, and use the data inside the file `src/utils/siteConfig.js`

## Load SEO data from CMS
It is recommended to create a container component that feed data into this,
Such as `<SEOWithContentful />` or `<SEOWithPrismic />`. And export it in `index.js` in this folder.
