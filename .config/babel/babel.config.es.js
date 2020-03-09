module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
    ["transform-imports", {
      "lodash": {
        "transform": "lodash/${member}",
        "preventFullImport": true
      },
      "@heathmont/sportsbet-components": {
        "transform": "@heathmont/sportsbet-components/es/${member}",
      },
      "@heathmont/sportsbet-fonts": {
        "transform": "@heathmont/sportsbet-fonts/es/${member}",
      },
      "@heathmont/sportsbet-global": {
        "transform": "@heathmont/sportsbet-global/es/${member}",
      },
      "@heathmont/sportsbet-themes": {
        "transform": "@heathmont/sportsbet-themes/es/${member}",
      },
    }],
  ],
};
