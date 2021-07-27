const withTM = require('next-transpile-modules')([
  '@heathmont/moon-utils',
  '@heathmont/moon-core',
  '@heathmont/moon-themes',
]); // pass the modules you would like to see transpiled

module.exports = withTM();
