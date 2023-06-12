const webpack = require('./utils/webpack');

const config = {
  webpack,
  experimental: {
    appDir: true,
  },
};

module.exports = config;
