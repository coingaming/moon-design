const { siteTitle, description, author } = require.resolve('./config');

module.exports = {
  pathPrefix: '/assets',
  siteMetadata: {
    title: siteTitle,
    description,
    author,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'design',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config.json`,
      },
    },
    'gatsby-transformer-json',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: siteTitle,
    //     short_name: siteTitle,
    //     start_url: '/',
    //     background_color: sportsbetDark.color.piccolo[100],
    //     theme_color: sportsbetDark.color.piccolo[100],
    //     display: 'minimal-ui',
    //     icon: 'src/images/icon.png', // This path is relative to the root of the site.
    //   },
    // },
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-postcss',
    'gatsby-plugin-remove-trailing-slashes',
  ],
};
