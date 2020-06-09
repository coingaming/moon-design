/* eslint-disable import/no-unresolved, @typescript-eslint/camelcase */
const path = require('path');

const { sportsbetDark } = require('@heathmont/moon-themes');

const { siteTitle, description, author } = require('./config');

module.exports = {
  pathPrefix: `/assets`,
  siteMetadata: {
    title: siteTitle,
    description,
    author,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout.tsx'),
        },
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-autolink-headers' }],
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
        name: `design`,
        path: `${__dirname}/../packages/`,
        ignore: [
          '**/\\.*',
          '**/private',
          '**/(lib|node_modules)',
          '**/(__tests__|.cache)',
          '**/*.(ts|tsx|json)',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/config.json`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: '/',
        background_color: sportsbetDark.color.piccolo[100],
        theme_color: sportsbetDark.color.piccolo[100],
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    'gatsby-plugin-offline',
  ],
};
