const path = require('path');
const { colors } = require('@heathmont/sportsbet-tokens');

const siteTitle = 'Sportsbet.io Design';

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description:
      'Everything you need to know about the Sportsbet.io Design System',
    author: 'Sportsbet.io',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout.tsx'),
        },
        extensions: ['.mdx'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/../packages/`,
        ignore: [
          '**/\\.*',
          '**/lib',
          '**/node_modules',
          '**/.cache',
          '**/__tests__',
          '**/.tsx*',
          '**/.ts*',
          '**/.json*',
          '**/banner',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: '/',
        background_color: colors.brand,
        theme_color: colors.brand,
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    'gatsby-plugin-offline',
  ],
};
