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
    // ["transform-imports", {
    //   "lodash": {
    //     "transform": "lodash/${member}",
    //     "preventFullImport": true
    //   },
    // }],
  ],
};
