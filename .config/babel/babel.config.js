module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        useBuiltIns: 'entry',
        modules: 'commonjs',
      },
    ],
    require('@babel/preset-react'),
    require('@babel/preset-typescript'),
  ],
  plugins: [
    require('@babel/plugin-syntax-dynamic-import'),
    require('babel-plugin-styled-components'),
  ],
};
