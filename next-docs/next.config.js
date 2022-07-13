const withTM = require('next-transpile-modules')([
  '@heathmont/moon-accordion',
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
  '@heathmont/moon-core-tw',
]); // pass the modules you would like to see transpiled

module.exports = withTM();

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  poweredByHeader: false,
};
