/**  @type {import('next').NextConfig['webpack']} */

const webpack = (config, { isServer, dev }) => {
  if (!isServer && !dev) {
    const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
    config.plugins.push(
      new DuplicatePackageCheckerPlugin({
        verbose: true,
        exclude: (instance) => instance.name === 'regenerator-runtime',
      })
    );
  }
  return config;
};

module.exports = webpack;
