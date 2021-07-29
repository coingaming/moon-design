const withTM = require('next-transpile-modules')([
  '@heathmont/moon-utils',
  '@heathmont/moon-core',
  '@heathmont/moon-themes',
  '@heathmont/moon-components',
  '@heathmont/moon-charts',
  '@heathmont/moon-accordion',
]); // pass the modules you would like to see transpiled

module.exports = withTM();
