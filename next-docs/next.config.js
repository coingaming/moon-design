const webpack = require('./utils/webpack');

const config = {
  webpack,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = config;
