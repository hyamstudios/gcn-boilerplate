module.exports = {
  /* MUST HAVES */

  siteUrl: 'https://gcn.netlify.hyamstudios.com', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  siteTitle: 'HYAM GCN',
  siteDescription: '',

  author: 'hy.am studios', // Author for RSS author segment and SEO schema
  authorUrl: 'https://hyam.de', // URL used for author and publisher schema, can be a social profile or other personal site

  copyright: 'Copyright © 2018 GCN User', // Copyright string for the RSS feed

  /* Schema */

  siteTitleAlt: 'HYAM GCN Gatsby Starter', // This allows an alternative site title for SEO schema.
  shortTitle: 'hyam wiki', // Used for App manifest e.g. Mobile Home Screen
  publisher: 'hy.am studios', // Organization name used for SEO schema

  /* SEO Critical */

  userTwitter: '@hyamstudios', // Change for Twitter Cards
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest

  /* PWA/OFFLINE SETTINGS */

  backgroundColor: require('./../styles/theme.js').colors.backgroundColor, // Used for Offline Manifest
  themeColor: require('./../styles/theme.js').colors.themeColor, // Used for Offline Manifest
}
