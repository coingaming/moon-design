// const analyzer = require('./utils/analyzer');
const webpack = require('./utils/webpack');

// const withTM = require('next-transpile-modules')([
//   '@heathmont/moon-accordion',
//   '@heathmont/moon-assets',
//   '@heathmont/moon-charts',
//   '@heathmont/moon-components',
//   '@heathmont/moon-core',
//   '@heathmont/moon-draggabletable',
//   '@heathmont/moon-icons',
//   '@heathmont/moon-pagination',
//   '@heathmont/moon-popover',
//   '@heathmont/moon-table',
//   '@heathmont/moon-themes',
//   '@heathmont/moon-utils',
//   '@heathmont/moon-core-tw',
// ]); // pass the modules you would like to see transpiled

// // WARNING: This code does not work, works only the last export in the file. We need to delete or rewrite
// module.exports = withTM();

const config = {
  // analyzer,
  webpack,
};

module.exports = config;
