const template = require('./template');

module.exports = {
  icon: true,
  svgProps: { xmlns: 'http://www.w3.org/2000/svg' },
  svgoConfig: {
    plugins: [
      {
        convertColors: {
          currentColor: true,
        },
      },
    ],
  },
  template,
};
