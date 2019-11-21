module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {

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
  ],
};
