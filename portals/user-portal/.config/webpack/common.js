const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const plugins = [new FriendlyErrorsWebpackPlugin()];

const dev = process.env.NODE_ENV !== 'production';

if (!dev) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'webpack-report.html',
      openAnalyzer: false,
    })
  );
}

module.exports = {
  mode: dev ? 'development' : 'production',
  context: path.join(__dirname, 'src'),
  devtool: dev ? 'none' : 'source-map',

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].bundle.js',
  },
  plugins,

  watchOptions: {
    ignored: [/node_modules([\\]+|\/)+(?!@heathmont\/sportsbet-)/], // ignore all modules except Sportsbet ones
  },
};
