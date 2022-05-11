const withTM = require('next-transpile-modules')([
  '@heathmont/moon-accordion',
  '@heathmont/moon-assets',
  '@heathmont/moon-charts',
  '@heathmont/moon-components',
  '@heathmont/moon-core',
  '@heathmont/moon-draggabletable',
  '@heathmont/moon-icons',
  '@heathmont/moon-pagination',
  '@heathmont/moon-popover',
  '@heathmont/moon-table',
  '@heathmont/moon-themes',
  '@heathmont/moon-utils',
  '@moon/core',
]); // pass the modules you would like to see transpiled

module.exports = withTM();
